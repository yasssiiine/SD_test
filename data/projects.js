export const projects = [
  {
    id: 'sjm-pilote-mdjs',
    name: 'Plateforme de suivi commercial SJM',
    type: 'webapp',
    categoryLabel: 'Suivi terrain & reporting',
    client: 'Master Blow / MDJS',
    stack: 'React, Node.js, OCR',
    status: 'completed',
    imageKey: 'gen',

    description: 'Plateforme web de suivi en temps réel des performances des agents commerciaux.',

    highlight: 'Suivi terrain en temps réel + reporting automatisé',

    problem:
      'Absence de suivi en temps réel des agents, génération de rapports lente et manuelle, aucune visualisation claire des performances.',

    solution:
      'Développement d’une plateforme web permettant aux agents de scanner les tickets de vente avec OCR, avec tableau de bord superviseur, KPI en temps réel et génération automatique des rapports.',

    impact:
      'Meilleure visibilité opérationnelle, réduction du temps de reporting et identification plus rapide des problèmes terrain.',

    features: [
      'Scan de tickets via OCR',
      'Dashboard KPI en temps réel',
      'Suivi des performances agents',
      'Génération automatique de rapports',
      'Interface superviseur',
    ],
  },
  {
    id: 'ratp-web-1',
    name: 'Site Web RATP',
    type: 'web',
    categoryLabel: 'Site institutionnel',
    client: 'RATP',
    stack: 'React, Node.js',
    status: 'completed',
    imageKey: 'ratp',

    description: 'Site web officiel avec gestion de contenu moderne.',

    highlight: 'Site vitrine moderne avec administration simplifiée',

    problem:
      'Le contenu était difficile à mettre à jour et la présentation digitale ne reflétait plus les besoins de communication du client.',

    solution:
      'Refonte du site avec une structure claire, une interface responsive et une gestion de contenu plus simple pour les équipes internes.',

    impact:
      'Publication de contenu facilitée, meilleure cohérence de marque et expérience de consultation plus fluide.',

    features: ['CMS', 'Interface admin', 'Responsive design', 'Structure SEO', 'Pages institutionnelles'],
  },
  {
    id: 'ratp-web-2',
    name: 'Plateforme Web RATP',
    type: 'webapp',
    categoryLabel: 'Plateforme métier',
    client: 'RATP',
    stack: 'React, API REST',
    status: 'completed',
    imageKey: 'ratp',

    description: 'Plateforme web interactive pour la gestion et la consultation de données transport.',

    highlight: 'Interface métier centralisée pour les opérations transport',

    problem:
      'Les informations utiles aux équipes étaient dispersées entre plusieurs outils, ce qui ralentissait la consultation et le suivi.',

    solution:
      'Développement d’une plateforme web avec interface claire, données centralisées et connexion API pour faciliter l’accès aux informations clés.',

    impact:
      'Consultation plus rapide, meilleure organisation des données et support plus simple pour les équipes opérationnelles.',

    features: ['Interface web métier', 'Connexion API REST', 'Tableaux de suivi', 'Recherche de données', 'Accès responsive'],
  },
  {
    id: 'ratp-mobile-1',
    name: 'Application Mobile RATP',
    type: 'mobile',
    categoryLabel: 'Application voyageurs',
    client: 'RATP',
    stack: 'React Native, iOS, Android',
    status: 'completed',
    imageKey: 'ratp',

    description: 'Application mobile pour la consultation des horaires et trajets RATP.',

    highlight: 'Accès mobile aux horaires et trajets',

    problem:
      'Les voyageurs avaient besoin d’un accès mobile simple aux informations de trajet et aux horaires.',

    solution:
      'Création d’une application cross-platform avec parcours de consultation rapide, écrans optimisés mobile et données de transport accessibles.',

    impact:
      'Expérience de consultation plus pratique et accès aux informations de trajet depuis mobile.',

    features: ['Application iOS et Android', 'Consultation horaires', 'Recherche de trajets', 'Interface mobile', 'Données transport'],
  },
  {
    id: 'ratp-mobile-2',
    name: 'App Mobile RATP Pro',
    type: 'mobile',
    categoryLabel: 'Application terrain',
    client: 'RATP',
    stack: 'React Native, Firebase',
    status: 'completed',
    imageKey: 'ratp',

    description: 'Application mobile professionnelle pour accompagner les agents RATP sur le terrain.',

    highlight: 'Outil mobile dédié aux agents terrain',

    problem:
      'Les agents avaient besoin d’un outil mobile adapté à leurs usages terrain et disponible pendant leurs interventions.',

    solution:
      'Développement d’une application mobile pro avec authentification, écrans métier et synchronisation des données via Firebase.',

    impact:
      'Meilleur accès aux informations terrain et support opérationnel plus fluide pour les agents.',

    features: ['Application agents', 'Authentification', 'Synchronisation Firebase', 'Écrans métier', 'Usage terrain'],
  },
  {
    id: 'gensaales-web',
    name: 'Site Web Gensaales',
    type: 'web',
    categoryLabel: 'Site professionnel',
    client: 'Gensaales',
    stack: 'React, Node.js, MongoDB',
    status: 'completed',
    imageKey: 'gen',

    description: 'Site web moderne avec interface administrateur pour présenter les services et gérer les contenus.',

    highlight: 'Présence web professionnelle + gestion de contenu',

    problem:
      'Le client avait besoin d’une présence digitale plus claire et d’un moyen simple de maintenir ses contenus à jour.',

    solution:
      'Création d’un site responsive avec espace administrateur, pages de présentation et architecture adaptée aux évolutions futures.',

    impact:
      'Communication plus professionnelle, gestion interne simplifiée et base technique plus maintenable.',

    features: ['Site responsive', 'Interface administrateur', 'Gestion de contenu', 'Pages services', 'Base MongoDB'],
  },
]
