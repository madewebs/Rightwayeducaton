import { useEffect, useState, useRef } from 'react'

const steps = [
  { num: '1', title: 'Consultation', desc: 'Share your aspirations. We assess your profile and recommend the best options.' },
  { num: '2', title: 'Planning', desc: 'We create a tailored roadmap with universities, courses, and timelines.' },
  { num: '3', title: 'Application', desc: 'Our experts handle your applications, essays, and documentation.' },
  { num: '4', title: 'Enrollment & Departure', desc: 'Visa support, pre-departure briefing, and you\'re ready to start.' },
]

function Process() {
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        // Relative scroll position within the section
        const scrollPos = window.innerHeight - rect.top
        setScrollY(scrollPos)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="process" className="section process" ref={sectionRef}>
      <div className="container">
        <p className="section-tagline">How It Works</p>
        <h2 className="section-title">Your Journey in Four Steps</h2>
        <div className="process-staircase">
          {steps.map((step, i) => {
            // Staggered parallax movement
            const offset = (scrollY * 0.05) * (i + 1)
            const opacity = Math.min(Math.max((scrollY - (i * 100)) / 400, 0), 1)

            return (
              <div 
                key={step.num} 
                className={`staircase-step step-pos-${i}`}
                style={{ 
                  transform: `translateY(${-offset}px)`,
                  opacity: opacity
                }}
              >
                <div className="step-card">
                  <div className="step-number">{step.num}</div>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
                {i < steps.length - 1 && <div className="staircase-line"></div>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Process
