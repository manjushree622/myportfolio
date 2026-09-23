import {
  FiArrowUpRight,
  FiGithub,
  FiMail,
  FiLinkedin,
} from 'react-icons/fi'
import Robot from './Robot'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-copy reveal">
        <p className="eyebrow">
          <span className="status-dot" /> Welcome to my portfolio
        </p>

        <h1>
          Manjushree
        </h1>

        <p className="hero-lede">
          B.Tech student in Artificial Intelligence and Data Science
          at REVA University, passionate about coding, emerging
          technologies, and building innovative solutions.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View my projects <FiArrowUpRight />
          </a>

          <a className="button button-quiet" href="#contact">
            Contact me
          </a>
        </div>

        <div className="socials">
          <a
            href="https://github.com/manjushree622"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>

          <a
            href="mailto:manjushree6450@gmail.com"
            aria-label="Email"
          >
            <FiMail />
          </a>

          <a href="#contact" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
        </div>
      </div>

      <div className="hero-visual reveal">
        <Robot />
      </div>
    </section>
  )
}

export default Hero