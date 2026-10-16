import { Chart, registerables, type ChartConfiguration } from 'chart.js';
import { TreemapController, TreemapElement } from 'chartjs-chart-treemap';
import { VennDiagramController, ArcSlice } from 'chartjs-chart-venn';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// ==========================================
// LOCALIZATION ENGINE (QUEBEC-COMPLIANT)
// ==========================================

const LANG = document.documentElement.lang || 'en';



// ============================================================================
// AI TRANSLATION TASK:
// You are an expert medical and technical translator.
// Please translate the empty string values (the right side of the colon)
// from English to French. Keep the original formatting and casing in mind.
// DO NOT modify the keys (the left side of the colon).
// Return ONLY the fully completed TypeScript code block.
// ============================================================================

export const DICTIONARY_FR: Record<string, string> = {
  // --- Base UI Elements ---
  "Active View": "Vue active",
  "Loading...": "Chargement...",
  "Search cohorts...": "Rechercher des cohortes...",
  "No data available for this cohort": "Aucune donnée disponible pour cette cohorte",
  "Patient Count": "Nombre de patients",

  // --- Extracted Pipeline Data ---
  "African": "Africain",
  "Age Group": "Groupe d'âge",
  "Alimentary & Metabolism": "Alimentaire et Métabolisme",
  "Alive": "Vivant",
  "Amputation History": "Antécédents d'amputation",
  "Ancestry": "Ascendance",
  "Antiinfectives": "Anti-infectieux",
  "Antineoplastics & Immunomodulators": "Antinéoplasiques et immunomodulateurs",
  "Antiparasitics": "Antiparasitaires",
  "BMI": "IMC",
  "BP (Diastolic)": "PA (Diastolique)",
  "BP (Systolic)": "PA (Systolique)",
  "Bladder Cancer": "Cancer de la vessie",
  "Blood": "Sang",
  "Blood + Urine": "Sang + Urine",
  "Body Fat %": "% de graisse corporelle",
  "Body Fat Mass (KG)": "Masse grasse corporelle (KG)",
  "Body Fat Percentage": "Pourcentage de graisse corporelle",
  "Body Mass Index": "Indice de masse corporelle",
  "Bone Mass (KG)": "Masse osseuse (KG)",
  "Breast Cancer": "Cancer du sein",
  "Cancer": "Cancer",
  "Cancer Distribution": "Répartition des cancers",
  "Cardiology": "Cardiologie",
  "Cardiovascular": "Cardiovasculaire",
  "Colorectal Cancer": "Cancer colorectal",
  "Coronary Artery Disease": "Maladie coronarienne",
  "Crisis (120+)": "Crise (120+)",
  "Crisis (160+)": "Crise (160+)",
  "Current Smoker": "Fumeur actuel",
  "Deceased": "Décédé",
  "Dermatologicals": "Dermatologiques",
  "Diabetes Subtype": "Sous-type de diabète",
  "Diabetic Foot Clinic": "Clinique du pied diabétique",
  "Diastolic Blood Pressure": "Pression artérielle diastolique",
  "East Asian": "Asiatique de l'Est",
  "Elevated (120-129)": "Élevée (120-129)",
  "Elna": "Elna",
  "Emergency": "Urgence",
  "Endocrinology": "Endocrinologie",
  "Endometrial Cancer": "Cancer de l'endomètre",
  "Ethnicity": "Origine ethnique",
  "European": "Européen",
  "Fat-Free Mass (KG)": "Masse maigre (KG)",
  "Female": "Femme",
  "Foot Ulcers": "Ulcères du pied",
  "Former Smoker": "Ancien fumeur",
  "Frailty Scale (CFS)": "Échelle de fragilité (CFS)",
  "Genito-urinary & Sex Hormones": "Génito-urinaire et hormones sexuelles",
  "Gestational": "Gestationnel",
  "Gestational Diabetes Clinic": "Clinique du diabète gestationnel",
  "Grade 0": "Grade 0",
  "Grade 1": "Grade 1",
  "Grade 2": "Grade 2",
  "Grade 3-4": "Grade 3-4",
  "Healthy (18.5-24.9)": "Sain (18.5-24.9)",
  "Heart Failure": "Insuffisance cardiaque",
  "Herzl": "Herzl",
  "Hispanic Or Latin American": "Hispanique ou latino-américain",
  "K2 - Inpatient Cardio": "K2 - Cardio hospitalisation",
  "Kidney Cancer": "Cancer du rein",
  "Kidney Disease (Nephropathy)": "Maladie rénale (Néphropathie)",
  "Leukemia Cancer": "Leucémie",
  "Lung Cancer": "Cancer du poumon",
  "MODY": "MODY",
  "Macular Edema (DME)": "Œdème maculaire (OMD)",
  "Male": "Homme",
  "Managing Well": "S'en sort bien",
  "Middle Eastern": "Moyen-Oriental",
  "Mildly Frail": "Légèrement fragile",
  "Moderately Frail": "Modérément fragile",
  "Muscle Mass (KG)": "Masse musculaire (KG)",
  "Musculo-skeletal": "Musculo-squelettique",
  "Native American": "Amérindien",
  "Nephrology": "Néphrologie",
  "Nervous System": "Système nerveux",
  "Neuropathy": "Neuropathie",
  "Never Smoker": "Jamais fumé",
  "No": "Non",
  "Normal (<120)": "Normale (<120)",
  "Normal (<80)": "Normale (<80)",
  "Obesity Class 1 (30.0-34.9)": "Obésité classe 1 (30.0-34.9)",
  "Obesity Class 2 (35.0-39.9)": "Obésité classe 2 (35.0-39.9)",
  "Obesity Class 3 (40.0+)": "Obésité classe 3 (40.0+)",
  "Other Cancer": "Autre cancer",
  "Overweight (25.0-29.9)": "Embonpoint (25.0-29.9)",
  "Pancreatic Cancer": "Cancer du pancréas",
  "Peripheral Vascular Disease": "Maladie vasculaire périphérique",
  "Prediabetes": "Prédiabète",
  "Prescription History": "Historique des prescriptions",
  "Prostate Cancer": "Cancer de la prostate",
  "Proteomics Available": "Protéomique disponible",
  "Recruitment Site": "Site de recrutement",
  "Respiratory": "Respiratoire",
  "Retinopathy Severity": "Sévérité de la rétinopathie",
  "Retinal": "Rétinien",
  "Retinal + Blood": "Rétinien + Sang",
  "Retinal + Blood + Urine": "Rétinien + Sang + Urine",
  "Retinal + Urine": "Rétinien + Urine",
  "Retinopathy (Any)": "Rétinopathie (Toute)",
  "Sample Overlap": "Chevauchement d'échantillons",
  "Sensory Organs": "Organes sensoriels",
  "Severely Frail": "Sévèrement fragile",
  "Sex at Birth": "Sexe à la naissance",
  "Skeletal Muscle Mass Measurement": "Mesure de la masse musculaire squelettique",
  "Skin Cancer": "Cancer de la peau",
  "Smoking Status": "Statut tabagique",
  "South Asian": "Asiatique du Sud",
  "Southeast Asian": "Asiatique du Sud-Est",
  "Stage 1 (130-139)": "Stade 1 (130-139)",
  "Stage 1 (80-89)": "Stade 1 (80-89)",
  "Stage 2 (140-159)": "Stade 2 (140-159)",
  "Stage 2 (90-99)": "Stade 2 (90-99)",
  "Stage 3 (100-119)": "Stade 3 (100-119)",
  "Stroke History": "Antécédents d'AVC",
  "Systemic Hormones": "Hormones systémiques",
  "Systolic Blood Pressure": "Pression artérielle systolique",
  "Thyroid Cancer": "Cancer de la thyroïde",
  "Top-Level Drug Classes": "Classes de médicaments principales",
  "Type 1 Diabetes": "Diabète de type 1",
  "Type 2 Diabetes": "Diabète de type 2",
  "Underweight (<18.5)": "Insuffisance pondérale (<18.5)",
  "Ungradable": "Non gradable",
  "Unknown": "Inconnu",
  "Urine": "Urine",
  "Various": "Divers",
  "Very Fit": "Très en forme",
  "Very Severely Frail": "Très sévèrement fragile",
  "Vital Status": "Statut vital",
  "Vulnerable": "Vulnérable",
  "Wards": "Unités",
  "Well": "En bonne santé",
  "Yes": "Oui",
  "age": "âge",
  "atc_classes": "classes_atc",
  "bone_mass": "masse_osseuse",
  "cancer_types": "types_cancer",
  "cfs_score": "score_cfs",
  "consent_location": "lieu_consentement",
  "deceased_status": "statut_décès",
  "demo_smoking": "démo_tabagisme",
  "diabetes_type": "type_diabète",
  "diagnoses": "diagnostics",
  "eyeart_severity": "sévérité_eyeart",
  "fat_free_mass": "masse_maigre",
  "fat_mass": "masse_grasse",
  "has_Amputation": "a_amputation",
  "has_Congestive_Heart_Failure": "a_insuffisance_cardiaque_congestive",
  "has_Coronary_Artery_Disease": "a_maladie_coronarienne",
  "has_DME": "a_OMD",
  "has_Diabetic_foot_ulcer": "a_ulcère_pied_diabétique",
  "has_Kidney_Disease": "a_maladie_rénale",
  "has_Neuropathy": "a_neuropathie",
  "has_Peripheral_Vascular_Disease": "a_maladie_vasculaire_périphérique",
  "has_Retinopathy": "a_rétinopathie",
  "has_Stroke": "a_AVC",
  "has_drug_history": "a_historique_médicaments",
  "has_proteomics": "a_protéomique",
  "patients": "patients",
  "prescriptions": "ordonnances",
  "sample_intersections": "intersections_échantillons",
  "sex": "sexe",
};

