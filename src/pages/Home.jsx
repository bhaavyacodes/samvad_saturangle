import Button from '../components/Button.jsx'
import './Home.css'

function Home() {
  return (
    <div className="fade-in">
      <section className="hero">
        <div className="container hero-inner">
          <span className="hero-mark" aria-hidden="true">
            “
          </span>
          <p className="hero-eyebrow">An event by Saturangle Club, presented during Srijan</p>
          <h1 className="hero-title">Samvad</h1>
          <div className="hero-coming-soon">
            <span className="hero-year">Samvad 2026</span>
            <span className="hero-status">Coming Soon</span>
          </div>
          <p className="hero-tagline">
            A new edition of debate, dialogue and ideas is on its way.
          </p>
          <Button to="/about">About Samvad</Button>
        </div>
      </section>
    </div>
  )
}

export default Home
