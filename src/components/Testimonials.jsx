const testimonials = [
  {
    quote: "Securing an MBA seat at Christ University seemed impossible until I spoke with Right Way. Their expertise in the admission process is unparalleled.",
    name: "Rahul V.",
    uni: "Christ University, Bangalore",
  },
  {
    quote: "From entrance coaching to final admission at St. John's Medical College, the team supported me every step of the way. Truly grateful!",
    name: "Meera J.",
    uni: "St. John's Medical College, Bangalore",
  },
  {
    quote: "I highly recommend Right Way for Engineering aspirants. They helped me get into PES University for Computer Science, and the process was seamless.",
    name: "Aditya N.",
    uni: "PES University, Bangalore",
  },
  {
    quote: "The guidance I received for Jain University was exceptional. They understood my career goals and helped me choose the best management program.",
    name: "Sowmya R.",
    uni: "Jain University, Bangalore",
  },
  {
    quote: "As a nursing student, I found their advice on MS Ramaiah Institute of Nursing very helpful. They made the documentation and application so easy.",
    name: "Priya S.",
    uni: "MS Ramaiah Institute of Nursing, Bangalore",
  },
  {
    quote: "Right Way is the best for Arts and Science admissions. They helped me secure a seat in Kristu Jayanti College for my Master's.",
    name: "Arjun M.",
    uni: "Kristu Jayanti College, Bangalore",
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
