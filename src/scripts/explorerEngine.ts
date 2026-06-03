import { Chart, registerables, type ChartConfiguration } from 'chart.js';
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';
import * as UpSetJS from '@upsetjs/bundle';
Chart.register(...registerables, TreemapController, TreemapElement);

// ==========================================
// TYPES & CONFIGURATION
// ==========================================

interface CategoryCount {
  category: string;
  count: string | number;
}

interface StatRow {
  filter_key: string;
  chart_id: string;
  data: CategoryCount[];
}

interface VariableMeta {
  chart_id: string;
  display_name: string;
  chart_type: 'pie' | 'bar' | 'treemap';
  units: string;
}

const CONFIG = {
  API_GATEWAY: "https://biobank-api-51100283624.northamerica-northeast1.run.app/GetStats",
  MASK_VALUE: 10, // Value to render when `<10` is encountered
  DEBOUNCE_MS: 150,
  MIN_TREEMAP_WEIGHT: 0.035, // Ensures tiny cohorts are accessible (3.5% of area)
  FROSTING_DELAY_MS: 150, // Time to hold the blur effect to simulate "calculation"
};

// ==========================================
// CORE MANAGERS
// ==========================================

const DataManager = {
  cache: new Map<string, any>(),
  metadata: [] as VariableMeta[],
  filters: [] as string[],
  currentStats: [] as StatRow[],
  cohortSizes: {} as Record<string, string | number>,

  async fetch(queryString: string, cacheKey: string) {
    if (this.cache.has(cacheKey)) return this.cache.get(cacheKey);

    const response = await fetch(`${CONFIG.API_GATEWAY}?${queryString}&_cb=${Date.now()}`);
    if (!response.ok) throw new Error("API infrastructure connection exception");

    const data = await response.json();
    this.cache.set(cacheKey, data);
    return data;
  },

  async initialize() {
    [this.metadata, this.filters, this.currentStats] = await Promise.all([
      this.fetch("type=metadata", "metadata"),
      this.fetch("type=filters", "filters"),
      this.fetch("filter=baseline", "stats_baseline")
    ]);
    this.calculateCohortSizes();
  },

  async loadFilter(filterKey: string) {
    this.currentStats = await this.fetch(`filter=${encodeURIComponent(filterKey)}`, `stats_${filterKey}`);
    return this.currentStats;
  },

  calculateCohortSizes() {
    this.cohortSizes = {};
    const baselineData = this.cache.get("stats_baseline") as StatRow[];
    if (!baselineData) return;

    baselineData.forEach(stat => {
      const prefix = stat.chart_id.toLowerCase().replace(/ /g, '_');
      if (stat.chart_id === 'sex') {
        this.cohortSizes['baseline'] = stat.data.reduce((acc, curr) => acc + (parseInt(String(curr.count)) || 0), 0);
      }
      stat.data.forEach(item => {
        const cleanCategory = String(item.category).toLowerCase().replace(/ /g, '_');
        this.cohortSizes[`${prefix}_${cleanCategory}`] = item.count;
      });
    });
  }
};

const ThemeManager = {
  palette: [] as string[],
  init() {
    const rootStyle = getComputedStyle(document.documentElement);
    const getColor = (v: string, fb: string) => rootStyle.getPropertyValue(v).trim() || fb;
    this.palette = [
      getColor('--color-brand-blue-deep', '#26abe2'),
      getColor('--color-brand-green-bright', '#7fc342'),
      getColor('--color-brand-orange-mid', '#f89a19'),
      getColor('--color-brand-teal', '#96d6c2'),
      getColor('--color-brand-blue-mid', '#56bee7'),
      getColor('--color-brand-green-mid', '#99c43c'),
      getColor('--color-brand-orange-deep', '#f37a21'),
      getColor('--color-brand-yellow', '#fdbb10'),
      getColor('--color-brand-dark', '#003f5e')
    ];
  },
  getColor(index: number) {
    return this.palette[index % this.palette.length];
  }
};

