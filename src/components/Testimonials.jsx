const testimonials = [
  {
    quote: "Right Way Education made my dream of studying in the UK a reality. Their guidance was invaluable.",
    name: "Priya S.",
    uni: "University of Edinburgh, UK",
  },
  {
    quote: "From zero to Stanford—I couldn't have done it without their expert support and patience.",
    name: "Arjun M.",
    uni: "Stanford University, USA",
  },
  {
    quote: "Transparent, professional, and genuinely care about your success. Highly recommend!",
    name: "Neha K.",
    uni: "University of Melbourne, Australia",
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <p className="section-tagline">Success Stories</p>
        <h2 className="section-title">What Our Students Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="testimonial-card">
              <p>&ldquo;{t.quote}&rdquo;</p>
              <footer>
                <cite>— {t.name}</cite>
                <span>{t.uni}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
