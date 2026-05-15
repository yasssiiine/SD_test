import './Achievements.css'
import { getStats, getValues } from '../services'

export default function Achievements() {
  const stats = getStats()
  const values = getValues()

  return (
    <section className="achievements-section">
      <div className="container">
        <div className="achievements-stats">
          <div className="achievements-header">
            <div className="section-badge-wrapper">
              <span className="section-badge">Excellence</span>
            </div>
            <h2 className="section-title">Nos Valeurs</h2>
            <p className="section-desc muted">
              Des résultats mesurables qui témoignent de notre engagement envers l&apos;excellence
            </p>
          </div>
        </div>

        <div className="values-section">
          <div className="values-grid">
            {values.map((value, i) => (
              <div key={i} className="value-card" data-reveal>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
