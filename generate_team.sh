#!/bin/bash
mkdir -p src/content/team
echo "🧬 Generating rich team YAMLs..."

cat << 'EOF' > src/content/team/01-brent-richards.yaml
name: "Dr. Brent Richards"
role: "Principal Investigator"
image: "/team/Brent_Richards_PrincipalInvestigator.webp"
order: 1
group: "governing"
bio: "Dr. Richards is a Professor of Medicine at McGill University and an endocrinologist specializing in genetics and epidemiology. His research identifies the genetic basis of common diseases and translates discoveries into improved care. He has led landmark studies published in Nature, JAMA, and The Lancet, and is a member of the Royal Society of Canada."
EOF

cat << 'EOF' > src/content/team/02-vincent-mooser.yaml
name: "Dr. Vincent Mooser"
role: "Co-Principal Investigator"
image: "/team/Vincent_Mooser_CoPrincipalInvestigator.webp"
order: 2
group: "governing"
bio: "Dr. Mooser is the Canada Excellence Research Chair in Genomic Medicine and Professor of Human Genetics at McGill. With over 25 years of academic and industry experience, he has led major population studies and biobank initiatives in Switzerland, the UK, and Canada. At McGill, he co-founded BioPortal and advances precision medicine through genomics and AI."
EOF

cat << 'EOF' > src/content/team/03-jonathan-afilalo.yaml
name: "Dr. Jonathan Afilalo"
role: "Co-Principal Investigator"
image: "/team/Jonathan_Afilalo_CoPrincipalInvestigator.webp"
order: 3
group: "governing"
bio: "Dr. Afilalo is a cardiologist and professor at McGill University whose research centers on frailty and cardiovascular aging. He has led international studies and created digital tools such as frailtytool.com to assess frailty and muscle mass. He also founded Canada’s first Geriatric Cardiology fellowship."
EOF

cat << 'EOF' > src/content/team/04-tricia-peters.yaml
name: "Dr. Tricia Peters"
role: "Co-Principal Investigator"
image: "/team/Tricia_Peters_CoPrincipalInvestigator.webp"
order: 4
group: "governing"
bio: "Dr. Peters is an Assistant Professor of Medicine at McGill and clinician-scientist at the Lady Davis Institute. Her research focuses on women’s metabolic and reproductive health, especially gestational diabetes and polycystic ovary syndrome. She applies clinical and genetic epidemiology to improve prevention, diagnosis, and patient care."
EOF

cat << 'EOF' > src/content/team/05-guillaume-butler.yaml
name: "Dr. Guillaume Butler-Laporte"
role: "Co-Principal Investigator"
image: "/team/Guillaume_Butler-Laporte_CoPrincipalInvestigator.webp"
order: 5
group: "governing"
bio: "Dr. Butler-Laporte is an infectious diseases clinician-scientist and Assistant Professor at McGill, based at the Lady Davis Institute. He uses genetic epidemiology and large biobanks like BioPortal to uncover causal disease pathways. He also played a key role in the COVID-19 Host Genetics Initiative."
EOF

cat << 'EOF' > src/content/team/06-satoshi-yoshiji.yaml
name: "Dr. Satoshi Yoshiji"
role: "Co-Principal Investigator"
image: "/team/Satoshi-Yoshiji_CoPrincipalInvestigator.webp"
order: 6
group: "governing"
bio: "Dr. Yoshiji is an Assistant Professor of Human Genetics at McGill and a board-certified endocrinologist. His research develops BioPortal as a multi-ancestry biobank and applies multi-omics to diabetes, obesity, and cardiometabolic disease. He also holds research appointments at the Broad Institute and Mass General Brigham."
EOF

cat << 'EOF' > src/content/team/07-tobias-erlanger.yaml
name: "Dr. Tobias Erlanger"
role: "Statistician / Epidemiologist"
image: "/team/Tobias_Erlanger_Statistician_Epidemiologist.webp"
order: 7
group: "governing"
bio: "Dr. Tobias Erlanger is a statistician working under the supervision of Dr. Mooser. He holds a PhD in Epidemiology and an MSc in Life Sciences from the University of Basel. His work focuses on identifying candidates and designing observational and interventional studies within cohorts. His research interests include precision drug development using omics data and ethics in research."
EOF

cat << 'EOF' > src/content/team/08-david-morrison.yaml
name: "David Morrison"
role: "BioPortal Manager"
image: "/team/David_Morrison_-BioPortalManager.webp"
order: 8
group: "governing"
bio: "David is the Manager of BioPortal at the Lady Davis Institute, where he oversees integration of genomic, clinical, and biospecimen data. He ensures the platform remains a high-quality, accessible resource for researchers worldwide. His expertise supports collaborations that advance precision medicine in diabetes and related disorders."
EOF

cat << 'EOF' > src/content/team/09-mariana-pico.yaml
name: "Mariana Pico"
role: "Clinical Research Coordinator"
image: "/team/Mariana_Pico_ClinicalResearchCoordinator.webp"
order: 9
group: "recruitment"
bio: "Mariana holds a B.Sc. in Biology with a concentration in Health Science from Bishop’s University. At BioPortal, she supports participant recruitment, pre-screening, data management, and outreach for major projects like the COVID-19 Biobank. Passionate about accessible science, she combines rigor and empathy to advance clinical research."
EOF

cat << 'EOF' > src/content/team/10-issam-elkbaiche.yaml
name: "Issam El Kbaiche"
role: "Data Engineer"
image: "/team/Issam_ElKbaiche_DataEngineer.webp"
order: 10
group: "recruitment"
bio: "Issam joined the Richards Lab in 2021 as a Data Engineer after working as a Business Intelligence Consultant for major organizations. He supports research teams with data preparation, cleaning, and analytics. He is passionate about extracting insights from complex datasets to advance medical research."
EOF

