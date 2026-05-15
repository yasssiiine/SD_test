import Link from 'next/link'
import ChatbotTrigger from '../../components/ChatbotTrigger'
import '../seo-pages.css'

const features = [
  {
    title: 'Chatbot IA basé sur LLM',
    benefit: 'Réponses naturelles, précises et adaptées à votre activité.',
    useCase: 'Un cabinet de services peut répondre aux demandes de devis, expliquer ses offres et qualifier le besoin avant l’appel commercial.',
  },
  {
    title: 'Intégration WhatsApp Business',
    benefit: 'Vos clients obtiennent une réponse rapide sur le canal qu’ils utilisent déjà.',
    useCase: 'Une boutique e-commerce au Maroc peut gérer le suivi commande, les questions livraison et les demandes produit directement sur WhatsApp.',
  },
  {
    title: 'Multilingue FR / AR / Darija',
    benefit: 'Une expérience fluide pour les clients francophones, arabophones et darijophones.',
    useCase: 'Une clinique peut accueillir les demandes en français, arabe ou darija sans multiplier les scripts de réponse.',
  },
  {
    title: 'Connexion CRM / API',
    benefit: 'Les leads, rendez-vous et demandes importantes arrivent automatiquement dans vos outils.',
    useCase: 'Une agence immobilière peut envoyer les prospects qualifiés vers son CRM avec budget, ville, type de bien et urgence.',
  },
  {
    title: 'Analytics & optimisation',
    benefit: 'Vous suivez les questions fréquentes, les conversions et les points de friction.',
    useCase: 'Une équipe support peut repérer les demandes récurrentes et améliorer les réponses chaque mois.',
  },
]

const useCases = [
  {
    sector: 'Clinique',
    title: 'Prise de RDV automatisée',
    text: 'Le chatbot répond aux questions fréquentes, collecte le motif de consultation et propose une prise de rendez-vous selon vos disponibilités.',
  },
  {
    sector: 'E-commerce',
    title: 'Support + ventes sur WhatsApp',
    text: 'Il recommande des produits, répond aux questions livraison, relance les paniers abandonnés et transmet les demandes complexes à votre équipe.',
  },
  {
    sector: 'Immobilier',
    title: 'Qualification des leads',
    text: 'Le chatbot filtre les prospects par budget, localisation, type de bien et délai d’achat pour prioriser les meilleurs contacts.',
  },
  {
    sector: 'Services',
    title: 'Automatisation des demandes',
    text: 'Il collecte les informations nécessaires, explique vos offres et déclenche une estimation ou un rappel commercial.',
  },
]

const pricing = [
  {
    name: 'Chatbot FAQ simple',
    price: '15 000 - 30 000 MAD',
    fit: 'Pour répondre aux questions fréquentes sur un site vitrine.',
    items: ['Widget web personnalisé', 'Scénarios FAQ', 'Formulaire de contact', 'Installation et test'],
  },
  {
    name: 'Chatbot IA avancé',
    price: '35 000 - 75 000 MAD',
    fit: 'Pour qualifier les leads et traiter des demandes plus ouvertes.',
    items: ['Assistant IA entraîné sur vos contenus', 'FR / AR / Darija', 'Qualification automatique', 'Dashboard de suivi'],
  },
  {
    name: 'Chatbot + WhatsApp + automatisation complète',
    price: '80 000 - 150 000 MAD',
    fit: 'Pour automatiser WhatsApp, CRM, rendez-vous et workflows métier.',
    items: ['WhatsApp Business API', 'Connexion CRM / API', 'Routage vers équipes', 'Optimisation mensuelle'],
  },
]

