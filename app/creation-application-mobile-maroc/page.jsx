import Link from 'next/link'
import '../seo-pages.css'
import './CreationApplicationMobileMaroc.css'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte une application mobile au Maroc ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Une app simple (React Native) démarre autour de 50 000 à 80 000 MAD. Une application avec fonctionnalités avancées (géolocalisation, paiements, intégrations) peut aller de 100 000 à 250 000 MAD. Devis gratuit sur mesure.'
      }
    },
    {
      '@type': 'Question',
      name: 'Vaut-il mieux développer pour iOS, Android ou les deux ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Avec React Native, une seule codebase génère IOS et Android. Vous touchez les deux plateformes sans doubler le budget. Recommandé pour la plupart des projets marocains.'
      }
    },
    {
      '@type': 'Question',
      name: "Qu'est-ce que React Native et pourquoi l'utiliser ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'React Native permet de développer une application pour iOS et Android avec un seul code. Performances natives, réutilisation du code web (React) et mises à jour plus rapides qu\'en développement natif séparé.'
      }
    },
    {
      '@type': 'Question',
      name: "Mon application sera-t-elle disponible sur l'App Store et Google Play ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Nous assurons la soumission sur l\'App Store (iOS) et Google Play (Android). Comptez un délai de validation de quelques jours à 2 semaines selon les stores.'
      }
    },
    {
      '@type': 'Question',
      name: "Pouvez-vous mettre à jour mon application après le lancement ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Nous proposons des forfaits maintenance : corrections, nouvelles fonctionnalités, mises à jour pour les évolutions iOS et Android. Support réactif inclus.'
      }
    }
  ]
}

export const metadata = {
  title: 'Création Application Mobile Maroc — iOS & Android | SmartDex',
  description: 'SmartDex développe vos applications mobiles iOS et Android sur mesure au Maroc. React Native, performance et design soigné. Devis gratuit.',
  keywords: 'création application mobile Maroc, développement app mobile Casablanca, application iOS Android Maroc, agence web maroc, casablanca',
  openGraph: {
    title: 'Création Application Mobile Maroc — iOS & Android',
    description: 'SmartDex développe vos applications mobiles iOS et Android sur mesure au Maroc. React Native, performance et design soigné. Devis gratuit.',
    url: 'https://smartdex.ma/creation-application-mobile-maroc',
    siteName: 'SmartDex',
    locale: 'fr_MA',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://smartdex.ma/creation-application-mobile-maroc',
  },
}

