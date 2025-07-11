import { ScrollTrigger, SplitText } from 'gsap/all'
import { gsap } from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
      <main>
        <Navbar />
        <Hero />
        <Skills />
        <About />
      </main>
  )
}

export default App