cat << 'EOF' > src/content/team/11-darin-adra.yaml
name: "Darin Adra"
role: "Data Manager"
image: "/team/Darin_Adra_DataManager.webp"
order: 11
group: "recruitment"
bio: "Darin joined the Richards Lab in 2018 and has been instrumental in building the BQC19 Biobank and BioPortal. She manages data workflows while continuing her work in clinical research coordination and access management. Her background includes a B.Eng. in Food Science and eight years as an assistant professor."
EOF

cat << 'EOF' > src/content/team/12-mariana-jaime.yaml
name: "Mariana Jaime"
role: "Clinical Research Coordinator"
image: "/team/Mariana_Jaime_ClinicalResearchCoordinator-1.webp"
order: 12
group: "recruitment"
bio: "Mariana is pursuing a B.Sc. in Neuroscience at Concordia University while working as a Clinical Research Coordinator with BioPortal. She contributes to the diabetes biobank through participant recruitment, informed consent, biospecimen handling, and clinical assessments. Dedicated to patient wellbeing, she bridges academic training with hands-on research."
EOF

cat << 'EOF' > src/content/team/13-corinne-pirici.yaml
name: "Corinne Pirici"
role: "Clinical Research Coordinator"
image: "/team/Corrine_Pirici_ClinicalResearchCoordinator-scaled.webp"
order: 13
group: "recruitment"
bio: "Corinne is a Health Science student at Marianopolis College and Clinical Research Coordinator at BioPortal. She supports patient recruitment and clinical data collection, gaining valuable hands-on experience in research. She aspires to a career in medicine."
EOF

cat << 'EOF' > src/content/team/14-mina-nikkhah.yaml
name: "Mina Nikkhah"
role: "Laboratory Manager"
image: "/team/Mina_Nikkhah_LaboratoryManager-scaled.webp"
order: 14
group: "recruitment"
bio: "Mina holds an M.Sc. in Genetics and works as a Laboratory Manager at BioPortal. She specializes in Quality Control and Assurance in biospecimen handling and molecular biology workflows. Her meticulous lab practices ensure reliable results for translational research."
EOF

cat << 'EOF' > src/content/team/15-zaman-afrasiabi.yaml
name: "Dr. Zaman Afrasiabi"
role: "Clinical Research Coordinator"
image: "/team/Zaman_Afrasiabi_ClinicalResearchCoordinator.webp"
order: 15
group: "recruitment"
bio: "Dr. Afrasiabi is a physician and clinical researcher with an M.Sc. in Medical Science from the University of Toronto and a mini-MBA in Healthcare Management. At the Lady Davis Institute, she contributes to biobank initiatives in endocrinology, cardiology, and chronic disease. Her multidisciplinary expertise bridges patient care, research, and strategy."
EOF

cat << 'EOF' > src/content/team/16-cesar-peralta.yaml
name: "César Peralta"
role: "Clinical Research Coordinator"
image: "/team/Cesar_Peralta_ClinicalResearchCoordinator.webp"
order: 16
group: "recruitment"
bio: "César is a certified medical technologist with experience in immunology research and clinical laboratories. At BioPortal, he coordinates research at the Lady Davis Institute, drawing on his background as a lead scientist at CellCarta. He is fluent in English, French, and Spanish, and is currently studying AI applications in healthcare."
EOF

cat << 'EOF' > src/content/team/17-byanca-liboni.yaml
name: "Byanca De Faria Liboni"
role: "Clinical Research Coordinator"
image: "/team/Byanca_DeFariaLiboni_ClinicalResearchCoordinator.webp"
order: 17
group: "recruitment"
bio: "Byanca is a pediatrician from Brazil who joined BioPortal in 2024 to support research in diabetes and disease management. She oversees patient recruitment and ensures high-quality data entry for clinical studies. Her patient-centered approach combines medical expertise with research dedication."
EOF

cat << 'EOF' > src/content/team/18-jonafe-daguplo.yaml
name: "Jonafe Daguplo"
role: "Clinical Research Coordinator"
image: "/team/Jonafe_Daguplo_ClincalResearchCoordinator-scaled.webp"
order: 18
group: "recruitment"
bio: "Jonafe is a registered nurse with experience in oncology and rare disease clinical trials. At BioPortal, she manages patient recruitment, informed consent, and biospecimen collection while ensuring accurate documentation. She is committed to patient-centered care and advancing medical research."
EOF

cat << 'EOF' > src/content/team/19-nadia-blostein.yaml
name: "Nadia Blostein"
role: "Clinical Research Coordinator"
image: "/team/Nadia_Blostein_ClinicalResearchCoordinator.webp"
order: 19
group: "recruitment"
bio: "Nadia is a medical student at University College Cork with an M.Sc. in Computational Neuroscience from McGill. At BioPortal, she contributes to clinical data collection and chart reviews. Her background in neuroimaging and biomedical engineering enriches her work at the intersection of medicine and data science."
EOF

# Clean up old files without numbers
rm src/content/team/brent-richards.yaml src/content/team/david-morrison.yaml src/content/team/guillaume-butler-laporte.yaml src/content/team/jonathan-afilalo.yaml src/content/team/satoshi-yoshiji.yaml src/content/team/tricia-peters.yaml src/content/team/vincent-mooser.yaml 2>/dev/null

echo "✅ All Team YAMLs generated and synced!"