const ChartFactory = {
  instances: {} as Record<string, Chart>,
  visibleCharts: new Set<string>(),

  destroyAll() {
    Object.values(this.instances).forEach(chart => chart.destroy());
    this.instances = {};
  },

  parseData(data: CategoryCount[], isTreemap: boolean) {
    let totalCount = 0;
    const parsed = data.map(d => {
      const isMasked = typeof d.count === 'string' && d.count.startsWith('<');
      const numericVal = isMasked ? CONFIG.MASK_VALUE : parseInt(String(d.count), 10);
      totalCount += isNaN(numericVal) ? 0 : numericVal;
      return { category: String(d.category), numericVal, displayVal: d.count };
    });

    if (isTreemap) {
      const minWeight = Math.max(10, totalCount * CONFIG.MIN_TREEMAP_WEIGHT);
      parsed.forEach(d => { d.numericVal = Math.max(d.numericVal, minWeight); });
    }
    return parsed;
  },

  build(meta: VariableMeta, rawData: CategoryCount[], ctx: HTMLCanvasElement) {
    if (meta.chart_id === 'sample_intersections') {
      this.buildUpSetPlot(meta, rawData, ctx);
      return;
    }

    const isPie = meta.chart_type === 'pie';
    const isTreemap = meta.chart_type === 'treemap';
    const isBar = meta.chart_type === 'bar';

    if (isBar && meta.chart_id === 'cancer_types') {
      rawData.sort((a, b) => {
        const valA = String(a.count).startsWith('<') ? 0 : parseInt(String(a.count), 10);
        const valB = String(b.count).startsWith('<') ? 0 : parseInt(String(b.count), 10);
        return valB - valA;
      });
    }

    const data = this.parseData(rawData, isTreemap);
    const labels = data.map(d => d.category);
    const bgColors = data.map((_, i) => ThemeManager.getColor(i));

    let config: ChartConfiguration;

    if (isTreemap) {
      config = this.getTreemapConfig(meta, data, bgColors);
    } else {
      config = this.getStandardConfig(meta, data, labels, bgColors, isPie);
    }

    // NEW LOGIC: Update instead of destroy if possible to prevent janky UI redraws
    if (this.instances[meta.chart_id]) {
      const chart = this.instances[meta.chart_id];
      chart.data = config.data;
      // Provide a smooth inner-chart animation when data swaps
      chart.update({ duration: 400, easing: 'easeOutQuart' });
    } else {
      this.instances[meta.chart_id] = new Chart(ctx, config);
    }
  },

  buildUpSetPlot(meta: VariableMeta, rawData: CategoryCount[], canvasCtx: HTMLCanvasElement) {
    // Check if the wrapper already exists
    let wrapperDiv = canvasCtx.parentElement?.querySelector('.upset-wrapper') as HTMLDivElement;

    if (!wrapperDiv) {
      wrapperDiv = document.createElement('div');
      wrapperDiv.className = 'upset-wrapper';
      wrapperDiv.style.width = '100%';
      wrapperDiv.style.height = '100%';

      const parent = canvasCtx.parentElement;
      if (parent) {
         parent.innerHTML = '';
         parent.appendChild(wrapperDiv);
      }
    }

    const combinations = rawData.map(item => {
      const sets = String(item.category).replace("Only ", "").split(" + ");
      const isMasked = typeof item.count === 'string' && item.count.startsWith('<');
      const numericValue = isMasked ? CONFIG.MASK_VALUE : parseInt(String(item.count), 10);

      return {
          name: String(item.category),
          sets: sets,
          value: isNaN(numericValue) ? 0 : numericValue,
          displayValue: item.count
      };
    });

    const builder = UpSetJS.extractCombinations(combinations);

    UpSetJS.render(wrapperDiv, {
      sets: builder.sets,
      combinations: builder.combinations,
      width: wrapperDiv.clientWidth || 400,
      height: wrapperDiv.clientHeight || 240,
      color: ThemeManager.palette[0],
      selection: null,
      onClick: (intersection: any) => {
          if (intersection && intersection.name) {
              UIManager.handleChartClick(meta.chart_id, intersection.name);
          }
      }
    });
  },

  getTreemapConfig(meta: VariableMeta, data: any[], bgColors: string[]): ChartConfiguration {
    return {
      type: 'treemap' as any,
      data: {
        datasets: [{
          tree: data,
          key: 'numericVal',
          groups: ['category'],
          spacing: 2,
          borderWidth: 0,
          borderRadius: 8,
          backgroundColor: (ctx: any) => {
            if (ctx.type !== 'data') return 'rgba(0,0,0,0.05)';
            const cat = ctx.raw?.g;
            const idx = data.findIndex(d => d.category === cat);
            return idx >= 0 ? bgColors[idx] : ThemeManager.palette[0];
          },
          labels: {
            display: true,
            formatter: (ctx: any) => ctx.raw?.g || '',
            font: { size: 12, weight: 'bold', family: "'Outfit', sans-serif" },
            color: '#ffffff'
          }
        }] as any
      },
      options: this.getSharedOptions(meta, true, false)
    };
  },

  getStandardConfig(meta: VariableMeta, data: any[], labels: string[], bgColors: string[], isPie: boolean): ChartConfiguration {
    return {
      type: isPie ? 'doughnut' : 'bar',
      data: {
        labels,
        datasets: [{
          data: data.map(d => d.numericVal),
          backgroundColor: bgColors,
          borderWidth: 0,
          borderRadius: isPie ? 0 : 6,
          hoverBackgroundColor: ThemeManager.palette[8],
          maxBarThickness: isPie ? undefined : 48
        }]
      },
      options: this.getSharedOptions(meta, false, isPie, data)
    };
  },

  getSharedOptions(meta: VariableMeta, isTreemap: boolean, isPie: boolean, parsedData?: any[]): any {
    return {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: (!isPie && !isTreemap) ? 'y' : 'x',
      animation: { duration: 600, easing: 'easeOutQuart' },
      onClick: (event: any, elements: any[]) => {
        if (!elements.length) return;
        const targetIndex = elements[0].index;
        const chart = this.instances[meta.chart_id];

        let selectedCategory = '';
        if (isTreemap) {
           selectedCategory = chart.data.datasets[0].data[targetIndex] ? (chart.data.datasets[0].data[targetIndex] as any)._data.category : '';
        } else {
           selectedCategory = String(chart.data.labels![targetIndex]);
        }

        UIManager.handleChartClick(meta.chart_id, selectedCategory);
      },
      plugins: {
        legend: {
          display: isPie,
          position: 'bottom',
          labels: { boxWidth: 10, padding: 15, font: { size: 11, family: "'Outfit', sans-serif", weight: '600' }, color: '#4b5563' }
        },
        tooltip: {
          backgroundColor: ThemeManager.palette[8],
          titleFont: { size: 12, family: "'Outfit', sans-serif", weight: '700' },
          bodyFont: { size: 13, family: "'Outfit', sans-serif" },
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            title: (ctx: any) => isTreemap ? (ctx[0]?.raw?.g || '') : ctx[0].label,
            label: (ctx: any) => {
              const rawItem = isTreemap ? ctx.raw?._data[0] : parsedData![ctx.dataIndex];
              if (!rawItem) return '';
              const unit = meta.units === 'patients' ? '' : ` ${meta.units}`;
              return ` Count: ${rawItem.displayVal || rawItem.displayCount}${unit}`;
            }
          }
        }
      },
      scales: (isPie || isTreemap) ? undefined : {
        y: { grid: { display: false }, ticks: { font: { size: 11, family: "'Outfit', sans-serif", weight: '600' }, color: '#64748b' } },
        x: { beginAtZero: true, grid: { color: '#f1f5f9' }, ticks: { font: { size: 11, family: "'Outfit', sans-serif", weight: '500' }, color: '#94a3b8' } }
      }
    };
  }
};

