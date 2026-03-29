import Hero from './components/Hero'
import Services from './components/Services'
import MenuHighlights from './components/MenuHighlights'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import CTASection from './components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <MenuHighlights />
      <WhyChooseUs />
      <Testimonials />
      <Gallery />
      <CTASection />
    </>
  )
}
