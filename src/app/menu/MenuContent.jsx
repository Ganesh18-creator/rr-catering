'use client'

import { useState } from 'react'

const menuData = [
  // Menu 1 - Basic
  { name: 'Poli', category: 'veg', menu: 'menu-1', description: 'Traditional sweet flatbread' },
  { name: 'Masala Vada', category: 'veg', menu: 'menu-1', description: 'Crispy lentil fritters' },
  { name: 'Vegetable Pulav', category: 'veg', menu: 'menu-1', description: 'Aromatic rice with mixed vegetables' },
  { name: 'Onion Raitha', category: 'veg', menu: 'menu-1', description: 'Yogurt with onions and spices' },
  { name: 'Nooni Vankaya', category: 'veg', menu: 'menu-1', description: 'Stuffed eggplant curry' },
  
  // Breakfast Items
  { name: 'Kesari', category: 'breakfast', menu: 'breakfast', description: 'Sweet semolina dessert' },
  { name: 'Idly', category: 'breakfast', menu: 'breakfast', description: 'Steamed rice cakes' },
  { name: 'Uddi Vada', category: 'breakfast', menu: 'breakfast', description: 'Crispy lentil donuts' },
  { name: 'Pongal', category: 'breakfast', menu: 'breakfast', description: 'Rice and lentil comfort food' },
  
  // Menu 2 - Reception Dinner
  { name: 'Jamoon', category: 'desserts', menu: 'menu-2', description: 'Sweet syrup-soaked dumplings' },
  { name: 'Mirapakaya Bajji', category: 'veg', menu: 'menu-2', description: 'Spicy chili fritters' },
  { name: 'Gongura Rice', category: 'veg', menu: 'menu-2', description: 'Tangy sorrel leaves rice' },
  { name: 'Vegetable Biryani', category: 'veg', menu: 'menu-2', description: 'Aromatic basmati rice with vegetables' },
  { name: 'Perugu Pacchadi', category: 'veg', menu: 'menu-2', description: 'Yogurt-based side dish' },
  
  // Menu 3 - Premium
  { name: 'Bellam Jalebi', category: 'desserts', menu: 'menu-3', description: 'Jaggery-based sweet spirals' },
  { name: 'Kaju Biryani', category: 'veg', menu: 'menu-3', description: 'Cashew-rich aromatic rice' },
  { name: 'Corn Samosa', category: 'veg', menu: 'menu-3', description: 'Crispy corn-filled pastries' },
  { name: 'Bendi Pakoda', category: 'veg', menu: 'menu-3', description: 'Crispy okra fritters' },
  { name: 'Ice Cream', category: 'desserts', menu: 'menu-3', description: 'Assorted flavors' },
  
  // Veg Menu - Afternoon Lunch
  { name: 'Poornalu', category: 'veg', menu: 'veg-lunch', description: 'Sweet lentil-stuffed pastries' },
  { name: 'Mango Chitrannam', category: 'veg', menu: 'veg-lunch', description: 'Tangy mango rice' },
  { name: 'Menthaku Pappu', category: 'veg', menu: 'veg-lunch', description: 'Fenugreek lentil curry' },
  { name: 'Aloo Fry', category: 'veg', menu: 'veg-lunch', description: 'Spiced potato fry' },
  
  // Evening Snacks
  { name: 'Mirchi Bajji', category: 'veg', menu: 'evening', description: 'Spicy chili fritters' },
  { name: 'Mysore Bonda', category: 'veg', menu: 'evening', description: 'Crispy lentil balls' },
  
  // Chats
  { name: 'Bangarapet Chats', category: 'veg', menu: 'chats', description: 'Popular street food style chats' },
  { name: 'Delhi Chats', category: 'veg', menu: 'chats', description: 'North Indian style chats' },
  
  // Welcome Drinks
  { name: 'Mocktail Counter', category: 'beverages', menu: 'drinks', description: '4 varieties of refreshing mocktails' },
  { name: 'Fresh Fruit Juice', category: 'beverages', menu: 'drinks', description: '2 varieties of fresh juices' },
  { name: 'Hot Tawa Badam Milk', category: 'beverages', menu: 'drinks', description: 'Traditional almond milk' },
  { name: 'Milkshake', category: 'beverages', menu: 'drinks', description: '2 varieties of thick shakes' },
  
  // Reception Dinner Sweets
  { name: 'Mango Rasamalai', category: 'desserts', menu: 'reception-sweets', description: 'Mango-flavored cheese dessert' },
  { name: 'Blueberry Kaju Kathali', category: 'desserts', menu: 'reception-sweets', description: 'Blueberry cashew fudge' },
  { name: 'Kakinada Kaja', category: 'desserts', menu: 'reception-sweets', description: 'Layered sweet pastry' },
  
  // Hot Starters
  { name: 'Alasanda Vada', category: 'veg', menu: 'starters', description: 'Black-eyed pea fritters' },
  { name: 'Stuffed Capsicum Bajji', category: 'veg', menu: 'starters', description: 'Stuffed bell pepper fritters' },
  { name: 'Hazwan Pakoda', category: 'veg', menu: 'starters', description: 'Special mixed vegetable fritters' },
  
  // Rotis
  { name: 'Butter Naan', category: 'veg', menu: 'rotis', description: 'Soft butter-topped flatbread' },
  { name: 'Rumali Roti', category: 'veg', menu: 'rotis', description: 'Thin handkerchief bread' },
  { name: 'Methi Chapathi', category: 'veg', menu: 'rotis', description: 'Fenugreek-flavored flatbread' },
  { name: 'Paneer Hyderabadi Gravy', category: 'veg', menu: 'rotis', description: 'Rich cottage cheese curry' },
  { name: 'Phool Makani Gravy', category: 'veg', menu: 'rotis', description: 'Creamy vegetable curry' },
  
  // Dosas
  { name: 'Kadapa Karam Ghee Dosa', category: 'veg', menu: 'dosas', description: 'Spicy ghee-roasted dosa' },
  { name: 'Palli Chutney', category: 'veg', menu: 'dosas', description: 'Peanut chutney' },
  
  // Premium Rice Items
  { name: 'Veg Avakaya Biryani', category: 'veg', menu: 'premium-rice', description: 'Pickle-flavored vegetable biryani' },
  { name: 'Veg Rajugari Biryani', category: 'veg', menu: 'premium-rice', description: 'Royal style vegetable biryani' },
  { name: 'Gutti Vankaya', category: 'veg', menu: 'premium-rice', description: 'Stuffed baby eggplant curry' },
  { name: 'Avakaya Mudda Pappu', category: 'veg', menu: 'premium-rice', description: 'Pickle-flavored thick lentils' },
  { name: 'Andhra Ulavacharu', category: 'veg', menu: 'premium-rice', description: 'Horse gram soup with cream' },
  
  // Non-Veg Items
  { name: 'Chicken Raja', category: 'non-veg', menu: 'non-veg', description: 'Boneless chicken starter' },
  { name: 'Chicken Double Dum', category: 'non-veg', menu: 'non-veg', description: 'Slow-cooked chicken delicacy' },
  { name: 'KFC Chicken Stick', category: 'non-veg', menu: 'non-veg', description: 'Crispy chicken strips' },
  { name: 'Apollo Fish Fry', category: 'non-veg', menu: 'non-veg', description: 'Boneless spicy fish fry' },
  { name: 'Chettinad Chicken', category: 'non-veg', menu: 'non-veg', description: 'Spicy South Indian chicken curry' },
  { name: 'Chicken Kheema Masala', category: 'non-veg', menu: 'non-veg', description: 'Minced chicken curry' },
  { name: 'Hyderabadi Chicken Biryani', category: 'non-veg', menu: 'non-veg', description: 'Aromatic chicken biryani' },
  { name: 'Hyderabadi Mutton Biryani', category: 'non-veg', menu: 'non-veg', description: 'Aromatic mutton biryani' },
  
  // Traditional Sweets
  { name: 'Laddu', category: 'desserts', menu: 'traditional', description: 'Traditional sweet balls' },
  { name: 'Badusha', category: 'desserts', menu: 'traditional', description: 'Flaky sweet pastry' },
  { name: 'Mysorepak', category: 'desserts', menu: 'traditional', description: 'Ghee-rich gram flour sweet' },
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
            {['all', 'veg', 'non-veg', 'desserts', 'breakfast', 'beverages'].map((category) => (
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
                 category === 'non-veg' ? 'Non-Vegetarian' : 
                 category === 'desserts' ? 'Desserts' :
                 category === 'breakfast' ? 'Breakfast' : 'Beverages'}
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
                    item.category === 'desserts' ? 'bg-yellow-100 text-yellow-800' :
                    item.category === 'breakfast' ? 'bg-orange-100 text-orange-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {item.category === 'veg' ? '🟢 Veg' : 
                     item.category === 'non-veg' ? '🔴 Non-Veg' : 
                     item.category === 'desserts' ? '🟡 Dessert' :
                     item.category === 'breakfast' ? '🟠 Breakfast' : '🔵 Beverage'}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{item.description}</p>
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
