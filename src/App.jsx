import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Interests from './components/Interests'
import CareerObjective from './components/CareerObjective'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting &&
            entry.target.classList.add('is-visible')
        ),
      { threshold: 0.12 }
    )

    document
      .querySelectorAll('.reveal')
      .forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Interests />
        <CareerObjective />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App