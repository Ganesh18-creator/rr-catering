import Link from 'next/link'

const galleryItems = [
  { title: 'Wedding Setup', category: 'Wedding Catering' },
  { title: 'Food Display', category: 'Buffet Presentation' },
  { title: 'Corporate Event', category: 'Corporate Lunch' },
  { title: 'Dessert Table', category: 'Dessert Station' },
]

export default function Gallery() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-tag">Our Work</span>
          <h2 className="heading-lg mb-4">Event Gallery</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-primary/30 to-accent/30 cursor-pointer"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl">📸</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-serif text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-white/90">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/gallery" className="btn-outline">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
