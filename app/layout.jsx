import './globals.css'
import ClientLayout from '../components/ClientLayout'

export const metadata = {
  title: {
    default: 'SmartDex — Agence Digitale au Maroc',
    template: '%s — SmartDex',
  },
  description: 'SmartDex est une agence digitale au Maroc spécialisée en développement web, SaaS, applications mobiles et solutions IA pour entreprises.',
  metadataBase: new URL('https://smartdex.ma'),
  applicationName: 'SmartDex',
  authors: [{ name: 'SmartDex', url: 'https://smartdex.ma' }],
  creator: 'SmartDex',
  publisher: 'SmartDex',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SmartDex — Agence Digitale au Maroc',
    description: 'Développement web, SaaS, applications mobiles et solutions IA pour entreprises au Maroc.',
    url: 'https://smartdex.ma',
    siteName: 'SmartDex',
    locale: 'fr_MA',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SmartDex',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartDex — Agence Digitale au Maroc',
    description: 'Développement web, SaaS, applications mobiles et solutions IA pour entreprises au Maroc.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': 'https://smartdex.ma/#organization',
    name: 'SmartDex',
    url: 'https://smartdex.ma',
    logo: 'https://smartdex.ma/logo.png',
    image: 'https://smartdex.ma/og-image.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Casablanca',
      addressCountry: 'MA',
    },
    description: 'Agence digitale au Maroc spécialisée en développement web, SaaS, applications mobiles et solutions IA pour entreprises.',
    email: 'contact@smartdex.ma',
    telephone: '+212-70745-8386',
    areaServed: {
      '@type': 'Country',
      name: 'Morocco',
    },
    sameAs: [
      'https://www.linkedin.com/company/smartdex-ma/',
    ],
  }

  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#0a0a0f" />
        <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ClientLayout>
          {children}
        </ClientLayout>
  
      </body>
    </html>
  )
}
