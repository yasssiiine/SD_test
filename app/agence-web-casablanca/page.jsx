import Link from 'next/link'
import '../seo-pages.css'
import './AgenceWebCasablanca.css'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte un site web professionnel à Casablanca ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un site vitrine professionnel démarre autour de 15 000 à 35 000 MAD. Une application web sur mesure (e-commerce, plateforme) peut aller de 50 000 à 200 000 MAD selon la complexité. Nous proposons un devis personnalisé gratuit.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre un site vitrine et une application web ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un site vitrine présente votre entreprise, vos services et contact. Une application web offre des fonctionnalités interactives : réservations, panier, espace client, dashboards. Nous concevons les deux, avec React et Next.js pour performance et SEO.'
      }
    },
    {
      '@type': 'Question',
      name: 'Combien de temps faut-il pour créer un site web ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un site vitrine : 2 à 4 semaines. Une application web avec fonctionnalités avancées : 2 à 4 mois. Nous livrons par phases pour valider chaque étape avec vous.'
      }
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous la maintenance après la livraison ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Nous proposons des forfaits maintenance : mises à jour, corrections, hébergement, sauvegardes et support. Tarifs adaptés à vos besoins.'
      }
    },
    {
      '@type': 'Question',
      name: 'Travaillez-vous avec des entreprises hors de Casablanca ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui. Nous travaillons avec des clients partout au Maroc et à l\'international. Les échanges se font par visio, email et outils collaboratifs. Une rencontre à Casablanca reste possible si vous êtes de passage.'
      }
    }
  ]
}

export const metadata = {
  title: 'Agence Web Casablanca — Sites & Applications sur mesure | SmartDex',
  description: 'SmartDex, agence web à Casablanca. Création de sites web, applications React et plateformes digitales pour entreprises marocaines.',
  keywords: 'agence web Casablanca, création site web Casablanca, développement web Casablanca, agence web maroc, casablanca',
  openGraph: {
    title: 'Agence Web Casablanca — Sites & Applications sur mesure',
    description: 'SmartDex, agence web à Casablanca. Création de sites web, applications React et plateformes digitales pour entreprises marocaines.',
    url: 'https://smartdex.ma/agence-web-casablanca',
    siteName: 'SmartDex',
    locale: 'fr_MA',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://smartdex.ma/agence-web-casablanca',
  },
}

