'use client'

import { useState } from 'react'
import Link from 'next/link'

const menuItems = [
  { name: 'Paneer Tikka', category: 'veg', description: 'Marinated cottage cheese grilled to perfection', tag: 'Vegetarian' },
  { name: 'Butter Chicken', category: 'non-veg', description: 'Tender chicken in rich tomato cream sauce', tag: 'Non-Veg' },
  { name: 'Dal Makhani', category: 'veg', description: 'Creamy black lentils slow-cooked overnight', tag: 'Vegetarian' },
  { name: 'Gulab Jamun', category: 'desserts', description: 'Soft milk dumplings in rose-flavored syrup', tag: 'Dessert' },
  { name: 'Biryani', category: 'non-veg', description: 'Aromatic basmati rice with spiced meat', tag: 'Non-Veg' },
  { name: 'Malai Kofta', category: 'veg', description: 'Cottage cheese dumplings in creamy gravy', tag: 'Vegetarian' },
]

export default function MenuHighlights() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-tag">Culinary Excellence</span>
          <h2 className="heading-lg mb-4">Menu Highlights</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'veg', 'non-veg', 'desserts'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'All' : category === 'veg' ? 'Vegetarian' : category === 'non-veg' ? 'Non-Vegetarian' : 'Desserts'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div key={index} className="card overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <span className="text-6xl">🍽️</span>
              </div>
              <div className="p-6">
                <h3 className="heading-sm mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                  item.category === 'veg' ? 'bg-green-100 text-green-800' :
                  item.category === 'non-veg' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/menu" className="btn-primary">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  )
}
