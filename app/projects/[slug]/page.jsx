// import Link from 'next/link'
// import { notFound } from 'next/navigation'
// import { getProjectById } from '../../../services'
// import './ProjectDetail.css'

// const getProjectBanner = (type) =>
//   ({
//     web: 'linear-gradient(135deg, rgba(42,166,255,.35), rgba(255,255,255,.06))',
//     mobile: 'linear-gradient(135deg, rgba(156,39,176,.3), rgba(255,255,255,.06))',
//     webapp: 'linear-gradient(135deg, rgba(0,184,212,.32), rgba(255,255,255,.06))',
//     logiciels: 'linear-gradient(135deg, rgba(255,152,0,.3), rgba(255,255,255,.06))',
//     cloud: 'linear-gradient(135deg, rgba(76,175,80,.3), rgba(255,255,255,.06))',
//     ai: 'linear-gradient(135deg, rgba(103,58,183,.3), rgba(255,255,255,.06))',
//   }[type] || 'linear-gradient(135deg, rgba(42,166,255,.22), rgba(255,255,255,.06))')

// const getTypeLabel = (type) =>
//   ({ web: 'Site web', mobile: 'Application mobile', webapp: 'Plateforme web', logiciels: 'Logiciel', cloud: 'Cloud', ai: 'IA' }[type] || type)

// const getStatusLabel = (status) =>
//   ({ completed: 'Complété', ongoing: 'En cours', planned: 'Planifié' }[status] || status || 'Non précisé')

// export async function generateStaticParams() {
//   const { projects } = await import('../../../data/projects')
//   return projects.map((p) => ({ slug: p.id }))
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params
//   const p = getProjectById(slug)
//   if (!p) {
//     return {
//       title: 'Projet introuvable | SmartDex',
//     }
//   }

//   return {
//     title: `${p.name} | SmartDex`,
//     description: p.description || `Projet ${p.name} - ${p.client}`,
//     openGraph: {
//       title: `${p.name} — SmartDex`,
//       description: p.description || `Projet ${p.name}`,
//       url: `https://smartdex.ma/projects/${slug}`,
//       siteName: 'SmartDex',
//       locale: 'fr_MA',
//       type: 'website',
//     },
//   }
// }

// export default async function ProjectDetailPage({ params }) {
//   const { slug } = await params
//   const p = getProjectById(slug)
//   if (!p) notFound()

//   return (
//     <section className="project-detail-page">
//       <div className="project-banner" style={{ backgroundImage: getProjectBanner(p.type) }}>
//         <div className="container">
//           <div className="project-hero-content">
//             <div className="project-kicker">{p.categoryLabel}</div>
//             <h1 className="project-title">{p.name}</h1>
//             <div className="project-hero-client">{p.client}</div>
//             {p.highlight && <p className="project-highlight-lead">{p.highlight}</p>}
//             <Link href="/devis" className="btn btn-primary project-hero-cta">
//               Discuter d’un projet similaire
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="container project-detail-content">
//         <div className="project-section-heading">
//           <span className="project-section-label">Overview</span>
//           <h2>Vue d’ensemble</h2>
//         </div>

//         <div className="project-overview-grid">
//           <div className="project-overview-card">
//             <span>Client</span>
//             <strong>{p.client}</strong>
//           </div>
//           <div className="project-overview-card">
//             <span>Type</span>
//             <strong>{getTypeLabel(p.type)}</strong>
//           </div>
//           <div className="project-overview-card">
//             <span>Stack</span>
//             <strong>{p.stack}</strong>
//           </div>
//           <div className="project-overview-card">
//             <span>Status</span>
//             <strong>{getStatusLabel(p.status)}</strong>
//           </div>
//         </div>

//         <div className="project-section-heading">
//           <span className="project-section-label">Case study</span>
//           <h2>Du besoin à la solution</h2>
//         </div>

//         <div className="project-results">
//           <div className="project-case-card">
//             <h3>Problème</h3>
//             <p>{p.problem}</p>
//           </div>
//           <div className="project-case-card">
//             <h3>Solution</h3>
//             <p>{p.solution}</p>
//           </div>
//           <div className="project-case-card">
//             <h3>Impact</h3>
//             <p>{p.impact}</p>
//           </div>
//         </div>

