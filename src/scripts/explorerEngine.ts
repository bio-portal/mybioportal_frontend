import { Chart, registerables } from 'chart.js';
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';

// Register standard controllers plus the specialized Treemap elements
Chart.register(...registerables, TreemapController, TreemapElement);

const API_GATEWAY = "https://biobank-api-51100283624.northamerica-northeast1.run.app/GetStats";

// Populated dynamically from global.css tokens at runtime
let PALETTE: string[] = [];

let variableMetadata: any[] = [];
let summaryStatistics: any[] = [];
let availableFiltersList: string[] = [];
let activeFilter = 'baseline';
let chartInstances: Record<string, Chart> = {};
let cohortSizesDictionary: Record<string, string | number> = {};
let visibleCharts = new Set<string>();

// Expose explicit template bindings to the window for static Astro component onclick macros
(window as any).changeFilter = changeFilter;
(window as any).exportCohortCSV = exportCohortCSV;
(window as any).toggleAllCharts = toggleAllCharts;
(window as any).switchTab = switchTab;
(window as any).toggleMobileSidebar = toggleMobileSidebar;

/**
 * Toggles responsive layout views on mobile viewpoints
 */
function toggleMobileSidebar() {
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
}

/**
 * Reads core design engine CSS theme tokens dynamically at runtime
 */
