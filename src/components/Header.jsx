import { useState } from 'react'
import logo from '../assets/logo.webp'
import { FaChevronDown } from 'react-icons/fa'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  const countries = [
    { label: 'UK', id: 'uk' },
    { label: 'USA', id: 'usa' },
    { label: 'Canada', id: 'canada' },
    { label: 'Australia', id: 'australia' },
    { label: 'Ireland', id: 'ireland' },
    { label: 'Germany', id: 'germany' },
  ]

  const desktopLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Study Destination', id: 'study-destination', dropdown: true },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Get Started', id: 'contact', cta: true },
  ]

  const mobileLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Study Destination', id: 'study-destination', dropdown: true },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Process', id: 'process' },
    { label: 'Get Started', id: 'contact', cta: true },
  ]

  const NavItem = ({ link }) => (
    <li className={link.dropdown ? 'nav-item-dropdown' : ''}>
      {link.dropdown ? (
        <div 
          className="dropdown-trigger"
          onMouseEnter={() => {
            if (typeof window !== 'undefined' && window.innerWidth > 768) {
              setDropdownOpen(true)
            }
          }}
          onMouseLeave={() => {
            if (typeof window !== 'undefined' && window.innerWidth > 768) {
              setDropdownOpen(false)
            }
          }}
          onClick={(e) => {
            e.preventDefault()
            setDropdownOpen((prev) => !prev)
          }}
        >
          <a href="#" onClick={(e) => e.preventDefault()}>
            {link.label} <FaChevronDown className={`dropdown-icon ${dropdownOpen ? 'rotate' : ''}`} />
          </a>
          <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            {countries.map((country) => (
              <li key={country.id}>
                <a href={`#${country.id}`} onClick={(e) => { e.preventDefault(); scrollTo(country.id) }}>
                  {country.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <a
          href={`#${link.id}`}
          className={link.cta ? 'nav-cta' : ''}
          onClick={(e) => { e.preventDefault(); scrollTo(link.id) }}
        >
          {link.label}
        </a>
      )}
    </li>
  )

  return (
    <header className="header">
      <nav className="nav">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
          <img src={logo} alt="Right Way Education Logo" className="logo-img" />
        </a>
        <ul className="nav-links nav-links--desktop">
          {desktopLinks.map((link) => <NavItem key={link.id} link={link} />)}
        </ul>
        <ul className={`nav-links nav-links--mobile ${menuOpen ? 'open' : ''}`}>
          {mobileLinks.map((link) => <NavItem key={link.id} link={link} />)}
        </ul>
        <button
          className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  )
}

export default Header
