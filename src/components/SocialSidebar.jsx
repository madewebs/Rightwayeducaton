import React, { useState, useEffect } from 'react';
import './SocialSidebar.css';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

const SocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  // Show sidebar after loading screen fully completes + fade-out transition
  // LoadingScreen hides at 2800ms; add ~400ms for its CSS fade-out = 3200ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  const socialLinks = [
    {
      id: 1,
      icon: <FaEnvelope size={20} />,
      label: 'Free Consultation',
      url: 'mailto:rightwayeduinternational@gmail.com',
      color: '#0d6efd',
      isTextItem: true
    },

    {
      id: 2,
      icon: <FaInstagram size={20} />,
      label: 'Instagram',
      url: 'https://www.instagram.com/right__way___?igsh=Nnd2d2gxNGNjbW1h',
      color: '#e4405f'
    },


    {
      id: 3,
      icon: <FaWhatsapp size={20} />,
      label: 'WhatsApp',
      url: 'https://wa.me/919743559930?text=Hi%2C%20I%20would%20like%20a%20free%20consultation%20about%20studying%20abroad.',
      color: '#25d366'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className={`social-sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button
        className="social-sidebar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Hide sidebar" : "Show sidebar"}
      >
        {isOpen ? <FaChevronLeft size={16} /> : <FaChevronRight size={16} />}
      </button>

      <ul className="social-sidebar-list">
        {socialLinks.map((link) => (
          <li
            key={link.id}
            className={`social-sidebar-item ${link.isTextItem ? 'text-item' : ''}`}
            style={{ '--hover-color': link.color }}
          >
            <a
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              aria-label={link.label}
              className="social-sidebar-link"
              style={{ backgroundColor: link.color }}
            >
              {link.icon}
              {link.isTextItem && <span className="vertical-text">{link.label}</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialSidebar;
