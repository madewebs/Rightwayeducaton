const services = [
  {
    num: '01',
    title: 'College Admission in Bangalore',
    desc: 'Direct admission guidance for top Bangalore colleges — BTech, BBA, BCA, BCom, MBA, Medical & Nursing. Specialised support for Kerala students seeking Bangalore university admission.',
  },
  {
    num: '02',
    title: 'Application & Documentation Support',
    desc: 'End-to-end application assistance including SOPs, LORs, and documentation. We handle the complete Bangalore college admission process for you.',
  },
  {
    num: '03',
    title: 'Visa & Abroad Study Guidance',
    desc: 'Expert visa counseling and preparation for UK, USA, Canada, Australia & Europe. Maximize your approval chances for your dream destination.',
  },
  {
    num: '04',
    title: 'Scholarship & Management Quota',
    desc: 'Identify scholarships, grants, and management quota seats in top Bangalore engineering, medical, and business colleges — making quality education affordable.',
  },
]

function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <p className="section-tagline">What We Offer</p>
        <h2 className="section-title">Comprehensive Admission & Consultancy Services</h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem', opacity: 0.7, maxWidth: '700px', margin: '0 auto 2.5rem' }}>
          As the leading <strong>education consultancy in Kozhikode</strong>, we help students from Kerala secure <strong>direct admission in Bangalore colleges</strong> — from engineering and medicine to management and nursing.
        </p>
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
