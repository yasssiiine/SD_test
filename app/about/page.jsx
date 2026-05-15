import Link from 'next/link'
import Image from 'next/image'
import { getPartners } from '../../services'
import './About.css'

export const metadata = {
  title: "À propos — SmartDex | L'intelligence digitale au service de vos ambitions",
  description: "SmartDex : équipe d'experts passionnés par la technologie. Innovation, design et performance pour des solutions web, mobiles et logicielles. Agence web Maroc, Casablanca.",
  openGraph: {
    title: "À propos — SmartDex",
    description: "Agence digitale basée à Casablanca, Maroc.",
    url: 'https://smartdex.ma/about',
    siteName: 'SmartDex',
    locale: 'fr_MA',
    type: 'website',
  },
}

export default function About() {
  const partners = getPartners()

  return (
    <section id="apropos" className="about-section">
      <div className="about-hero-enhanced" data-reveal>
        <div className="about-hero-bg" />
        <div className="hero-particles">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} style={{ left: `${(i * 13) % 100}%`, bottom: `${(i * 9) % 100}%`, animationDelay: `${i * 0.25}s` }} />
          ))}
        </div>
        <div className="container about-hero-content">
          <div className="section-badge-wrapper">
            <span className="section-badge">À Propos</span>
          </div>
          <h1 className="about-main-title">SmartDex</h1>
          <p className="about-subtitle">L&apos;intelligence digitale au service de vos ambitions</p>
          <p className="about-description muted">
            Nous sommes une équipe d&apos;experts passionnés par la technologie, unissant innovation, design et performance
            pour créer des solutions qui propulsent vos projets vers le futur.
          </p>
          <div className="about-hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">7+</div>
              <div className="hero-stat-label">Projets</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">100%</div>
              <div className="hero-stat-label">Satisfaction</div>
            </div>
            {/* <div className="hero-stat">
              <div className="hero-stat-value">2</div>
              <div className="hero-stat-label">Experts</div>
            </div> */}
            <div className="hero-stat">
              <div className="hero-stat-value">4+</div>
              <div className="hero-stat-label">Années d&apos;expérience</div>
            </div>
          </div>
          <a href="#mission" className="btn btn-primary about-hero-cta">
            <span>Découvrir notre mission</span>
            <span className="btn-arrow">↓</span>
          </a>
        </div>
      </div>

      <div className="about-mission-section" data-reveal id="mission">
        <div className="container">
          <div className="about-mission-header">
            <div className="section-badge-wrapper">
              <span className="section-badge">Mission</span>
            </div>
            <h2 className="section-title about-mission-title">
              Simplifier la technologie, amplifier vos performances
            </h2>
            <p className="section-desc muted about-mission-desc">
              Chez SmartDex, nous transformons la complexité technologique en opportunités de croissance
            </p>
          </div>

          <div className="mission-enhanced">
            <div className="mission-content-card">
              <div className="mission-text-block">
                <p className="mission-text muted">
                  Chez SmartDex, nous croyons que la technologie doit être un levier de croissance accessible et performant.
                  Notre mission est d&apos;accompagner les entreprises dans leur transformation digitale à travers des solutions
                  logicielles, web et mobiles innovantes, durables et intelligentes.
                </p>
              </div>
              <div className="about-values-enhanced">
                {[
                  { title: 'Innovation', desc: 'Nous explorons constamment les nouvelles technologies pour offrir des solutions avant-gardistes.' },
                  { title: 'Fiabilité', desc: 'Solutions stables, sécurisées et performantes pour une confiance totale.' },
                  { title: 'Excellence', desc: 'Précision et exigence sur chaque ligne de code pour une qualité irréprochable.' },
                  { title: 'Impact', desc: 'Conscience et durabilité dans nos développements pour un avenir meilleur.' },
                ].map((v, i) => (
                  <div key={i} className="value-card-enhanced">
                    <div className="value-icon-enhanced">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d="M9 18h6" /><path d="M10 22h4" />
                        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
                      </svg>
                    </div>
                    <div className="value-content">
                      <div className="value-title-enhanced">{v.title}</div>
                      <div className="value-text-enhanced muted">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mission-ill-enhanced" aria-hidden>
              <div className="mission-ill-graphic">
                <Image src="/images/logo.png" alt="SmartDex" width={400} height={300} className="mission-ill-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-partners-section" data-reveal>
        <div className="container">
          <div className="about-partners-header">
            <div className="section-badge-wrapper">
              <span className="section-badge">Partenaires</span>
            </div>
            <h2 className="section-title">Nos Partenaires</h2>
            <p className="section-desc muted">Des entreprises qui nous font confiance pour leurs projets digitaux</p>
          </div>
          <div className="partners-marquee-enhanced">
            <div className="track-enhanced">
              {partners.concat(partners).concat(partners).map((p, i) => (
                <div className="partner-logo-enhanced shine" key={i}>
                  <div className="partner-logo-bg" />
                  <span className="partner-name">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="about-cta-section">
        <div className="container">
          <div className="about-cta-enhanced">
            <div className="cta-content-enhanced">
              <h3 className="cta-title-enhanced">Vous partagez notre vision de l&apos;innovation ?</h3>
              <p className="cta-desc-enhanced muted">Rejoignez-nous ou confiez-nous votre prochain projet pour créer ensemble quelque chose d&apos;extraordinaire.</p>
            </div>
            <Link href="/devis" className="btn btn-primary cta-button-enhanced">
              <span>Obtenir une estimation instantanée</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