export function t(key: string): string {
  if (typeof document !== 'undefined') {
    const lang = document.documentElement.lang || 'en';
    if (lang !== 'fr') return key;
  }
  return DICTIONARY_FR[key] || key;
}

const slugify = (str: string) => {
  return String(str).toLowerCase()
    .replace(/ /g, '_')
    .replace(/\+/g, '_plus')
    .replace(/</g, 'under_')
    .replace(/>/g, 'over_');
};
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
  MIN_TREEMAP_WEIGHT: 0.05,
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
    // Fetch and explicitly lowercase the filter array to prevent case-mismatches
    const [meta, rawFilters, stats] = await Promise.all([
      this.fetch("type=metadata", "metadata"),
      this.fetch("type=filters", "filters"),
      this.fetch("filter=baseline", "stats_baseline")
    ]);

    this.metadata = meta;
    this.filters = rawFilters.map((f: string) => f.toLowerCase()); // 🌟 THE FIX
    this.currentStats = stats;

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
        // 🌟 THE FIX: Remove slugify. Mirror the exact same space-to-underscore
        // formatting we use everywhere else to perfectly preserve the '+' signs.
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
    return this.palette[index % 8];
  }
};

// ==========================================
// DATA PARSING & TEXT ENGINES
// ==========================================

const TextEngine = {
  getBalancedLines(cat: string, displayCount: string | number): string[] {
    const labelText = cat || '';
    if (!labelText) return [];

    let lines: string[] = [];
    const words = labelText.split(' ');

    if (words.length <= 1) {
      lines = [labelText];
    } else {
      let bestLines: string[] = [labelText];
      let minDiff = Infinity;
      for (let i = 1; i < words.length; i++) {
        const line1 = words.slice(0, i).join(' ');
        const line2 = words.slice(i).join(' ');
        const diff = Math.abs(line1.length - line2.length);
        if (diff < minDiff) {
          minDiff = diff;
          bestLines = [line1, line2];
        }
      }
      lines = bestLines;
    }

    if (displayCount) lines.push(`n = ${displayCount}`);
    return lines;
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
    let trueTotal = 0;

    const parsed = data.map(d => {
      const isMasked = typeof d.count === 'string' && d.count.startsWith('<');
      const numericVal = isMasked ? CONFIG.MASK_VALUE : parseInt(String(d.count), 10);
      totalCount += isNaN(numericVal) ? 0 : numericVal;

      if (!isMasked && !isNaN(numericVal)) trueTotal += numericVal;

      return { category: String(d.category), numericVal, displayVal: d.count };
    });

    if (isTreemap) {
      const minWeight = Math.max(10, totalCount * CONFIG.MIN_TREEMAP_WEIGHT);
      parsed.forEach(d => { d.numericVal = Math.max(d.numericVal, minWeight); });
    } else if (isPie) {
      const minWeight = Math.max(5, totalCount * 0.07);
      parsed.forEach(d => { d.numericVal = Math.max(d.numericVal, minWeight); });
    }

    return { parsed, trueTotal };
  },

  build(meta: VariableMeta, rawData: CategoryCount[], ctx: HTMLCanvasElement) {
    const isVenn = meta.chart_id === 'sample_intersections';
    const isPie = meta.chart_type === 'pie';
    const isTreemap = meta.chart_type === 'treemap';
    const isBar = meta.chart_type === 'bar' && !isVenn;

    if (isBar && meta.chart_id === 'cancer_types') {
      rawData.sort((a, b) => {
        const valA = String(a.count).startsWith('<') ? 0 : parseInt(String(a.count), 10);
        const valB = String(b.count).startsWith('<') ? 0 : parseInt(String(b.count), 10);
        return valB - valA;
      });
    }

    const { parsed: data, trueTotal } = this.parseData(rawData, isTreemap, isPie);

    // 🌟 PRESENTATION BOUNDARY INTERCEPTION: Localize the chart categories vector dynamically
    const labels = data.map(d => t(d.category));
    const bgColors = data.map((_, i) => ThemeManager.getColor(i));

    let config: ChartConfiguration;

    if (isVenn) {
      config = this.getVennConfig(meta, rawData);
    } else if (isTreemap) {
      config = this.getTreemapConfig(meta, data, bgColors, trueTotal);
    } else if (isPie) {
      config = this.getPieConfig(meta, data, labels, bgColors, trueTotal);
    } else {
      config = this.getBarConfig(meta, data, labels, bgColors, trueTotal);
    }

    if (this.instances[meta.chart_id]) {
      const chart = this.instances[meta.chart_id];
      chart.options = config.options;
      chart.data.labels = config.data.labels;
      chart.data.datasets[0].data = config.data.datasets[0].data;
      chart.data.datasets[0].backgroundColor = config.data.datasets[0].backgroundColor;
      (chart.data.datasets[0] as any).customData = isVenn ? (config.data.datasets[0] as any).customData : data;
      (chart.data.datasets[0] as any).trueTotal = isVenn ? (config.data.datasets[0] as any).trueTotal : trueTotal;

      if (isTreemap) {
        (chart.data.datasets[0] as any).tree = (config.data.datasets[0] as any).tree;
      }
      chart.update({ duration: 400, easing: 'easeOutQuart' });
    } else {
      this.instances[meta.chart_id] = new Chart(ctx, config);
    }
  },

  getVennConfig(meta: VariableMeta, rawData: any[]): ChartConfiguration {
    let trueTotal = 0;
    const vennData = rawData
      .filter(item => item.category !== 'No Modalities')
      .map(item => {
        const sets = item.category.replace("Only ", "").split(" + ").map((s: string) => s.trim());
        const incStr = String(item.inclusive_count || item.count);
        const inclusiveVal = incStr.startsWith('<') ? CONFIG.MASK_VALUE : parseInt(incStr, 10);

        if (!String(item.count).startsWith('<')) trueTotal += parseInt(String(item.count), 10) || 0;

        return {
          label: t(item.category), // Presentation translation
          name: item.category,
          sets: sets,
          value: isNaN(inclusiveVal) ? 0 : inclusiveVal,
          displayVal: item.count,
          category: item.category
        };
      });

    vennData.sort((a, b) => a.sets.length - b.sets.length);
    const sharedOptions = this.getSharedOptions(meta);

    return {
      type: 'venn' as any,
      data: {
        labels: vennData.map(d => t(d.category)),
        datasets: [{
          data: vennData,
          customData: vennData,
          trueTotal: trueTotal,
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
        layout: {
          padding: { top: 20, bottom: 20, left: 35, right: 35 }
        },
        plugins: {
          ...sharedOptions.plugins,
          legend: { display: false },
          datalabels: { display: false }
        },
        scales: {
          x: {
            ticks: {
              color: '#ffffff',
              font: { size: 14, weight: 'bold', family: "'Outfit', sans-serif" },
              callback: function(value: any, index: number) {
                const dataset = this.chart.data.datasets[0] as any;
                const rawItem = dataset.customData[index];

                if (rawItem && typeof rawItem.displayVal === 'string' && rawItem.displayVal.startsWith('<')) {
                    return `<${CONFIG.MASK_VALUE}`;
                }
                return value;
              }
            }
          },
          y: {
            ticks: {
              color: '#4b5563',
              font: { size: 13, weight: 'bold', family: "'Outfit', sans-serif" }
            }
          }
        }
      }
    };
  },

  getTreemapConfig(meta: VariableMeta, data: any[], bgColors: string[], trueTotal: number): ChartConfiguration {
    const sharedOptions = this.getSharedOptions(meta);

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
          trueTotal: trueTotal,
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
            color: '#ffffff',
            font: (ctx: any) => {
               const boxWidth = ctx.raw?.w || 0;
               const boxHeight = ctx.raw?.h || 0;
               const cat = ctx.raw?.g;
               if (boxWidth === 0 || !cat) return { size: 11, weight: '700', family: "'Outfit', sans-serif" };

               const dataset = ctx.chart.data.datasets[0];
               const liveCustomData = dataset?.customData || data;
               const rawItem = liveCustomData.find((d: any) => String(d.category) === String(cat));
               const displayCount = rawItem ? rawItem.displayVal : '';

               // 🌟 LOCALIZED WRAPPING ADJUSTMENTS
               const lines = TextEngine.getBalancedLines(t(cat), displayCount);
               if (!lines.length) return { size: 11, weight: '700', family: "'Outfit', sans-serif" };

               const maxChars = Math.max(...lines.map(l => l.length));
               const sizeByWidth = Math.floor(boxWidth / (maxChars * 0.55));
               const sizeByHeight = Math.floor(boxHeight / (lines.length * 1.35));

               let calculatedSize = Math.min(sizeByWidth, sizeByHeight);
               calculatedSize = Math.max(9, Math.min(14, calculatedSize));

               return { size: calculatedSize, weight: '700', family: "'Outfit', sans-serif" };
            },
            formatter: (ctx: any) => {
              const boxWidth = ctx.raw?.w || 0;
              const boxHeight = ctx.raw?.h || 0;
              if (boxWidth < 45 || boxHeight < 25) return [];

              const dataset = ctx.chart.data.datasets[0];
              const liveCustomData = dataset?.customData || data;
              const cat = ctx.raw?.g;

              const rawItem = liveCustomData.find((d: any) => String(d.category) === String(cat));
              const displayCount = rawItem ? rawItem.displayVal : '';

              // 🌟 LOCALIZED PRESENTATION
              return TextEngine.getBalancedLines(t(cat), displayCount);
            }
          }
        }] as any
      },
      options: {
        ...sharedOptions,
        plugins: {
          ...sharedOptions.plugins,
          legend: { display: false },
          datalabels: { display: false }
        }
      }
    };
  },

  getBarConfig(meta: VariableMeta, data: any[], labels: string[], bgColors: string[], trueTotal: number): ChartConfiguration {
    const sharedOptions = this.getSharedOptions(meta);
    return {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          data: data.map(d => d.numericVal),
          customData: data,
          trueTotal: trueTotal,
          backgroundColor: bgColors,
          borderWidth: 0,
          borderRadius: 6,
          hoverBackgroundColor: ThemeManager.palette[8],
          maxBarThickness: 48
        }]
      },
      options: {
        ...sharedOptions,
        indexAxis: 'y',
        layout: { padding: { top: 20, bottom: 20, right: 45, left: 20 } },
        plugins: {
          ...sharedOptions.plugins,
          legend: { display: false },
          datalabels: {
            display: true,
            color: '#4b5563',
            font: { family: "'Outfit', sans-serif", weight: 'normal', size: 12 },
            anchor: 'end',
            align: 'end',
            offset: 6,
            formatter: (value: any, context: any) => {
              const rawItem = context.dataset.customData?.[context.dataIndex];
              return rawItem ? String(rawItem.displayVal) : '';
            }
          }
        },
        scales: {
          y: {
              grid: { display: false },
              border: { display: false },
              ticks: { font: { size: 12, family: "'Outfit', sans-serif", weight: '600' }, color: '#4b5563' }
          },
          x: { display: false }
        }
      }
    };
  },

  getPieConfig(meta: VariableMeta, data: any[], labels: string[], bgColors: string[], trueTotal: number): ChartConfiguration {
    const sharedOptions = this.getSharedOptions(meta);
    return {
      type: 'doughnut',
      data: {
        labels,
        datasets: [{
          data: data.map(d => d.numericVal),
          customData: data,
          trueTotal: trueTotal,
          backgroundColor: bgColors,
          borderWidth: 0,
          hoverBackgroundColor: ThemeManager.palette[8]
        }]
      },
      options: {
        ...sharedOptions,
        indexAxis: 'x',
        layout: { padding: { top: 35, bottom: 5, left: 45, right: 45 } },
        plugins: {
          ...sharedOptions.plugins,
          legend: {
            display: true,
            position: 'bottom',
            title: {
              display: true,
              text: '',
              padding: { top: 20 }
            },
            labels: {
              boxWidth: 10,
              padding: 15,
              font: { size: 11, family: "'Outfit', sans-serif", weight: '600' },
              color: '#4b5563'
            }
          },
          datalabels: {
            display: true,
            color: '#4b5563',
            font: { family: "'Outfit', sans-serif", weight: 'bold', size: 12 },
            anchor: 'end',
            align: 'end',
            offset: 10,
            formatter: (value: any, context: any) => {
              const rawItem = context.dataset.customData?.[context.dataIndex];
              if (!rawItem) return '';
              return String(rawItem.displayVal);
            }
          }
        }
      }
    };
  },


