const fs = require('fs');
const path = require('path');

const teamDir = path.join(__dirname, 'src', 'content', 'team', 'fr');

// Ensure the target directory exists
if (!fs.existsSync(teamDir)) {
  fs.mkdirSync(teamDir, { recursive: true });
}

const teamMembers = [
  {
    filename: "01-brent-richards.yaml",
    content: `name: "Brent Richards, MD"
role: "Chercheur principal"
image: "/team/Brent_Richards_PrincipalInvestigator.webp"
order: 1
group: "governing"
bio: "Brent Richards est professeur de médecine à l'Université McGill et endocrinologue spécialisé en génétique et en épidémiologie. Ses recherches identifient les bases génétiques des maladies courantes et traduisent ces découvertes en une amélioration des soins. Il a dirigé des études marquantes publiées dans Nature, JAMA et The Lancet, et est membre de la Société royale du Canada."`
  },
  {
    filename: "02-vincent-mooser.yaml",
    content: `name: "Vincent Mooser, MD"
role: "Chercheur principal conjoint"
image: "/team/Vincent_Mooser_CoPrincipalInvestigator.webp"
order: 2
group: "governing"
bio: "Vincent Mooser est titulaire de la Chaire d'excellence en recherche du Canada en médecine génomique et professeur de génétique humaine à McGill. Avec plus de 25 ans d'expérience dans les milieux universitaires et industriels, il a dirigé d'importantes études de population et des initiatives de biobanques en Suisse, au Royaume-Uni et au Canada. À McGill, il a cofondé BioPortal et fait progresser la médecine de précision grâce à la génomique et à l'IA."`
  },
  {
    filename: "03-jonathan-afilalo.yaml",
    content: `name: "Jonathan Afilalo, MD, MSc"
role: "Chercheur principal conjoint"
image: "/team/Jonathan_Afilalo_CoPrincipalInvestigator.webp"
order: 3
group: "governing"
bio: "Jonathan Afilalo est cardiologue et professeur à l'Université McGill. Ses recherches portent sur la fragilité et le vieillissement cardiovasculaire. Il a dirigé des études internationales et créé des outils numériques tels que frailtytool.com pour évaluer la fragilité et la masse musculaire. Il a également fondé le premier programme de fellowship en cardiologie gériatrique au Canada."`
  },
  {
    filename: "04-tricia-peters.yaml",
    content: `name: "Tricia Peters, PhD"
role: "Chercheure principale conjointe"
image: "/team/Tricia_Peters_CoPrincipalInvestigator.webp"
order: 4
group: "governing"
bio: "Tricia Peters est professeure adjointe de médecine à McGill et clinicienne-chercheuse à l'Institut de recherche Lady Davis. Ses recherches portent sur la santé métabolique et reproductive des femmes, en particulier le diabète gestationnel et le syndrome des ovaires polykystiques. Elle applique l'épidémiologie clinique et génétique pour améliorer la prévention, le diagnostic et les soins aux patientes."`
  },
  {
    filename: "05-guillaume-butler.yaml",
    content: `name: "Guillaume Butler-Laporte, MD"
role: "Chercheur principal conjoint"
image: "/team/Guillaume_Butler-Laporte_CoPrincipalInvestigator.webp"
order: 5
group: "governing"
bio: "Guillaume Butler-Laporte est clinicien-chercheur en maladies infectieuses et professeur adjoint à McGill, basé à l'Institut de recherche Lady Davis. Il utilise l'épidémiologie génétique et de grandes biobanques comme BioPortal pour découvrir les voies pathologiques causales. Il a également joué un rôle clé dans l'Initiative sur la génétique de l'hôte COVID-19."`
  },
  {
    filename: "06-satoshi-yoshiji.yaml",
    content: `name: "Satoshi Yoshiji, MD, PhD"
role: "Chercheur principal conjoint"
image: "/team/Satoshi-Yoshiji_CoPrincipalInvestigator.webp"
order: 6
group: "governing"
bio: "Satoshi Yoshiji est professeur adjoint de génétique humaine à McGill et endocrinologue certifié. Ses recherches visent à développer BioPortal en tant que biobanque multi-ancestrale et appliquent la multi-omique au diabète, à l'obésité et aux maladies cardiométaboliques. Il détient également des postes de recherche au Broad Institute et au Mass General Brigham."`
  },
  {
    filename: "07-tobias-erlanger.yaml",
    content: `name: "Tobias Erlanger, PhD"
role: "Statisticien BioPortal"
image: "/team/Tobias_Erlanger_Statistician_Epidemiologist.webp"
order: 7
group: "governing"
bio: "Tobias Erlanger est statisticien et détient un doctorat en épidémiologie. Au sein de BioPortal, il est responsable de la production de données et de la recherche clinique, y compris la conception d'essais au sein de cohortes (TwiCs)."`
  },
  {
    filename: "08-david-morrison.yaml",
    content: `name: "David Morrison"
role: "Gestionnaire BioPortal"
image: "/team/David_Morrison_-BioPortalManager.webp"
order: 8
group: "governing"
bio: "David Morrison est le gestionnaire de BioPortal à l'Institut de recherche Lady Davis, où il supervise l'intégration des données génomiques, cliniques et des échantillons biologiques. Il s'assure que la plateforme demeure une ressource accessible et de haute qualité pour les chercheurs du monde entier. Son expertise soutient les collaborations qui font progresser la médecine de précision dans le diabète et les troubles connexes."`
  },
  {
    filename: "09-mariana-pico.yaml",
    content: `name: "Mariana Pico, BSc"
role: "Coordonnatrice de recherche clinique"
image: "/team/Mariana_Pico_ClinicalResearchCoordinator.webp"
order: 9
group: "recruitment"
bio: "Mariana Pico est titulaire d'un baccalauréat en biologie avec spécialisation en sciences de la santé de l'Université Bishop's. Chez BioPortal, elle soutient le recrutement des participants, le pré-dépistage, la gestion des données et la sensibilisation pour des projets majeurs comme la Biobanque COVID-19. Passionnée par la science accessible, elle allie rigueur et empathie pour faire avancer la recherche clinique."`
  },
  {
    filename: "10-issam-elkbaiche.yaml",
    content: `name: "Issam El Kbaiche"
role: "Ingénieur de données"
image: "/team/Issam_ElKbaiche_DataEngineer.webp"
order: 10
group: "recruitment"
bio: "Issam El Kbaiche s'est joint au laboratoire Richards en 2021 en tant qu'ingénieur de données après avoir travaillé comme consultant en intelligence d'affaires pour de grandes organisations. Il soutient les équipes de recherche dans la préparation, le nettoyage et l'analyse des données. Il est passionné par l'extraction d'informations à partir d'ensembles de données complexes pour faire avancer la recherche médicale."`
  },
  {
    filename: "11-darin-adra.yaml",
    content: `name: "Darin Adra, BEng"
role: "Gestionnaire de données"
image: "/team/Darin_Adra_DataManager.webp"
order: 11
group: "recruitment"
bio: "Darin Adra s'est jointe au laboratoire Richards en 2018 et a joué un rôle déterminant dans la création de la biobanque BQC19 et de BioPortal. Elle gère les flux de données tout en poursuivant son travail de coordination de la recherche clinique et de gestion des accès. Son parcours comprend un baccalauréat en sciences alimentaires et dix ans d'expérience en tant que professeure adjointe."`
  },
  {
    filename: "12-mariana-jaime.yaml",
    content: `name: "Mariana Jaime"
role: "Coordonnatrice de recherche clinique"
image: "/team/Mariana_Jaime_ClinicalResearchCoordinator-1.webp"
order: 12
group: "recruitment"
bio: "Mariana Jaime poursuit un baccalauréat en neurosciences à l'Université Concordia tout en travaillant comme coordonnatrice de recherche clinique chez BioPortal. Elle contribue à la biobanque sur le diabète par le recrutement de participants, le recueil du consentement éclairé, la manipulation d'échantillons biologiques et les évaluations cliniques. Dévouée au bien-être des patients, elle fait le pont entre la formation universitaire et la recherche pratique."`
  },
  {
    filename: "13-corinne-pirici.yaml",
    content: `name: "Corinne Pirici"
role: "Coordonnatrice de recherche clinique"
image: "/team/Corrine_Pirici_ClinicalResearchCoordinator-scaled.webp"
order: 13
group: "recruitment"
bio: "Corinne Pirici est étudiante en sciences de la santé au Collège Marianopolis et coordonnatrice de recherche clinique chez BioPortal. Elle soutient le recrutement des patients et la collecte de données cliniques, acquérant ainsi une précieuse expérience pratique de la recherche. Elle aspire à une carrière en médecine."`
  },
  {
    filename: "14-mina-nikkhah.yaml",
    content: `name: "Mina Nikkhah, MSc"
role: "Gestionnaire de laboratoire"
image: "/team/Mina_Nikkhah_LaboratoryManager-scaled.webp"
order: 14
group: "recruitment"
bio: "Mina Nikkhah détient une maîtrise en génétique et travaille comme gestionnaire de laboratoire chez BioPortal. Elle se spécialise dans le contrôle et l'assurance qualité pour la manipulation des échantillons biologiques et les flux de travail en biologie moléculaire. Ses pratiques de laboratoire méticuleuses garantissent des résultats fiables pour la recherche translationnelle."`
  },
  {
    filename: "15-zaman-afrasiabi.yaml",
    content: `name: "Zaman Afrasiabi, MD, MSc"
role: "Coordonnatrice de recherche clinique"
image: "/team/Zaman_Afrasiabi_ClinicalResearchCoordinator.webp"
order: 15
group: "recruitment"
bio: "Zaman Afrasiabi est médecin et chercheuse clinique avec une maîtrise en sciences médicales de l'Université de Toronto et un mini-MBA en gestion des soins de santé. À l'Institut de recherche Lady Davis, elle contribue aux initiatives de biobanques en endocrinologie, cardiologie et maladies chroniques. Son expertise multidisciplinaire fait le pont entre les soins aux patients, la recherche et la stratégie."`
  },
  {
    filename: "16-cesar-peralta.yaml",
    content: `name: "César Peralta"
role: "Coordonnateur de recherche clinique"
image: "/team/Cesar_Peralta_ClinicalResearchCoordinator.webp"
order: 16
group: "recruitment"
bio: "César Peralta est un technologue médical certifié avec de l'expérience en recherche en immunologie et en laboratoires cliniques. Chez BioPortal, il coordonne la recherche à l'Institut de recherche Lady Davis, s'appuyant sur son expérience en tant que scientifique principal chez CellCarta. Il parle couramment l'anglais, le français et l'espagnol, et étudie actuellement les applications de l'IA dans les soins de santé."`
  },
  {
    filename: "18-jonafe-daguplo.yaml",
    content: `name: "Jonafe Daguplo, RN"
role: "Coordonnatrice de recherche clinique"
image: "/team/Jonafe_Daguplo_ClincalResearchCoordinator-scaled.webp"
order: 18
group: "recruitment"
bio: "Jonafe Daguplo est infirmière autorisée et possède de l'expérience dans les essais cliniques en oncologie et en maladies rares. Chez BioPortal, elle gère le recrutement des patients, le consentement éclairé et la collecte d'échantillons biologiques tout en assurant une documentation précise. Elle s'engage à offrir des soins centrés sur le patient et à faire progresser la recherche médicale."`
  },
  {
    filename: "20-jesse-islam.yaml",
    content: `name: "Jesse Islam, PhD"
role: "Chercheur associé"
image: "/team//Jesse_Islam_ResearchAssociate.webp"
order: 9
group: "governing"
bio: "Jesse Islam s'est joint à l'équipe de BioPortal en 2026. Son rôle consiste en l'analyse multi-omique et le traitement du langage naturel, l'automatisation et le développement web full-stack. https://jesseislam.com/"`
  },
  {
    filename: "21-hind-lerhcha.yaml",
    content: `name: "Hind Lerhcha, MD, MSc"
role: "Coordonnatrice de recherche clinique"
image: "/team/Hind_Lerhcha_ClinicalResearchCoordinator.webp"
order: 21
group: "recruitment"
bio: "Hind Lerhcha est médecin et chercheuse clinique avec un doctorat en médecine de l'Université internationale des sciences de la santé Abulcasis et une maîtrise en génie biomédical de Polytechnique Montréal. À l'Institut de recherche Lady Davis, elle soutient les opérations de recherche clinique et les collaborations interdisciplinaires, alliant rigueur scientifique, innovation et soins aux patients."`
  },
  {
    filename: "22-shirlyn-cabilin.yaml",
    content: `name: "Shirlyn Cabilin, RN"
role: "Coordonnatrice de recherche clinique"
image: "/team/Shirlyn_Cabilin_ClinicalResearchCoordinator.webp"
order: 22
group: "recruitment"
bio: "Shirlyn Cabilin est infirmière avec plus de 20 ans d'expérience dans le domaine de la santé et travaille actuellement comme coordonnatrice de recherche chez BioPortal. Ses responsabilités incluent le recrutement des patients, l'obtention du consentement éclairé, la collecte d'échantillons biologiques et le maintien d'une documentation de recherche précise. Elle est dévouée à fournir des soins compatissants, sécuritaires et centrés sur le patient, et s'engage envers le professionnalisme, le travail d'équipe et l'apprentissage continu."`
  }
];

console.log('Writing perfect French team YAML files...');

teamMembers.forEach(member => {
  const filePath = path.join(teamDir, member.filename);
  fs.writeFileSync(filePath, member.content, 'utf8');
  console.log(`✓ Generated: ${member.filename}`);
});

console.log('Done! All French apostrophes and names are successfully mapped.');
