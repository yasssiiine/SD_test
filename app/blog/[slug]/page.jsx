import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import './page.css'
import { getAllPosts, getPostBySlug } from '../../../lib/posts'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await Promise.resolve(params)
  const { frontmatter } = getPostBySlug(slug)
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      url: `https://smartdex.ma/blog/${slug}`,
      siteName: 'SmartDex',
      locale: 'fr_MA',
      type: 'article',
      publishedTime: frontmatter.date,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    alternates: { canonical: `https://smartdex.ma/blog/${slug}` },
  }
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

export default async function BlogPostPage({ params }) {
  const { slug } = await Promise.resolve(params)
  const { frontmatter, content } = getPostBySlug(slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.date,
    author: {
      '@type': 'Organization',
      name: 'SmartDex',
      url: 'https://smartdex.ma',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SmartDex',
      logo: 'https://smartdex.ma/logo.png',
    },
  }

  return (
    <main className="blog-article-page">
      <div className="container blog-article">
        <Link className="blog-back" href="/blog">
          ← Blog
        </Link>

        <div className="blog-badge">{frontmatter.category || 'Général'}</div>
        <h1 className="blog-h1">{frontmatter.title}</h1>
        <div className="blog-meta">
          <span>{formatDate(frontmatter.date)}</span>
          <span className="blog-dot">•</span>
          <span>{frontmatter.readingTime}</span>
        </div>

        <div className="blog-divider" />

        <article className="blog-prose">
          <MDXRemote source={content} />
        </article>

        <section className="blog-cta">
          <div className="blog-cta-inner">
            <div>
              <div className="blog-cta-title">Vous avez un projet ?</div>
              <div className="blog-cta-sub">Décrivez votre projet et recevez une estimation détaillée immédiatement.</div>
            </div>
            <Link className="blog-cta-link" href="/devis">
              Obtenir une estimation instantanée
            </Link>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}
