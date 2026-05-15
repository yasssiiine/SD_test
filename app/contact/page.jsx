'use client'

import { useEffect, useRef, useState } from 'react'
import { getFaqs, getMapConfig } from '../../services'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', projectType: '', budget: '', subject: '', message: ''
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [messageLength, setMessageLength] = useState(0)
  const mapRef = useRef(null)

  const validate = (f) => {
    const next = {}
    if (!f.name.trim()) next.name = 'Nom requis.'
    const emailOk = /.+@.+\..+/.test(f.email)
    const freeDomains = /(gmail|yahoo|hotmail|outlook|live|icloud)\./i
    if (!emailOk) next.email = 'Email invalide.'
    else if (freeDomains.test(f.email)) next.email = 'Utilisez un email professionnel.'
    if (!f.subject.trim()) next.subject = 'Sujet requis.'
    if (!f.message.trim() || f.message.trim().length < 20) next.message = 'Message trop court (minimum 20 caractères).'
    return next
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const v = validate(form)
    setErrors(v)
    if (Object.keys(v).length) return
    setIsSubmitting(true)
    setStatus(null)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setStatus('success')
    setTimeout(() => {
      setForm({ name: '', email: '', company: '', projectType: '', budget: '', subject: '', message: '' })
      setMessageLength(0)
      setStatus(null)
    }, 5000)
  }

  useEffect(() => {
    const ensureLeaflet = async () => {
      if (typeof window === 'undefined') return
      const hasL = !!window.L
      if (!hasL) {
        await new Promise((res) => {
          const link = document.createElement('link')
          link.rel = 'stylesheet'
          link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
          link.onload = res
          document.head.appendChild(link)
        })
        await new Promise((res) => {
          const s = document.createElement('script')
          s.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
          s.onload = res
          document.body.appendChild(s)
        })
      }
      const L = window.L
      if (mapRef.current || !L) return
      const el = document.getElementById('contact-map')
      if (!el) return
      const { center, zoom, popup } = getMapConfig()
      const map = L.map(el, { zoomControl: false }).setView(center, zoom)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap' }).addTo(map)
      const icon = L.divIcon({
        className: 'sd-map-marker',
        html: '<div class="marker-core">S</div>',
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      })
      L.marker(center, { icon }).addTo(map).bindPopup(popup)
      mapRef.current = map
    }
    ensureLeaflet()
  }, [])

  const setField = (k, v) => {
    setForm((prev) => ({ ...prev, [k]: v }))
    setErrors((prev) => ({ ...prev, [k]: undefined }))
    if (k === 'message') setMessageLength(v.length)
  }

  const faqs = getFaqs()

  return (
    <section id="contact" className="contact-section">
      <div className="contact-hero">
        <div className="container contact-hero-content">
          <div className="section-badge-wrapper">
            <span className="section-badge">Parler à l’assistant IA</span>
          </div>
          <h1 className="contact-main-title">Vous avez un projet ?</h1>
          <p className="contact-hero-subtitle">
            Nous avons les solutions. Discutons ensemble de vos besoins et transformons vos idées en réalité digitale.
          </p>
          <div className="contact-stats">
            <div className="contact-stat-item">
              <div className="stat-value">24h</div>
              <div className="stat-label">Délai de réponse</div>
            </div>
            <div className="contact-stat-divider" />
            <div className="contact-stat-item">
              <div className="stat-value">100%</div>
              <div className="stat-label">Projets réussis</div>
            </div>
            <div className="contact-stat-divider" />
            <div className="contact-stat-item">
              <div className="stat-value">30min</div>
              <div className="stat-label">Consultation gratuite</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container contact-main">
        <div className="quick-contact-section">
          <div className="quick-contact-grid">
            <div className="quick-contact-item">
              <div className="quick-icon">✉️</div>
              <div className="quick-content">
                <div className="quick-label">Email</div>
                <a href="mailto:contact@smartdex.ma" className="quick-value">contact@smartdex.ma</a>
              </div>
            </div>
            <div className="quick-contact-item">
              <div className="quick-icon">🕐</div>
              <div className="quick-content">
                <div className="quick-label">Horaires</div>
                <div className="quick-value">Lun - Ven : 9h - 18h</div>
              </div>
            </div>
            <div className="quick-contact-item">
              <div className="quick-icon">📍</div>
              <div className="quick-content">
                <div className="quick-label">Localisation</div>
                <div className="quick-value">Casablanca, Maroc</div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-main-grid">
          <div className="contact-form-wrapper">
            <div className="form-header">
              <h2 className="form-title">Envoyez-nous un message</h2>
              <p className="form-subtitle muted">Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.</p>
            </div>
            <form className="contact-form-enhanced" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">
                    <span className="label-text">Nom complet</span>
                    <span className="label-required">*</span>
                  </label>
                  <input
                    type="text"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    value={form.name}
                    onChange={(e) => setField('name', e.target.value)}
                    placeholder="Votre nom complet"
                    aria-invalid={!!errors.name}
                    disabled={isSubmitting}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">
                    <span className="label-text">Email professionnel</span>
                    <span className="label-required">*</span>
                  </label>
                  <input
                    type="email"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    value={form.email}
                    onChange={(e) => setField('email', e.target.value)}
                    placeholder="votre@email.com"
                    aria-invalid={!!errors.email}
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label"><span className="label-text">Entreprise</span></label>
                <input
                  type="text"
                  className="form-input"
                  value={form.company}
                  onChange={(e) => setField('company', e.target.value)}
                  placeholder="Nom de votre entreprise"
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label"><span className="label-text">Type de projet</span></label>
                  <select className="form-select" value={form.projectType} onChange={(e) => setField('projectType', e.target.value)} disabled={isSubmitting}>
                    <option value="">Sélectionnez un type</option>
                    <option value="web">Développement Web</option>
                    <option value="mobile">Application Mobile</option>
                    <option value="saas">Plateforme SaaS</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="integration">Intégration & API</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label"><span className="label-text">Budget estimé</span></label>
                  <select className="form-select" value={form.budget} onChange={(e) => setField('budget', e.target.value)} disabled={isSubmitting}>
                    <option value="">Sélectionnez une fourchette</option>
                    <option value="<5k">Moins de 5 000 MAD</option>
                    <option value="5k-15k">5 000 MAD - 15 000 MAD</option>
                    <option value="15k-50k">15 000 MAD - 50 000 MAD</option>
                    <option value="50k+">Plus de 50 000 MAD</option>
                    <option value="discuss">À discuter</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">
                  <span className="label-text">Sujet</span>
                  <span className="label-required">*</span>
                </label>
                <input
                  type="text"
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  value={form.subject}
                  onChange={(e) => setField('subject', e.target.value)}
                  placeholder="Objet de votre message"
                  aria-invalid={!!errors.subject}
                  disabled={isSubmitting}
                />
                {errors.subject && <span className="field-error">{errors.subject}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">
                  <span className="label-text">Message détaillé</span>
                  <span className="label-required">*</span>
                  <span className="label-counter">{messageLength}/500</span>
                </label>
                <textarea
                  rows={8}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  value={form.message}
                  onChange={(e) => setField('message', e.target.value)}
                  placeholder="Décrivez votre projet en détail... (minimum 20 caractères)"
                  aria-invalid={!!errors.message}
                  maxLength={500}
                  disabled={isSubmitting}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
                <div className="char-counter">
                  {messageLength < 20 && (
                    <span className="char-warning">Minimum 20 caractères requis ({20 - messageLength} restants)</span>
                  )}
                </div>
              </div>
              <button className={`btn btn-primary contact-submit-btn ${isSubmitting ? 'submitting' : ''}`} type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><span className="spinner" /><span>Envoi en cours...</span></>
                ) : (
                  <><span>Envoyer le message</span><span className="btn-arrow">→</span></>
                )}
              </button>
              {status === 'success' && (
                <div className="form-status success">
                  <div className="status-icon">✓</div>
                  <div>
                    <strong>Message envoyé avec succès !</strong>
                    <p>Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="contact-sidebar">
            <div className="contact-map-card">
              <div className="map-header">
                <h3 className="map-title">Notre Localisation</h3>
                <p className="map-subtitle muted">Visitez notre bureau à Casablanca</p>
              </div>
              <div id="contact-map" className="contact-map" />
            </div>
            <div className="contact-socials-card">
              <h3 className="socials-title">Suivez-nous sur les réseaux</h3>
              <p className="socials-subtitle muted">Restez connecté avec nous</p>
              <div className="social-links-enhanced">
                <a href="#" className="social-link" aria-label="LinkedIn"><span className="social-label">LinkedIn</span></a>
                <a href="#" className="social-link" aria-label="GitHub"><span className="social-label">GitHub</span></a>
                <a href="#" className="social-link" aria-label="X/Twitter"><span className="social-label">X / Twitter</span></a>
                <a href="#" className="social-link" aria-label="Facebook"><span className="social-label">Facebook</span></a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-faq-section">
          <div className="faq-header">
            <h2 className="faq-title">Questions Fréquentes</h2>
            <p className="faq-subtitle muted">Trouvez rapidement les réponses à vos questions</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question">
                  <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{faq.question}</h3>
                </div>
                <p className="faq-answer muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-cta-section">
          <div className="contact-cta-card">
            <div className="cta-icon-wrapper">
              <div className="cta-icon">💬</div>
            </div>
            <h3 className="cta-title">Besoin d&apos;une réponse rapide ?</h3>
            <p className="cta-description muted">Envoyez-nous un email et nous vous répondrons dans les plus brefs délais.</p>
            <div className="cta-buttons">
              <a href="mailto:contact@smartdex.ma" className="btn btn-primary cta-btn">
                <span>✉️ Envoyer un email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
