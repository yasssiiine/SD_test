import Link from 'next/link'

export default function CtaContact() {
  return (
    <section className="home-cta-section">
      <div className="container" data-reveal>
        <div className="sd-card home-cta-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap' }}>
          <div>
            <h3 className="heading" style={{ margin: 0 }}>Obtenez une estimation claire en quelques minutes</h3>
            <p className="muted" style={{ margin: '6px 0 12px' }}>Décrivez votre projet et recevez une estimation détaillée immédiatement.</p>
            <div className="muted" style={{ display: 'flex', gap: 10, flexWrap: 'wrap', fontSize: 14 }}>
              <span>Réponse immédiate</span>
              <span>Sans engagement</span>
              <span>100% confidentiel</span>
            </div>
          </div>
          <Link href="/devis" className="btn btn-primary">Obtenir une estimation instantanée</Link>
        </div>
      </div>
    </section>
  )
}