//         {p.features?.length > 0 && (
//           <div className="project-features-section">
//             <div className="project-section-heading">
//               <span className="project-section-label">Features</span>
//               <h2>Fonctionnalités clés</h2>
//             </div>
//             <ul className="project-features-grid">
//               {p.features.map((feature) => (
//                 <li key={feature}>{feature}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         <div className="project-final-cta">
//           <h2>Vous avez un projet similaire ?</h2>
//           <p>
//             Parlons de votre besoin et voyons comment SmartDex peut construire une solution adaptée à votre activité.
//           </p>
//           <Link href="/devis" className="btn btn-primary">
//             Obtenir une estimation instantanée
//           </Link>
//         </div>

//         <div className="project-back-link">
//           <Link href="/projects" className="btn">
//             Retour aux projets
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }


import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectById } from '../../../services'
import './ProjectDetail.css'

const getProjectBanner = (type) =>
  ({
    web:       'linear-gradient(135deg, rgba(42,166,255,.35), rgba(255,255,255,.06))',
    mobile:    'linear-gradient(135deg, rgba(156,39,176,.3), rgba(255,255,255,.06))',
    webapp:    'linear-gradient(135deg, rgba(0,184,212,.32), rgba(255,255,255,.06))',
    logiciels: 'linear-gradient(135deg, rgba(255,152,0,.3), rgba(255,255,255,.06))',
    cloud:     'linear-gradient(135deg, rgba(76,175,80,.3), rgba(255,255,255,.06))',
    ai:        'linear-gradient(135deg, rgba(103,58,183,.3), rgba(255,255,255,.06))',
  }[type] || 'linear-gradient(135deg, rgba(42,166,255,.22), rgba(255,255,255,.06))')

const getTypeLabel   = (type)   => ({ web: 'Site web', mobile: 'Application mobile', webapp: 'Plateforme web', logiciels: 'Logiciel', cloud: 'Cloud', ai: 'IA' }[type] || type)
const getStatusLabel = (status) => ({ completed: 'Complété', ongoing: 'En cours', planned: 'Planifié' }[status] || status || 'Non précisé')

const getTypeIcon   = (type)   => ({ web: 'ti-browser', mobile: 'ti-device-mobile', webapp: 'ti-layout-dashboard', logiciels: 'ti-code', cloud: 'ti-cloud-computing', ai: 'ti-brain' }[type] || 'ti-settings')
const getStatusIcon = (status) => ({ completed: 'ti-circle-check', ongoing: 'ti-clock', planned: 'ti-calendar' }[status] || 'ti-point')

const caseIcons = {
  problem:  { icon: 'ti-alert-triangle', color: '#ff7043', bg: 'rgba(255,112,67,0.12)', border: 'rgba(255,112,67,0.25)' },
  solution: { icon: 'ti-bulb',           color: '#2AA6FF', bg: 'rgba(42,166,255,0.12)', border: 'rgba(42,166,255,0.25)' },
  impact:   { icon: 'ti-trending-up',    color: '#69f0ae', bg: 'rgba(105,240,174,0.1)', border: 'rgba(105,240,174,0.22)' },
}

