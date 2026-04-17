import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './components/ProjectCard'

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Custom cursor glow
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    
    // Only add if it's a pointer device
    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="app-container">
      {/* Background Animated elements */}
      <div className="bg-shape circle-1"></div>
      <div className="bg-shape circle-2"></div>
      <div className="bg-shape circle-3"></div>

      {/* Main Content */}
      <div className="content-wrapper">
        <header className="hero">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Project Hub
          </motion.h1>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            A curated collection of small games and utilities.
          </motion.p>
        </header>

        <main>
          {/* Game Zone Section */}
          <section className="category-section">
            <div className="section-header">
              <h2>Game Zone</h2>
              <div className="line"></div>
            </div>
            <div className="grid">
              <ProjectCard 
                link="https://click-c0unter.netlify.app/" 
                icon="🖱️" 
                title="Click Counter" 
                description="Test your clicking speed and endurance." 
                delay={0.1}
                image="/images/click.png"
              />
              <ProjectCard 
                link="https://colorguessing-nishit.netlify.app/" 
                icon="🎨" 
                title="Color Guessing" 
                description="Challenge your eyes to guess the right HEX code." 
                delay={0.2}
                image="/images/color.png"
              />
              <ProjectCard 
                link="https://whack-am0le.netlify.app/" 
                icon="🐹" 
                title="Whack-A-Mole" 
                description="Whack the moles as fast as you can to earn points." 
                delay={0.3}
                image="/images/whack.png"
              />
              <ProjectCard 
                link="https://typing-speed0test.netlify.app/" 
                icon="⚡" 
                title="Typing Speed" 
                description="Check your WPM words per minute typing test." 
                delay={0.4}
                image="/images/typing.png"
              />
            </div>
          </section>

          {/* Side Projects Section */}
          <section className="category-section">
            <div className="section-header">
              <h2>Side Projects</h2>
              <div className="line"></div>
            </div>
            <div className="grid">
              <ProjectCard 
                link="https://rand0m-pass-gen.netlify.app/" 
                icon="🔑" 
                title="Password Generator" 
                description="Create strong, secure random passwords instantly." 
                delay={0.1}
                image="/images/pass.png"
              />
              <ProjectCard 
                link="https://tip-calculat0r.netlify.app/" 
                icon="💰" 
                title="Tip Calculator" 
                description="Calculate tips and split bills effortlessly." 
                delay={0.2}
                image="/images/tip.png"
              />
              <ProjectCard 
                link="https://t0d-0l1st.netlify.app/" 
                icon="📝" 
                title="To-Do List" 
                description="Organize your tasks and boost productivity." 
                delay={0.3}
                image="/images/todo.png"
              />
              <ProjectCard 
                link="https://news-appweb.netlify.app/" 
                icon="📰" 
                title="News App" 
                description="Stay updated with the latest headlines." 
                delay={0.4}
                image="/images/news.png"
              />
              <ProjectCard 
                link="https://weather-app-nishit.netlify.app/" 
                icon="🌤️" 
                title="Weather App" 
                description="Check real-time weather updates and forecasts." 
                delay={0.5}
                image="/images/weather.png"
              />
            </div>
          </section>
        </main>
        
        <footer>
          <p>Made with ❤️ by Nishit Doshi</p>
        </footer>
      </div>

      {/* Cursor Follower Element */}
      <motion.div 
        className="cursor-glow"
        animate={{
          x: cursorPosition.x,
          y: cursorPosition.y
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
    </div>
  )
}

export default App
