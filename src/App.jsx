import { ScrollTrigger, SplitText } from 'gsap/all'
import { gsap } from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import PROJECTS from './components/Projects'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
      <main>
        <Navbar />
        <Hero />
        <Skills />
        <About />
        <PROJECTS/>
        <TechStack/>
        <Contact/>
        <Footer/>
      </main>
  )
}

export default App