function initializePalette() {
  const rootStyle = getComputedStyle(document.documentElement);
  const getColor = (varName: string, fallback: string) => rootStyle.getPropertyValue(varName).trim() || fallback;

  PALETTE = [
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
}

// ==========================================
// UI STATE MANAGEMENT
// ==========================================

function switchTab(tabName: string) {
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

  handleUnifiedSearch();
}

function showLoadingState() {
  const overlay = document.getElementById('loading-overlay');
  const grid = document.getElementById('dashboard-grid');
  const header = document.getElementById('explorer-header');

  if (overlay) {
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100', 'pointer-events-auto');
  }
  if (grid) {
    grid.classList.add('scale-[0.99]', 'opacity-40');
    grid.classList.remove('scale-100', 'opacity-100');
  }
  if (header) {
    header.classList.add('scale-[0.995]', 'opacity-40');
    header.classList.remove('scale-100', 'opacity-100');
  }
}

function hideLoadingState() {
  const overlay = document.getElementById('loading-overlay');
  const grid = document.getElementById('dashboard-grid');
  const header = document.getElementById('explorer-header');

  if (overlay) {
    overlay.classList.add('opacity-0', 'pointer-events-none');
    overlay.classList.remove('opacity-100', 'pointer-events-auto');
  }
  if (grid) {
    grid.classList.remove('scale-[0.99]', 'opacity-40');
    grid.classList.add('scale-100', 'opacity-100');
  }
  if (header) {
    header.classList.remove('scale-[0.995]', 'opacity-40');
    header.classList.add('scale-100', 'opacity-100');
  }
}

// ==========================================
// DATA FETCHING & INITIALIZATION
// ==========================================

async function fetchFromPortal(queryString: string) {
  const response = await fetch(`${API_GATEWAY}?${queryString}&_cb=${new Date().getTime()}`);
  if (!response.ok) throw new Error("API infrastructure connection exception");

  const cacheHeader = response.headers.get("X-Cache");
  const indicator = document.getElementById("cache-indicator");
  if (indicator && cacheHeader) {
    indicator.innerHTML = `<span class="w-2 h-2 rounded-full ${cacheHeader === "HIT" ? 'bg-brand-green-bright' : 'bg-brand-blue-deep'}"></span> ${cacheHeader === "HIT" ? 'LIVE' : 'SYNCED'}`;
    indicator.className = `flex items-center gap-2 ${cacheHeader === "HIT" ? 'text-brand-green-bright' : 'text-brand-blue-deep'}`;
  }
  return await response.json();
}

async function initializeEngine() {
  try {
    initializePalette();
    showLoadingState();
    const startTime = Date.now();

    [variableMetadata, availableFiltersList, summaryStatistics] = await Promise.all([
      fetchFromPortal("type=metadata"),
      fetchFromPortal("type=filters"),
      fetchFromPortal("filter=baseline")
    ]);

    variableMetadata.forEach(meta => visibleCharts.add(meta.chart_id));

    calculateCohortSizes();
    buildChartToggleMenu();
    renderFilterMenu();
    renderDashboard();

    const titleEl = document.getElementById('view-title');
    if (titleEl) titleEl.innerText = 'Cohort Overview';
    updateCohortSizeCounters();

    const searchInput = document.getElementById('global-search');
    if (searchInput) searchInput.addEventListener('keyup', handleUnifiedSearch);

    const elapsed = Date.now() - startTime;
    if (elapsed < 700) await new Promise(r => setTimeout(r, 700 - elapsed));

    hideLoadingState();

  } catch (err) {
    console.error(err);
    hideLoadingState();

    const titleEl = document.getElementById('view-title');
    if (titleEl) titleEl.innerText = 'Service Unavailable';

    const grid = document.getElementById('dashboard-grid');
    if (grid) grid.innerHTML = `<div class="col-span-full p-8 text-center bg-red-50 text-red-700 rounded-2xl border border-red-100 font-bold">API Access Sync Failed. Please refresh.</div>`;
  }
}

function calculateCohortSizes() {
  cohortSizesDictionary = {};

  summaryStatistics.forEach(stat => {
     const prefix = stat.chart_id.toLowerCase().replace(/ /g, '_');

     if (stat.chart_id === 'sex') {
        cohortSizesDictionary['baseline'] = stat.data.reduce((acc: number, curr: any) => acc + (parseInt(curr.count) || 0), 0);
     }

     stat.data.forEach((item: any) => {
        // VETTED: Added explicit String wrapper to prevent unbinned numeric type crashing
        const cleanCategory = String(item.category).toLowerCase().replace(/ /g, '_');
        cohortSizesDictionary[`${prefix}_${cleanCategory}`] = item.count;
     });
  });
}

// ==========================================
// RENDERING ENGINES
// ==========================================

function renderFilterMenu() {
  const listContainer = document.getElementById('filter-list');
  if (!listContainer) return;
  listContainer.innerHTML = '';

  variableMetadata.forEach(meta => {
    const prefix = meta.chart_id.toLowerCase().replace(/ /g, '_');
    const matchedSlices = availableFiltersList.filter(fKey => fKey.startsWith(prefix + '_'));
    if (matchedSlices.length === 0) return;

    const detailsEl = document.createElement('details');
    detailsEl.className = "group border-b border-gray-100 filter-group";
    detailsEl.open = false;

    const summaryEl = document.createElement('summary');
    summaryEl.className = "flex justify-between items-center w-full font-extrabold text-xs text-gray-600 uppercase tracking-widest cursor-pointer list-none py-4 px-2 hover:text-brand-blue-deep hover:bg-brand-blue-deep/5 transition-all select-none";
    summaryEl.innerHTML = `<span class="searchable-text">${meta.display_name}</span> <span class="transition-transform duration-300 group-open:rotate-180 text-brand-blue-deep">▼</span>`;
    detailsEl.appendChild(summaryEl);

    const itemsContainer = document.createElement('div');
    itemsContainer.className = "space-y-1.5 pl-3 border-l-[3px] border-gray-100 ml-1.5 mb-4";

    const baselineChart = summaryStatistics.find(s => s.chart_id === meta.chart_id);
    if (baselineChart && baselineChart.data) {
      baselineChart.data.forEach((item: any) => {
        // VETTED: Safe category string casting
        const cleanCat = String(item.category).toLowerCase().replace(/ /g, '_');
        const composedFilterKey = prefix + '_' + cleanCat;
        const directMatch = availableFiltersList.includes(composedFilterKey);
        const fallbackKey = matchedSlices.find(fKey => fKey.endsWith('_' + cleanCat) || cleanCat.endsWith(fKey.replace(prefix + '_', '')));
        const finalFilterKey = directMatch ? composedFilterKey : fallbackKey;

        if (finalFilterKey) {
          const btn = document.createElement('button');
          btn.id = `btn-${finalFilterKey}`;
          btn.className = "filter-btn w-full text-left px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-[13px] flex justify-between items-center font-medium border border-transparent cursor-pointer";

          let displayCount: string | number = item.count;
          if (typeof displayCount === 'string' && !displayCount.startsWith('<')) {
             displayCount = parseInt(displayCount).toLocaleString();
          } else if (typeof displayCount === 'number') {
             displayCount = displayCount.toLocaleString();
          }

          btn.innerHTML = `<span class="searchable-text">${item.category}</span> <span class="text-[10px] bg-gray-100 px-2 py-0.5 rounded-md text-gray-500 font-black">${displayCount}</span>`;
          btn.onclick = () => changeFilter(finalFilterKey!);
          itemsContainer.appendChild(btn);
        }
      });
    }
    detailsEl.appendChild(itemsContainer);
    listContainer.appendChild(detailsEl);
  });
}

function buildChartToggleMenu() {
  const container = document.getElementById('chart-toggles');
  if (!container) return;
  container.innerHTML = '';

  variableMetadata.forEach(meta => {
    const wrapper = document.createElement('label');
    wrapper.className = "toggle-item flex justify-between items-center py-2.5 px-2 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors";

    const span = document.createElement('span');
    span.className = "searchable-text text-[13px] font-semibold text-gray-700 pr-2 leading-tight";
    span.innerText = meta.display_name;

    const switchLabel = document.createElement('div');
    switchLabel.className = "apple-switch";

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = visibleCharts.has(meta.chart_id);
    checkbox.className = "toggle-checkbox";
    checkbox.dataset.chartId = meta.chart_id;
    checkbox.onchange = (e) => {
      if ((e.target as HTMLInputElement).checked) {
        visibleCharts.add(meta.chart_id);
      } else {
        visibleCharts.delete(meta.chart_id);
      }
      renderDashboard();
    };

    const slider = document.createElement('span');
    slider.className = "slider";

    switchLabel.appendChild(checkbox);
    switchLabel.appendChild(slider);

    wrapper.appendChild(span);
    wrapper.appendChild(switchLabel);
    container.appendChild(wrapper);
  });
}

function toggleAllCharts(show: boolean) {
  const checkboxes = document.querySelectorAll('.toggle-checkbox');
  checkboxes.forEach((cb: any) => {
    cb.checked = show;
    if (show) visibleCharts.add(cb.dataset.chartId);
    else visibleCharts.delete(cb.dataset.chartId);
  });
  renderDashboard();
}

async function changeFilter(filterKey: string) {
  document.querySelectorAll('.filter-btn, #btn-baseline').forEach(b => b.classList.remove('filter-active'));

  const targetedButton = document.getElementById(filterKey === 'baseline' ? 'btn-baseline' : `btn-${filterKey}`);
  if (targetedButton) {
      targetedButton.classList.add('filter-active');
      if (filterKey !== 'baseline') {
          const parentDetails = targetedButton.closest('details');
          if (parentDetails) parentDetails.open = true;
      }
  }

  activeFilter = filterKey;

  try {
    showLoadingState();
    const startTime = Date.now();

    summaryStatistics = await fetchFromPortal(`filter=${encodeURIComponent(filterKey)}`);

    const titleEl = document.getElementById('view-title');
    if (titleEl) {
      titleEl.innerText = filterKey === 'baseline' ? 'Cohort Overview' : filterKey.replace(/_/g, ' ').replace(/(^|\s)\S/g, l => l.toUpperCase());
    }

    renderDashboard();
    updateCohortSizeCounters();

    const elapsed = Date.now() - startTime;
    if (elapsed < 500) await new Promise(r => setTimeout(r, 500 - elapsed));

    hideLoadingState();

  } catch (err) {
    console.error("Failed executing data matrix reload", err);
    hideLoadingState();
  }
}

function updateCohortSizeCounters() {
  const selectedSize = cohortSizesDictionary[activeFilter] || "...";

  const sizeEl = document.getElementById('top-cohort-size');
  const baselineSidebarSize = document.getElementById('size-baseline');

  const displayVal = (typeof selectedSize === 'string' && !selectedSize.startsWith('<') && selectedSize !== '...')
      ? parseInt(selectedSize).toLocaleString()
      : selectedSize.toString().toLocaleString(); // Fallback for pure numbers

  if (sizeEl) sizeEl.innerText = displayVal;
  if (baselineSidebarSize && activeFilter === 'baseline') baselineSidebarSize.innerText = displayVal;
}

function handleUnifiedSearch() {
  const searchInput = document.getElementById('global-search') as HTMLInputElement;
  if (!searchInput) return;

  const query = searchInput.value.toLowerCase().trim();

  const toggleDisplay = (element: HTMLElement, show: boolean) => {
    element.style.display = show ? 'flex' : 'none';
  };

  document.querySelectorAll('.toggle-item').forEach(item => {
    const textEl = item.querySelector('.searchable-text') as HTMLElement | null;
    if (textEl) {
      toggleDisplay(item as HTMLElement, textEl.innerText.toLowerCase().includes(query));
    }
  });

  document.querySelectorAll('.filter-group').forEach(group => {
    // VETTED: Safely select the title without crashing if missing
    const titleEl = group.querySelector('summary .searchable-text') as HTMLElement | null;
    const title = titleEl ? titleEl.innerText.toLowerCase() : "";
    let hasVisibleChild = false;

    group.querySelectorAll('.filter-btn').forEach(btn => {
       const btnTextEl = btn.querySelector('.searchable-text') as HTMLElement | null;
       const btnText = btnTextEl ? btnTextEl.innerText.toLowerCase() : "";
       const isMatch = btnText.includes(query) || title.includes(query);
       toggleDisplay(btn as HTMLElement, isMatch);
       if (isMatch) hasVisibleChild = true;
    });

    if (query !== '' && hasVisibleChild) {
       (group as HTMLDetailsElement).open = true;
    }

    (group as HTMLElement).style.display = (title.includes(query) || hasVisibleChild) ? 'block' : 'none';
  });

  let foundCards = 0;
  document.querySelectorAll('.chart-card').forEach(card => {
    const title = card.getAttribute('data-title')?.toLowerCase() || "";
    if (title.includes(query)) {
      card.classList.remove('hidden');
      foundCards++;
    } else {
      card.classList.add('hidden');
    }
  });

  const fallbackEl = document.getElementById('search-fallback');
  if (fallbackEl) fallbackEl.style.display = foundCards === 0 ? 'flex' : 'none';
}

function exportCohortCSV() {
  let csvContent = "data:text/csv;charset=utf-8,Variable,Category,Count,Unit\n";
  variableMetadata.forEach(meta => {
    const stat = summaryStatistics.find(s => s.chart_id === meta.chart_id);
    if(stat && stat.data) {
      stat.data.forEach((d: any) => csvContent += `"${meta.display_name}","${d.category}","${d.count}","${meta.units}"\n`);
    }
  });
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `BioPortal_${activeFilter}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function renderDashboard() {
  const grid = document.getElementById('dashboard-grid');
  if (!grid) return;

  Object.values(chartInstances).forEach(chart => chart.destroy());
  chartInstances = {};
  grid.innerHTML = '';

  let cardCount = 0;

  variableMetadata.forEach(meta => {
    if (!visibleCharts.has(meta.chart_id)) return;

    const statEntry = summaryStatistics.find(s => s.chart_id === meta.chart_id);
    if (!statEntry) return;

    const filteredData = statEntry.data.filter((d: any) => d.count !== 0 && d.count !== "0");
    if (filteredData.length === 0) return;

    const isPie = meta.chart_type === 'pie';
    const isTreemap = meta.chart_type === 'treemap';
    const isBar = meta.chart_type === 'bar';

    const HEIGHT_PER_BAR = 38;
    const minContainerHeight = 240;

    let dynamicCanvasHeight = minContainerHeight;
    if (isBar) {
      dynamicCanvasHeight = Math.max(minContainerHeight, filteredData.length * HEIGHT_PER_BAR);
    }

    const card = document.createElement('div');
    card.className = `chart-card glass-card p-7 flex flex-col group relative overflow-hidden opacity-0 translate-y-3 transition-all duration-700 ease-out ${isTreemap ? 'lg:col-span-2' : ''}`;
    card.setAttribute('data-title', meta.display_name);

    card.innerHTML = `
      <div class="absolute top-0 left-0 w-1.5 h-full bg-brand-blue-deep/20 group-hover:bg-brand-blue-deep transition-colors"></div>
      <div class="flex justify-between items-start mb-6 border-b border-gray-100 pb-4 pl-3">
        <h3 class="font-extrabold text-brand-dark text-lg tracking-tight leading-tight group-hover:text-brand-blue-deep transition-colors pr-2">${meta.display_name}</h3>
        <span class="text-[10px] bg-gray-50 text-gray-400 px-2.5 py-1 rounded-md font-bold uppercase tracking-widest border border-gray-100 shrink-0">${meta.units}</span>
      </div>
      <div class="relative w-full pl-3 overflow-y-auto custom-scrollbar" style="height: ${minContainerHeight}px;">
        <div style="height: ${dynamicCanvasHeight}px; position: relative; width: 100%;">
          <canvas id="chart-${meta.chart_id}"></canvas>
        </div>
      </div>
    `;

    grid.appendChild(card);
    renderChartInstance(meta, filteredData);

    setTimeout(() => {
      card.classList.remove('opacity-0', 'translate-y-3');
      card.classList.add('opacity-100', 'translate-y-0');
    }, cardCount * 50);
    cardCount++;
  });
  handleUnifiedSearch();
}

function renderChartInstance(meta: any, data: any[]) {
  const canvasElement = document.getElementById(`chart-${meta.chart_id}`);
  if (!canvasElement) return;

  const ctx = (canvasElement as HTMLCanvasElement).getContext('2d');
  if (!ctx) return;

  const labels = data.map(d => d.category);
  const values = data.map(d => typeof d.count === 'string' && d.count.startsWith('<') ? 10 : parseInt(d.count, 10));

  const isPie = meta.chart_type === 'pie';
  const isTreemap = meta.chart_type === 'treemap';
  const isBar = meta.chart_type === 'bar';

  const colorArray = labels.map((_, i) => PALETTE[i % PALETTE.length]);

  if (isTreemap) {
    // VETTED: Mathematical safety wrapper to prevent Treemap NaN crashes on string masks
    const treeData = data.map(d => ({
        category: d.category,
        numericCount: (typeof d.count === 'string' && d.count.startsWith('<')) ? 0 : parseInt(d.count, 10),
        displayCount: d.count
    }));

    chartInstances[meta.chart_id] = new Chart(ctx as any, {
      type: 'treemap',
      data: {
        datasets: [{
          tree: treeData,
          key: 'numericCount',
          groups: ['category'],
          spacing: 2,
          borderWidth: 0,
          borderRadius: 8,
          backgroundColor: (context: any) => {
            if (context.type !== 'data') return 'rgba(0,0,0,0.05)';
            const rawItem = context.raw?._data;
            if (!rawItem) return '#26abe2';
            const paletteIndex = treeData.findIndex(d => d.category === rawItem.category);
            return PALETTE[paletteIndex >= 0 ? paletteIndex % PALETTE.length : 0];
          },
          labels: {
            display: true,
            formatter: (context: any) => {
              const rawItem = context.raw?._data;
              if (!rawItem) return '';
              const outCount = rawItem.displayCount;
              const formattedCount = (typeof outCount === 'string' && outCount.startsWith('<'))
                ? outCount
                : parseInt(outCount, 10).toLocaleString();
              return `${rawItem.category}\n(n=${formattedCount})`;
            },
            font: { size: 12, weight: 'bold', family: "'Outfit', sans-serif" },
            color: '#ffffff'
          }
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: PALETTE[8],
            titleFont: { size: 12, family: "'Outfit', sans-serif", weight: '700' },
            bodyFont: { size: 13, family: "'Outfit', sans-serif" },
            padding: 12,
            cornerRadius: 8,
            callbacks: {
              title: (tooltipItems: any) => {
                const rawItem = tooltipItems[0]?.raw?._data;
                return rawItem ? rawItem.category : '';
              },
              label: (context: any) => {
                const rawItem = context.raw?._data;
                if (!rawItem) return '';
                const unitString = meta.units.toLowerCase() === 'patients' ? '' : ` ${meta.units}`;
                return ` Count: ${rawItem.displayCount}${unitString}`;
              }
            }
          }
        }
      }
    });
    return;
  }

  // Standard processing matrix for standard categorical representations
  chartInstances[meta.chart_id] = new Chart(ctx as any, {
    type: isPie ? 'doughnut' : 'bar',
    data: {
      labels: labels,
      datasets: [{
        data: values,
        backgroundColor: colorArray,
        borderWidth: 0,
        borderRadius: isPie ? 0 : 6,
        hoverBackgroundColor: PALETTE[8],
        minBarLength: isPie ? undefined : 8,
        // VETTED: Constrains bar chart scaling if there are only 1-2 elements
        maxBarThickness: isPie ? undefined : 48
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: isBar ? 'y' : 'x',
      transitions: {
        active: { animation: { duration: 400 } }
      },
      animation: {
        duration: 840,
        easing: 'easeOutQuart'
      },
      onClick: (event, elements) => {
        if (elements.length > 0) {
          const targetIndex = elements[0].index;
          const selectedLabel = chartInstances[meta.chart_id].data.labels![targetIndex] as string;

          const targetPrefix = meta.chart_id.toLowerCase().replace(/ /g, '_');
          const sanitizedCategory = String(selectedLabel).toLowerCase().replace(/ /g, '_');
          const targetFilterKey = targetPrefix + '_' + sanitizedCategory;

          const fallbackKey = availableFiltersList.find(fKey => fKey.endsWith('_' + sanitizedCategory) || sanitizedCategory.endsWith(fKey.replace(targetPrefix + '_', '')));
          const finalKey = availableFiltersList.includes(targetFilterKey) ? targetFilterKey : fallbackKey;

          if (finalKey) changeFilter(finalKey);
        }
      },
      plugins: {
        legend: {
          display: isPie,
          position: 'bottom',
          labels: { boxWidth: 10, padding: 15, font: { size: 11, family: "'Outfit', sans-serif", weight: '600' }, color: '#4b5563' }
        },
        tooltip: {
          backgroundColor: PALETTE[8],
          titleFont: { size: 12, family: "'Outfit', sans-serif", weight: '700' },
          bodyFont: { size: 13, family: "'Outfit', sans-serif" },
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: (context) => {
              const rawDisplayCount = data[context.dataIndex].count;
              const unitString = meta.units.toLowerCase() === 'patients' ? '' : ` ${meta.units}`;
              return ` Count: ${rawDisplayCount}${unitString}`;
            }
          }
        }
      },
      scales: isPie ? undefined : {
        y: {
          grid: { display: false },
          ticks: { font: { size: 11, family: "'Outfit', sans-serif", weight: '600' }, color: '#64748b' }
        },
        x: {
          beginAtZero: true,
          grid: { color: '#f1f5f9' },
          ticks: { font: { size: 11, family: "'Outfit', sans-serif", weight: '500' }, color: '#94a3b8' }
        }
      }
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeEngine);
} else {
  initializeEngine();
}
