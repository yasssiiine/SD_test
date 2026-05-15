'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { getProjects } from '../services'

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

export default function ProjectsClient() {
  const all = getProjects().map((p) => ({
    ...p,
    image: IMAGE_MAP[p.imageKey] || null,
  }))
  const [filter, setFilter] = useState('all')
  const shown = all.filter((p) => filter === 'all' || p.type === filter)

  return (
    <>
      <div className="filter-bar">
        {['all', 'web', 'mobile', 'webapp', 'logiciels', 'cloud', 'ai'].map((k) => (
          <button
            key={k}
            className={`filter-btn ${filter === k ? 'active' : ''}`}
            onClick={() => setFilter(k)}
          >
            {k === 'all' ? 'Tous' : getTypeLabel(k)}
            {k !== 'all' && (
              <span className="filter-count">({all.filter((p) => p.type === k).length})</span>
            )}
          </button>
        ))}
      </div>

      <div className="projects-grid" style={{ marginTop: 32 }}>
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
                  sizes="(max-width: 768px) 100vw, 340px"
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
    </>
  )
}
