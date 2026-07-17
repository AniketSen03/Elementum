import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TomorrowSection from './components/TomorrowSection'
import ProgressSection from './components/ProgressSection'
import OfferSection from './components/OfferSection'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-black">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink focus:text-cream focus:px-4 focus:py-2 focus:rounded-full"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <TomorrowSection />
        <ProgressSection />
        <OfferSection />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
    </div>
  )
}
