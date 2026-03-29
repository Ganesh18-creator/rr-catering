import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70">
      <div className="container-custom relative z-10 text-center text-white py-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-xl text-white mb-6">
            Delicious Moments, Perfectly Catered
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Creating unforgettable culinary experiences for your weddings, corporate events, and special occasions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="bg-white text-primary hover:bg-secondary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
              Book Now
            </Link>
            <Link href="/menu" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
              View Menu
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
