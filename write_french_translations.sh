#!/bin/bash

echo "Creating French content directories..."
mkdir -p src/content/fr/news
mkdir -p src/content/fr/pages
mkdir -p src/content/fr/team

echo "Generating translated files..."

# ==========================================
# NEWS FILES
# ==========================================
cat << 'EOF' > src/content/fr/news/roche-partnership.md
---
title: "Le CQDM, Roche, la Fondation de l'Hôpital général juif et l'Université McGill financent un projet de recherche de plus de 9,4 M$ sur la néphropathie diabétique"
date: 2024-04-30
tag: "Financement"
excerpt: "Une nouvelle initiative de recherche collaborative de plus de 9,4 M$ vise à identifier des biomarqueurs et des solutions thérapeutiques pour la néphropathie diabétique en utilisant des données génomiques, protéomiques et cliniques."
---

La néphropathie diabétique (ND) est l'une des principales causes d'insuffisance rénale, pourtant les méthodes actuelles pour la prédire et la prévenir restent très limitées. Pour remédier à cette situation, **le CQDM, Roche, la Fondation de l'Hôpital général juif et l'Université McGill** se sont associés pour financer un nouveau projet de recherche collaboratif à grande échelle évalué à plus de 9,4 millions de dollars.

### Bref résumé
Annoncée le 30 avril 2024, cette initiative conjointe permettra de recueillir et d'analyser les données génomiques, protéomiques et cliniques de milliers de patients diabétiques. Dirigé par le Dr Brent Richards de l'Institut de recherche Lady Davis, le projet utilise la plateforme BioPortal de l'Hôpital général juif pour identifier comment des gènes et des protéines spécifiques influencent le risque et la progression de la ND.

Ce financement de plus de 9,4 M$ est rendu possible grâce à :
* **2,8 M$** de la Fondation de l'Hôpital général juif
* **2,4 M$** de Hoffmann-La Roche Limitée (Roche)
* **1,5 M$** du gouvernement du Québec (MEIE), octroyés par le CQDM
* **~2,7 M$** d'autres sources, dont la Chaire d'excellence en recherche du Canada (CERC) en médecine génomique de l'Université McGill

### L'objectif du projet
L'objectif principal de ce projet est de découvrir des biomarqueurs prédictifs et des traitements thérapeutiques innovants pour la ND. En utilisant l'infrastructure de science ouverte BioPortal, les chercheurs auront accès à des données cliniques profondément phénotypées combinées à une génomique et une protéomique de haute fidélité.

> "En encourageant la recherche collaborative comme nous le faisons aujourd'hui, nous stimulons l'innovation pour trouver de nouveaux traitements contre les maladies rénales, pour lesquelles les méthodes de prédiction et de prévention efficaces font défaut."
> — *Pierre Fitzgibbon, ministre de l'Économie, de l'Innovation et de l'Énergie*

Dans le cadre de cette initiative, une biobanque unique et polyvalente pour la recherche sur le diabète et la ND sera établie à l'Hôpital général juif. En permettant un accès ouvert à ces données, le projet est conçu pour bénéficier à l'ensemble de l'écosystème mondial de la recherche et de la santé, permettant aux scientifiques du monde entier de faire progresser la médecine de précision et de créer des solutions ciblées pour les futures applications cliniques.

***

