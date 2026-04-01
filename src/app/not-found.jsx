import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="text-center px-4">
        <h1 className="text-9xl font-serif font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/menu" className="btn-outline">
            View Menu
          </Link>
        </div>
      </div>
    </div>
  )
}
