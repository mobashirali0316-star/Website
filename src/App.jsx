import Background from './three/Background.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import DemoVideo from './components/DemoVideo.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen bg-charcoal-950 text-cream">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <HowItWorks />
          <DemoVideo />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
