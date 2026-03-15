const testimonials = [
  {
    quote: "The guidance I received for NIT Calicut was exceptional. They understood my preferences and helped me secure a seat in my dream course.",
    name: "Rahul V.",
    uni: "National Institute of Technology (NIT), Calicut",
  },
  {
    quote: "From choosing the right stream to getting into IIM Bangalore, Right Way was with me at every step. Truly professional consultation.",
    name: "Meera J.",
    uni: "Indian Institute of Management (IIM-B), Bangalore",
  },
  {
    quote: "I always dreamed of AIIMS, but the admission process seemed daunting. Right Way made it smooth and manageable.",
    name: "Aditya N.",
    uni: "All India Institute of Medical Sciences (AIIMS), Delhi",
  },
  {
    quote: "The team helped me navigate the admissions for Anna University perfectly. Highly recommended for students looking for quality education.",
    name: "Sowmya R.",
    uni: "Anna University, Chennai",
  },
  {
    quote: "Studying at Stanford felt like a distant dream until Right Way showed me the path. Their global expertise is unmatched.",
    name: "Arjun M.",
    uni: "Stanford University, USA",
  },
  {
    quote: "Transparent and professional. They helped me get into the University of Edinburgh with a full scholarship!",
    name: "Priya S.",
    uni: "University of Edinburgh, UK",
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
