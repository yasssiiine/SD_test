import Link from 'next/link'
import '../seo-pages.css'
import './DeveloppementErpCrmMaroc.css'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: "Quelle est la différence entre un ERP et un CRM ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Le CRM gère la relation client (ventes, suivi, marketing). L'ERP couvre l'ensemble de l'entreprise : stocks, production, RH, comptabilité. Un ERP peut intégrer un module CRM ou les deux peuvent être connectés."
      }
    },
    {
      '@type': 'Question',
      name: "Pourquoi développer un ERP sur mesure plutôt qu'utiliser un logiciel existant ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un ERP sur mesure s'adapte exactement à vos process, évite les modules inutiles et les contraintes des solutions génériques. Idéal pour les secteurs spécifiques (logistique, industrie, services) où les outils du marché ne collent pas à vos besoins."
      }
    },
    {
      '@type': 'Question',
      name: "Combien coûte un ERP sur mesure au Maroc ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Les coûts varient selon le périmètre : un CRM simple 50 000 à 100 000 MAD, un ERP complet 150 000 à 500 000 MAD ou plus. Nous proposons des phases (MVP puis évolutions) pour maîtriser l'investissement."
      }
    },
    {
      '@type': 'Question',
      name: "Pouvez-vous intégrer l'ERP avec mes outils existants ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Oui. Nous connectons l'ERP à vos logiciels (comptabilité, e-commerce, CRM, bases métier) via API REST ou connecteurs. Synchronisation des données en temps réel ou planifiée selon vos besoins."
      }
    },
    {
      '@type': 'Question',
      name: "Combien de temps prend le développement d'un ERP ?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Un CRM ou ERP modulaire : 3 à 6 mois pour un MVP. Un ERP complet avec plusieurs modules : 6 à 18 mois. Nous livrons par phases pour une mise en production progressive."
      }
    }
  ]
}

export const metadata = {
  title: 'Développement ERP & CRM Maroc — Gestion sur mesure | SmartDex',
  description: 'SmartDex développe des ERP et CRM sur mesure pour entreprises marocaines. Gestion commerciale, RH, stocks. Basé à Casablanca.',
  keywords: 'développement ERP CRM Maroc, logiciel gestion entreprise Maroc, CRM sur mesure Casablanca, agence web maroc, casablanca',
  openGraph: {
    title: 'Développement ERP & CRM Maroc — Gestion sur mesure',
    description: 'SmartDex développe des ERP et CRM sur mesure pour entreprises marocaines. Gestion commerciale, RH, stocks. Basé à Casablanca.',
    url: 'https://smartdex.ma/developpement-erp-crm-maroc',
    siteName: 'SmartDex',
    locale: 'fr_MA',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://smartdex.ma/developpement-erp-crm-maroc',
  },
}

