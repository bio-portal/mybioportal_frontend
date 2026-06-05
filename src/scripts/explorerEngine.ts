import { Chart, registerables, type ChartConfiguration } from 'chart.js';
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';
import { VennDiagramController, ArcSlice } from 'chartjs-chart-venn';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register standard elements alongside Treemap, Venn, and DataLabels modules
Chart.register(...registerables, TreemapController, TreemapElement, VennDiagramController, ArcSlice, ChartDataLabels);

// ==========================================
// TYPES & CONFIGURATION
// ==========================================

interface CategoryCount {
  category: string;
  count: string | number;
  inclusive_count?: string | number;
}

interface StatRow {
  filter_key: string;
  chart_id: string;
  data: CategoryCount[];
}

interface VariableMeta {
  chart_id: string;
  display_name: string;
  chart_type: 'pie' | 'bar' | 'treemap' | 'venn';
  units: string;
}

const CONFIG = {
  API_GATEWAY: "https://biobank-api-51100283624.northamerica-northeast1.run.app/GetStats",
  MASK_VALUE: 10,
  DEBOUNCE_MS: 150,
  MIN_TREEMAP_WEIGHT: 0.035,
  FROSTING_DELAY_MS: 150,
};

// ==========================================
// CORE DATA MANAGER
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

// ==========================================
// CORE THEME MANAGER
// ==========================================

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
      getColor('--color-brand-dark', '#003f5e') // Hover Color (Index 8)
    ];
  },
  getColor(index: number) {
    // Restricts base colors to 0-7, reserving index 8 purely for hover states
    return this.palette[index % 8];
  }
};

// ==========================================
// GRAPH FACTORY ENGINE
// ==========================================

