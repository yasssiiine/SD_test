import Link from 'next/link'
import Image from 'next/image'
import { getProjects } from '../services'
import ProjectsClient from './ProjectsClient'
import './Projects.css'

const IMAGE_MAP = {
  ratp: '/images/RATPDev.jpg',
  gen: '/images/gen.jpg',
  loto: '/images/loto.svg',
}

const getTypeLabel = (type) =>
  ({ web: 'Web', mobile: 'Mobile', webapp: 'Web App', logiciels: 'Logiciels', cloud: 'Cloud', ai: 'IA' }[type] || type)
const getTypeColor = (type) =>
  ({
    web: 'rgba(42,166,255,0.3)',
    mobile: 'rgba(156,39,176,0.3)',
    webapp: 'rgba(0,184,212,0.3)',
    logiciels: 'rgba(255,152,0,0.3)',
    cloud: 'rgba(76,175,80,0.3)',
    ai: 'rgba(103,58,183,0.3)',
  }[type] || 'rgba(42,166,255,0.25)')

export default function Projects({ teaser }) {
  const all = getProjects().map((p) => ({
    ...p,
    image: IMAGE_MAP[p.imageKey] || null,
  }))
  const shown = all.slice(0, 3)

  return (
    <section id="projets" className={`projects-section ${teaser ? 'projects-teaser' : ''}`}>
      <div className="container">
        <div className="projects-header">
          <div className="projects-header-content">
            <div className="section-badge-wrapper">
              <span className="section-badge">Réalisations</span>
            </div>
            <h2 className="section-title">{teaser ? 'Projets réalisés' : 'Nos Projets'}</h2>
            <p className="section-desc muted">
              {teaser
                ? "Découvrez quelques-unes de nos réalisations récentes qui illustrent notre expertise et notre engagement envers l'excellence"
                : 'Découvrez nos réalisations et nos solutions innovantes'}
            </p>
          </div>
          {teaser ? (
            <div className="projects-stats-teaser">
              <div className="stat-item-teaser">
                <div className="stat-value-teaser">{all.length}+</div>
                <div className="stat-label-teaser">Projets livrés</div>
              </div>
              <div className="stat-item-teaser">
                <div className="stat-value-teaser">100%</div>
                <div className="stat-label-teaser">Satisfaction client</div>
              </div>
              <div className="stat-item-teaser">
                <div className="stat-value-teaser">{all.filter((p) => p.status === 'completed').length}</div>
                <div className="stat-label-teaser">Projets complétés</div>
              </div>
            </div>
          ) : (
            <div className="projects-stats">
              <div className="stat-item">
                <div className="stat-value">{all.length}</div>
                <div className="stat-label">Projets</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">100%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>
          )}
        </div>

        {teaser ? (
          <div className="projects-grid" style={{ marginTop: 24 }}>
            {shown.map((p, i) => (
              <Link
                href={`/projects/${p.id}`}
                className="project-card-enhanced"
                key={i}
                data-reveal
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  className="project-thumb"
                  style={{
                    background: p.image ? 'none' : `linear-gradient(135deg, ${getTypeColor(p.type)}, rgba(255,255,255,0.06))`,
                  }}
                >
                  {p.image && (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                  )}
                  {p.image && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(135deg, ${getTypeColor(p.type)}dd, ${getTypeColor(p.type)}88)`,
                        zIndex: 1,
                      }}
                    />
                  )}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 2,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      padding: '16px',
                    }}
                  >
                    <div className="project-badge" style={{ backgroundColor: getTypeColor(p.type) }}>
                      {getTypeLabel(p.type)}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  {p.highlight && <strong className="project-highlight">{p.highlight}</strong>}
                  <h3 className="project-name">{p.name}</h3>
                  {p.client && (
                    <div className="project-client">
                      <span className="client-name">{p.client}</span>
                    </div>
                  )}
                  <p className="project-description">{p.description}</p>
                  <div className="project-meta">
                    <div className="meta-item">
                      <span className="meta-text">{p.stack}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <ProjectsClient />
        )}

        {teaser && (
          <div className="projects-teaser-cta">
            <Link href="/projects" className="btn btn-primary projects-view-all">
              <span>Voir tous les projets</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
