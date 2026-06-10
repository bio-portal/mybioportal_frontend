const fs = require('fs');
const path = require('path');

// Target paths
const pagesDir = path.join(__dirname, 'src', 'content', 'pages', 'en');
const newsDir = path.join(__dirname, 'src', 'content', 'news', 'en');
const teamDir = path.join(__dirname, 'src', 'content', 'team', 'en');

// Ensure directories exist
[pagesDir, newsDir, teamDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

console.log('Writing optimized English content collections...');

// ==========================================
// 1. PAGES CONFIGURATIONS
// ==========================================

fs.writeFileSync(path.join(pagesDir, 'data.yaml'), `id: "data"
hero:
  tagline: "Open Science & Cohort Analytics"
  headline: "BioPortal Population Datasets"
  description: "Access research cohorts with deep-phenotyped data, explore multi-omics sample distributions, and request secure biological materials for approved scientific inquiries."
landingMetrics:
  participantsLabel: "Total Participants"
  clinicalVariablesLabel: "Clinical Variables"
  proteomicsLabel: "Proteomic Profiles"
  biosamplesLabel: "Matched Biosamples"
  fallbackValues:
    participants: "6,648"
    clinicalVariables: "158"
    proteomics: "887"
    biosamples: "2,450"

explorer:
  pageTitle: "Interactive Data Explorer | BioPortal"
  backLink: "/data"
  backText: "Back to Data Request"
  header:
    totalPatientsLabel: "Total Patients"
  grid:
    noResultsText: "No matching metrics"
  sidebar:
    title: "Command Center"
    baseline: "Baseline (Total Cohort)"
    searchPlaceholder: "Search cohorts or metrics..."
    tooltip:
      title: "Cohort Discovery"
      description: "Click directly on any chart segment or sidebar attribute to isolate a sub-population. You can refine pie chart layouts by clicking legend labels to toggle specific variables."
      warning: "To ensure precision and maintain privacy, the explorer updates population metrics using one active filter condition at a time."
    buttons:
      reset: "Reset Filters"
      export: "Export CSV"
    tabs:
      filters: "Filters"
      charts: "Charts"
    visibility:
      title: "Visibility Map"
      all: "All"
      none: "None"
    status:
      gateway: "Data Gateway"
      syncing: "SYNCING"

dataRequest:
  pageTitle: "Data Access & Cohorts | BioPortal"
  backText: "Back to Home"
  explorerCard:
    tag: "Interactive Platform"
    title: "Live Data Explorer"
    description: "Visualize real-time clinical cohorts, demographic distributions, and sample metrics immediately through our zero-latency gateway. Filter and export aggregates on the fly."
    buttonText: "Launch Explorer"
  accessRequirements:
    title: "Access Requirements"
    items:
      - "Institutionally-approved REB/IRB documentation matching the target request."
      - "Executed Data Transfer Agreement (DTA) or institutional alignment contracts."
      - "Compliance with the BioPortal open science attribution framework."
  infrastructure:
    title: "Infrastructure Vetting"
    description: "The infrastructure utilizes our custom-built interactive discovery platform and leverages high-performance computing networks provided by the <strong>Digital Research Alliance of Canada (AllianceCan)</strong> alongside a secure, private compute cluster at the <strong>Lady Davis Institute (LDI)</strong> for downstream processing operations."
    tags:
      - "LDI Private Cluster"
      - "AllianceCan"
  form:
    title: "Request Data Access"
    description: "Inquire about specific cohorts or request structural credentials to access full genomic and clinical datasets."
    fields:
      nameLabel: "Full Name"
      namePlaceholder: "Jane Smith"
      emailLabel: "Institutional Email"
      emailPlaceholder: "jane.smith@mcgill.ca"
      interestLabel: "Research Interest"
      overviewLabel: "Brief Project Overview"
      overviewPlaceholder: "Describe your intended scientific use of BioPortal datasets..."
    buttonText: "Submit Access Inquiry"
`, 'utf8');

fs.writeFileSync(path.join(pagesDir, 'global.yaml'), `id: global

navigation:
  logoAlt: "BioPortal Logo"
  links:
    - label: "Insights"
      href: "/#insights"
    - label: "Our Team"
      href: "/#team"
    - label: "Data Security"
      href: "/privacy"
  ctaButtons:
    primary:
      label: "Join Study"
      href: "/participants"
    secondary:
      label: "Request Data"
      href: "/data"

footer:
  title: "BioPortal"
  titlePunctuation: "."
  subtitle: "Jewish General Hospital & McGill University"
  privacyLinkText: "Privacy Policy & Data Safeguards"
  privacyLinkHref: "/privacy"
  copyright: "© 2026 CIUSSS"
`, 'utf8');

fs.writeFileSync(path.join(pagesDir, 'home.yaml'), `id: home
hero:
  tagline: "JGH McGill Biobank Initiative"
  headline: "Accelerating the Future of"
  gradientText: "Precision Medicine and Omics Research."
  description: "BioPortal is a secure, world-class research infrastructure connecting global scientists with deep-phenotyped, multi-omic patient cohorts. From decoding population proteomics to executing targeted clinical trials, we provide the foundation to drive the next generation of precision healthcare."
trustBar:
  label: "Our Partners"
  partners:
    - name: "Jewish General Hospital"
      logo: "/logos/jgh-logo.png"
      url: "https://www.jgh.ca"
    - name: "Scikoop"
      logo: "/logos/scikoop-logo.png"
      url: "https://scikoop.com"
      scale: "1"
    - name: "CQDM"
      logo: "/logos/cqdm-logo.png"
      url: "https://cqdm.org/"
    - name: "CERC"
      logo: "/logos/cerc-logo.webp"
      url: "https://www.cerc.gc.ca/"
    - name: "Roche"
      logo: "/logos/roche-logo.png"
      url: "https://www.roche.com"
    - name: "Fondation Luci et André Chagnon"
      logo: "/logos/fondation-chagnon-logo.png"
      url: "https://fondationchagnon.org"
    - name: "Fondation Famille Léger"
      logo: "/logos/fondation-leger-logo.svg"
      url: "https://leger.org/"
  acknowledgments: "BioPortal contributors also include the non-profits Mierins Family Foundation, Herbert S. Lang Family, Randi Greenberg, and the Tony & Betty Infilise Family Foundation."

insights:
  eyebrow: "Latest Insights"
  title: "News & Discoveries"
  readMoreText: "Read Insight"
  viewAllButtonText: "View All Insights"
  viewAllLink: "/news"
  fallbackImageAlt: "BioPortal Mark"

teamSection:
  eyebrow: "Leadership & Operations"
  title: "Our Team"
  description: "The minds behind BioPortal. Our dedicated professionals work tirelessly to connect with participants and advance groundbreaking scientific research."
  governingTitle: "Governing Committee"
  recruitmentTitle: "Recruitment & Operations"
  spotlight:
    title: "Institutional Stewardship"
    description: "Our initiative is steered by leading clinical data privacy experts and medical investigators. Hover over any portfolio profile on the left to review their scientific background and governance mandate."
`, 'utf8');

fs.writeFileSync(path.join(pagesDir, 'news.yaml'), `id: news
seoTitle: "News & Discoveries"
tagline: "Latest Insights"
headline: "News & Discoveries"
description: "Stay up to date with the latest advancements, clinical insights, and platform updates from the BioPortal research team."
readMoreText: "Read Insight"
backToNewsText: "Back to Insights"
fallbackImageAlt: "BioPortal Mark"
`, 'utf8');

fs.writeFileSync(path.join(pagesDir, 'participants.yaml'), `id: participants
hero:
  tagline: "Participant Pathway"
  headline: "Your data. Your health."
  gradientText: "Our future."
  description: "Global biobanks currently lack diverse ethnic representation. By safely sharing a small amount of your time and health data, you become a critical part of the solution for Montreal and the world."
steps:
  - title: "Check Eligibility"
    desc: "Fill out the brief secure form on this page to see if you qualify for our current diabetes studies."
  - title: "Transparent Consent"
    desc: "We will carefully explain how your data is de-identified and protected before you share any samples."
  - title: "Free Health Assessment"
    desc: "As a thank you, receive your free, Health Canada-approved diabetic retinopathy screening."
benefit:
  title: "Free Diabetic Eye Assessment"
  desc: "We offer Health Canada-approved diabetic retinopathy imaging at no cost to participants. Within 5 minutes of the scan, your doctor receives a full diagnostic report."

recruitmentData:
  pageTitle: "Join BioPortal | Advancing Diabetes Research"
  whyJoinTitle: "Why Join BioPortal"
  howItWorksTitle: "How Participation Works"
  formCard:
    title: "Request to Join"
    description: "Answer 3 quick questions to see if you qualify for our current Montreal study."
    questions:
      - "Are you 18 years or older?"
      - "Do you have a hospital card with a CIUSSS hospital?"
      - "Have you been diagnosed with diabetes?"
    emailLabel: "Your Email Address"
    emailPlaceholder: "name@email.com"
    buttonText: "Check My Eligibility"
    disclaimer: "By validating, you authorize secure operations contact loops. Read our global open science"
    privacyLinkText: "Privacy Policy"
`, 'utf8');

fs.writeFileSync(path.join(pagesDir, 'privacy.yaml'), `id: privacy
tagline: "Security & Governance"
headline: "Data Protection & Privacy (DRAFT)"
description: "Your privacy is paramount to the BioPortal Research Initiative. We operate under strict clinical, academic, and legal safeguards to keep your information private and safe. BioPortal strictly follows Canadian and Quebec healthcare privacy frameworks. These rules lay out rigorous methods to ensure data security while guiding how we collect information and collaborate with participants."
safeguardsTitle: "Specific Safeguards We Enforce:"
safeguards:
  - title: "De-identification"
    desc: "We remove names, provincial health numbers (RAMQ), and all direct identifying information from data before approved researchers are granted access."
  - title: "Legal Compliance"
    desc: "We adhere fully to Quebec's Law 25, provincial hospital regulations, and Canadian federal privacy frameworks for genomic and clinical data security."
  - title: "Ethics Board Oversight"
    desc: "All storage and distribution protocols are managed under strict protocols vetted by institutional Research Ethics Boards (REBs)."
  - title: "Strict Access Control"
    desc: "Health data is stored on highly secure, siloed computing infrastructure with strict multi-factor authentication tracking who views it."
  - title: "Researcher Code of Conduct"
    desc: "To utilize data, investigators must sign strict legally binding data-use agreements, explicitly promising never to attempt to re-identify any individual participant."
footerBox:
  title: "Inquiries & Frameworks"
  desc: "For deeper insights into our core compliance structures, researchers and participants can reach out to our administration office (need email)."
`, 'utf8');

// ==========================================
// 2. NEWS INSIGHTS
// ==========================================

fs.writeFileSync(path.join(newsDir, 'roche-partnership.md'), `---
title: "CQDM, Roche, The Jewish General Hospital Foundation, and McGill University Fund Research Project of More Than $9.4M on Diabetic Kidney Disease"
date: 2024-04-30
tag: "Funding"
excerpt: "A new $9.4M+ collaborative research initiative aims to identify biomarkers and therapeutic solutions for diabetic kidney disease using genomic, proteomic, and clinical data."
---

Diabetic kidney disease (DKD) is a leading cause of kidney failure, yet current methods for predicting and preventing it remain heavily limited. To combat this, **CQDM, Roche, the Jewish General Hospital Foundation, and McGill University** have partnered to fund a new, large-scale collaborative research project valued at over $9.4 million.

### Quick Summary
Announced on April 30, 2024, this joint initiative will collect and analyze genomic, proteomic, and clinical data from thousands of diabetic patients. Led by Brent Richards at the Lady Davis Institute for Medical Research, the project utilizes the Jewish General Hospital's BioPortal platform to identify how specific genes and proteins influence DKD risk and progression.

The $9.4M+ in funding is made possible by:
* **$2.8M** from the Jewish General Hospital Foundation
* **$2.4M** from Hoffmann-La Roche Limited (Roche)
* **$1.5M** from the Quebec government (MEIE), awarded by CQDM
* **~$2.7M** from other sources, including the Canada Excellence Research Chair (CERC) in Genomic Medicine at McGill University

### The Goal of the Project
The primary objective of this project is to uncover predictive biomarkers and innovative therapeutic treatments for DKD. By utilizing the open-science BioPortal infrastructure, researchers will have access to deeply phenotyped clinical data combined with high-fidelity genomics and proteomics.

> "By encouraging collaborative research as we're doing today, we spur innovation to find new treatments for kidney diseases, for which effective prediction and prevention methods are lacking."
> — *Pierre Fitzgibbon, Minister of Economy, Innovation and Energy*

As part of the initiative, a unique, multi-purpose biobank for diabetes and DKD research will be established at the Jewish General Hospital. By enabling open access to this data, the project is designed to benefit the entire global research and healthcare ecosystem, allowing scientists worldwide to drive precision medicine and create targeted solutions for future clinical applications.

***

*For more details on this announcement, you can read the [official press release on Newswire](https://www.newswire.ca/news-releases/cqdm-roche-the-jewish-general-hospital-foundation-and-mcgill-university-fund-research-project-of-more-than-9-4m-on-diabetic-kidney-disease-832270837.html).*
`, 'utf8');

// ==========================================
// 3. TEAM PROFILES
// ==========================================

const teamData = [
  {
    file: '01-brent-richards.yaml',
    content: `name: "Brent Richards, MD"
role: "Principal Investigator"
image: "/team/Brent_Richards_PrincipalInvestigator.webp"
order: 1
group: "governing"
bio: "Brent Richards is a Professor of Medicine at McGill University and an endocrinologist specializing in genetics and epidemiology. His research identifies the genetic basis of common diseases and translates discoveries into improved care. He has led landmark studies published in Nature, JAMA, and The Lancet, and is a member of the Royal Society of Canada."`
  },
  {
    file: '02-vincent-mooser.yaml',
    content: `name: "Vincent Mooser, MD"
role: "Co-Principal Investigator"
image: "/team/Vincent_Mooser_CoPrincipalInvestigator.webp"
order: 2
group: "governing"
bio: "Vincent Mooser is the Canada Excellence Research Chair in Genomic Medicine and Professor of Human Genetics at McGill. With over 25 years of academic and industry experience, he has led major population studies and biobank initiatives in Switzerland, the UK, and Canada. At McGill, he co-founded BioPortal and advances precision medicine through genomics and AI."`
  },
  {
    file: '03-jonathan-afilalo.yaml',
    content: `name: "Jonathan Afilalo, MD, MSc"
role: "Co-Principal Investigator"
image: "/team/Jonathan_Afilalo_CoPrincipalInvestigator.webp"
order: 3
group: "governing"
bio: "Jonathan Afilalo is a cardiologist and professor at McGill University whose research centers on frailty and cardiovascular aging. He has led international studies and created digital tools such as frailtytool.com to assess frailty and muscle mass. He also founded Canada’s first Geriatric Cardiology fellowship."`
  },
  {
    file: '04-tricia-peters.yaml',
    content: `name: "Tricia Peters, PhD"
role: "Co-Principal Investigator"
image: "/team/Tricia_Peters_CoPrincipalInvestigator.webp"
order: 4
group: "governing"
bio: "Tricia Peters is an Assistant Professor of Medicine at McGill and clinician-scientist at the Lady Davis Institute. Her research focuses on women’s metabolic and reproductive health, especially gestational diabetes and polycystic ovary syndrome. She applies clinical and genetic epidemiology to improve prevention, diagnosis, and patient care."`
  },
  {
    file: '05-guillaume-butler.yaml',
    content: `name: "Guillaume Butler-Laporte, MD"
role: "Co-Principal Investigator"
image: "/team/Guillaume_Butler-Laporte_CoPrincipalInvestigator.webp"
order: 5
group: "governing"
bio: "Guillaume Butler-Laporte is an infectious diseases clinician-scientist and Assistant Professor at McGill, based at the Lady Davis Institute. He uses genetic epidemiology and large biobanks like BioPortal to uncover causal disease pathways. He also played a key role in the COVID-19 Host Genetics Initiative."`
  },
  {
    file: '06-satoshi-yoshiji.yaml',
    content: `name: "Satoshi Yoshiji, MD, PhD"
role: "Co-Principal Investigator"
image: "/team/Satoshi-Yoshiji_CoPrincipalInvestigator.webp"
order: 6
group: "governing"
bio: "Satoshi Yoshiji is an Assistant Professor of Human Genetics at McGill and a board-certified endocrinologist. His research develops BioPortal as a multi-ancestry biobank and applies multi-omics to diabetes, obesity, and cardiometabolic disease. He also holds research appointments at the Broad Institute and Mass General Brigham."`
  },
  {
    file: '07-tobias-erlanger.yaml',
    content: `name: "Tobias Erlanger, PhD"
role: "BIOPORTAL STATISTICIAN"
image: "/team/Tobias_Erlanger_Statistician_Epidemiologist.webp"
order: 7
group: "governing"
bio: "Tobias Erlanger is a statistician and holds a PhD in Epidemiology. Within BioPortal, he is in charge of data production and clinical research, including the design of Trials within Cohorts (TwiCs)."`
  },
  {
    file: '08-david-morrison.yaml',
    content: `name: "David Morrison"
role: "BioPortal Manager"
image: "/team/David_Morrison_-BioPortalManager.webp"
order: 8
group: "governing"
bio: "David Morrison is the Manager of BioPortal at the Lady Davis Institute, where he oversees integration of genomic, clinical, and biospecimen data. He ensures the platform remains a high-quality, accessible resource for researchers worldwide. His expertise supports collaborations that advance precision medicine in diabetes and related disorders."`
  },
  {
    file: '09-mariana-pico.yaml',
    content: `name: "Mariana Pico, BSc"
role: "Clinical Research Coordinator"
image: "/team/Mariana_Pico_ClinicalResearchCoordinator.webp"
order: 9
group: "recruitment"
bio: "Mariana Pico holds a B.Sc. in Biology with a concentration in Health Science from Bishop’s University. At BioPortal, she supports participant recruitment, pre-screening, data management, and outreach for major projects like the COVID-19 Biobank. Passionante about accessible science, she combines rigor and empathy to advance clinical research."`
  },
  {
    file: '10-issam-elkbaiche.yaml',
    content: `name: "Issam El Kbaiche"
role: "Data Engineer"
image: "/team/Issam_ElKbaiche_DataEngineer.webp"
order: 10
group: "recruitment"
bio: "Issam El Kbaiche joined the Richards Lab in 2021 as a Data Engineer after working as a Business Intelligence Consultant for major organizations. He supports research teams with data preparation, cleaning, and analytics. He is passionate about extracting insights from complex datasets to advance medical research."`
  },
  {
    file: '11-darin-adra.yaml',
    content: `name: "Darin Adra, BEng"
role: "Data Manager"
image: "/team/Darin_Adra_DataManager.webp"
order: 11
group: "recruitment"
bio: "Darin Adra joined the Richards Lab in 2018 and has been instrumental in building the BQC19 Biobank and BioPortal. She manages data workflows while continuing her work in clinical research coordination and access management. Her background includes a B.Eng. in Food Science and eight years as an assistant professor."`
  },
  {
    file: '12-mariana-jaime.yaml',
    content: `name: "Mariana Jaime"
role: "Clinical Research Coordinator"
image: "/team/Mariana_Jaime_ClinicalResearchCoordinator-1.webp"
order: 12
group: "recruitment"
bio: "Mariana Jaime is pursuing a B.Sc. in Neuroscience at Concordia University while working as a Clinical Research Coordinator with BioPortal. She contributes to the diabetes biobank through participant recruitment, informed consent, biospecimen handling, and clinical assessments. Dedicated to patient wellbeing, she bridges academic training with hands-on research."`
  },
  {
    file: '13-corinne-pirici.yaml',
    content: `name: "Corinne Pirici"
role: "Clinical Research Coordinator"
image: "/team/Corrine_Pirici_ClinicalResearchCoordinator-scaled.webp"
order: 13
group: "recruitment"
bio: "Corinne Pirici is a Health Science student at Marianopolis College and Clinical Research Coordinator at BioPortal. She supports patient recruitment and clinical data collection, gaining valuable hands-on experience in research. She aspires to a career in medicine."`
  },
  {
    file: '14-mina-nikkhah.yaml',
    content: `name: "Mina Nikkhah, MSc"
role: "Laboratory Manager"
image: "/team/Mina_Nikkhah_LaboratoryManager-scaled.webp"
order: 14
group: "recruitment"
bio: "Mina Nikkhah holds an M.Sc. in Genetics and works as a Laboratory Manager at BioPortal. She specializes in Quality Control and Assurance in biospecimen handling and molecular biology workflows. Her meticulous lab practices ensure reliable results for translational research."`
  },
  {
    file: '15-zaman-afrasiabi.yaml',
    content: `name: "Zaman Afrasiabi, MD, MSc"
role: "Clinical Research Coordinator"
image: "/team/Zaman_Afrasiabi_ClinicalResearchCoordinator.webp"
order: 15
group: "recruitment"
bio: "Zaman Afrasiabi is a physician and clinical researcher with an M.Sc. in Medical Science from the University of Toronto and a mini-MBA in Healthcare Management. At the Lady Davis Institute, she contributes to biobank initiatives in endocrinology, cardiology, and chronic disease. Her multidisciplinary expertise bridges patient care, research, and strategy."`
  },
  {
    file: '16-cesar-peralta.yaml',
    content: `name: "César Peralta"
role: "Clinical Research Coordinator"
image: "/team/Cesar_Peralta_ClinicalResearchCoordinator.webp"
order: 16
group: "recruitment"
bio: "César Peralta is a certified medical technologist with experience in immunology research and clinical laboratories. At BioPortal, he coordinates research at the Lady Davis Institute, drawing on his background as a lead scientist at CellCarta. He is fluent in English, French, and Spanish, and is currently studying AI applications in healthcare."`
  },
  {
    file: '18-jonafe-daguplo.yaml',
    content: `name: "Jonafe Daguplo, RN"
role: "Clinical Research Coordinator"
image: "/team/Jonafe_Daguplo_ClincalResearchCoordinator-scaled.webp"
order: 18
group: "recruitment"
bio: "Jonafe Daguplo is a registered nurse with experience in oncology and rare disease clinical trials. At BioPortal, she manages patient recruitment, informed consent, and biospecimen collection while ensuring accurate documentation. She is committed to patient-centered care and advancing medical research."`
  },
  {
    file: '20-jesse-islam.yaml',
    content: `name: "Jesse Islam, PhD"
role: "Research Associate"
image: "/team//Jesse_Islam_ResearchAssociate.webp"
order: 9
group: "governing"
bio: "Jesse Islam joined the BioPortal team in 2026. His role consists of multi-omic and natural language processing, automation and full-stack web development. https://jesseislam.com/"`
  },
  {
    file: '21-hind-lerhcha.yaml',
    content: `name: "Hind Lerhcha, MD, MSc"
role: "Clinical Research Coordinator"
image: "/team/Hind_Lerhcha_ClinicalResearchCoordinator.webp"
order: 21
group: "recruitment"
bio: "Hind Lerhcha is a physician and clinical researcher with a Doctorate in Medicine from Abulcasis International University of Health Sciences and a Master’s degree in Biomedical Engineering from Polytechnique Montréal. At the Lady Davis Institute, she supports clinical research operations and interdisciplinary collaborations, bringing together scientific rigor, innovation, and patient care."`
  },
  {
    file: '22-shirlyn-cabilin.yaml',
    content: `name: "Shirlyn Cabilin, RN"
role: "Clinical Research Coordinator"
image: "/team/Shirlyn_Cabilin_ClinicalResearchCoordinator.webp"
order: 22
group: "recruitment"
bio: "Shirlyn Cabilin is a Nurse with over 20 years of healthcare experience and currently serves as a Research Coordinator at BioPortal. Her responsibilities include patient recruitment, obtaining informed consent, biospecimen collection, and maintaining accurate research documentation. She is dedicated to providing compassionate, safe, and patient-centred care and is committed to professionalism, teamwork, patient safety, and continuous learning."`
  }
];

teamData.forEach(member => {
  fs.writeFileSync(path.join(teamDir, member.file), member.content, 'utf8');
  console.log(`✓ Synchronized: team/en/${member.file}`);
});

console.log('\nSuccess! All English content data files match the clean architectural patterns.');