const UIManager = {
  activeFilter: 'baseline',
  searchTimeout: null as any,
  isInitialRender: true,

  init() {
    DataManager.metadata.forEach(m => ChartFactory.visibleCharts.add(m.chart_id));
    this.renderFilterMenu();
    this.buildToggleMenu();
    this.updateDashboard();
    this.bindEvents();
  },

  bindEvents() {
    const search = document.getElementById('global-search');
    if (search) {
      search.addEventListener('keyup', (e) => {
        if (this.searchTimeout) clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => this.executeSearch((e.target as HTMLInputElement).value), CONFIG.DEBOUNCE_MS);
      });
    }
  },

  // 🌟 NEW: Frosting implementation logic
  setFrosting(active: boolean) {
    const grid = document.getElementById('dashboard-grid');
    const header = document.getElementById('explorer-header');

    // We create an inline transition so we don't have to pollute the global CSS
    const frostingClasses = ['opacity-40', 'blur-[2px]', 'grayscale-[50%]'];

    if (grid && header) {
      if (active) {
        grid.style.transition = 'all 0.15s ease-out';
        header.style.transition = 'all 0.15s ease-out';
        grid.classList.add(...frostingClasses);
        header.classList.add(...frostingClasses);
      } else {
        grid.classList.remove(...frostingClasses);
        header.classList.remove(...frostingClasses);
      }
    }
  },

  async applyFilter(filterKey: string) {
    // 1. Instantly update UI active states on sidebar
    document.querySelectorAll('.filter-btn, #btn-baseline').forEach(b => b.classList.remove('filter-active'));
    const btn = document.getElementById(filterKey === 'baseline' ? 'btn-baseline' : `btn-${filterKey}`);
    if (btn) {
      btn.classList.add('filter-active');
      const details = btn.closest('details');
      if (details) details.open = true;
    }

    if (this.activeFilter === filterKey) return; // Prevent double-clicking the same filter
    this.activeFilter = filterKey;

    // 2. Apply the Frosting blur effect
    this.setFrosting(true);

    try {
      // 3. Load the data (nearly instant if cached)
      await DataManager.loadFilter(filterKey);

      // 4. Force a tiny artificial delay so the user physically registers the blur
      //    (This ensures they *feel* the change happening even on 2ms cache hits)
      await new Promise(resolve => setTimeout(resolve, CONFIG.FROSTING_DELAY_MS));

      // 5. Update the text strings (Behind the blur)
      const titleEl = document.getElementById('view-title');
      if (titleEl) titleEl.innerText = filterKey === 'baseline' ? 'Cohort Overview' : filterKey.replace(/_/g, ' ').replace(/(^|\s)\S/g, l => l.toUpperCase());
      this.updateSizeCounters();

      // 6. Tell Chart.js to recalculate its canvases (Behind the blur)
      this.updateDashboard();

    } catch (e) {
      console.error(e);
    } finally {
      // 7. Remove the blur!
      this.setFrosting(false);
    }
  },

  handleChartClick(chartId: string, categoryName: string) {
    if (!categoryName) return;
    const prefix = chartId.toLowerCase().replace(/ /g, '_');
    const sanitized = String(categoryName).toLowerCase().replace(/ /g, '_');
    const targetKey = `${prefix}_${sanitized}`;

    const fallback = DataManager.filters.find(f => f.endsWith(`_${sanitized}`) || sanitized.endsWith(f.replace(`${prefix}_`, '')));
    const finalKey = DataManager.filters.includes(targetKey) ? targetKey : fallback;

    if (finalKey) this.applyFilter(finalKey);
  },

  updateDashboard() {
    const grid = document.getElementById('dashboard-grid');
    if (!grid) return;

    let cardCount = 0;
    DataManager.metadata.forEach(meta => {
      if (!ChartFactory.visibleCharts.has(meta.chart_id)) {
        // If a chart exists but was toggled off, hide its card
        const existingCard = document.querySelector(`.chart-card[data-title="${meta.display_name.toLowerCase()}"]`);
        if (existingCard) (existingCard as HTMLElement).style.display = 'none';
        return;
      }

      const stat = DataManager.currentStats.find(s => s.chart_id === meta.chart_id);
      if (!stat) return;

      const validData = stat.data.filter(d => d.count !== 0 && d.count !== "0");
      if (!validData.length) return;

      const isBar = meta.chart_type === 'bar';
      const containerHeight = 240;
      const isUpset = meta.chart_id === 'sample_intersections';
      const canvasHeight = isBar ? Math.max(containerHeight, validData.length * 38) : (isUpset ? 300 : containerHeight);

      // 🌟 NEW: Instead of tearing down the grid, check if the card already exists!
      let card = document.querySelector(`.chart-card[data-title="${meta.display_name.toLowerCase()}"]`) as HTMLElement;

      if (!card) {
          // If it doesn't exist (initial load), build the HTML
          card = document.createElement('div');
          card.className = "chart-card glass-card p-7 flex flex-col group relative overflow-hidden transition-all duration-700 ease-out";
          if (this.isInitialRender) card.classList.add('opacity-0', 'translate-y-3');

          card.dataset.title = meta.display_name.toLowerCase();

          card.innerHTML = `
            <div class="absolute top-0 left-0 w-1.5 h-full bg-brand-blue-deep/20 group-hover:bg-brand-blue-deep transition-colors"></div>
            <div class="flex justify-between items-start mb-6 border-b border-gray-100 pb-4 pl-3">
              <h3 class="font-extrabold text-brand-dark text-lg tracking-tight leading-tight group-hover:text-brand-blue-deep transition-colors pr-2">${meta.display_name}</h3>
              <span class="text-[10px] bg-gray-50 text-gray-400 px-2.5 py-1 rounded-md font-bold uppercase tracking-widest border border-gray-100 shrink-0">${meta.units}</span>
            </div>
            <div class="relative w-full pl-3 overflow-y-auto custom-scrollbar" style="height: ${containerHeight}px;">
              <div class="chart-canvas-wrapper" style="height: ${canvasHeight}px; position: relative; width: 100%;">
                <canvas id="chart-${meta.chart_id}"></canvas>
              </div>
            </div>
          `;
          grid.appendChild(card);

          if (this.isInitialRender) {
             setTimeout(() => {
               card.classList.remove('opacity-0', 'translate-y-3');
             }, cardCount * 40);
          }
      } else {
         // Card already exists, just make sure it's visible and heights are correct
         card.style.display = 'flex';
         const wrapper = card.querySelector('.chart-canvas-wrapper') as HTMLElement;
         if (wrapper) wrapper.style.height = `${canvasHeight}px`;
      }

      const ctx = document.getElementById(`chart-${meta.chart_id}`) as HTMLCanvasElement;
      if (ctx) ChartFactory.build(meta, validData, ctx);

      cardCount++;
    });

    this.isInitialRender = false;

    const searchInput = document.getElementById('global-search') as HTMLInputElement;
    if (searchInput && searchInput.value) this.executeSearch(searchInput.value);
  },

  updateSizeCounters() {
    const size = DataManager.cohortSizes[this.activeFilter] || "...";
    const displayVal = (typeof size === 'string' && !size.startsWith('<') && size !== '...')
      ? parseInt(size).toLocaleString() : size.toLocaleString();

    const topSize = document.getElementById('top-cohort-size');
    const sideSize = document.getElementById('size-baseline');
    if (topSize) topSize.innerText = displayVal;
    if (sideSize && this.activeFilter === 'baseline') sideSize.innerText = displayVal;
  },

  renderFilterMenu() {
    const list = document.getElementById('filter-list');
    if (!list) return;
    list.innerHTML = '';

    DataManager.metadata.forEach(meta => {
      const prefix = meta.chart_id.toLowerCase().replace(/ /g, '_');
      const matches = DataManager.filters.filter(f => f.startsWith(`${prefix}_`));
      if (!matches.length) return;

      const details = document.createElement('details');
      details.className = "group border-b border-gray-100 filter-group";
      details.innerHTML = `<summary class="flex justify-between items-center w-full font-extrabold text-xs text-gray-600 uppercase tracking-widest cursor-pointer list-none py-4 px-2 hover:text-brand-blue-deep hover:bg-brand-blue-deep/5 transition-all select-none"><span class="searchable-text">${meta.display_name}</span> <span class="transition-transform duration-300 group-open:rotate-180 text-brand-blue-deep">▼</span></summary>`;

      const container = document.createElement('div');
      container.className = "space-y-1.5 pl-3 border-l-[3px] border-gray-100 ml-1.5 mb-4";

      const baseData = DataManager.cache.get("stats_baseline")?.find((s: StatRow) => s.chart_id === meta.chart_id);
      if (baseData) {
        baseData.data.forEach((item: CategoryCount) => {
          const clean = String(item.category).toLowerCase().replace(/ /g, '_');
          let finalKey = `${prefix}_${clean}`;
          if (!DataManager.filters.includes(finalKey)) {
             finalKey = matches.find(f => f.endsWith(`_${clean}`)) || "";
          }

          if (finalKey) {
            const btn = document.createElement('button');
            btn.id = `btn-${finalKey}`;
            btn.className = "filter-btn w-full text-left px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-[13px] flex justify-between items-center font-medium border border-transparent cursor-pointer";

            let dCount = item.count;
            if (typeof dCount === 'string' && !dCount.startsWith('<')) dCount = parseInt(dCount).toLocaleString();
            else if (typeof dCount === 'number') dCount = dCount.toLocaleString();

            btn.innerHTML = `<span class="searchable-text">${item.category}</span> <span class="text-[10px] bg-gray-100 px-2 py-0.5 rounded-md text-gray-500 font-black">${dCount}</span>`;
            btn.onclick = () => this.applyFilter(finalKey);
            container.appendChild(btn);
          }
        });
      }
      details.appendChild(container);
      list.appendChild(details);
    });
  },

  buildToggleMenu() {
    const container = document.getElementById('chart-toggles');
    if (!container) return;

    DataManager.metadata.forEach(meta => {
      const wrapper = document.createElement('label');
      wrapper.className = "toggle-item flex justify-between items-center py-2.5 px-2 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors";
      wrapper.innerHTML = `<span class="searchable-text text-[13px] font-semibold text-gray-700 pr-2 leading-tight">${meta.display_name}</span>`;

      const sw = document.createElement('div');
      sw.className = "apple-switch";

      const cb = document.createElement('input');
      cb.type = "checkbox";
      cb.checked = ChartFactory.visibleCharts.has(meta.chart_id);
      cb.className = "toggle-checkbox";
      cb.onchange = (e) => {
        if ((e.target as HTMLInputElement).checked) ChartFactory.visibleCharts.add(meta.chart_id);
        else ChartFactory.visibleCharts.delete(meta.chart_id);
        this.updateDashboard();
      };

      sw.appendChild(cb);
      sw.insertAdjacentHTML('beforeend', '<span class="slider"></span>');
      wrapper.appendChild(sw);
      container.appendChild(wrapper);
    });
  },

  executeSearch(query: string) {
    query = query.toLowerCase().trim();
    const toggle = (el: HTMLElement, show: boolean) => el.style.display = show ? 'flex' : 'none';

    document.querySelectorAll('.toggle-item').forEach(item => {
      const txt = (item.querySelector('.searchable-text') as HTMLElement)?.innerText.toLowerCase() || "";
      toggle(item as HTMLElement, txt.includes(query));
    });

    document.querySelectorAll('.filter-group').forEach(group => {
      const title = (group.querySelector('summary .searchable-text') as HTMLElement)?.innerText.toLowerCase() || "";
      let hasChild = false;
      group.querySelectorAll('.filter-btn').forEach(btn => {
        const btnTxt = (btn.querySelector('.searchable-text') as HTMLElement)?.innerText.toLowerCase() || "";
        const match = btnTxt.includes(query) || title.includes(query);
        toggle(btn as HTMLElement, match);
        if (match) hasChild = true;
      });
      if (query && hasChild) (group as HTMLDetailsElement).open = true;
      (group as HTMLElement).style.display = (title.includes(query) || hasChild) ? 'block' : 'none';
    });

    let count = 0;
    document.querySelectorAll('.chart-card').forEach(card => {
      const title = (card as HTMLElement).dataset.title || "";
      if (title.includes(query)) {
        card.style.display = 'flex';
        count++;
      } else card.style.display = 'none';
    });

    const fb = document.getElementById('search-fallback');
    if (fb) fb.style.display = count === 0 ? 'flex' : 'none';
  }
};

