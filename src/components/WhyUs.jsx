const stats = [
  { value: '98%', label: 'Visa success rate' },
  { value: '5000+', label: 'Students placed in India & abroad' },
  { value: '50+', label: 'Partner colleges in Bangalore' },
  { value: 'Free', label: 'Initial consultation' },
]

function WhyUs() {
  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <div className="why-us-content">
          <div className="why-us-text">
            <p className="section-tagline">Why Choose Us</p>
            <h2 className="section-title">The Best Admission Consultants for Bangalore Colleges in Kozhikode</h2>
            <p className="why-us-desc">
              Right Way Education is Kozhikode's most trusted <strong>college admission consultancy for Bangalore</strong>. 
              With years of experience, we've helped thousands of Kerala students secure direct admission in top Bangalore 
              engineering, medical, nursing, and management colleges — hassle-free.
            </p>
            <ul className="why-us-list">
              {stats.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong> {stat.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="why-us-visual">
            <div className="stat-card">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
