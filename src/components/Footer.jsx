import logo from '/newlogo.png'

const destinations = [
  { label: 'Kerala', id: 'kerala' },
  { label: 'Karnataka', id: 'karnataka' },
  { label: 'Tamil Nadu', id: 'tamilnadu' },
  { label: 'Bangalore', id: 'bangalore' },
  { label: 'Pune', id: 'pune' },
  { label: 'Punjab', id: 'punjab' },
  { label: 'Delhi', id: 'delhi' },
]

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Why Us', id: 'why-us' },
  { label: 'Process', id: 'process' },
  { label: 'Get Started', id: 'contact' },
]

function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand Column */}
          <div className="footer-brand">
            <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
              <img src={logo} alt="Right Way Education Logo" className="logo-img footer-logo-img" />
            </a>
            <p className="footer-tagline">Your trusted partner for educational success.</p>

          </div>

          {/* Study Destinations */}
          <div className="footer-col">
            <h4 className="footer-col-title">Study in India</h4>
            <ul className="footer-links">
              {destinations.map((d) => (
                <li key={d.id}>
                  <a
                    href={`#${d.id}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(d.id) }}
                  >
                    {d.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(l.id) }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-contact-list">
              <li>📧 rightwayeduinternational@gmail.com</li>
              <li>📞 +91 97435 59930</li>
              <li>📍 kozhikode, India</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Right Way Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
