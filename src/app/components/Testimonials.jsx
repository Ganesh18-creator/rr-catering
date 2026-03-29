'use client'

import { useState } from 'react'

const testimonials = [
  {
    text: "RR Catering made our wedding day absolutely perfect! The food was exceptional and the service was impeccable. Our guests are still raving about the delicious menu.",
    author: "Priya & Rahul",
    role: "Wedding Reception",
    rating: 5,
  },
  {
    text: "Professional, reliable, and the food quality is outstanding. We've used RR Catering for multiple corporate events and they never disappoint.",
    author: "Amit Sharma",
    role: "Corporate Client",
    rating: 5,
  },
  {
    text: "The attention to detail and personalized service exceeded our expectations. RR Catering turned our daughter's birthday into a memorable celebration.",
    author: "Meera Patel",
    role: "Birthday Party",
    rating: 5,
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-tag">Client Stories</span>
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-12">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <span key={i} className="text-accent text-3xl">★</span>
              ))}
            </div>
            <p className="text-xl text-gray-700 mb-8 text-center italic">
              "{testimonials[activeIndex].text}"
            </p>
            <div className="text-center">
              <h4 className="font-serif text-xl font-semibold text-gray-900">
                {testimonials[activeIndex].author}
              </h4>
              <p className="text-gray-600">{testimonials[activeIndex].role}</p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="w-10 h-10 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeIndex ? 'bg-primary w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="w-10 h-10 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