getSharedOptions(meta: VariableMeta): any {
    return {
      responsive: true,
      maintainAspectRatio: false,
      onHover: (event: any, elements: any[]) => {
        if (event.native && event.native.target) {
          event.native.target.style.cursor = elements.length ? 'pointer' : 'default';
        }
      },
      onClick: (event: any, elements: any[]) => {
        if (!elements.length) return;
        const targetElement = elements[0];
        const chart = this.instances[meta.chart_id];
        const type = chart.config.type;

        let selectedCategory = '';
        if (type === 'treemap') {
           selectedCategory = targetElement.element?.$context?.raw?.g
                           || (chart.data.datasets[0].data[targetElement.index] as any)?._data?.category
                           || '';
        } else if (type === 'venn') {
           // 🌟 THE FIX: Intersections do not exist in the base data array.
           // We must extract the category directly from the raw pixel element context.
           selectedCategory = targetElement.element?.$context?.raw?.category
                           || targetElement.element?.$context?.raw?.name
                           || '';
        } else {
           const dataset = chart.data.datasets[targetElement.datasetIndex] as any;
           selectedCategory = dataset.customData?.[targetElement.index]?.category || String(chart.data.labels![targetElement.index]);
        }

        UIManager.handleChartClick(meta.chart_id, selectedCategory);
      },
      plugins: {
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
              const type = tooltipItems[0].chart.config.type;
              let rawCat = '';

              if (type === 'treemap') rawCat = tooltipItems[0].raw?.g || '';
              else if (type === 'venn') rawCat = tooltipItems[0].raw?.category || tooltipItems[0].raw?.name || '';
              else {
                const dataset = tooltipItems[0].dataset as any;
                rawCat = dataset.customData?.[tooltipItems[0].dataIndex]?.category || tooltipItems[0].label;
              }
              return t(rawCat);
            },
            label: (context: any) => {
              const dataset = context.dataset;
              const customData = dataset?.customData || [];
              const trueTotal = dataset.trueTotal || 0;
              const unit = meta.units === 'patients' ? '' : ` ${t(meta.units)}`;
              const type = context.chart.config.type;

              let rawItem;
              if (type === 'treemap') {
                const categoryName = context.raw?.g;
                rawItem = customData.find((d: any) => String(d.category) === String(categoryName));
              } else if (type === 'venn') {
                const categoryName = context.raw?.category || context.raw?.name;
                rawItem = customData.find((d: any) => String(d.category) === String(categoryName));
              } else {
                rawItem = customData[context.dataIndex];
              }

              if (!rawItem) return '';

              const displayVal = rawItem.displayVal !== undefined ? rawItem.displayVal : rawItem.numericVal;

              if (typeof displayVal === 'string' && displayVal.startsWith('<')) {
                  return ` ${t('Count:')} ${displayVal}${unit}${t(' (Rare)')}`;
              }

              const percentage = trueTotal > 0 ? ((Number(displayVal) / trueTotal) * 100).toFixed(1) : '0.0';
              return ` ${t('Count:')} ${Number(displayVal).toLocaleString(LANG === 'fr' ? 'fr-FR' : 'en-US')}${unit} (${percentage}%)`;
            }
          }
        }
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
      if (titleEl) {
        if (filterKey === 'baseline') {
          titleEl.innerText = t('Cohort Overview');
        } else {
          // Dynamically find the matching chart metadata to split the string cleanly
          const match = DataManager.metadata.find(m => filterKey.startsWith(m.chart_id.toLowerCase().replace(/ /g, '_') + '_'));
          const prefix = match ? match.chart_id.toLowerCase().replace(/ /g, '_') + '_' : '';

          const chartTitle = match ? match.display_name : filterKey.split('_')[0];
          const filterVal = filterKey.replace(prefix, '').replace(/_/g, ' ').replace(/(^|\s)\S/g, l => l.toUpperCase());

          // Join them with a colon and translate both pieces separately so the dictionary functions right
          titleEl.innerText = `${t(chartTitle)}: ${t(filterVal)}`;
        }
      }
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

    // 🌟 THE FIX: Mirror the sidebar logic exactly. Bypass slugify so we
    // keep the '+' signs intact for the database match.
    const sanitized = String(categoryName).toLowerCase().replace(/ /g, '_');
    const targetKey = `${prefix}_${sanitized}`;

    if (DataManager.filters.includes(targetKey)) {
      this.applyFilter(targetKey);
    }
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
      return t(a.display_name).localeCompare(t(b.display_name));
    });

    sortedMetadata.forEach(meta => {
      if (!ChartFactory.visibleCharts.has(meta.chart_id)) {
        const existingCard = document.querySelector(`.chart-card[data-title="${meta.display_name.toLowerCase()}"]`);
        if (existingCard) (existingCard as HTMLElement).style.display = 'none';
        return;
      }

      const stat = DataManager.currentStats.find(s => s.chart_id === meta.chart_id);
      if (!stat) return;

      // 1. Define chart types FIRST so the filter can use them
      const isBar = meta.chart_type === 'bar';
      const isVenn = meta.chart_id === 'sample_intersections';

      // 2. Safely filter the data
      const validData = stat.data.filter(d => {
          // Always drop genuinely missing data
          if (d.count === "" || d.count === null) return false;

          // NEVER drop 0s for the Venn diagram (this prevents the s.bb crash!)
          if (isVenn) return true;

          // Safely drop 0s for all other charts to keep the UI clean
          return d.count !== 0 && d.count !== "0";
      });

      if (!validData.length) return;

      const containerHeight = 240;

      const canvasHeight = isBar ? Math.max(containerHeight, validData.length * 38) : containerHeight;
      const overflowClass = isBar ? 'overflow-x-auto overflow-y-auto custom-scrollbar' : 'overflow-hidden flex items-center justify-center';

      let card = document.querySelector(`.chart-card[data-title="${meta.display_name.toLowerCase()}"]`) as HTMLElement;

      if (!card) {
          card = document.createElement('div');
          card.className = "chart-card glass-card pt-5 pb-4 px-6 flex flex-col group relative overflow-hidden transition-all duration-700 ease-out";
          if (this.isInitialRender) card.classList.add('opacity-0', 'translate-y-3');

          card.dataset.title = meta.display_name.toLowerCase();

          // 🌟 LOCALIZED PRESENTATION DASHBOARD CARDS INFRASTRUCTURE
          card.innerHTML = `
            <div class="absolute top-0 left-0 w-1.5 h-full bg-brand-blue-deep/20 group-hover:bg-brand-blue-deep transition-colors"></div>
            <div class="flex justify-between items-start mb-3 pl-1">
              <div class="pr-2">
                <h3 class="font-extrabold text-brand-dark text-lg tracking-tight leading-tight group-hover:text-brand-blue-deep transition-colors">${t(meta.display_name)}</h3>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <span class="text-[10px] bg-gray-50 text-gray-400 px-2.5 py-1 rounded-md font-bold uppercase tracking-widest border border-gray-100">${t(meta.units)}</span>
                <button onclick="downloadCardImage('${meta.chart_id}', '${meta.display_name}')" class="p-1 rounded-md text-gray-400 opacity-25 group-hover:opacity-100 hover:text-brand-blue-deep hover:bg-gray-50 transition-all duration-300 cursor-pointer" title="Download Figure">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                </button>
              </div>
            </div>
            <div class="relative w-full pl-1 ${overflowClass}" style="height: ${containerHeight}px;">
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
         const scrollContainer = card.querySelector('.relative.w-full.pl-1') as HTMLElement;
         if (scrollContainer) scrollContainer.className = `relative w-full pl-1 ${overflowClass}`;

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
      ? parseInt(size).toLocaleString(LANG === 'fr' ? 'fr-FR' : 'en-US') : size.toLocaleString(LANG === 'fr' ? 'fr-FR' : 'en-US');

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
      details.className = "group group\/details border-b border-gray-100 filter-group";

      // 🌟 LOCALIZED SIDEBAR ACCORDIONS
      details.innerHTML = `<summary class="flex justify-between items-center w-full font-extrabold text-xs text-gray-600 uppercase tracking-widest cursor-pointer list-none py-4 px-2 hover:text-brand-blue-deep hover:bg-brand-blue-deep/5 transition-all select-none"><span class="searchable-text">${t(meta.display_name)}</span> <span class="transition-transform duration-300 group-open:rotate-180 text-brand-blue-deep">▼</span></summary>`;

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
            if (typeof dCount === 'string' && !dCount.startsWith('<')) dCount = parseInt(dCount).toLocaleString(LANG === 'fr' ? 'fr-FR' : 'en-US');
            else if (typeof dCount === 'number') dCount = dCount.toLocaleString(LANG === 'fr' ? 'fr-FR' : 'en-US');

            // 🌟 LOCALIZED SIDEBAR SELECTION TARGET COMPONENT TRIGGERS
            btn.innerHTML = `<span class="searchable-text">${t(item.category)}</span> <span class="text-[10px] bg-gray-100 px-2 py-0.5 rounded-md text-gray-500 font-black">${dCount}</span>`;
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

      // 🌟 LOCALIZED TOGGLES INTERFACE
      wrapper.innerHTML = `<span class="searchable-text text-[13px] font-semibold text-gray-700 pr-2 leading-tight">${t(meta.display_name)}</span>`;

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
