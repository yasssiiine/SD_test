// import Link from 'next/link'
// import './page.css'
// import { getAllPosts } from '../../lib/posts'

// export const metadata = {
//   title: 'Blog — Conseils digitaux pour entreprises marocaines',
//   description:
//     'Articles et conseils sur le développement web, mobile, SaaS et la transformation digitale pour les entreprises au Maroc.',
//   openGraph: {
//     title: 'Blog SmartDex — Conseils digitaux Maroc',
//     description: 'Articles sur le développement web, mobile, SaaS et IA pour entrep rises marocaines.',
//     url: 'https://smartdex.ma/blog',
//     siteName: 'SmartDex',
//     locale: 'fr_MA',
//     type: 'website',
//     images: [{ url: '/og-image.png', width: 1200, height: 630 }],
//   },
//   alternates: { canonical: 'https://smartdex.ma/blog' },
// }

// function formatDate(dateStr) {
//   try {
//     return new Date(dateStr).toLocaleDateString('fr-FR', {
//       year: 'numeric',
//       month: 'long',
//       day: '2-digit',
//     })
//   } catch {
//     return dateStr
//   }
// }

// export default function BlogIndexPage() {
//   const posts = getAllPosts()

//   return (
//     <main className="blog-page">
//       <section className="container blog-hero">
//         <h1>Blog &amp; Ressources</h1>
//         <p className="blog-subtitle">
//           Conseils pratiques sur le web, mobile, SaaS et IA pour les entreprises marocaines.
//         </p>
//       </section>

//       <section className="container blog-grid">
//         {posts.map(post => (
//           <article key={post.slug} className="blog-card">
//             <div className="blog-badge">{post.category}</div>
//             <h2 className="blog-title">
//               <Link href={`/blog/${post.slug}`}>{post.title}</Link>
//             </h2>
//             <p className="blog-desc">{post.description}</p>
//             <div className="blog-meta">
//               <span>{formatDate(post.date)}</span>
//               <span className="blog-dot">•</span>
//               <span>{post.readingTime}</span>
//             </div>
//             <Link className="blog-read" href={`/blog/${post.slug}`}>
//               Lire l&apos;article →
//             </Link>
//           </article>
//         ))}
//       </section>
//     </main>
//   )
// }




import Link from 'next/link'
import './page.css'
import { getAllPosts } from '../../lib/posts'

export const metadata = {
  title: 'Blog — Conseils digitaux pour entreprises marocaines',
  description:
    'Articles et conseils sur le développement web, mobile, SaaS et la transformation digitale pour les entreprises au Maroc.',
  openGraph: {
    title: 'Blog SmartDex — Conseils digitaux Maroc',
    description: 'Articles sur le développement web, mobile, SaaS et IA pour entreprises marocaines.',
    url: 'https://smartdex.ma/blog',
    siteName: 'SmartDex',
    locale: 'fr_MA',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  alternates: { canonical: 'https://smartdex.ma/blog' },
}

function formatDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    })
  } catch {
    return dateStr
  }
}

const categoryIcon = (cat) => {
  if (!cat) return 'ti-article'
  const c = cat.toLowerCase()
  if (c.includes('web'))    return 'ti-browser'
  if (c.includes('mobile')) return 'ti-device-mobile'
  if (c.includes('saas'))   return 'ti-cloud-computing'
  if (c.includes('ia') || c.includes('ai')) return 'ti-brain'
  if (c.includes('seo'))    return 'ti-search'
  if (c.includes('design')) return 'ti-palette'
  if (c.includes('auto'))   return 'ti-settings-automation'
  return 'ti-tag'
}

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@3.10.0/dist/tabler-icons.min.css" />

      <main className="blog-page">

        {/* ── Hero ── */}
        <section className="blog-hero-wrap">
          <div className="blog-hero-glow" aria-hidden="true" />
          <div className="container blog-hero">
            <div className="blog-hero-badge">
              <i className="ti ti-news" />
              Blog & Ressources
            </div>
            <h1>
              Insights digitaux<br />
              <span className="blog-hero-accent">pour votre croissance</span>
            </h1>
            <p className="blog-subtitle">
              Conseils pratiques sur le web, mobile, SaaS et IA pour les entreprises marocaines.
            </p>
            <div className="blog-hero-stats">
              <div className="blog-stat">
                <i className="ti ti-article" />
                <span>{posts.length} articles</span>
              </div>
              <div className="blog-stat-dot" />
              <div className="blog-stat">
                <i className="ti ti-clock" />
                <span>Lecture rapide</span>
              </div>
              <div className="blog-stat-dot" />
              <div className="blog-stat">
                <i className="ti ti-world" />
                <span>En français</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Grid ── */}
        <div className="container blog-body">
          <div className="blog-grid">
            {posts.map((post, i) => (
              <article key={post.slug} className="blog-card">
                <div className="blog-card-top">
                  <div className="blog-badge">
                    <i className={`ti ${categoryIcon(post.category)}`} />
                    {post.category}
                  </div>
                  <div className="blog-card-icon" aria-hidden="true">
                    <i className={`ti ${categoryIcon(post.category)}`} />
                  </div>
                </div>

                <h2 className="blog-title">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="blog-desc">{post.description}</p>

                <div className="blog-card-footer">
                  <div className="blog-meta">
                    <i className="ti ti-calendar" />
                    <span>{formatDate(post.date)}</span>
                    <span className="blog-dot" />
                    <i className="ti ti-clock" />
                    <span>{post.readingTime}</span>
                  </div>
                  <Link className="blog-read" href={`/blog/${post.slug}`}>
                    Lire
                    <i className="ti ti-arrow-right" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

      </main>
    </>
  )
}