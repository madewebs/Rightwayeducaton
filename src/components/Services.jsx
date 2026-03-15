const services = [
  {
    num: '01',
    title: 'University Selection',
    desc: 'Personalized shortlisting based on your profile, preferences, and career goals across top destinations worldwide.',
  },
  {
    num: '02',
    title: 'Application Support',
    desc: 'End-to-end application assistance including SOPs, LORs, and documentation for a seamless submission.',
  },
  {
    num: '03',
    title: 'Visa Guidance',
    desc: 'Expert visa counseling and preparation to maximize your chances of approval for your dream destination.',
  },
  {
    num: '04',
    title: 'Scholarship Assistance',
    desc: 'Identify and apply for scholarships, grants, and funding options to make your dream education affordable.',
  },
]

function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <p className="section-tagline">What We Offer</p>
        <h2 className="section-title">Comprehensive Educational Solutions</h2>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.num} className="service-card">
              <div className="service-icon">{service.num}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
