import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Benefits from './components/Benefits.jsx'
import Process from './components/Process.jsx'
import Plans from './components/Plans.jsx'
import Emails from './components/Emails.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppFloat from './components/WhatsAppFloat.jsx'

export default function App() {
  return (
    <div className="bg-white text-[#0a1a3a] antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <Benefits />
      <Process />
      <Plans />
      <Emails />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
