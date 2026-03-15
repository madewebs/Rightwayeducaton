import { useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import ComingSoon from './components/ComingSoon'
import StudyDestinations from './components/StudyDestinations'
import StudyInIndia from './components/StudyInIndia'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialSidebar from './components/SocialSidebar'

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <>
      <LoadingScreen />
      <SocialSidebar />
      <Header />
      <main>
        <Hero />
        <Services />
        <StudyInIndia />
        <ComingSoon />
        {/* <StudyDestinations /> */}
        <WhyUs />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