const ChartFactory = {
  instances: {} as Record<string, Chart>,
  visibleCharts: new Set<string>(),

  destroyAll() {
    Object.values(this.instances).forEach(chart => chart.destroy());
    this.instances = {};
  },

  parseData(data: CategoryCount[], isTreemap: boolean, isPie: boolean) {
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
    } else if (isPie) {
      const minWeight = Math.max(5, totalCount * 0.035);
      parsed.forEach(d => { d.numericVal = Math.max(d.numericVal, minWeight); });
    }
    return parsed;
  },

  build(meta: VariableMeta, rawData: CategoryCount[], ctx: HTMLCanvasElement) {
    const isVenn = meta.chart_id === 'sample_intersections';
    const isPie = meta.chart_type === 'pie';
    const isTreemap = meta.chart_type === 'treemap';

    const data = this.parseData(rawData, isTreemap, isPie);
    const labels = data.map(d => d.category);
    const bgColors = data.map((_, i) => ThemeManager.getColor(i));

    let config: ChartConfiguration;

    if (isVenn) {
      config = this.getVennConfig(meta, rawData);
    } else if (isTreemap) {
      config = this.getTreemapConfig(meta, data, bgColors);
    } else {
      config = this.getStandardConfig(meta, data, labels, bgColors, isPie);
    }

    if (this.instances[meta.chart_id]) {
      const chart = this.instances[meta.chart_id];
      chart.data.labels = config.data.labels;
      chart.data.datasets[0].data = config.data.datasets[0].data;
      chart.data.datasets[0].backgroundColor = config.data.datasets[0].backgroundColor;
      (chart.data.datasets[0] as any).customData = isVenn ? (config.data.datasets[0] as any).customData : data;

      if (isTreemap) {
        (chart.data.datasets[0] as any).tree = (config.data.datasets[0] as any).tree;
      }
      chart.update({ duration: 400, easing: 'easeOutQuart' });
    } else {
      this.instances[meta.chart_id] = new Chart(ctx, config);
    }
  },

  getVennConfig(meta: VariableMeta, rawData: any[]): ChartConfiguration {
    const vennData = rawData
      .filter(item => item.category !== 'No Modalities')
      .map(item => {
        const sets = item.category.replace("Only ", "").split(" + ").map((s: string) => s.trim());

        const incStr = String(item.inclusive_count || item.count);
        const inclusiveVal = incStr.startsWith('<') ? CONFIG.MASK_VALUE : parseInt(incStr, 10);

        return {
          label: item.category,
          name: item.category,
          sets: sets,
          value: isNaN(inclusiveVal) ? 0 : inclusiveVal,
          displayVal: item.count,
          category: item.category
        };
      });

    vennData.sort((a, b) => a.sets.length - b.sets.length);
    const sharedOptions = this.getSharedOptions(meta, false, false, vennData, true);

    return {
      type: 'venn' as any,
      data: {
        labels: vennData.map(d => d.category),
        datasets: [{
          data: vennData,
          customData: vennData,
          // Transparent hides the native venn number so DataLabels can take over cleanly
          color: 'transparent',
          backgroundColor: (context: any) => {
            if (context.type !== 'data') return 'rgba(0,0,0,0.05)';
            return ThemeManager.getColor(context.dataIndex);
          },
          hoverBackgroundColor: ThemeManager.palette[8],
          borderColor: '#ffffff',
          borderWidth: 2
        }] as any
      },
      options: {
        ...sharedOptions,
        color: '#4b5563', // Bold Slate Gray for outside labels
        font: { weight: 'bold', family: "'Outfit', sans-serif" },
        layout: {
            padding: 24
        }
      }
    };
  },

  getTreemapConfig(meta: VariableMeta, data: any[], bgColors: string[]): ChartConfiguration {
    return {
      type: 'treemap' as any,
      data: {
        datasets: [{
          tree: data,
          key: 'numericVal',
          groups: ['category'],
          spacing: 1.5,
          borderWidth: 0,
          borderRadius: 8,
          customData: data,
          backgroundColor: (context: any) => {
            if (context.type !== 'data') return 'rgba(0,0,0,0.05)';
            const dataset = context.dataset;
            const liveCustomData = dataset?.customData || data;
            const cat = context.raw?.g;
            const idx = liveCustomData.findIndex((d: any) => d.category === cat);
            return idx >= 0 ? ThemeManager.getColor(idx) : ThemeManager.palette[0];
          },
          hoverBackgroundColor: ThemeManager.palette[8],
          labels: {
            display: true,
            formatter: (ctx: any) => {
              const bounds = ctx.type === 'data' ? ctx.raw?.v : null;
              // 🌟 FIX: Graceful Overflow Hiding. If box is too small, return empty array to hide text.
              if (!bounds || bounds.w < 60 || bounds.h < 35) return [];

              const labelText = ctx.raw?.g || '';

              // 🌟 FIX: Multiline Wrapping via Array Splitting
              if (labelText.includes(' or ')) return labelText.split(' or ');
              if (labelText.includes(' (')) {
                  const parts = labelText.split(' (');
                  return [parts[0], '(' + parts[1]];
              }
              const words = labelText.split(' ');
              if (words.length > 2) {
                  return [words.slice(0, 2).join(' '), words.slice(2).join(' ')];
              }
              return words;
            },
            font: { size: 11, weight: '700', family: "'Outfit', sans-serif" },
            color: '#ffffff'
          }
        }] as any
      },
      options: this.getSharedOptions(meta, true, false, data)
    };
  },

  getStandardConfig(meta: VariableMeta, data: any[], labels: string[], bgColors: string[], isPie: boolean): ChartConfiguration {
    return {
      type: isPie ? 'doughnut' : 'bar',
      data: {
        labels,
        datasets: [{
          data: data.map(d => d.numericVal),
          customData: data,
          backgroundColor: bgColors,
          borderWidth: 0,
          borderRadius: isPie ? 0 : 6,
          hoverBackgroundColor: ThemeManager.palette[8],
          maxBarThickness: isPie ? undefined : 48
        }]
      },
      options: {
        ...this.getSharedOptions(meta, false, isPie, data),
        // 🌟 FIX: Prevent right-side datalabel cutoff on bar charts
        layout: { padding: { right: isPie ? 0 : 45 } }
      }
    };
  },

  getSharedOptions(meta: VariableMeta, isTreemap: boolean, isPie: boolean, initialData: any[], isVenn: boolean = false): any {
    return {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: (!isPie && !isTreemap && !isVenn) ? 'y' : 'x',
      animation: { duration: 600, easing: 'easeOutQuart' },

      onHover: (event: any, elements: any[]) => {
        if (event.native && event.native.target) {
          event.native.target.style.cursor = elements.length ? 'pointer' : 'default';
        }
      },

      onClick: (event: any, elements: any[]) => {
        if (!elements.length) return;
        const targetIndex = elements[0].index;
        const chart = this.instances[meta.chart_id];

        let selectedCategory = '';
        if (isTreemap) {
           selectedCategory = chart.data.datasets[0].data[targetIndex] ? (chart.data.datasets[0].data[targetIndex] as any)._data.category : '';
        } else if (isVenn) {
           selectedCategory = (chart.data.datasets[0] as any).customData[targetIndex]?.category || '';
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
        // 🌟 FIX: Official DataLabels Plugin setup for Direct Chart Labeling
        datalabels: {
          display: (!isPie && !isTreemap), // Show strictly on Bars and Venns
          color: isVenn ? '#ffffff' : ThemeManager.palette[8], // White in Venn, Brand Blue on Bars
          font: { family: "'Outfit', sans-serif", weight: 'bold', size: isVenn ? 14 : 12 },
          formatter: (value: any, context: any) => {
            const raw = (context.dataset.customData as any[])[context.dataIndex];
            return raw ? raw.displayVal : '';
          },
          anchor: isVenn ? 'center' : 'end',
          align: isVenn ? 'center' : 'end',
          offset: isVenn ? 0 : 6
        },
        tooltip: {
          enabled: true,
          backgroundColor: ThemeManager.palette[8],
          titleFont: { size: 12, family: "'Outfit', sans-serif", weight: '700' },
          bodyFont: { size: 13, family: "'Outfit', sans-serif" },
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            title: (tooltipItems: any[]) => {
              if (!tooltipItems || !tooltipItems.length) return '';
              if (isTreemap) return tooltipItems[0].raw?.g || '';
              if (isVenn) return (tooltipItems[0].dataset as any).customData[tooltipItems[0].dataIndex]?.category;
              return tooltipItems[0].label;
            },
            label: (context: any) => {
              const dataset = context.dataset;
              const customData = dataset?.customData || initialData;
              const unit = meta.units === 'patients' ? '' : ` ${meta.units}`;

              if (isVenn) {
                const rawItem = customData[context.dataIndex];
                if (!rawItem) return '';
                return ` Count: ${rawItem.displayVal}${unit}`;
              }

              let categoryName = context.label;
              if (isTreemap) categoryName = context.raw?.g;

              const rawItem = customData?.find((d: any) => String(d.category) === String(categoryName));
              if (!rawItem) return '';

              const countVal = rawItem.displayVal !== undefined ? rawItem.displayVal : rawItem.numericVal;
              return ` Count: ${countVal}${unit}`;
            }
          }
        }
      },
      // 🌟 FIX: Maximizing Data-to-Ink Ratio by stripping away redundant grids/axes
      scales: (isPie || isTreemap || isVenn) ? undefined : {
        y: {
            grid: { display: false },
            border: { display: false },
            ticks: { font: { size: 12, family: "'Outfit', sans-serif", weight: '600' }, color: '#4b5563' }
        },
        x: { display: false } // X-Axis completely removed
      }
    };
  }
};

