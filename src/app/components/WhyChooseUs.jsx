const features = [
  {
    icon: '🥗',
    title: 'Quality Ingredients',
    description: 'We source only the freshest, premium ingredients for authentic flavors',
  },
  {
    icon: '👨‍🍳',
    title: 'Experienced Chefs',
    description: 'Our culinary team brings decades of expertise and creativity',
  },
  {
    icon: '⏰',
    title: 'On-Time Service',
    description: 'Punctual setup and service ensuring your event runs smoothly',
  },
  {
    icon: '💰',
    title: 'Affordable Packages',
    description: 'Competitive pricing without compromising on quality or service',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block text-accent bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-3">
            Excellence in Every Detail
          </span>
          <h2 className="heading-lg text-white mb-4">Why Choose RR Catering</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-serif font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
