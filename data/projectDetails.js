/**
 * Project detail data - extended info for project detail pages
 * Keyed by project id (matches projects.js)
 */
const webBanner = 'linear-gradient(135deg, rgba(42,166,255,.35), rgba(255,255,255,.06))'
const mobileBanner = 'linear-gradient(135deg, rgba(156,39,176,.3), rgba(255,255,255,.06))'

export const projectDetails = {
  'ratp-web-1': {
    title: 'Site Web RATP',
    banner: webBanner,
    client: 'RATP',
    tech: 'React, Node.js',
    objectives: 'Site web officiel avec système de gestion de contenu moderne',
    results: [
      { label: 'Performance', value: '+35%' },
      { label: 'SEO', value: '+22%' },
      { label: 'Trafic', value: '+18%' },
    ],
    beforeAfter: true,
    testimonial: {
      author: 'Équipe RATP',
      company: 'RATP',
      text: 'SmartDex a livré un site performant et facile à gérer pour notre équipe.',
    },
  },
  'ratp-web-2': {
    title: 'Plateforme Web RATP',
    banner: webBanner,
    client: 'RATP',
    tech: 'React, API REST',
    objectives: 'Plateforme web interactive pour la gestion des transports',
    results: [
      { label: 'Utilisateurs', value: '+40%' },
      { label: 'Temps réponse', value: '< 500ms' },
      { label: 'Disponibilité', value: '99.9%' },
    ],
    beforeAfter: true,
    testimonial: {
      author: 'Équipe RATP',
      company: 'RATP',
      text: 'Une plateforme robuste qui répond parfaitement à nos besoins métier.',
    },
  },
  'ratp-mobile-1': {
    title: 'Application Mobile RATP',
    banner: mobileBanner,
    client: 'RATP',
    tech: 'React Native, iOS, Android',
    objectives: 'Application mobile pour la consultation des horaires et trajets',
    results: [
      { label: 'Téléchargements', value: '50k+' },
      { label: 'Note', value: '4.8/5' },
      { label: 'Rétention', value: '+32%' },
    ],
    beforeAfter: false,
    testimonial: {
      author: 'Équipe RATP',
      company: 'RATP',
      text: "L'app est devenue l'outil de référence pour nos voyageurs.",
    },
  },
  'ratp-mobile-2': {
    title: 'App Mobile RATP Pro',
    banner: mobileBanner,
    client: 'RATP',
    tech: 'React Native, Firebase',
    objectives: 'Application mobile professionnelle pour les agents RATP',
    results: [
      { label: 'Productivité', value: '+25%' },
      { label: 'Satisfaction', value: '92%' },
      { label: 'Adoption', value: '100%' },
    ],
    beforeAfter: false,
    testimonial: {
      author: 'Équipe RATP',
      company: 'RATP',
      text: 'Outil indispensable pour nos agents sur le terrain.',
    },
  },
  'gensaales-web': {
    title: 'Site Web Gensaales',
    banner: webBanner,
    client: 'Gensaales',
    tech: 'React, Node.js, MongoDB',
    objectives: 'Site web moderne avec interface administrateur',
    results: [
      { label: 'Performance', value: '+42%' },
      { label: 'Conversion', value: '+28%' },
      { label: 'Leads', value: '+55%' },
    ],
    beforeAfter: true,
    testimonial: {
      author: 'Gensaales',
      company: 'Gensaales',
      text: 'Un site professionnel qui reflète parfaitement notre image.',
    },
  },
  'gensaales-mobile': {
    title: 'Application Mobile Gensaales',
    banner: mobileBanner,
    client: 'Gensaales',
    tech: 'React Native, API',
    objectives: 'Application mobile cross-platform pour Gensaales',
    results: [
      { label: 'Utilisateurs actifs', value: '+60%' },
      { label: 'Engagement', value: '+45%' },
      { label: 'NPS', value: '+18' },
    ],
    beforeAfter: false,
    testimonial: {
      author: 'Gensaales',
      company: 'Gensaales',
      text: "L'app mobile a transformé l'expérience de nos clients.",
    },
  },
  'loterie-mobile': {
    title: 'Application Mobile Loterie Nationale',
    banner: mobileBanner,
    client: 'Loterie Nationale',
    tech: 'React Native, Secure API',
    objectives: 'Application mobile sécurisée pour la Loterie Nationale',
    results: [
      { label: 'Sécurité', value: '100%' },
      { label: 'Conformité', value: 'Certifiée' },
      { label: 'Disponibilité', value: '99.95%' },
    ],
    beforeAfter: false,
    testimonial: {
      author: 'Loterie Nationale',
      company: 'Loterie Nationale',
      text: 'Une application sécurisée et fiable pour nos utilisateurs.',
    },
  },
}
