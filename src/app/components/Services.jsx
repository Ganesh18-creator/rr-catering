import Link from 'next/link'

const services = [
  {
    icon: '💍',
    title: 'Wedding Catering',
    description: 'Make your special day unforgettable with our exquisite wedding menus and elegant presentation.',
  },
  {
    icon: '💼',
    title: 'Corporate Catering',
    description: 'Professional catering solutions for meetings, conferences, and corporate events of any size.',
  },
  {
    icon: '🌳',
    title: 'Outdoor Catering',
    description: 'Perfect for garden parties, picnics, and outdoor celebrations with full setup and service.',
  },
  {
    icon: '🎁',
    title: 'Custom Packages',
    description: 'Tailored catering solutions designed specifically for your unique event requirements.',
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-tag">What We Offer</span>
          <h2 className="heading-lg mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive catering solutions for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-8 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="heading-sm mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link href="/booking" className="text-primary font-medium hover:text-accent transition-colors">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
