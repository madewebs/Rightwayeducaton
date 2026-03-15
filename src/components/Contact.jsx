import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = encodeURIComponent(
      `Hi, I'd like a free consultation!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterested in: ${formData.interest || 'General'}\nMessage: ${formData.message}`
    )
    window.open(`https://wa.me/919743559930?text=${msg}`, '_blank')
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info">
            <p className="section-tagline">Get Started</p>
            <h2 className="section-title">Begin Your Global Journey</h2>
            <p>
              Book a free consultation and let our experts chart the right path for
              your dream education.
            </p>
            <ul className="contact-details">
              <li>📧 rightwayeduinternational@gmail.com</li>
              <li>📞 +91 97435 59930</li>
              <li>📍 Kozhikode, Kerala, India</li>
            </ul>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            <select name="interest" value={formData.interest} onChange={handleChange}>
              <option value="">I&apos;m interested in...</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
              <option value="europe">Europe</option>
              <option value="other">Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Tell us about your goals..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="btn btn-primary btn-full">
              💬 Request Free Consultation on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