*Pour plus de détails sur cette annonce, vous pouvez lire le [communiqué de presse officiel sur Newswire](https://www.newswire.ca/news-releases/cqdm-roche-the-jewish-general-hospital-foundation-and-mcgill-university-fund-research-project-of-more-than-9-4m-on-diabetic-kidney-disease-832270837.html).*
EOF

# ==========================================
# PAGES FILES
# ==========================================
cat << 'EOF' > src/content/fr/pages/data.yaml
id: "data"
hero:
  tagline: "Science ouverte et analyse de cohortes"
  headline: "Ensembles de données de population BioPortal"
  description: "Accédez à des cohortes de recherche profondément phénotypées, explorez les distributions d'échantillons multi-omiques et demandez du matériel biologique sécurisé pour des enquêtes scientifiques approuvées."
landingMetrics:
  participantsLabel: "Total des participants"
  clinicalVariablesLabel: "Variables cliniques"
  proteomicsLabel: "Profils protéomiques"
  biosamplesLabel: "Échantillons biologiques appariés"
  fallbackValues:
    participants: "6,648"
    clinicalVariables: "158"
    proteomics: "887"
    biosamples: "2,450"

explorer:
  pageTitle: "Explorateur de données interactif | BioPortal"
  backLink: "/data"
  backText: "Retour à la demande de données"
  header:
    totalPatientsLabel: "Total des patients"
  grid:
    noResultsText: "Aucune métrique correspondante"
  sidebar:
    title: "Centre de commande"
    baseline: "Référence (Cohorte totale)"
    searchPlaceholder: "Rechercher des cohortes ou des métriques..."
    tooltip:
      title: "Découverte de cohortes"
      description: "Cliquez directement sur n'importe quel segment de graphique ou attribut de la barre latérale pour isoler une sous-population. Vous pouvez affiner la disposition des graphiques en cliquant sur les étiquettes de légende pour basculer des variables spécifiques."
      warning: "Pour garantir la précision et préserver la confidentialité, l'explorateur met à jour les métriques de population en utilisant une seule condition de filtre active à la fois."
    buttons:
      reset: "Réinitialiser les filtres"
      export: "Exporter en CSV"
    tabs:
      filters: "Filtres"
      charts: "Graphiques"
    visibility:
      title: "Carte de visibilité"
      all: "Tout"
      none: "Aucun"
    status:
      gateway: "Passerelle de données"
      syncing: "SYNCHRONISATION"

dataRequest:
  pageTitle: "Accès aux données et cohortes | BioPortal"
  backText: "Retour à l'accueil"
  explorerCard:
    tag: "Plateforme interactive"
    title: "Explorateur de données en direct"
    description: "Visualisez en temps réel les cohortes cliniques, les distributions démographiques et les métriques d'échantillons grâce à notre passerelle sans latence. Filtrez et exportez des agrégats à la volée."
    buttonText: "Lancer l'explorateur"
  accessRequirements:
    title: "Exigences d'accès"
    items:
      - "Documentation du CER/CÉR approuvée par l'établissement correspondant à la demande ciblée."
      - "Accord de transfert de données (ATD) ou contrats d'alignement institutionnel signés."
      - "Conformité au cadre d'attribution de la science ouverte de BioPortal."
  infrastructure:
    title: "Vérification de l'infrastructure"
    description: "L'infrastructure utilise notre plateforme de découverte interactive sur mesure et s'appuie sur les réseaux informatiques haute performance fournis par l'<strong>Alliance de recherche numérique du Canada (AllianceCan)</strong>, ainsi que sur une grappe de calcul privée et sécurisée à l'<strong>Institut de recherche Lady Davis (IRLD)</strong> pour les opérations de traitement en aval."
    tags:
      - "Grappe privée IRLD"
      - "AllianceCan"
  form:
    title: "Demander l'accès aux données"
    description: "Renseignez-vous sur des cohortes spécifiques ou demandez des identifiants structurels pour accéder à des ensembles de données génomiques et cliniques complets."
    fields:
      nameLabel: "Nom complet"
      namePlaceholder: "Dre Jane Smith"
      emailLabel: "Courriel institutionnel"
      emailPlaceholder: "jane.smith@mcgill.ca"
      interestLabel: "Intérêt de recherche"
      overviewLabel: "Bref aperçu du projet"
      overviewPlaceholder: "Décrivez votre utilisation scientifique prévue des ensembles de données BioPortal..."
    buttonText: "Soumettre la demande d'accès"
EOF

cat << 'EOF' > src/content/fr/pages/global.yaml
id: global

navigation:
  logoAlt: "Logo de BioPortal"
  links:
    - label: "Actualités"
      href: "/#insights"
    - label: "Notre Équipe"
      href: "/#team"
    - label: "Sécurité des données"
      href: "/privacy"
  ctaButtons:
    primary:
      label: "Rejoindre l'étude"
      href: "/participants"
    secondary:
      label: "Demander des données"
      href: "/data"

footer:
  title: "BioPortal"
  titlePunctuation: "."
  subtitle: "Hôpital général juif et Université McGill"
  privacyLinkText: "Politique de confidentialité et mesures de protection des données"
  privacyLinkHref: "/privacy"
  copyright: "© 2026 CIUSSS"
EOF

cat << 'EOF' > src/content/fr/pages/home.yaml
id: home
hero:
  tagline: "Initiative de la biobanque HGJ McGill"
  headline: "Accélérer l'avenir de la"
  gradientText: "médecine de précision et de la recherche omique."
  description: "BioPortal est une infrastructure de recherche sécurisée de classe mondiale reliant les scientifiques du monde entier à des cohortes de patients profondément phénotypées et multi-omiques. Du décodage de la protéomique des populations à l'exécution d'essais cliniques ciblés, nous fournissons les bases pour stimuler la prochaine génération de soins de santé de précision."
trustBar:
  label: "Nos Partenaires"
  partners:
    - name: "Hôpital général juif"
      logo: "/logos/jgh-logo.png"
      url: "https://www.jgh.ca/fr/"
    - name: "Scikoop"
      logo: "/logos/scikoop-logo.png"
      url: "https://scikoop.com"
      scale: "1"
    - name: "CQDM"
      logo: "/logos/cqdm-logo.png"
      url: "https://cqdm.org/fr/"
    - name: "CERC"
      logo: "/logos/cerc-logo.webp"
      url: "https://www.cerc.gc.ca/home-accueil-fra.aspx"
    - name: "Roche"
      logo: "/logos/roche-logo.png"
      url: "https://www.roche.com"
    - name: "Fondation Luci et André Chagnon"
      logo: "/logos/fondation-chagnon-logo.png"
      url: "https://fondationchagnon.org/fr/"
    - name: "Fondation Famille Léger"
      logo: "/logos/fondation-leger-logo.svg"
      url: "https://leger.org/fr/"
  acknowledgments: "Les contributeurs de BioPortal comprennent également les organismes à but non lucratif Fondation de la famille Mierins, la famille Herbert S. Lang, Randi Greenberg et la Fondation de la famille Tony & Betty Infilise."

insights:
  eyebrow: "Dernières actualités"
  title: "Nouvelles et découvertes"
  readMoreText: "Lire l'article"
  viewAllButtonText: "Voir toutes les actualités"
  viewAllLink: "/news"
  fallbackImageAlt: "Marque BioPortal"

teamSection:
  eyebrow: "Direction et Opérations"
  title: "Notre Équipe"
  description: "Les cerveaux derrière BioPortal. Nos professionnels dévoués travaillent sans relâche pour établir des liens avec les participants et faire progresser la recherche scientifique de pointe."
  governingTitle: "Comité directeur"
  recruitmentTitle: "Recrutement et Opérations"
  spotlight:
    title: "Intendance institutionnelle"
    description: "Notre initiative est dirigée par d'éminents experts en confidentialité des données cliniques et des chercheurs médicaux. Survolez n'importe quel profil de portfolio à gauche pour examiner leur parcours scientifique et leur mandat de gouvernance."
EOF

cat << 'EOF' > src/content/fr/pages/news.yaml
id: news
seoTitle: "Nouvelles et découvertes"
tagline: "Dernières actualités"
headline: "Nouvelles et découvertes"
description: "Restez au courant des dernières avancées, des découvertes cliniques et des mises à jour de la plateforme de l'équipe de recherche de BioPortal."

readMoreText: "Lire l'article"
backToNewsText: "Retour aux actualités"
fallbackImageAlt: "Marque BioPortal"
EOF

cat << 'EOF' > src/content/fr/pages/participants.yaml
id: participants
hero:
  tagline: "Parcours du participant"
  headline: "Vos données. Votre santé."
  gradientText: "Notre avenir."
  description: "Les biobanques mondiales manquent actuellement de représentation ethnique diversifiée. En partageant en toute sécurité un peu de votre temps et de vos données de santé, vous devenez une partie essentielle de la solution pour Montréal et pour le monde."
steps:
  - title: "Vérifiez votre admissibilité"
    desc: "Remplissez le bref formulaire sécurisé sur cette page pour voir si vous êtes admissible à nos études actuelles sur le diabète."
  - title: "Consentement transparent"
    desc: "Nous vous expliquerons en détail comment vos données sont dépersonnalisées et protégées avant que vous ne partagiez des échantillons."
  - title: "Évaluation de santé gratuite"
    desc: "En guise de remerciement, recevez votre dépistage de la rétinopathie diabétique gratuit et approuvé par Santé Canada."
benefit:
  title: "Évaluation oculaire gratuite pour diabétiques"
  desc: "Nous offrons l'imagerie de la rétinopathie diabétique approuvée par Santé Canada sans frais pour les participants. Dans les 5 minutes suivant l'examen, votre médecin reçoit un rapport diagnostique complet."

recruitmentData:
  pageTitle: "Rejoindre BioPortal | Faire progresser la recherche sur le diabète"
  whyJoinTitle: "Pourquoi rejoindre BioPortal"
  howItWorksTitle: "Comment fonctionne la participation"
  formCard:
    title: "Demande d'inscription"
    description: "Répondez à 3 questions rapides pour voir si vous êtes admissible à notre étude actuelle à Montréal."
    questions:
      - "Avez-vous 18 ans ou plus ?"
      - "Avez-vous une carte d'hôpital d'un hôpital du CIUSSS ?"
      - "Avez-vous été diagnostiqué avec le diabète ?"
    emailLabel: "Votre adresse courriel"
    emailPlaceholder: "nom@courriel.com"
    buttonText: "Vérifier mon admissibilité"
    disclaimer: "En validant, vous autorisez les boucles de contact d'opérations sécurisées. Lisez notre"
    privacyLinkText: "Politique de confidentialité"
EOF

cat << 'EOF' > src/content/fr/pages/privacy.yaml
id: privacy
tagline: "Sécurité et Gouvernance"
headline: "Protection des données et confidentialité (ÉBAUCHE)"
description: "Votre confidentialité est primordiale pour l'Initiative de recherche BioPortal. Nous opérons sous des mesures de protection cliniques, académiques et légales strictes pour garder vos informations privées et en sécurité. BioPortal suit rigoureusement les cadres canadiens et québécois de confidentialité des soins de santé. Ces règles établissent des méthodes rigoureuses pour assurer la sécurité des données tout en guidant la façon dont nous recueillons des informations et collaborons avec les participants."
safeguardsTitle: "Mesures de protection spécifiques que nous appliquons :"
safeguards:
  - title: "Dépersonnalisation"
    desc: "Nous retirons les noms, les numéros d'assurance maladie (RAMQ) et toutes les informations d'identification directe des données avant que les chercheurs approuvés n'y aient accès."
  - title: "Conformité légale"
    desc: "Nous adhérons pleinement à la Loi 25 du Québec, aux règlements des hôpitaux provinciaux et aux cadres de confidentialité fédéraux canadiens pour la sécurité des données génomiques et cliniques."
  - title: "Supervision par un comité d'éthique"
    desc: "Tous les protocoles de stockage et de distribution sont gérés selon des protocoles stricts approuvés par les Comités d'éthique de la recherche (CÉR) institutionnels."
  - title: "Contrôle d'accès strict"
    desc: "Les données de santé sont stockées sur une infrastructure informatique hautement sécurisée et cloisonnée avec une authentification multifactorielle stricte pour suivre qui les consulte."
  - title: "Code de conduite des chercheurs"
    desc: "Pour utiliser les données, les chercheurs doivent signer des accords d'utilisation des données stricts et juridiquement contraignants, promettant explicitement de ne jamais tenter de réidentifier un participant individuel."
footerBox:
  title: "Demandes de renseignements et cadres"
  desc: "Pour un aperçu plus approfondi de nos structures de conformité de base, les chercheurs et les participants peuvent contacter notre bureau d'administration (adresse courriel à venir)."
EOF

# ==========================================
# TEAM FILES
# ==========================================
cat << 'EOF' > src/content/fr/team/01-brent-richards.yaml
name: "Dr Brent Richards"
role: "Chercheur principal"
image: "/team/Brent_Richards_PrincipalInvestigator.webp"
order: 1
group: "governing"
bio: "Le Dr Richards est professeur de médecine à l'Université McGill et endocrinologue spécialisé en génétique et en épidémiologie. Ses recherches identifient les bases génétiques des maladies courantes et traduisent ces découvertes en une amélioration des soins. Il a dirigé des études marquantes publiées dans Nature, JAMA et The Lancet, et est membre de la Société royale du Canada."
EOF

cat << 'EOF' > src/content/fr/team/02-vincent-mooser.yaml
name: "Dr Vincent Mooser"
role: "Chercheur principal conjoint"
image: "/team/Vincent_Mooser_CoPrincipalInvestigator.webp"
order: 2
group: "governing"
bio: "Le Dr Mooser est titulaire de la Chaire d'excellence en recherche du Canada en médecine génomique et professeur de génétique humaine à McGill. Avec plus de 25 ans d'expérience dans les milieux universitaires et industriels, il a dirigé d'importantes études de population et des initiatives de biobanques en Suisse, au Royaume-Uni et au Canada. À McGill, il a cofondé BioPortal et fait progresser la médecine de précision grâce à la génomique et à l'IA."
EOF

cat << 'EOF' > src/content/fr/team/03-jonathan-afilalo.yaml
name: "Dr Jonathan Afilalo"
role: "Chercheur principal conjoint"
image: "/team/Jonathan_Afilalo_CoPrincipalInvestigator.webp"
order: 3
group: "governing"
bio: "Le Dr Afilalo est cardiologue et professeur à l'Université McGill, dont les recherches portent sur la fragilité et le vieillissement cardiovasculaire. Il a dirigé des études internationales et créé des outils numériques tels que frailtytool.com pour évaluer la fragilité et la masse musculaire. Il a également fondé le premier programme de fellowship en cardiologie gériatrique au Canada."
EOF

cat << 'EOF' > src/content/fr/team/04-tricia-peters.yaml
name: "Dre Tricia Peters"
role: "Chercheure principale conjointe"
image: "/team/Tricia_Peters_CoPrincipalInvestigator.webp"
order: 4
group: "governing"
bio: "La Dre Peters est professeure adjointe de médecine à McGill et clinicienne-chercheuse à l'Institut de recherche Lady Davis. Ses recherches portent sur la santé métabolique et reproductive des femmes, en particulier le diabète gestationnel et le syndrome des ovaires polykystiques. Elle applique l'épidémiologie clinique et génétique pour améliorer la prévention, le diagnostic et les soins aux patientes."
EOF

cat << 'EOF' > src/content/fr/team/05-guillaume-butler.yaml
name: "Dr Guillaume Butler-Laporte"
role: "Chercheur principal conjoint"
image: "/team/Guillaume_Butler-Laporte_CoPrincipalInvestigator.webp"
order: 5
group: "governing"
bio: "Le Dr Butler-Laporte est clinicien-chercheur en maladies infectieuses et professeur adjoint à McGill, basé à l'Institut de recherche Lady Davis. Il utilise l'épidémiologie génétique et de grandes biobanques comme BioPortal pour découvrir les voies pathologiques causales. Il a également joué un rôle clé dans l'Initiative sur la génétique de l'hôte COVID-19."
EOF

cat << 'EOF' > src/content/fr/team/06-satoshi-yoshiji.yaml
name: "Dr Satoshi Yoshiji"
role: "Chercheur principal conjoint"
image: "/team/Satoshi-Yoshiji_CoPrincipalInvestigator.webp"
order: 6
group: "governing"
bio: "Le Dr Yoshiji est professeur adjoint de génétique humaine à McGill et endocrinologue certifié. Ses recherches visent à développer BioPortal en tant que biobanque multi-ancestrale et appliquent la multi-omique au diabète, à l'obésité et aux maladies cardiométaboliques. Il détient également des postes de recherche au Broad Institute et au Mass General Brigham."
EOF

cat << 'EOF' > src/content/fr/team/07-tobias-erlanger.yaml
name: "Dr Tobias Erlanger"
role: "Statisticien BioPortal"
image: "/team/Tobias_Erlanger_Statistician_Epidemiologist.webp"
order: 7
group: "governing"
bio: "Le Dr Tobias Erlanger est statisticien et détient un doctorat en épidémiologie. Au sein de BioPortal, il est responsable de la production de données et de la recherche clinique, y compris la conception d'essais au sein de cohortes (TwiCs)."
EOF

cat << 'EOF' > src/content/fr/team/08-david-morrison.yaml
name: "David Morrison"
role: "Gestionnaire BioPortal"
image: "/team/David_Morrison_-BioPortalManager.webp"
order: 8
group: "governing"
bio: "David est le gestionnaire de BioPortal à l'Institut de recherche Lady Davis, où il supervise l'intégration des données génomiques, cliniques et des échantillons biologiques. Il s'assure que la plateforme demeure une ressource accessible et de haute qualité pour les chercheurs du monde entier. Son expertise soutient les collaborations qui font progresser la médecine de précision dans le diabète et les troubles connexes."
EOF

cat << 'EOF' > src/content/fr/team/09-mariana-pico.yaml
name: "Mariana Pico"
role: "Coordonnatrice de recherche clinique"
image: "/team/Mariana_Pico_ClinicalResearchCoordinator.webp"
order: 9
group: "recruitment"
bio: "Mariana est titulaire d'un baccalauréat en biologie avec spécialisation en sciences de la santé de l'Université Bishop's. Chez BioPortal, elle soutient le recrutement des participants, le pré-dépistage, la gestion des données et la sensibilisation patients, elle fait le pont entre la formation universitaire et la recherche pratique."
EOF

cat << 'EOF' > src/content/fr/team/13-corinne-pirici.yaml
name: "Corinne Pirici"
role: "Coordonnatrice de recherche clinique"
image: "/team/Corrine_Pirici_ClinicalResearchCoordinator-scaled.webp"
order: 13
group: "recruitment"
bio: "Corinne est étudiante en sciences de la santé au Collège Marianopolis et coordonnatrice de recherche clinique chez BioPortal. Elle soutient le recrutement des patients et la collecte de données cliniques, acquérant une précieuse expérience pratique de la recherche. Elle aspire à une carrière en médecine."
EOF

cat << 'EOF' > src/content/fr/team/14-mina-nikkhah.yaml
name: "Mina Nikkhah"
role: "Gestionnaire de laboratoire"
image: "/team/Mina_Nikkhah_LaboratoryManager-scaled.webp"
order: 14
group: "recruitment"
bio: "Mina détient une maîtrise en génétique et travaille comme gestionnaire de laboratoire chez BioPortal. Elle se spécialise dans le contrôle et l'assurance qualité pour la manipulation des échantillons biologiques et les flux de travail en biologie moléculaire. Ses pratiques de laboratoire méticuleuses garantissent des résultats fiables pour la recherche translationnelle."
EOF

cat << 'EOF' > src/content/fr/team/15-zaman-afrasiabi.yaml
name: "Dre Zaman Afrasiabi"
role: "Coordonnatrice de recherche clinique"
image: "/team/Zaman_Afrasiabi_ClinicalResearchCoordinator.webp"
order: 15
group: "recruitment"
bio: "La Dre Afrasiabi est médecin et chercheuse clinique avec une maîtrise en sciences médicales de l'Université de Toronto et un mini-MBA en gestion des soins de santé. À l'Institut de recherche Lady Davis, elle contribue aux initiatives de biobanques en endocrinologie, cardiologie et maladies chroniques. Son expertise multidisciplinaire fait le lien entre les soins aux patients, la recherche et la stratégie."
EOF

cat << 'EOF' > src/content/fr/team/16-cesar-peralta.yaml
name: "César Peralta"
role: "Coordonnateur de recherche clinique"
image: "/team/Cesar_Peralta_ClinicalResearchCoordinator.webp"
order: 16
group: "recruitment"
bio: "César est un technologue médical certifié avec de l'expérience en recherche en immunologie et en laboratoires cliniques. Chez BioPortal, il coordonne la recherche à l'Institut de recherche Lady Davis, s'appuyant sur son expérience en tant que scientifique principal chez CellCarta. Il parle couramment l'anglais, le français et l'espagnol, et étudie actuellement les applications de l'IA dans les soins de santé."
EOF

cat << 'EOF' > src/content/fr/team/18-jonafe-daguplo.yaml
name: "Jonafe Daguplo"
role: "Coordonnatrice de recherche clinique"
image: "/team/Jonafe_Daguplo_ClincalResearchCoordinator-scaled.webp"
order: 18
group: "recruitment"
bio: "Jonafe est une infirmière autorisée avec de l'expérience dans les essais cliniques en oncologie et en maladies rares. Chez BioPortal, elle gère le recrutement des patients, le consentement éclairé et la collecte d'échantillons biologiques tout en assurant une documentation précise. Elle s'engage à offrir des soins centrés sur le patient et à faire progresser la recherche médicale."
EOF

cat << 'EOF' > src/content/fr/team/20-jesse-islam.yaml
name: "Jesse Islam, Ph.D."
role: "Chercheur associé"
image: "/team//Jesse_Islam_ResearchAssociate.webp"
order: 9
group: "governing"
bio: "Jesse Islam s'est joint à l'équipe de Bioportal en 2026. Son rôle consiste en l'analyse multi-omique et le traitement du langage naturel, l'automatisation et le développement web full-stack. https://jesseislam.com/"
EOF

cat << 'EOF' > src/content/f21-hind-lerhcha.yaml
name: "Dre Hind Lerhcha"
role: "Coordonnatrice de recherche clinique"
image: "/team/Hind_Lerhcha_ClinicalResearchCoordinator.webp"
order: 21
group: "recruitment"
bio: "La Dre Lerhcha est médecin et chercheuse clinique avec un doctorat en médecine de l'Université internationale des sciences de la santé Abulcasis et une maîtrise en génie biomédical de Polytechnique Montréal. À l'Institut de recherche Lady Davis, elle soutient les opérations de recherche clinique et les collaboranvers le professionnalisme, le travail d'équipe et l'apprentissage continu."
EOF

echo "Done! French content has been generated successfully."