// ==========================================
// UI & ORCHESTRATION MANAGER
// ==========================================

const UIManager = {
  activeFilter: 'baseline',
  searchTimeout: null as any,
  isInitialRender: true,

  init() {
    DataManager.metadata.forEach(m => ChartFactory.visibleCharts.add(m.chart_id));
    this.renderFilterMenu();
    this.buildToggleMenu();
    this.updateSizeCounters();
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

  setFrosting(active: boolean) {
    const grid = document.getElementById('dashboard-grid');
    const header = document.getElementById('explorer-header');
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
    document.querySelectorAll('.filter-btn, #btn-baseline').forEach(b => b.classList.remove('filter-active'));
    const btn = document.getElementById(filterKey === 'baseline' ? 'btn-baseline' : `btn-${filterKey}`);
    if (btn) {
      btn.classList.add('filter-active');
      const details = btn.closest('details');
      if (details) details.open = true;
    }

    if (this.activeFilter === filterKey) return;
    this.activeFilter = filterKey;

    this.setFrosting(true);

    try {
      await DataManager.loadFilter(filterKey);
      await new Promise(resolve => setTimeout(resolve, CONFIG.FROSTING_DELAY_MS));

      const titleEl = document.getElementById('view-title');
      if (titleEl) titleEl.innerText = filterKey === 'baseline' ? 'Cohort Overview' : filterKey.replace(/_/g, ' ').replace(/(^|\s)\S/g, l => l.toUpperCase());
      this.updateSizeCounters();
      this.updateDashboard();

    } catch (e) {
      console.error(e);
    } finally {
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

    const priorityIds = ['sample_intersections', 'Ethnicity'];
    const sortedMetadata = [...DataManager.metadata].sort((a, b) => {
      const aIdx = priorityIds.indexOf(a.chart_id);
      const bIdx = priorityIds.indexOf(b.chart_id);
      if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
      if (aIdx !== -1) return -1;
      if (bIdx !== -1) return 1;
      return a.display_name.localeCompare(b.display_name);
    });

    sortedMetadata.forEach(meta => {
      if (!ChartFactory.visibleCharts.has(meta.chart_id)) {
        const existingCard = document.querySelector(`.chart-card[data-title="${meta.display_name.toLowerCase()}"]`);
        if (existingCard) (existingCard as HTMLElement).style.display = 'none';
        return;
      }

      const stat = DataManager.currentStats.find(s => s.chart_id === meta.chart_id);
      if (!stat) return;

      const validData = stat.data.filter(d => d.count !== 0 && d.count !== "0");
      if (!validData.length) return;

      const isBar = meta.chart_type === 'bar';
      const isVenn = meta.chart_id === 'sample_intersections';
      const containerHeight = 240;

      const canvasHeight = isBar ? Math.max(containerHeight, validData.length * 38) : (isVenn ? 300 : containerHeight);

      let card = document.querySelector(`.chart-card[data-title="${meta.display_name.toLowerCase()}"]`) as HTMLElement;

      if (!card) {
          card = document.createElement('div');
          card.className = "chart-card glass-card p-7 flex flex-col group relative overflow-hidden transition-all duration-700 ease-out";
          if (this.isInitialRender) card.classList.add('opacity-0', 'translate-y-3');

          card.dataset.title = meta.display_name.toLowerCase();

          card.innerHTML = `
            <div class="absolute top-0 left-0 w-1.5 h-full bg-brand-blue-deep/20 group-hover:bg-brand-blue-deep transition-colors"></div>
            <div class="flex justify-between items-start mb-6 border-b border-gray-100 pb-4 pl-3">
              <div class="pr-2">
                <h3 class="font-extrabold text-brand-dark text-lg tracking-tight leading-tight group-hover:text-brand-blue-deep transition-colors">${meta.display_name}</h3>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <span class="text-[10px] bg-gray-50 text-gray-400 px-2.5 py-1 rounded-md font-bold uppercase tracking-widest border border-gray-100">${meta.units}</span>
                <button onclick="downloadCardImage('${meta.chart_id}', '${meta.display_name}')" class="p-1 rounded-md text-gray-400 hover:text-brand-blue-deep hover:bg-gray-50 transition-all cursor-pointer" title="Download Figure">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </button>
              </div>
            </div>
            <div class="relative w-full pl-3 overflow-x-auto overflow-y-auto custom-scrollbar" style="height: ${containerHeight}px;">
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
         card.style.display = 'flex';
         const wrapper = card.querySelector('.chart-canvas-wrapper') as HTMLElement;
         if (wrapper) wrapper.style.height = `${canvasHeight}px`;

         grid.appendChild(card);
      }

      if (isVenn) {
        card.classList.remove('lg:col-span-2', '2xl:col-span-2');
        card.classList.add('lg:col-span-1', '2xl:col-span-1');
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
// EXPORT SYSTEM INITIALIZATION BINDINGS
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

g.downloadCardImage = (chartId: string, displayName: string) => {
  const chartInstance = ChartFactory.instances[chartId];

  if (chartInstance) {
    const imgUrl = chartInstance.toBase64Image();
    const link = document.createElement('a');
    link.download = `${displayName.replace(/\s+/g, '_')}_BioPortal.png`;
    link.href = imgUrl;
    link.click();
  }
};

const boot = () => {
  ThemeManager.init();
  DataManager.initialize()
    .then(() => {
      UIManager.init();
    })
    .catch((err) => {
      console.error("BioPortal Dashboard Error:", err);
      const grid = document.getElementById('dashboard-grid');
      if (grid) {
        grid.innerHTML = `<div class="col-span-full p-8 text-center bg-red-50 text-red-600 rounded-2xl border border-red-100 font-bold">Failed to connect to the BioPortal Data Gateway. Please check your network connection or the console for details.</div>`;
      }
    })
    .finally(() => {
      const overlay = document.getElementById('loading-overlay');
      if (overlay) {
        overlay.classList.remove('opacity-100');
        overlay.classList.add('opacity-0', 'pointer-events-none');
        setTimeout(() => {
          overlay.style.display = 'none';
        }, 700);
      }
    });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
