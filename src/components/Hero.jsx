import { useEffect, useState } from 'react';

function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Add your backgrounds here
  const backgrounds = [
    "/checkbg.png",
    "/checkk2.png"
  ];

  // Scroll tracking
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 3000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const revealProgress = Math.min(scrollY / 600, 1);

  const maxInsetV = isMobile ? 8 : 20;
  const maxInsetH = isMobile ? 5 : 15;
  const maxRadius = isMobile ? 24 : 40;

  const insetV = (1 - revealProgress) * maxInsetV;
  const insetH = (1 - revealProgress) * maxInsetH;
  const borderRadius = (1 - revealProgress) * maxRadius;
  const scale = 1.05 - (revealProgress * 0.05);

  const revealStyle = {
    clipPath: `inset(${insetV}% ${insetH}% ${insetV}% ${insetH}% round ${borderRadius}px)`,
    transform: `scale(${scale})`,
    filter: `brightness(${0.8 + revealProgress * 0.2})`,
  };

  return (
    <section id="home" className="hero hero--reveal">
      <div className="sticky-wrapper">

        {/* Base Layer */}
        <div className="hero-base-layer">
          <div className="hero-content hero-content--centralized">
            <p className="hero-tagline">Your Pathway to Global Excellence</p>
            <h1 className="hero-title--mask">
              Study Abroad.<br />Done Right.
            </h1>
          </div>
        </div>

        {/* Reveal Layer */}
        <div className="hero-reveal-layer" style={revealStyle}>

          {/* Slideshow Backgrounds with Cross-fade */}
          {backgrounds.map((bg, index) => (
            <div
              key={bg}
              className="hero-reveal-bg"
              style={{
                backgroundImage: `url(${bg})`,
                opacity: bgIndex === index ? 1 : 0,
                transition: "opacity 1.5s ease-in-out",
                position: 'absolute',
                inset: '-5%',
                zIndex: -1
              }}
            ></div>
          ))}

          <div className="hero-content hero-content--centralized">
            <p className="hero-tagline" style={{ color: '#c4b8a8' }}>
              Your Pathway to Global Excellence
            </p>

            <h1 style={{ color: '#fff' }}>
              Study Abroad.<br />Done Right.
            </h1>

            <div className="hero-cta">
              <a
                href="https://wa.me/919743559930?text=Hi%2C%20I%20would%20like%20a%20free%20consultation%20about%20studying%20abroad."
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Free Consultation
              </a>

              <a
                href="#services"
                className="btn btn-outline"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('services');
                }}
              >
                Explore Services
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="scroll-indicator">
        <span>Reveal</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;