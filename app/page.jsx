import Link from 'next/link'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Achievements from '../components/Achievements'
import Testimonials from '../components/Testimonials'
import CtaContact from '../components/CtaContact'
import ChatbotTrigger from '../components/ChatbotTrigger'
import './Home.css'

export const metadata = {
  title: 'Agence Digitale Maroc | Développement Web, SaaS & IA',
  description: "SmartDex est une agence digitale au Maroc spécialisée en développement web, SaaS, applications mobiles et solutions IA pour aider les entreprises à vendre plus, automatiser leurs opérations et accélérer leur transformation digitale.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SmartDex — Agence Digitale Maroc',
    description: "Développement web, SaaS, applications mobiles et solutions IA sur mesure pour entreprises au Maroc.",
    url: 'https://smartdex.ma',
    siteName: 'SmartDex',
    locale: 'fr_MA',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SmartDex — Agence Digitale Maroc',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartDex — Agence Digitale Maroc',
    description: "Développement web, SaaS, applications mobiles et solutions IA sur mesure pour entreprises au Maroc.",
    images: ['/og-image.png'],
  },
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-shell" data-reveal>
          <div className="hero-content">
            <div className="badge hero-badge">Solutions digitales au Maroc</div>
            <h1 className="hero-title">
              Des solutions digitales qui transforment vos idées en <span>croissance</span>
            </h1>
            <p className="hero-sub muted">
              SmartDex conçoit des sites web, plateformes SaaS, automatisations et solutions IA pour aider les entreprises marocaines à vendre plus, gagner du temps et structurer leurs opérations.
            </p>
            <div className="hero-ctas">
              <Link href="/devis" className="btn btn-primary">Obtenir une estimation instantanée</Link>
              {/* <ChatbotTrigger className="btn">Parler à l’assistant IA</ChatbotTrigger> */}
              <Link href="/projects" className="btn">Voir nos réalisations</Link>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-dashboard">
              <div className="hero-dashboard-top">
                <span />
                <span />
                <span />
              </div>
              <div className="hero-dashboard-grid">
                <div className="hero-metric">
                  <small>Score IA</small>
                  <strong>94%</strong>
                </div>
                <div className="hero-metric">
                  <small>Leads</small>
                  <strong>+38%</strong>
                </div>
              </div>
              <div className="hero-chart">
                <i style={{ height: '42%' }} />
                <i style={{ height: '58%' }} />
                <i style={{ height: '47%' }} />
                <i style={{ height: '74%' }} />
                <i style={{ height: '88%' }} />
                <i style={{ height: '68%' }} />
              </div>
            </div>

            <div className="hero-float-card hero-float-card-one">
              <strong>Estimation instantanée</strong>
              <span>Analyse IA du besoin client</span>
            </div>
            <div className="hero-float-card hero-float-card-two">
              <strong>Assistant IA</strong>
              <span>Qualification automatique</span>
            </div>
            <div className="hero-float-card hero-float-card-three">
              <strong>Dashboard</strong>
              <span>KPI & reporting temps réel</span>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="how-it-works-section" data-reveal>
        <div className="container">
          <div className="section-badge-wrapper">
            <span className="section-badge">Processus</span>
          </div>
          <h2 className="section-title">Comment ça marche ?</h2>
          <div className="how-it-works-grid">
            <article className="how-it-works-card" data-reveal>
              <span className="how-it-works-icon">1</span>
              <h3>Décrivez votre projet</h3>
              <p className="muted">Partagez votre besoin, vos objectifs et les fonctionnalités attendues.</p>
            </article>
            <article className="how-it-works-card" data-reveal>
              <span className="how-it-works-icon">2</span>
              <h3>Notre IA analyse vos besoins</h3>
              <p className="muted">L’assistant structure les informations et identifie les points clés du projet.</p>
            </article>
            <article className="how-it-works-card" data-reveal>
              <span className="how-it-works-icon">3</span>
              <h3>Recevez une estimation détaillée</h3>
              <p className="muted">Obtenez rapidement une fourchette claire et les éléments inclus.</p>
            </article>
          </div>
        </div>
      </section> */}
      <Services compact />
      <Projects teaser />
      <Achievements />
      <section className="chatbot-positioning-section" data-reveal>
        <div className="container chatbot-positioning-content">
          <div>
            <div className="section-badge-wrapper">
              <span className="section-badge">Assistant IA</span>
            </div>
            <h2 className="section-title">Un assistant IA pour vous guider</h2>
            <p className="section-desc muted">
              Discutez avec notre assistant pour structurer votre besoin et obtenir des recommandations adaptées.
            </p>
          </div>
          <ChatbotTrigger className="btn btn-primary">Parler à l’assistant IA</ChatbotTrigger>
        </div>
      </section>
      <Testimonials />
      <CtaContact />
    </>
  )
}
