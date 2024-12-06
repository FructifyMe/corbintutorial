import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">CULINARY INSIGHTS</div>
        <div className="nav-links">
          <a href="#blog">Blog</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main className={`main-content ${isVisible ? 'visible' : ''}`}>
        <section className="hero">
          <h1 className="title">The Perfect Morning Indulgence</h1>
          <p className="subtitle">Discover the Ultimate Breakfast Experience</p>
        </section>

        <article className="blog-post">
          <div className="blog-header">
            <h2>Smoked Pulled Pork Hash: A Morning Revolution</h2>
            <div className="meta">
              <span className="date">June 15, 2023</span>
              <span className="read-time">5 min read</span>
            </div>
          </div>

          <div className="blog-content">
            <p className="highlight">
              Imagine starting your day with tender, smoky pulled pork, perfectly crispy potatoes, 
              and a glass of smooth iced coffee. This isn't just breakfast – it's an experience.
            </p>

            <div className="content-grid">
              <div className="text-content">
                <h3>The Perfect Combination</h3>
                <p>
                  Our signature breakfast combines slow-smoked pulled pork, carefully rendered 
                  until it reaches the perfect texture, with crispy hash browns and farm-fresh 
                  eggs. Paired with our house-made iced coffee, it's the breakfast of champions.
                </p>

                <h3>Why It Works</h3>
                <ul className="feature-list">
                  <li>12-hour smoked pulled pork</li>
                  <li>Crispy potato hash</li>
                  <li>Farm-fresh eggs</li>
                  <li>Cold-brewed coffee</li>
                </ul>
              </div>

              <div className="cta-section">
                <div className="cta-card">
                  <h3>Try It Yourself</h3>
                  <p>Get our exclusive recipe and brewing guide</p>
                  <button className="cta-button">Download Recipe</button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer className="footer">
        <p> 2023 Culinary Insights. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