// ==========================================
// EXPORT BINDINGS & BOOTSTRAP
// ==========================================

const g = window as any;
g.changeFilter = (key: string) => UIManager.applyFilter(key);
g.switchTab = (tabName: string) => {
  const isFilters = tabName === 'filters';
  const activeClass = "flex-1 py-4 text-xs font-extrabold uppercase tracking-[0.15em] text-brand-blue-deep border-b-[3px] border-brand-blue-deep transition-colors bg-brand-blue-deep/5";
  const inactiveClass = "flex-1 py-4 text-xs font-extrabold uppercase tracking-[0.15em] text-gray-400 border-b-[3px] border-transparent hover:text-gray-600 hover:bg-gray-50 transition-colors";

  const btnFilters = document.getElementById('tab-btn-filters');
  const btnCharts = document.getElementById('tab-btn-charts');
  const contentFilters = document.getElementById('tab-content-filters');
  const contentCharts = document.getElementById('tab-content-charts');

  if (btnFilters) btnFilters.className = isFilters ? activeClass : inactiveClass;
  if (btnCharts) btnCharts.className = !isFilters ? activeClass : inactiveClass;
  if (contentFilters) contentFilters.style.display = isFilters ? 'block' : 'none';
  if (contentCharts) contentCharts.style.display = !isFilters ? 'block' : 'none';

  UIManager.executeSearch((document.getElementById('global-search') as HTMLInputElement)?.value || '');
};

