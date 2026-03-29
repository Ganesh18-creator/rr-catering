import Link from 'next/link'

export const metadata = {
  title: 'About Us - RR Catering',
  description: 'Learn about RR Catering\'s 15+ years of excellence in catering services. Meet our team of expert chefs and discover our commitment to quality.',
}

export default function AboutPage() {
  return (
    <div className="pt-24">
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h1 className="heading-xl text-white mb-4">About RR Catering</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Crafting memorable culinary experiences since 2009
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="section-tag">Our Story</span>
              <h2 className="heading-lg mb-6">15+ Years of Excellence</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2009, RR Catering began with a simple vision: to bring exceptional food and service to every event we cater. What started as a small family business has grown into one of Chennai's most trusted catering services.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey has been marked by countless successful events, from intimate family gatherings to grand weddings and corporate functions. Each event has taught us valuable lessons and strengthened our commitment to excellence.
              </p>
              <p className="text-gray-700">
                Today, we're proud to serve thousands of satisfied clients annually, maintaining the same dedication to quality and service that defined our early days.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl aspect-square flex items-center justify-center">
              <span className="text-8xl">👨‍🍳</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-secondary rounded-2xl">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="heading-sm mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To create unforgettable culinary experiences that exceed expectations and make every event special.
              </p>
            </div>
            <div className="text-center p-8 bg-secondary rounded-2xl">
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="heading-sm mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To be the most trusted and preferred catering service, known for quality, innovation, and exceptional service.
              </p>
            </div>
            <div className="text-center p-8 bg-secondary rounded-2xl">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="heading-sm mb-3">Our Values</h3>
              <p className="text-gray-700">
                Quality, integrity, customer satisfaction, and continuous improvement in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's make your next event extraordinary
          </p>
          <Link href="/booking" className="bg-white text-primary hover:bg-secondary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-block">
            Book Your Event
          </Link>
        </div>
      </section>
    </div>
  )
}
