// import Link from 'next/link'
// import { getServices, getServiceDetails } from '../services'
// import './Services.css'

// const Icon = ({ type }) => {
//   const common = {
//     width: 28,
//     height: 28,
//     viewBox: '0 0 24 24',
//     fill: 'none',
//     stroke: 'currentColor',
//     strokeWidth: 2,
//   }
//   const color = { color: '#2AA6FF' }
//   switch (type) {
//     case 'web':
//       return <svg {...common} style={color}><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 8h18" /></svg>
//     case 'soft':
//       return <svg {...common} style={color}><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 11h8M8 15h5" /></svg>
//     case 'cloud':
//       return <svg {...common} style={color}><path d="M20 16.5A4.5 4.5 0 0 0 15.5 12h-1A5.5 5.5 0 1 0 9 21h9a3 3 0 0 0 2-5.5Z" /></svg>
//     case 'ai':
//       return <svg {...common} style={color}><circle cx="12" cy="12" r="3" /><path d="M19.4 15A7.5 7.5 0 0 1 15 19.4M8.9 19.1A7.5 7.5 0 0 1 4.6 15M4.6 9A7.5 7.5 0 0 1 9 4.6M15 4.6A7.5 7.5 0 0 1 19.4 9" /></svg>
//     case 'ux':
//       return <svg {...common} style={color}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="3" /><rect x="3" y="14" width="18" height="7" rx="2" /></svg>
//     case 'support':
//       return <svg {...common} style={color}><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="9" /></svg>
//     default:
//       return null
//   }
// }

// export default function Services({ compact }) {
//   const items = getServices(compact)
//   const details = compact ? null : getServiceDetails()

//   if (compact) {
//     return (
//       <section id="services" className="services-section services-compact" data-reveal>
//         <div className="container">
//           <div className="services-header-compact">
//             <div className="section-badge-wrapper">
//               <span className="section-badge">Services</span>
//             </div>
//             <h2 className="section-title">Nos Services</h2>
//             <p className="section-desc muted">
//               Des solutions pensées pour générer des prospects, fluidifier vos opérations et accélérer votre croissance.
//             </p>
//           </div>
//           <div className="services-grid-compact">
//             {items.map((s, i) => (
//               <div className="service-card-compact" key={i} data-reveal>
//                 <div className="service-icon-wrapper">
//                   <div className="service-icon-bg" />
//                   <Icon type={s.key} />
//                 </div>
//                 <h3 className="service-title-compact">{s.title}</h3>
//                 <p className="service-desc-compact muted">{s.desc}</p>
//                 <div className="service-arrow">→</div>
//               </div>
//             ))}
//           </div>
//           <div className="services-cta-compact">
//             <Link href="/devis" className="btn btn-primary services-view-all">
//               <span>Obtenir une estimation instantanée</span>
//               <span className="btn-arrow">→</span>
//             </Link>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <section id="services" className="services-section services-full" data-reveal>
//       <div className="container">
//         <div className="services-header-full">
//           <div className="section-badge-wrapper">
//             <span className="section-badge">Services</span>
//           </div>
//           <h1 className="section-title services-main-title">Nos Services</h1>
//           <p className="section-desc muted services-main-desc">
//             Des solutions sur mesure pour chaque besoin digital. De la conception à la mise en production, nous accompagnons vos projets avec expertise et innovation.
//           </p>
//         </div>

//         <div className="services-detailed-enhanced">
//           {details.map((s, i) => (
//             <article key={i} className="service-card-detailed" data-reveal>
//               <div className="service-content-wrapper">
//                 <div className="service-header-card">
//                   <div className="service-icon-wrapper-detailed">
//                     <div className="service-icon-bg-detailed" />
//                     <Icon type={s.key === 'mobile' ? 'web' : s.key} />
//                   </div>
//                   <div className="service-title-section">
//                     <h3 className="service-title-detailed">{s.title}</h3>
//                     <div className="service-divider" />
//                   </div>
//                 </div>
//                 <p className="service-description-detailed muted">{s.desc}</p>
//                 <div className="service-tools">
//                   <div className="tools-label">Technologies & Outils:</div>
//                   <div className="tools-list">{s.tools}</div>
//                 </div>
//               </div>
//               <div className={`svc-illustration-enhanced ill-${s.ill}`} aria-hidden="true">
//                 {s.ill === 'dashboard' && (
//                   <div className="ill-dashboard">
//                     <div className="bar" style={{ width: '70%' }} />
//                     <div className="bar" style={{ width: '40%' }} />
//                     <div className="bar" style={{ width: '55%' }} />
//                     <div className="chart">
//                       {Array.from({ length: 8 }).map((_, i) => (
//                         <span key={i} style={{ height: `${20 + ((i * 7) % 60)}px` }} />
//                       ))}
//                     </div>
//                   </div>
//                 )}
//                 {s.ill === 'phone' && <div className="ill-phone"><div className="screen" /></div>}
//                 {s.ill === 'diagram' && (
//                   <div className="ill-diagram">
//                     <span /><span /><span /><i /><i /><i />
//                   </div>
//                 )}
//                 {s.ill === 'cloud' && <div className="ill-cloud" />}
//                 {s.ill === 'brain' && <div className="ill-brain" />}
//                 {s.ill === 'gears' && (
//                   <div className="ill-gears">
//                     <em className="g g1" /><em className="g g2" /><em className="g g3" />
//                   </div>
//                 )}
//               </div>
//             </article>
//           ))}
//         </div>