export async function generateStaticParams() {
  const { projects } = await import('../../../data/projects')
  return projects.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = getProjectById(slug)
  if (!p) return { title: 'Projet introuvable | SmartDex' }
  return {
    title: `${p.name} | SmartDex`,
    description: p.description || `Projet ${p.name} - ${p.client}`,
    openGraph: {
      title: `${p.name} — SmartDex`,
      description: p.description || `Projet ${p.name}`,
      url: `https://smartdex.ma/projects/${slug}`,
      siteName: 'SmartDex',
      locale: 'fr_MA',
      type: 'website',
    },
  }
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params
  const p = getProjectById(slug)
  if (!p) notFound()

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.10.0/dist/tabler-icons.min.css" />

      <section className="project-detail-page">

        {/* ── Hero Banner ── */}
        <div className="project-banner" style={{ backgroundImage: getProjectBanner(p.type) }}>
          <div className="project-banner-particles" aria-hidden="true" />
          <div className="container">
            <div className="project-hero-content">
              <div className="project-kicker">
                <i className={`ti ${getTypeIcon(p.type)}`} />
                {p.categoryLabel}
              </div>
              <h1 className="project-title">{p.name}</h1>
              <div className="project-hero-client">
                <i className="ti ti-building" />
                {p.client}
              </div>
              {p.highlight && <p className="project-highlight-lead">{p.highlight}</p>}
              <Link href="/devis" className="btn btn-primary project-hero-cta">
                <span>Discuter d'un projet similaire</span>
                <i className="ti ti-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="project-banner-fade" aria-hidden="true" />
        </div>

        {/* ── Content ── */}
        <div className="container project-detail-content">

          {/* Overview grid */}
          <div className="project-section-heading">
            <span className="project-section-label">
              <i className="ti ti-info-circle" />
              Overview
            </span>
            <h2>Vue d'ensemble</h2>
          </div>

          <div className="project-overview-grid">
            <div className="project-overview-card">
              <div className="overview-icon"><i className="ti ti-user" /></div>
              <span>Client</span>
              <strong>{p.client}</strong>
            </div>
            <div className="project-overview-card">
              <div className="overview-icon"><i className={`ti ${getTypeIcon(p.type)}`} /></div>
              <span>Type</span>
              <strong>{getTypeLabel(p.type)}</strong>
            </div>
            <div className="project-overview-card">
              <div className="overview-icon"><i className="ti ti-stack-2" /></div>
              <span>Stack</span>
              <strong>{p.stack}</strong>
            </div>
            <div className="project-overview-card">
              <div className="overview-icon"><i className={`ti ${getStatusIcon(p.status)}`} /></div>
              <span>Statut</span>
              <strong className={`status-label status-${p.status}`}>{getStatusLabel(p.status)}</strong>
            </div>
          </div>

          {/* Case study */}
          <div className="project-section-heading">
            <span className="project-section-label">
              <i className="ti ti-file-description" />
              Case study
            </span>
            <h2>Du besoin à la solution</h2>
          </div>

          <div className="project-results">
            {[
              { key: 'problem',  label: 'Problème', content: p.problem  },
              { key: 'solution', label: 'Solution',  content: p.solution },
              { key: 'impact',   label: 'Impact',    content: p.impact   },
            ].map(({ key, label, content }) => {
              const cfg = caseIcons[key]
              return (
                <div key={key} className={`project-case-card project-case-${key}`}>
                  <div className="case-card-header">
                    <div className="case-icon" style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}>
                      <i className={`ti ${cfg.icon}`} style={{ color: cfg.color }} />
                    </div>
                    <h3>{label}</h3>
                  </div>
                  <p>{content}</p>
                </div>
              )
            })}
          </div>

          {/* Features */}
          {p.features?.length > 0 && (
            <div className="project-features-section">
              <div className="project-section-heading">
                <span className="project-section-label">
                  <i className="ti ti-layout-grid" />
                  Features
                </span>
                <h2>Fonctionnalités clés</h2>
              </div>
              <ul className="project-features-grid">
                {p.features.map((feature) => (
                  <li key={feature}>
                    <i className="ti ti-check feature-check" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Final CTA */}
          <div className="project-final-cta">
            <div className="cta-glow" aria-hidden="true" />
            <div className="cta-icon-wrap">
              <i className="ti ti-rocket" />
            </div>
            <h2>Vous avez un projet similaire ?</h2>
            <p>
              Parlons de votre besoin et voyons comment SmartDex peut construire une solution adaptée à votre activité.
            </p>
            <Link href="/devis" className="btn btn-primary">
              <span>Obtenir une estimation instantanée</span>
              <i className="ti ti-arrow-right" />
            </Link>
          </div>

          <div className="project-back-link">
            <Link href="/projects" className="btn btn-back">
              <i className="ti ti-arrow-left" />
              Retour aux projets
            </Link>
          </div>

        </div>
      </section>
    </>
  )
}