export default function CreationApplicationMobileMarocPage() {
  return (
    <article className="seo-page creation-application-mobile-maroc">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />
      <header className="seo-hero" data-reveal>
        <div className="seo-hero-bg" />
        <div className="container seo-hero-content">
          <div className="section-badge-wrapper">
            <span className="section-badge">Mobile</span>
          </div>
          <h1 className="seo-main-title">Création Application Mobile Maroc</h1>
          <p className="seo-subtitle muted">
            Applications iOS et Android sur mesure pour les PME marocaines. React Native, design soigné et performances natives. De Casablanca à tout le Maroc.
          </p>
          <div className="seo-hero-ctas">
            <Link href="/devis" className="btn btn-primary">Obtenir une estimation instantanée</Link>
            <Link href="/projects" className="btn">Voir nos réalisations</Link>
          </div>
        </div>
      </header>

      <div className="seo-content" data-reveal>
        <div className="container">
          <section className="seo-intro">
            <p>
              Les applications mobiles sont devenues un canal incontournable pour les entreprises marocaines : réservation, livraison, fidélisation client, vente en ligne. SmartDex, basée à Casablanca, développe des applications <strong>iOS</strong> et <strong>Android</strong> sur mesure avec <strong>React Native</strong>. Une seule codebase permet de publier sur l&apos;<strong>App Store</strong> et <strong>Google Play</strong>, réduisant les coûts et accélérant la mise sur le marché. Nous accompagnons les PME marocaines dans tous les secteurs : restauration, retail, services, santé, logistique. Notre équipe maîtrise le design UX, les performances et les intégrations (paiement, géolocalisation, push notifications). Consultez nos <Link href="/projects">réalisations</Link> et nos <Link href="/services">services</Link> pour lancer votre projet mobile.
            </p>
          </section>

          <section className="seo-features">
            <h2>Ce que nous proposons</h2>
            <ul className="seo-list muted">
              <li>Applications cross-platform iOS et Android avec React Native (une codebase)</li>
              <li>Design UX/UI soigné, adapté aux guidelines Apple et Material Design</li>
              <li>Intégrations : paiement (CMI, Stripe), géolocalisation, notifications push</li>
              <li>Synchronisation avec votre site web ou API existante (Node.js, REST)</li>
              <li>Soumission App Store et Google Play avec suivi jusqu&apos;à la publication</li>
              <li>Maintenance, mises à jour et support technique après le lancement</li>
            </ul>
          </section>

          <section className="seo-process">
            <h2>Notre processus</h2>
            <div className="seo-process-steps">
              <div className="seo-process-step">
                <div className="seo-process-num">Étape 01</div>
                <h3 className="seo-process-title">Découverte &amp; cahier des charges</h3>
                <p className="seo-process-desc">Analyse des fonctionnalités, parcours utilisateur et objectifs. Livrable : cahier des charges validé. Durée : environ 1 semaine.</p>
              </div>
              <div className="seo-process-step">
                <div className="seo-process-num">Étape 02</div>
                <h3 className="seo-process-title">Développement &amp; itérations</h3>
                <p className="seo-process-desc">Maquettes, développement React Native et tests sur simulateurs et appareils réels. Durée variable selon le projet.</p>
              </div>
              <div className="seo-process-step">
                <div className="seo-process-num">Étape 03</div>
                <h3 className="seo-process-title">Livraison, tests &amp; support</h3>
                <p className="seo-process-desc">Publication sur App Store et Google Play, formation et support continu pour les mises à jour.</p>
              </div>
            </div>
          </section>

          <section className="seo-why">
            <h2>Pourquoi choisir SmartDex</h2>
            <div className="seo-why-grid">
              <div className="seo-why-card">
                <strong>7+ projets livrés au Maroc</strong>
                <p>Applications mobiles pour entreprises marocaines : commerce, services, réservation.</p>
              </div>
              <div className="seo-why-card">
                <strong>Délais respectés à 100%</strong>
                <p>Jalons définis ensemble et suivi transparent tout au long du développement.</p>
              </div>
              <div className="seo-why-card">
                <strong>Support réactif inclus</strong>
                <p>Maintenance et évolutions disponibles après le lancement sur les stores.</p>
              </div>
              <div className="seo-why-card">
                <strong>Code propre et maintenable</strong>
                <p>React Native et bonnes pratiques pour des mises à jour rapides et fiables.</p>
              </div>
            </div>
          </section>

          <section className="seo-faq">
            <h2>Questions fréquentes</h2>
            <details>
              <summary>Combien coûte une application mobile au Maroc ?</summary>
              <div className="faq-answer">
                <p>Une app simple démarre autour de 50 000 à 80 000 MAD. Une application avancée peut aller de 100 000 à 250 000 MAD. <Link href="/devis">Obtenir une estimation instantanée</Link>.</p>
              </div>
            </details>
            <details>
              <summary>Vaut-il mieux développer pour iOS, Android ou les deux ?</summary>
              <div className="faq-answer">
                <p>Avec React Native, une seule codebase génère iOS et Android. Vous touchez les deux plateformes sans doubler le budget. Recommandé pour la plupart des projets.</p>
              </div>
            </details>
            <details>
              <summary>Qu&apos;est-ce que React Native et pourquoi l&apos;utiliser ?</summary>
              <div className="faq-answer">
                <p>React Native permet de développer une app pour iOS et Android avec un seul code. Performances natives, réutilisation du code et mises à jour plus rapides qu&apos;en natif pur.</p>
              </div>
            </details>
            <details>
              <summary>Mon application sera-t-elle disponible sur l&apos;App Store et Google Play ?</summary>
              <div className="faq-answer">
                <p>Oui. Nous assurons la soumission sur les deux stores. Comptez un délai de validation de quelques jours à 2 semaines selon les plateformes.</p>
              </div>
            </details>
            <details>
              <summary>Pouvez-vous mettre à jour mon application après le lancement ?</summary>
              <div className="faq-answer">
                <p>Oui. Forfaits maintenance : corrections, nouvelles fonctionnalités, mises à jour pour iOS et Android. Découvrez aussi nos services <Link href="/agence-web-casablanca">web</Link> et <Link href="/developpement-erp-crm-maroc">ERP/CRM</Link>.</p>
              </div>
            </details>
          </section>

          <section className="seo-cta-banner">
            <h3>Prêt à lancer votre projet ?</h3>
            <p>Décrivez votre projet et recevez une estimation détaillée immédiatement.</p>
            <Link href="/devis" className="btn btn-primary">Obtenir une estimation instantanée</Link>
          </section>
        </div>
      </div>
    </article>
  )
}
