import { useState } from 'react'
import logo from '/newlogo.png'
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

  const studyAbroadCountries = [
    { label: 'UK', id: 'uk' },
    { label: 'USA', id: 'usa' },
    { label: 'Canada', id: 'canada' },
    { label: 'Australia', id: 'australia' },
    { label: 'Ireland', id: 'ireland' },
    { label: 'Germany', id: 'germany' },
  ]

  const studyInIndiaCategories = [
    { label: 'Universities', id: 'universities' },
    { label: 'Arts & Science', id: 'arts-science' },
    { label: 'Medical', id: 'medical' },
    { label: 'Nursing', id: 'nursing' },
    { label: 'Engineering', id: 'engineering' },
    { label: 'Group of Institutions', id: 'prof-group' },
  ]

  const desktopLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Study Abroad', id: 'study-abroad' },
    { label: 'Study In India', id: 'study-in-india', dropdown: true, dropdownItems: studyInIndiaCategories },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Get Started', id: 'contact', cta: true },
  ]

  const mobileLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Study Abroad', id: 'study-abroad' },
    { label: 'Study In India', id: 'study-in-india', dropdown: true, dropdownItems: studyInIndiaCategories },
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
              setDropdownOpen(link.id)
            }
          }}
          onMouseLeave={() => {
            if (typeof window !== 'undefined' && window.innerWidth > 768) {
              setDropdownOpen(null)
            }
          }}
          onClick={(e) => {
            e.preventDefault()
            setDropdownOpen((prev) => prev === link.id ? null : link.id)
          }}
        >
          <a href="#" onClick={(e) => { e.preventDefault(); scrollTo(link.id) }}>
            {link.label} <FaChevronDown className={`dropdown-icon ${dropdownOpen === link.id ? 'rotate' : ''}`} />
          </a>
          <ul className={`dropdown-menu ${dropdownOpen === link.id ? 'show' : ''}`}>
            {link.dropdownItems && link.dropdownItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={(e) => { e.preventDefault(); scrollTo(item.id) }}>
                  {item.label}
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
