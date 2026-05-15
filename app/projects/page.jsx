import Projects from '../../components/Projects'

export const metadata = {
  title: 'Nos Projets & Réalisations | SmartDex',
  description: "Découvrez nos réalisations : sites web, applications mobiles et logiciels sur mesure pour RATP, Gensaales, Loterie Nationale et plus. Agence web Maroc.",
  openGraph: {
    title: 'Nos Projets — SmartDex',
    description: 'Réalisations web, mobile et logiciels sur mesure.',
    url: 'https://smartdex.ma/projects',
    siteName: 'SmartDex',
    locale: 'fr_MA',
    type: 'website',
  },
}

export default function ProjectsPage() {
  return <Projects teaser={false} />
}
