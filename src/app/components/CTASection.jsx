import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-r from-accent to-accent-dark">
      <div className="container-custom text-center">
        <h2 className="heading-lg text-white mb-6">
          Plan Your Event With Us Today
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Let us make your special occasion unforgettable with our exceptional catering services
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/booking" className="bg-white text-primary hover:bg-secondary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl">
            Book Now
          </Link>
          <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