const faqs = [
  {
    question: 'Quel est le prix d’un chatbot IA au Maroc ?',
    answer: 'Le prix dépend du niveau d’automatisation. Un chatbot FAQ simple démarre souvent entre 15 000 et 30 000 MAD. Un chatbot IA avancé se situe généralement entre 35 000 et 75 000 MAD. Une solution complète avec WhatsApp Business, CRM et automatisations peut aller de 80 000 à 150 000 MAD.',
  },
  {
    question: 'Est-ce que SmartDex intègre la WhatsApp API au Maroc ?',
    answer: 'Oui. Nous accompagnons les entreprises marocaines dans la configuration WhatsApp Business API, les scénarios de réponse, le routage des messages et la connexion avec vos outils commerciaux.',
  },
  {
    question: 'Combien de temps faut-il pour développer un chatbot entreprise Maroc ?',
    answer: 'Un chatbot FAQ peut être livré en 2 à 3 semaines. Un chatbot IA avec WhatsApp et intégrations CRM demande souvent 4 à 8 semaines selon le volume de contenus, les tests et les automatisations à connecter.',
  },
  {
    question: 'Quelles langues sont supportées ?',
    answer: 'Nous pouvons déployer un chatbot en français, arabe, darija et anglais. Le ton, les expressions et les réponses sont adaptés à votre marque et à votre audience au Maroc.',
  },
  {
    question: 'Quel ROI peut-on attendre d’un chatbot WhatsApp Maroc ?',
    answer: 'Le ROI vient surtout de la réduction du temps de réponse, de la récupération de leads hors horaires ouvrables et de la qualification automatique. Sur des cas réalistes, une PME peut viser plus de leads traités et moins de charge support en quelques mois.',
  },
  {
    question: 'Le chatbot peut-il générer des leads qualifiés ?',
    answer: 'Oui. Il peut poser les bonnes questions, collecter budget, besoin, ville, urgence et coordonnées, puis envoyer les leads qualifiés vers votre CRM, votre email ou votre équipe commerciale.',
  },
  {
    question: 'Peut-on connecter le chatbot à un CRM, ERP ou calendrier ?',
    answer: 'Oui. Nous connectons le chatbot à vos outils via API lorsque c’est possible : CRM, ERP, calendrier de rendez-vous, base produits, outil de ticketing ou système interne.',
  },
  {
    question: 'Est-ce adapté aux cliniques, e-commerce et sociétés de services ?',
    answer: 'Oui. Les cliniques l’utilisent pour les rendez-vous, l’e-commerce pour le support et les ventes, l’immobilier pour qualifier les prospects et les sociétés de services pour automatiser les demandes de devis.',
  },
  {
    question: 'Le chatbot remplace-t-il mon équipe support ?',
    answer: 'Non. Le meilleur usage est de filtrer les demandes répétitives, répondre 24/7 et transférer les cas sensibles à votre équipe. Vos collaborateurs gardent la main sur les conversations importantes.',
  },
  {
    question: 'Comment démarrer avec SmartDex ?',
    answer: 'Vous pouvez demander une estimation instantanée, voir une démo ou nous contacter. Nous analysons vos objectifs, vos canaux actuels et les scénarios à automatiser avant de proposer une solution adaptée.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  })),
}

export const metadata = {
  title: 'AI Chatbot Maroc — WhatsApp, Leads & Service Client | SmartDex',
  description: 'AI Chatbot Maroc pour PME, cliniques, e-commerce et services. Automatisez WhatsApp, qualifiez les leads et réduisez le temps de réponse avec SmartDex.',
  keywords: 'AI Chatbot Maroc, chatbot entreprise Maroc, chatbot WhatsApp Maroc, automatisation service client Maroc, WhatsApp API Maroc, chatbot IA Casablanca',
  openGraph: {
    title: 'AI Chatbot Maroc — WhatsApp, Leads & Service Client',
    description: 'Automatisez votre service client et vos leads avec un chatbot IA connecté à WhatsApp Business pour les entreprises marocaines.',
    url: 'https://smartdex.ma/ai-chatbot-morocco',
    siteName: 'SmartDex',
    locale: 'fr_MA',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://smartdex.ma/ai-chatbot-morocco',
  },
}

export default function AiChatbotMoroccoPage() {
  return (
    <article className="seo-page ai-chatbot-morocco">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />


      <header className="seo-hero seo-hero-split" data-reveal>
        <div className="seo-hero-bg" />
        <div className="container seo-hero-grid">
          <div className="seo-hero-copy">
            <div className="section-badge-wrapper">
              <span className="section-badge">IA &amp; WhatsApp Business</span>
            </div>
            <h1 className="seo-main-title">AI Chatbot Maroc</h1>
            <p className="seo-subtitle muted">
              Transformez les conversations client en leads qualifiés, rendez-vous et ventes. SmartDex crée des chatbots IA pour entreprises marocaines avec automatisation WhatsApp, réponses 24/7 et suivi des performances.
            </p>
            <div className="seo-hero-ctas">
              <ChatbotTrigger className="btn">Voir une démo</ChatbotTrigger>
            </div>
            <div className="seo-trust-row" aria-label="Indicateurs de confiance">
              <span><strong>+7</strong> projets réalisés</span>
              <span><strong>PME</strong> marocaines accompagnées</span>
              <span><strong>24/7</strong> réponses automatisées</span>
            </div>
          </div>

          <div className="seo-hero-panel" aria-label="Aperçu chatbot">
            <div className="seo-chat-preview">
              <div className="seo-chat-top">Assistant SmartDex</div>
              <p className="seo-chat-bubble bot">Bonjour, comment puis-je vous aider aujourd’hui ?</p>
              <p className="seo-chat-bubble user">Je veux automatiser WhatsApp pour mes leads.</p>
              <p className="seo-chat-bubble bot">Très bien. Je peux qualifier le besoin, collecter le budget et envoyer le prospect vers votre CRM.</p>
              <div className="seo-chat-metrics">
                <span><strong>+40%</strong> leads</span>
                <span><strong>-60%</strong> temps de réponse</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="seo-content" data-reveal>
        <div className="container">
          <section className="seo-intro seo-section-narrow">
            <h2>Pourquoi les entreprises marocaines adoptent les chatbots IA ?</h2>
            <p>
              Les clients attendent une réponse rapide, surtout sur WhatsApp. Pourtant, beaucoup de PME marocaines perdent des prospects à cause d’un temps de réponse lent, d’une surcharge de l’équipe support ou d’un manque de suivi après les horaires de bureau.
            </p>
            <div className="seo-problem-solution">
              <div>
                <h3>Les problèmes fréquents</h3>
                <ul className="seo-list muted">
                  <li>Temps de réponse lent sur le site, WhatsApp et les réseaux sociaux</li>
                  <li>Perte de leads parce que les demandes ne sont pas qualifiées à temps</li>
                  <li>Surcharge de l’équipe support avec des questions répétitives</li>
                </ul>
              </div>
              <div>
                <h3>La solution SmartDex</h3>
                <ul className="seo-list muted">
                  <li>Chatbot 24/7 pour répondre immédiatement aux questions clés</li>
                  <li>WhatsApp automation pour capter les demandes là où vos clients discutent</li>
                  <li>Qualification automatique avant transfert vers votre équipe commerciale</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="seo-cta-strip">
            <div>
              <h2>Vous perdez des leads hors horaires ouvrables ?</h2>
              <p>Recevez une estimation courte, claire et adaptée à votre activité au Maroc.</p>
            </div>
            <Link href="/devis" className="btn btn-primary">Obtenir une estimation instantanée</Link>
          </section>

          <section className="seo-features">
            <h2>Fonctionnalités d’un chatbot entreprise Maroc</h2>
            <div className="seo-feature-grid">
              {features.map(feature => (
                <article className="seo-feature-card" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p><strong>Bénéfice :</strong> {feature.benefit}</p>
                  <p><strong>Cas réel :</strong> {feature.useCase}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="seo-use-cases">
            <h2>Cas d’usage du chatbot IA au Maroc</h2>
            <div className="seo-use-case-grid">
              {useCases.map(useCase => (
                <article className="seo-use-case-card" key={useCase.sector}>
                  <span>{useCase.sector}</span>
                  <h3>{useCase.title}</h3>
                  <p>{useCase.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="seo-cta-strip seo-cta-strip-soft">
            <div>
              <h2>Testez le parcours conversationnel</h2>
              <p>Ouvrez une démo et voyez comment un chatbot WhatsApp Maroc peut qualifier une demande.</p>
            </div>
            <ChatbotTrigger className="btn btn-primary">Voir une démo</ChatbotTrigger>
          </section>

          <section className="seo-pricing">
            <h2>Prix chatbot Maroc : offres structurées</h2>
            <p className="seo-section-lead muted">
              Les fourchettes ci-dessous donnent un repère réaliste. Le prix final dépend des langues, du nombre de scénarios, des intégrations et du niveau d’automatisation service client Maroc attendu.
            </p>
            <div className="seo-pricing-grid">
              {pricing.map(plan => (
                <article className="seo-pricing-card" key={plan.name}>
                  <h3>{plan.name}</h3>
                  <div className="seo-price">{plan.price}</div>
                  <p>{plan.fit}</p>
                  <ul className="seo-list muted">
                    {plan.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                  <Link href="/devis" className="btn btn-primary">Demander ce niveau</Link>
                </article>
              ))}
            </div>
          </section>

          <section className="seo-results">
            <div>
              <span className="section-badge">Résultats obtenus</span>
              <h2>Un exemple réaliste de performance après déploiement</h2>
              <p>
                Pour une PME marocaine recevant des demandes via site web et WhatsApp, un chatbot IA bien configuré peut absorber les questions répétitives, capturer les leads hors horaires et transmettre les demandes prioritaires à l’équipe commerciale.
              </p>
            </div>
            <div className="seo-results-grid">
              <div><strong>+40%</strong><span>leads mieux qualifiés</span></div>
              <div><strong>-60%</strong><span>temps de réponse moyen</span></div>
              <div><strong>24/7</strong><span>disponibilité client</span></div>
            </div>
          </section>

          <section className="seo-internal-links">
            <h2>Renforcez votre écosystème digital</h2>
            <p>
              Un AI Chatbot Maroc devient plus puissant lorsqu’il est connecté à votre site, votre CRM et vos contenus. Explorez aussi nos pages <Link href="/services">services digitaux</Link>, <Link href="/saas-development">développement SaaS</Link>, <Link href="/contact">contact</Link> et nos ressources du <Link href="/blog">blog SmartDex</Link>.
            </p>
            <div className="seo-link-row">
              <Link href="/services">Services</Link>
              <Link href="/saas-development">SaaS Maroc</Link>
              <Link href="/blog/saas-vs-logiciel-sur-mesure-maroc">SaaS vs logiciel sur mesure</Link>
              <Link href="/blog/systeme-reservation-en-ligne-maroc-2026">Réservation en ligne Maroc</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </section>

          <section className="seo-faq">
            <h2>Questions fréquentes sur les chatbots IA au Maroc</h2>
            {faqs.map(faq => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </section>

          <section className="seo-cta-banner">
            <h2>Prêt à automatiser vos leads et votre support ?</h2>
            <p>Décrivez votre besoin en quelques étapes. Nous vous donnons une estimation claire, sans jargon et adaptée au marché marocain.</p>
            <div className="seo-hero-ctas">
              <Link href="/devis" className="btn btn-primary">Obtenir une estimation instantanée</Link>
              <Link href="/contact" className="btn">Parler à SmartDex</Link>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}
