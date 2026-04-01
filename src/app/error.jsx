'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="text-center px-4">
        <h1 className="text-6xl font-serif font-bold text-primary mb-4">Oops!</h1>
        <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          We encountered an unexpected error. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="btn-primary"
          >
            Try Again
          </button>
          <a href="/" className="btn-outline">
            Go Home
          </a>
        </div>
      </div>
    </div>
  )
}
