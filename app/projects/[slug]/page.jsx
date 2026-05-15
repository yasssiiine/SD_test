import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProjectById } from '../../../services'
import './ProjectDetail.css'

const getProjectBanner = (type) =>
  ({
    web: 'linear-gradient(135deg, rgba(42,166,255,.35), rgba(255,255,255,.06))',
    mobile: 'linear-gradient(135deg, rgba(156,39,176,.3), rgba(255,255,255,.06))',
    webapp: 'linear-gradient(135deg, rgba(0,184,212,.32), rgba(255,255,255,.06))',
    logiciels: 'linear-gradient(135deg, rgba(255,152,0,.3), rgba(255,255,255,.06))',
    cloud: 'linear-gradient(135deg, rgba(76,175,80,.3), rgba(255,255,255,.06))',
    ai: 'linear-gradient(135deg, rgba(103,58,183,.3), rgba(255,255,255,.06))',
  }[type] || 'linear-gradient(135deg, rgba(42,166,255,.22), rgba(255,255,255,.06))')

const getTypeLabel = (type) =>
  ({ web: 'Site web', mobile: 'Application mobile', webapp: 'Plateforme web', logiciels: 'Logiciel', cloud: 'Cloud', ai: 'IA' }[type] || type)

const getStatusLabel = (status) =>
  ({ completed: 'Complété', ongoing: 'En cours', planned: 'Planifié' }[status] || status || 'Non précisé')

export async function generateStaticParams() {
  const { projects } = await import('../../../data/projects')
  return projects.map((p) => ({ slug: p.id }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const p = getProjectById(slug)
  if (!p) {
    return {
      title: 'Projet introuvable | SmartDex',
    }
  }

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
    <section className="project-detail-page">
      <div className="project-banner" style={{ backgroundImage: getProjectBanner(p.type) }}>
        <div className="container">
          <div className="project-hero-content">
            <div className="project-kicker">{p.categoryLabel}</div>
            <h1 className="project-title">{p.name}</h1>
            <div className="project-hero-client">{p.client}</div>
            {p.highlight && <p className="project-highlight-lead">{p.highlight}</p>}
            <Link href="/devis" className="btn btn-primary project-hero-cta">
              Discuter d’un projet similaire
            </Link>
          </div>
        </div>
      </div>

      <div className="container project-detail-content">
        <div className="project-section-heading">
          <span className="project-section-label">Overview</span>
          <h2>Vue d’ensemble</h2>
        </div>

        <div className="project-overview-grid">
          <div className="project-overview-card">
            <span>Client</span>
            <strong>{p.client}</strong>
          </div>
          <div className="project-overview-card">
            <span>Type</span>
            <strong>{getTypeLabel(p.type)}</strong>
          </div>
          <div className="project-overview-card">
            <span>Stack</span>
            <strong>{p.stack}</strong>
          </div>
          <div className="project-overview-card">
            <span>Status</span>
            <strong>{getStatusLabel(p.status)}</strong>
          </div>
        </div>

        <div className="project-section-heading">
          <span className="project-section-label">Case study</span>
          <h2>Du besoin à la solution</h2>
        </div>

        <div className="project-results">
          <div className="project-case-card">
            <h3>Problème</h3>
            <p>{p.problem}</p>
          </div>
          <div className="project-case-card">
            <h3>Solution</h3>
            <p>{p.solution}</p>
          </div>
          <div className="project-case-card">
            <h3>Impact</h3>
            <p>{p.impact}</p>
          </div>
        </div>

        {p.features?.length > 0 && (
          <div className="project-features-section">
            <div className="project-section-heading">
              <span className="project-section-label">Features</span>
              <h2>Fonctionnalités clés</h2>
            </div>
            <ul className="project-features-grid">
              {p.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="project-final-cta">
          <h2>Vous avez un projet similaire ?</h2>
          <p>
            Parlons de votre besoin et voyons comment SmartDex peut construire une solution adaptée à votre activité.
          </p>
          <Link href="/devis" className="btn btn-primary">
            Obtenir une estimation instantanée
          </Link>
        </div>

        <div className="project-back-link">
          <Link href="/projects" className="btn">
            Retour aux projets
          </Link>
        </div>
      </div>
    </section>
  )
}
