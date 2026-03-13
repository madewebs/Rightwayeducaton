import logo from '../assets/logo.webp'

const countries = [
  { label: '🇬🇧 United Kingdom', id: 'uk' },
  { label: '🇺🇸 United States', id: 'usa' },
  { label: '🇨🇦 Canada', id: 'canada' },
  { label: '🇦🇺 Australia', id: 'australia' },
  { label: '🇮🇪 Ireland', id: 'ireland' },
  { label: '🇩🇪 Germany', id: 'germany' },
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
            <p className="footer-tagline">Your trusted partner for study abroad success.</p>

          </div>

          {/* Study Destinations */}
          <div className="footer-col">
            <h4 className="footer-col-title">Study Destinations</h4>
            <ul className="footer-links">
              {countries.map((c) => (
                <li key={c.id}>
                  <a
                    href={`#${c.id}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(c.id) }}
                  >
                    {c.label}
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
          <p className="footer-copy">© 2025 Right Way Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
