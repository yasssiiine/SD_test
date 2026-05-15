import Services from '../../components/Services'

export const metadata = {
  title: 'Nos Services — Développement Web, Mobile, SaaS | SmartDex',
  description: "Développement web et mobile, logiciels sur mesure, cloud, IA et support. Des solutions digitales complètes pour transformer vos défis en opportunités. Agence web Maroc, Casablanca.",
  openGraph: {
    title: 'Nos Services — SmartDex',
    description: 'Développement web, mobile, SaaS et solutions cloud. Agence digitale Casablanca.',
    url: 'https://smartdex.ma/services',
    siteName: 'SmartDex',
    locale: 'fr_MA',
    type: 'website',
  },
}

export default function ServicesPage() {
  return <Services compact={false} />
}
