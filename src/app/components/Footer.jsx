import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">RR</span>
              </div>
              <span className="font-serif text-2xl font-bold text-white">RR Catering</span>
            </div>
            <p className="text-sm">Creating unforgettable culinary experiences for over 15 years.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/menu" className="hover:text-accent transition-colors">Menu</Link></li>
              <li><Link href="/booking" className="hover:text-accent transition-colors">Book Event</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/booking" className="hover:text-accent transition-colors">Wedding Catering</Link></li>
              <li><Link href="/booking" className="hover:text-accent transition-colors">Corporate Events</Link></li>
              <li><Link href="/booking" className="hover:text-accent transition-colors">Outdoor Catering</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>📞 +91 98765 43210</li>
              <li>✉️ info@rrcatering.com</li>
              <li>📍 Chennai, Tamil Nadu</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2026 RR Catering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