export default function DeveloppementErpCrmMarocPage() {
  return (
    <article className="seo-page developpement-erp-crm-maroc">
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
            <span className="section-badge">ERP &amp; CRM</span>
          </div>
          <h1 className="seo-main-title">Développement ERP &amp; CRM Maroc</h1>
          <p className="seo-subtitle muted">
            Logiciels de gestion sur mesure pour PME marocaines. Automatisation commerciale, stocks, RH et reporting. Conçus à Casablanca pour les entreprises du Maroc.
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
              La gestion interne des PME marocaines est souvent freinée par des outils génériques qui ne collent pas à leurs process. Un <strong>ERP</strong> ou un <strong>CRM</strong> sur mesure centralise vos données, automatise les tâches répétitives et améliore l&apos;<strong>efficacité opérationnelle</strong>. SmartDex, basée à <strong>Casablanca</strong>, développe des logiciels de gestion adaptés aux entreprises marocaines : gestion commerciale, suivi des leads, stocks, facturation, RH, tableaux de bord. Nous concevons des solutions évolutives avec React, Node.js et des bases de données robustes. Que vous soyez dans la distribution, la logistique, les services ou l&apos;industrie, nous intégrons l&apos;ERP ou le CRM à vos outils existants et à vos habitudes de travail. Découvrez nos <Link href="/services">services</Link> et nos <Link href="/projects">réalisations</Link>, ou <Link href="/devis">obtenez une estimation instantanée</Link> pour vos besoins.
            </p>
          </section>

          <section className="seo-features">
            <h2>Ce que nous proposons</h2>
            <ul className="seo-list muted">
              <li>CRM sur mesure : gestion des leads, pipeline commercial, suivi client et reporting</li>
              <li>ERP modulaire : stocks, approvisionnement, production, facturation, RH</li>
              <li>Interfaces React responsives et tableaux de bord temps réel</li>
              <li>API REST pour intégrer comptabilité, e-commerce, logiciels métier existants</li>
              <li>Base de données sécurisée (PostgreSQL) et contrôle d&apos;accès par rôles</li>
              <li>Formation, déploiement et support technique après la mise en production</li>
            </ul>
          </section>

          <section className="seo-process">
            <h2>Notre processus</h2>
            <div className="seo-process-steps">
              <div className="seo-process-step">
                <div className="seo-process-num">Étape 01</div>
                <h3 className="seo-process-title">Découverte &amp; cahier des charges</h3>
                <p className="seo-process-desc">Audit de vos process, flux et outils existants. Livrable : cahier des charges et planning. Durée : environ 1 semaine.</p>
              </div>
              <div className="seo-process-step">
                <div className="seo-process-num">Étape 02</div>
                <h3 className="seo-process-title">Développement &amp; itérations</h3>
                <p className="seo-process-desc">Développement par modules avec validations régulières. La durée varie selon le périmètre (CRM, ERP partiel ou complet).</p>
              </div>
              <div className="seo-process-step">
                <div className="seo-process-num">Étape 03</div>
                <h3 className="seo-process-title">Livraison, tests &amp; support</h3>
                <p className="seo-process-desc">Mise en production, formation des équipes, migration des données et support continu.</p>
              </div>
            </div>
          </section>

          <section className="seo-why">
            <h2>Pourquoi choisir SmartDex</h2>
            <div className="seo-why-grid">
              <div className="seo-why-card">
                <strong>7+ projets livrés au Maroc</strong>
                <p>Logiciels de gestion, <Link href="/saas-development-morocco">SaaS</Link> et applications web pour PME marocaines.</p>
              </div>
              <div className="seo-why-card">
                <strong>Délais respectés à 100%</strong>
                <p>Jalons définis ensemble et livraison par phases pour maîtriser les délais.</p>
              </div>
              <div className="seo-why-card">
                <strong>Support réactif inclus</strong>
                <p>Maintenance, corrections et évolutions disponibles après la mise en production.</p>
              </div>
              <div className="seo-why-card">
                <strong>Code propre et maintenable</strong>
                <p>Architecture modulaire et documentée pour des évolutions long terme.</p>
              </div>
            </div>
          </section>

          <section className="seo-faq">
            <h2>Questions fréquentes</h2>
            <details>
              <summary>Quelle est la différence entre un ERP et un CRM ?</summary>
              <div className="faq-answer">
                <p>Le CRM gère la relation client (ventes, suivi, marketing). L&apos;ERP couvre toute l&apos;entreprise : stocks, production, RH, comptabilité. Un ERP peut intégrer un module CRM ou les deux peuvent être connectés.</p>
              </div>
            </details>
            <details>
              <summary>Pourquoi développer un ERP sur mesure plutôt qu&apos;utiliser un logiciel existant ?</summary>
              <div className="faq-answer">
                <p>Un ERP sur mesure s&apos;adapte exactement à vos process, évite les modules inutiles et les contraintes des solutions génériques. Idéal pour les secteurs où les outils du marché ne collent pas à vos besoins.</p>
              </div>
            </details>
            <details>
              <summary>Combien coûte un ERP sur mesure au Maroc ?</summary>
              <div className="faq-answer">
                <p>Un CRM simple : 50 000 à 100 000 MAD. Un ERP complet : 150 000 à 500 000 MAD ou plus. Nous proposons des phases (MVP puis évolutions). <Link href="/devis">Obtenir une estimation instantanée</Link>.</p>
              </div>
            </details>
            <details>
              <summary>Pouvez-vous intégrer l&apos;ERP avec mes outils existants ?</summary>
              <div className="faq-answer">
                <p>Oui. Nous connectons l&apos;ERP à vos logiciels (comptabilité, e-commerce, CRM, bases métier) via API REST. Synchronisation en temps réel ou planifiée selon vos besoins.</p>
              </div>
            </details>
            <details>
              <summary>Combien de temps prend le développement d&apos;un ERP ?</summary>
              <div className="faq-answer">
                <p>Un CRM ou ERP modulaire : 3 à 6 mois pour un MVP. Un ERP complet : 6 à 18 mois. Nous livrons par phases pour une mise en production progressive. Voir aussi notre offre <Link href="/agence-web-casablanca">web</Link> et <Link href="/creation-application-mobile-maroc">mobile</Link>.</p>
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
