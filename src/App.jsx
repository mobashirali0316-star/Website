import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
