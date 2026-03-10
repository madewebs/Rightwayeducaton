import { useEffect, useState } from 'react'

function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2800) // Slightly increased to allow fill animation

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`loading-screen ${isVisible ? '' : 'loading-screen--hidden'}`}>
      <div className="loading-screen__content">
        <div className="loading-screen__logo-container">
          {/* Base logo (grayscale or low opacity) */}
          <img src="/logo.webp" alt="Right Way Education" className="loading-logo loading-logo-base" />
          {/* Filled logo (reveals upwards) */}
          <img src="/logo.webp" alt="Right Way Education" className="loading-logo loading-logo-fill" />
        </div>
        <p className="loading-screen__tagline">Your pathway to global excellence</p>
      </div>
      <div className="loading-screen__bg"></div>
    </div>
  )
}

export default LoadingScreen
