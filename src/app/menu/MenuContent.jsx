'use client'

import { useState } from 'react'

const menuData = [
  { name: 'Paneer Tikka', category: 'veg', price: '₹350/kg', description: 'Marinated cottage cheese grilled to perfection' },
  { name: 'Butter Chicken', category: 'non-veg', price: '₹450/kg', description: 'Tender chicken in rich tomato cream sauce' },
  { name: 'Dal Makhani', category: 'veg', price: '₹250/kg', description: 'Creamy black lentils slow-cooked overnight' },
  { name: 'Gulab Jamun', category: 'desserts', price: '₹30/piece', description: 'Soft milk dumplings in rose-flavored syrup' },
  { name: 'Biryani', category: 'non-veg', price: '₹400/kg', description: 'Aromatic basmati rice with spiced meat' },
  { name: 'Malai Kofta', category: 'veg', price: '₹320/kg', description: 'Cottage cheese dumplings in creamy gravy' },
  { name: 'Tandoori Chicken', category: 'non-veg', price: '₹500/kg', description: 'Clay oven roasted marinated chicken' },
  { name: 'Rasmalai', category: 'desserts', price: '₹40/piece', description: 'Soft cheese patties in sweetened milk' },
  { name: 'Chole Bhature', category: 'veg', price: '₹280/kg', description: 'Spiced chickpeas with fried bread' },
]

export default function MenuContent() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems = activeCategory === 'all' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory)

  return (
    <div className="pt-24">
      <section className="section-padding bg-gradient-to-br from-primary to-primary-dark text-white">
        <div className="container-custom text-center">
          <h1 className="heading-xl text-white mb-4">Our Menu</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes crafted with premium ingredients
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'veg', 'non-veg', 'desserts'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Items' : 
                 category === 'veg' ? 'Vegetarian' : 
                 category === 'non-veg' ? 'Non-Vegetarian' : 'Desserts'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div key={index} className="card p-6 hover:scale-105 transition-transform">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="heading-sm">{item.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.category === 'veg' ? 'bg-green-100 text-green-800' :
                    item.category === 'non-veg' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.category === 'veg' ? '🟢 Veg' : 
                     item.category === 'non-veg' ? '🔴 Non-Veg' : '🟡 Dessert'}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <p className="text-primary font-semibold text-lg">{item.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-8 bg-secondary rounded-2xl">
            <h3 className="heading-md mb-4">Custom Menu Planning</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Need a customized menu for your event? Our chefs can create a personalized menu based on your preferences and dietary requirements.
            </p>
            <a href="/booking" className="btn-primary">
              Request Custom Menu
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
