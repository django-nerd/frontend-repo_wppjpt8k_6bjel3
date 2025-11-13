import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectGrid from './components/ProjectGrid'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <Services />
      <About />
      <Contact />
      <footer className="bg-black border-t border-white/10 py-10 text-center text-white/60">
        <p>Forged with the spirit of the Demon Slayer Corps. © {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App
