import Chart from 'chart.js/auto';

const API_GATEWAY = "https://biobank-api-51100283624.northamerica-northeast1.run.app/GetStats";

// We will populate this dynamically from CSS
let PALETTE: string[] = [];

let variableMetadata: any[] = [];
let summaryStatistics: any[] = [];
let availableFiltersList: string[] = [];
let activeFilter = 'baseline';
let chartInstances: Record<string, Chart> = {};
let cohortSizesDictionary: Record<string, string | number> = {};
let visibleCharts = new Set<string>();

// Expose bindings to window for static Astro HTML onclick attributes
(window as any).changeFilter = changeFilter;
(window as any).exportCohortCSV = exportCohortCSV;
(window as any).toggleAllCharts = toggleAllCharts;
(window as any).switchTab = switchTab;

/**
 * Reads CSS variables from global.css at runtime.
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

function switchTab(tabName: string) {
  const filterBtn = document.getElementById('tab-btn-filters')!;
  const chartsBtn = document.getElementById('tab-btn-charts')!;
  const filterContent = document.getElementById('tab-content-filters')!;
  const chartsContent = document.getElementById('tab-content-charts')!;

  if (tabName === 'filters') {
    filterBtn.className = "flex-1 py-4 text-xs font-extrabold uppercase tracking-[0.15em] text-brand-blue-deep border-b-[3px] border-brand-blue-deep transition-colors bg-brand-blue-deep/5";
    chartsBtn.className = "flex-1 py-4 text-xs font-extrabold uppercase tracking-[0.15em] text-gray-400 border-b-[3px] border-transparent hover:text-gray-600 hover:bg-gray-50 transition-colors";
    filterContent.style.display = 'block';
    chartsContent.style.display = 'none';
  } else {
    chartsBtn.className = "flex-1 py-4 text-xs font-extrabold uppercase tracking-[0.15em] text-brand-blue-deep border-b-[3px] border-brand-blue-deep transition-colors bg-brand-blue-deep/5";
    filterBtn.className = "flex-1 py-4 text-xs font-extrabold uppercase tracking-[0.15em] text-gray-400 border-b-[3px] border-transparent hover:text-gray-600 hover:bg-gray-50 transition-colors";
    chartsContent.style.display = 'block';
    filterContent.style.display = 'none';
  }
  handleUnifiedSearch();
}

async function fetchFromPortal(queryString: string) {
  const cacheBuster = `&_cb=${new Date().getTime()}`;
  const response = await fetch(`${API_GATEWAY}?${queryString}${cacheBuster}`);
  if (!response.ok) throw new Error("API timeout");

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
    initializePalette(); // Load CSS variables first

    variableMetadata = await fetchFromPortal("type=metadata");
    availableFiltersList = await fetchFromPortal("type=filters");
    summaryStatistics = await fetchFromPortal("filter=baseline");

    variableMetadata.forEach(meta => visibleCharts.add(meta.chart_id));

    calculateCohortSizes();
    buildChartToggleMenu();
    renderFilterMenu();
    renderDashboard();
    updateCohortSizeCounters();

    const searchInput = document.getElementById('global-search');
    if (searchInput) searchInput.addEventListener('keyup', handleUnifiedSearch);
  } catch (err) {
    console.error(err);
    const grid = document.getElementById('dashboard-grid');
    if (grid) grid.innerHTML = `<div class="col-span-full p-8 text-center bg-red-50 text-red-700 rounded-2xl border border-red-100 font-bold">API Connection Failed. Please reload.</div>`;
  }
}

function calculateCohortSizes() {
  const sexStat = summaryStatistics.find(s => s.chart_id === 'sex');
  if (sexStat && sexStat.data) {
    cohortSizesDictionary['baseline'] = sexStat.data.reduce((acc: number, curr: any) => acc + (parseInt(curr.count) || 0), 0);
  }

  variableMetadata.forEach(meta => {
    const prefix = meta.chart_id.toLowerCase().replace(/ /g, '_');
    const chartMatch = summaryStatistics.find(s => s.chart_id === meta.chart_id);
    if (chartMatch && chartMatch.data) {
      chartMatch.data.forEach((item: any) => {
        const cleanCategory = item.category.toLowerCase().replace(/ /g, '_');
        cohortSizesDictionary[`${prefix}_${cleanCategory}`] = item.count;
      });
    }
  });
}

function renderFilterMenu() {
  const listContainer = document.getElementById('filter-list');
  if (!listContainer) return;
  listContainer.innerHTML = '';

  variableMetadata.forEach(meta => {
    const prefix = meta.chart_id.toLowerCase().replace(/ /g, '_');
    const matchedSlices = availableFiltersList.filter(fKey => fKey.startsWith(prefix + '_'));
    if (matchedSlices.length === 0) return;

    const detailsEl = document.createElement('details');
    detailsEl.className = "group border-t border-gray-100 pt-3 mt-3 filter-group";
    detailsEl.open = false;

    const summaryEl = document.createElement('summary');
    summaryEl.className = "flex justify-between items-center font-extrabold text-[11px] text-gray-400 uppercase tracking-widest cursor-pointer list-none px-1 mb-2 hover:text-brand-blue-deep transition-colors select-none";
    summaryEl.innerHTML = `<span class="searchable-text">${meta.display_name}</span> <span class="transition-transform duration-300 group-open:rotate-180 text-brand-blue-deep">▼</span>`;
    detailsEl.appendChild(summaryEl);

    const itemsContainer = document.createElement('div');
    itemsContainer.className = "space-y-1.5 pl-3 border-l-[3px] border-gray-100 ml-1.5";

    const baselineChart = summaryStatistics.find(s => s.chart_id === meta.chart_id);
    if (baselineChart && baselineChart.data) {
      baselineChart.data.forEach((item: any) => {
        const cleanCat = item.category.toLowerCase().replace(/ /g, '_');
        const composedFilterKey = prefix + '_' + cleanCat;
        const directMatch = availableFiltersList.includes(composedFilterKey);
        const fallbackKey = matchedSlices.find(fKey => fKey.endsWith('_' + cleanCat) || cleanCat.endsWith(fKey.replace(prefix + '_', '')));
        const finalFilterKey = directMatch ? composedFilterKey : fallbackKey;

        if (finalFilterKey) {
          const btn = document.createElement('button');
          btn.id = `btn-${finalFilterKey}`;
          btn.className = "filter-btn w-full text-left px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-[13px] flex justify-between items-center font-medium border border-transparent";

          let displayCount: string | number = item.count;
          if (displayCount !== '<10' && displayCount !== '<20') {
             displayCount = parseInt(displayCount as string).toLocaleString();
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
  const titleEl = document.getElementById('view-title');
  if (titleEl) {
    titleEl.innerText = filterKey === 'baseline' ? 'Cohort Overview' : filterKey.replace(/_/g, ' ').replace(/(^|\s)\S/g, l => l.toUpperCase());
  }

  try {
    summaryStatistics = await fetchFromPortal(`filter=${encodeURIComponent(filterKey)}`);
    renderDashboard();
    updateCohortSizeCounters();
  } catch (err) {
    console.error("Failed executing data matrix reload", err);
  }
}

function updateCohortSizeCounters() {
  let selectedSize: any = "...";
  if (activeFilter === 'baseline') {
    selectedSize = cohortSizesDictionary['baseline'] || "...";
  } else {
    selectedSize = cohortSizesDictionary[activeFilter] || "...";
  }
  const sizeEl = document.getElementById('top-cohort-size');
  const baselineSidebarSize = document.getElementById('size-baseline');

  if (sizeEl) {
    if (selectedSize !== '<10' && selectedSize !== '<20' && selectedSize !== '...') {
       sizeEl.innerText = parseInt(selectedSize).toLocaleString();
       if(baselineSidebarSize && activeFilter === 'baseline') baselineSidebarSize.innerText = parseInt(selectedSize).toLocaleString();
    } else {
       sizeEl.innerText = selectedSize;
       if(baselineSidebarSize && activeFilter === 'baseline') baselineSidebarSize.innerText = selectedSize;
    }
  }
}

function handleUnifiedSearch() {
  const searchInput = document.getElementById('global-search') as HTMLInputElement;
  if (!searchInput) return;

  const query = searchInput.value.toLowerCase().trim();

  document.querySelectorAll('.toggle-item').forEach(item => {
    const text = (item.querySelector('.searchable-text') as HTMLElement).innerText.toLowerCase();
    (item as HTMLElement).style.display = text.includes(query) ? 'flex' : 'none';
  });

  document.querySelectorAll('.filter-group').forEach(group => {
    const title = (group.querySelector('summary .searchable-text') as HTMLElement).innerText.toLowerCase();
    let hasVisibleChild = false;

    group.querySelectorAll('.filter-btn').forEach(btn => {
       const btnText = (btn.querySelector('.searchable-text') as HTMLElement).innerText.toLowerCase();
       if (btnText.includes(query) || title.includes(query)) {
           (btn as HTMLElement).style.display = 'flex';
           hasVisibleChild = true;
       } else {
           (btn as HTMLElement).style.display = 'none';
       }
    });

    if (query !== '' && hasVisibleChild) {
       (group as HTMLDetailsElement).open = true;
    } else if (query === '') {
       (group as HTMLDetailsElement).open = false;
    }

    (group as HTMLElement).style.display = (title.includes(query) || hasVisibleChild) ? 'block' : 'none';
  });

  let foundCards = 0;
  document.querySelectorAll('.chart-card').forEach(card => {
    const title = card.getAttribute('data-title')?.toLowerCase() || "";
    if (title.includes(query)) {
      (card as HTMLElement).style.display = 'flex';
      foundCards++;
    } else {
      (card as HTMLElement).style.display = 'none';
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

function generateColorCycle(length: number) {
    let colors = [];
    for(let i = 0; i < length; i++) {
        colors.push(PALETTE[i % PALETTE.length]);
    }
    return colors;
}

function renderDashboard() {
  const grid = document.getElementById('dashboard-grid');
  if (!grid) return;

  Object.values(chartInstances).forEach(chart => chart.destroy());
  chartInstances = {};
  grid.innerHTML = '';

  variableMetadata.forEach(meta => {
    if (!visibleCharts.has(meta.chart_id)) return;

    const statEntry = summaryStatistics.find(s => s.chart_id === meta.chart_id);
    if (!statEntry) return;

    const filteredData = statEntry.data.filter((d: any) => d.count !== 0 && d.count !== "0");
    if (filteredData.length === 0) return;

    const isPie = meta.chart_type === 'pie';
    const isHorizontalBar = !isPie;

    // Calculate dynamic canvas height to avoid squishing high-cardinality charts
    const HEIGHT_PER_BAR = 36;
    const minContainerHeight = 240;
    const dynamicCanvasHeight = isHorizontalBar ? Math.max(minContainerHeight, filteredData.length * HEIGHT_PER_BAR) : minContainerHeight;

    const card = document.createElement('div');
    card.className = "chart-card glass-card p-7 flex flex-col group relative overflow-hidden";
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
  });
  handleUnifiedSearch();
}

function renderChartInstance(meta: any, data: any[]) {
  const canvasElement = document.getElementById(`chart-${meta.chart_id}`);
  if (!canvasElement) return;

  const ctx = (canvasElement as HTMLCanvasElement).getContext('2d');
  const labels = data.map(d => d.category);
  const values = data.map(d => d.count === '<10' || d.count === '<20' ? 0 : parseInt(d.count, 10));

  const isPie = meta.chart_type === 'pie';
  const isHorizontalBar = !isPie;

  const colorArray = generateColorCycle(labels.length);

  chartInstances[meta.chart_id] = new Chart(ctx as any, {
    type: isPie ? 'doughnut' : 'bar',
    data: {
      labels: labels,
      datasets: [{
        data: values,
        backgroundColor: colorArray,
        borderWidth: 0,
        borderRadius: isPie ? 0 : 4,
        hoverBackgroundColor: PALETTE[8], // brand-dark '#003f5e'
        minBarLength: isPie ? undefined : 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: isHorizontalBar ? 'y' : 'x',
      onClick: (event, elements) => {
        if (elements.length > 0) {
          const targetIndex = elements[0].index;
          const selectedLabel = chartInstances[meta.chart_id].data.labels![targetIndex] as string;

          const targetPrefix = meta.chart_id.toLowerCase().replace(/ /g, '_');
          const sanitizedCategory = selectedLabel.toLowerCase().replace(/ /g, '_');
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
          backgroundColor: PALETTE[8], // brand-dark '#003f5e'
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