export default function AgenceWebCasablancaPage() {
  return (
    <article className="seo-page agence-web-casablanca">
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
            <span className="section-badge">Web</span>
          </div>
          <h1 className="seo-main-title">Agence Web Casablanca</h1>
          <p className="seo-subtitle muted">
            Sites web professionnels et applications sur mesure pour les PME marocaines. React, Next.js et performance au service de votre présence en ligne.
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
              À Casablanca et au Maroc, la présence en ligne est devenue indispensable pour les PME. Une vitrine professionnelle ou une application web sur mesure permet de capter des clients, générer des leads et renforcer votre crédibilité. SmartDex, <strong>agence web à Casablanca</strong>, conçoit des sites performants avec <strong>React</strong> et <strong>Next.js</strong> : chargement rapide, bon référencement naturel et expérience utilisateur soignée. Nous accompagnons les entreprises marocaines dans tous les secteurs : services, commerce, immobilier, santé. Que vous ayez besoin d&apos;un site vitrine, d&apos;une plateforme e-commerce ou d&apos;un outil interne, notre équipe maîtrise les technologies modernes pour livrer des projets robustes et maintenables. Consultez nos <Link href="/projects">réalisations</Link> et découvrez nos <Link href="/services">services</Link> pour passer à l&apos;action.
            </p>
          </section>

          <section className="seo-features">
            <h2>Ce que nous proposons</h2>
            <ul className="seo-list muted">
              <li>Sites vitrine optimisés SEO avec Next.js pour un référencement naturel efficace</li>
              <li>Applications web sur mesure (React, Node.js) : dashboards, espaces clients, réservations</li>
              <li>E-commerce et catalogues produits avec panier et paiement sécurisé</li>
              <li>Design responsive et accessible sur mobile, tablette et desktop</li>
              <li>Intégration CMS (Strapi, Sanity) ou headless selon vos besoins</li>
              <li>Hébergement, maintenance et support technique après la livraison</li>
            </ul>
          </section>

          <section className="seo-process">
            <h2>Notre processus</h2>
            <div className="seo-process-steps">
              <div className="seo-process-step">
                <div className="seo-process-num">Étape 01</div>
                <h3 className="seo-process-title">Découverte &amp; cahier des charges</h3>
                <p className="seo-process-desc">Analyse de vos besoins, objectifs et publics. Livrable : cahier des charges validé. Durée : environ 1 semaine.</p>
              </div>
              <div className="seo-process-step">
                <div className="seo-process-num">Étape 02</div>
                <h3 className="seo-process-title">Développement &amp; itérations</h3>
                <p className="seo-process-desc">Maquettes, développement et validations régulières. Durée variable selon le projet.</p>
              </div>
              <div className="seo-process-step">
                <div className="seo-process-num">Étape 03</div>
                <h3 className="seo-process-title">Livraison, tests &amp; support</h3>
                <p className="seo-process-desc">Mise en ligne, tests et formation. Support technique inclus après la livraison.</p>
              </div>
            </div>
          </section>

          <section className="seo-why">
            <h2>Pourquoi choisir SmartDex</h2>
            <div className="seo-why-grid">
              <div className="seo-why-card">
                <strong>7+ projets livrés au Maroc</strong>
                <p>Des sites et applications pour startups et PME marocaines, de Casablanca à Tanger.</p>
              </div>
              <div className="seo-why-card">
                <strong>Délais respectés à 100%</strong>
                <p>Engagement sur des jalons clairs et suivi transparent tout au long du projet.</p>
              </div>
              <div className="seo-why-card">
                <strong>Support réactif inclus</strong>
                <p>Maintenance et évolutions disponibles après la mise en ligne.</p>
              </div>
              <div className="seo-why-card">
                <strong>Code propre et maintenable</strong>
                <p>Technologies modernes et bonnes pratiques pour un projet pérenne.</p>
              </div>
            </div>
          </section>

          <section className="seo-faq">
            <h2>Questions fréquentes</h2>
            <details>
              <summary>Combien coûte un site web professionnel à Casablanca ?</summary>
              <div className="faq-answer">
                <p>Un site vitrine professionnel démarre autour de 15 000 à 35 000 MAD. Une application web sur mesure peut aller de 50 000 à 200 000 MAD. <Link href="/devis">Obtenir une estimation instantanée</Link>.</p>
              </div>
            </details>
            <details>
              <summary>Quelle est la différence entre un site vitrine et une application web ?</summary>
              <div className="faq-answer">
                <p>Un site vitrine présente votre entreprise. Une application web offre des fonctionnalités (réservations, panier, espace client). Nous concevons les deux avec React et Next.js.</p>
              </div>
            </details>
            <details>
              <summary>Combien de temps faut-il pour créer un site web ?</summary>
              <div className="faq-answer">
                <p>Un site vitrine : 2 à 4 semaines. Une application web avancée : 2 à 4 mois. Nous livrons par phases pour valider chaque étape.</p>
              </div>
            </details>
            <details>
              <summary>Proposez-vous la maintenance après la livraison ?</summary>
              <div className="faq-answer">
                <p>Oui. Nous proposons des forfaits maintenance : mises à jour, corrections, hébergement, sauvegardes et support. Tarifs adaptés à vos besoins.</p>
              </div>
            </details>
            <details>
              <summary>Travaillez-vous avec des entreprises hors de Casablanca ?</summary>
              <div className="faq-answer">
                <p>Oui. Nous travaillons avec des clients partout au Maroc et à l&apos;international. Échanges par visio et outils collaboratifs. Rencontre possible à Casablanca si vous êtes de passage.</p>
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
