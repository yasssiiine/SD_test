import { getTestimonials } from '../services/testimonialService'
import './Testimonials.css'

export default function Testimonials() {
  const data = getTestimonials()

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <div className="section-badge-wrapper">
            <span className="section-badge">Témoignages</span>
          </div>
          <h2 className="section-title">Ce que disent nos clients</h2>
          <p className="section-desc muted">
            Des retours concrets sur les solutions digitales que nous construisons avec nos clients.
          </p>
        </div>

        <div className="testimonials-grid">
          {data.map((testimonial) => (
            <article key={testimonial.id} className="testimonial-card" data-reveal>
              {testimonial.project && (
                <span className="testimonial-project">{testimonial.project}</span>
              )}
              <p className="testimonial-quote">“{testimonial.quote}”</p>
              <div className="testimonial-author">
                <strong>{testimonial.author}</strong>
                {testimonial.company && <span>{testimonial.company}</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
