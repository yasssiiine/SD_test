import Link from 'next/link'
import './page.css'
import { getAllPosts } from '../../lib/posts'

export const metadata = {
  title: 'Blog — Conseils digitaux pour entreprises marocaines',
  description:
    'Articles et conseils sur le développement web, mobile, SaaS et la transformation digitale pour les entreprises au Maroc.',
  openGraph: {
    title: 'Blog SmartDex — Conseils digitaux Maroc',
    description: 'Articles sur le développement web, mobile, SaaS et IA pour entrep rises marocaines.',
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

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <main className="blog-page">
      <section className="container blog-hero">
        <h1>Blog &amp; Ressources</h1>
        <p className="blog-subtitle">
          Conseils pratiques sur le web, mobile, SaaS et IA pour les entreprises marocaines.
        </p>
      </section>

      <section className="container blog-grid">
        {posts.map(post => (
          <article key={post.slug} className="blog-card">
            <div className="blog-badge">{post.category}</div>
            <h2 className="blog-title">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="blog-desc">{post.description}</p>
            <div className="blog-meta">
              <span>{formatDate(post.date)}</span>
              <span className="blog-dot">•</span>
              <span>{post.readingTime}</span>
            </div>
            <Link className="blog-read" href={`/blog/${post.slug}`}>
              Lire l&apos;article →
            </Link>
          </article>
        ))}
      </section>
    </main>
  )
}