g.toggleMobileSidebar = () => {
  const sidebar = document.getElementById('explorer-sidebar');
  const backdrop = document.getElementById('mobile-sidebar-overlay');
  if (sidebar && backdrop) {
    const isClosed = sidebar.classList.contains('-translate-x-full');
    if (isClosed) {
      sidebar.classList.remove('-translate-x-full');
      backdrop.classList.remove('hidden');
      setTimeout(() => backdrop.classList.remove('opacity-0'), 10);
    } else {
      sidebar.classList.add('-translate-x-full');
      backdrop.classList.add('opacity-0');
      setTimeout(() => backdrop.classList.add('hidden'), 300);
    }
  }
};

g.toggleAllCharts = (show: boolean) => {
  document.querySelectorAll('.toggle-checkbox').forEach((cb: any) => cb.checked = show);
  if (show) DataManager.metadata.forEach(m => ChartFactory.visibleCharts.add(m.chart_id));
  else ChartFactory.visibleCharts.clear();
  UIManager.updateDashboard();
};

g.exportCohortCSV = () => {
  let csv = "data:text/csv;charset=utf-8,Variable,Category,Count,Unit\n";
  DataManager.metadata.forEach(meta => {
    const stat = DataManager.currentStats.find(s => s.chart_id === meta.chart_id);
    if(stat && stat.data) {
      stat.data.forEach(d => csv += `"${meta.display_name}","${d.category}","${d.count}","${meta.units}"\n`);
    }
  });
  const link = document.createElement("a");
  link.href = encodeURI(csv);
  link.download = `BioPortal_${UIManager.activeFilter}.csv`;
  link.click();
};

const boot = () => {
  ThemeManager.init();
  DataManager.initialize().then(() => UIManager.init()).catch(console.error);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