//         <div className="services-cta-detailed">
//           <div className="cta-content">
//             <h3 className="cta-title">Vous avez un projet ? Discutons-en !</h3>
//             <p className="cta-desc muted">Nous vous proposons un devis personnalisé adapté à vos besoins spécifiques.</p>
//           </div>
//           <Link href="/devis" className="btn btn-primary cta-button">
//             <span>Obtenir une estimation instantanée</span>
//             <span className="btn-arrow">→</span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }



import Link from 'next/link'
import { getServices, getServiceDetails } from '../services'
import './Services.css'

const tablerIconsLink = (
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.10.0/dist/tabler-icons.min.css"
  />
)

const Icon = ({ type }) => {
  const iconMap = {
    web:     'ti-browser',
    soft:    'ti-code',
    cloud:   'ti-cloud-computing',
    ai:      'ti-brain',
    ux:      'ti-layout-dashboard',
    support: 'ti-headset',
    mobile:  'ti-device-mobile',
  }
  const icon = iconMap[type] || 'ti-settings'
  return <i className={`ti ${icon} service-tabler-icon`} aria-hidden="true" />
}

export default function Services({ compact }) {
  const items = getServices(compact)
  const details = compact ? null : getServiceDetails()

  if (compact) {
    return (
      <>
        {tablerIconsLink}
        <section id="services" className="services-section services-compact" data-reveal>
          <div className="container">
            <div className="services-header-compact">
              <div className="section-badge-wrapper">
                <span className="section-badge">Services</span>
              </div>
              <h2 className="section-title">Nos Services</h2>
              <p className="section-desc muted">
                Des solutions pensées pour générer des prospects, fluidifier vos opérations et accélérer votre croissance.
              </p>
            </div>
            <div className="services-grid-compact">
              {items.map((s, i) => (
                <div className="service-card-compact" key={i} data-reveal>
                  <div className="service-icon-wrapper">
                    <div className="service-icon-bg" />
                    <Icon type={s.key} />
                  </div>
                  <h3 className="service-title-compact">{s.title}</h3>
                  <p className="service-desc-compact muted">{s.desc}</p>
                  <div className="service-arrow">
                    <i className="ti ti-arrow-right" aria-hidden="true" />
                  </div>
                </div>
              ))}
            </div>
            <div className="services-cta-compact">
              <Link href="/devis" className="btn btn-primary services-view-all">
                <span>Obtenir une estimation instantanée</span>
                <span className="btn-arrow">
                  <i className="ti ti-arrow-right" aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {tablerIconsLink}
      <section id="services" className="services-section services-full" data-reveal>
        <div className="container">
          <div className="services-header-full">
            <div className="section-badge-wrapper">
              <span className="section-badge">Services</span>
            </div>
            <h1 className="section-title services-main-title">Nos Services</h1>
            <p className="section-desc muted services-main-desc">
              Des solutions sur mesure pour chaque besoin digital. De la conception à la mise en production, nous accompagnons vos projets avec expertise et innovation.
            </p>
          </div>

          <div className="services-detailed-enhanced">
            {details.map((s, i) => (
              <article key={i} className="service-card-detailed" data-reveal>
                <div className="service-content-wrapper">
                  <div className="service-header-card">
                    <div className="service-icon-wrapper-detailed">
                      <div className="service-icon-bg-detailed" />
                      <Icon type={s.key === 'mobile' ? 'web' : s.key} />
                    </div>
                    <div className="service-title-section">
                      <h3 className="service-title-detailed">{s.title}</h3>
                      <div className="service-divider" />
                    </div>
                  </div>
                  <p className="service-description-detailed muted">{s.desc}</p>
                  <div className="service-tools">
                    <div className="tools-label">
                      <i className="ti ti-tool" aria-hidden="true" style={{ marginRight: '6px', fontSize: '13px' }} />
                      Technologies & Outils
                    </div>
                    <div className="tools-list">{s.tools}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="services-cta-detailed">
            <div className="cta-content">
              <h3 className="cta-title">Vous avez un projet ? Discutons-en !</h3>
              <p className="cta-desc muted">Nous vous proposons un devis personnalisé adapté à vos besoins spécifiques.</p>
            </div>
            <Link href="/devis" className="btn btn-primary cta-button">
              <span>Obtenir une estimation instantanée</span>
              <span className="btn-arrow">
                <i className="ti ti-arrow-right" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}