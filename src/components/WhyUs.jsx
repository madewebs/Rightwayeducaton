const stats = [
  { value: '98%', label: 'Visa success rate' },
  { value: '5000+', label: 'Students placed globally' },
  { value: '15+', label: 'Global & Domestic Destinations' },
  { value: 'Free', label: 'initial consultation' },
]

function WhyUs() {
  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <div className="why-us-content">
          <div className="why-us-text">
            <p className="section-tagline">Why Choose Us</p>
            <h2 className="section-title">The Right Way to Your Dream Destination</h2>
            <p className="why-us-desc">
              With years of experience and thousands of successful placements, we&apos;ve
              perfected the art of guiding students to their ideal universities and institutions.
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
