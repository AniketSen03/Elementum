import { useState } from 'react'
import { BlobShape } from './decor/Shapes'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | success | error

  function handleSubmit(e) {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
    setEmail('')
  }

  return (
    <section id="contact" className="relative bg-mint pt-20 pb-10 overflow-hidden">
      <BlobShape className="absolute right-8 top-16 w-16 sm:w-20 lg:right-16 pointer-events-none" />

      {/* decorative arrows pointing to the heading */}
      <svg
        className="absolute left-1/2 -translate-x-24 top-6 w-16 h-16 text-coral hidden sm:block"
        viewBox="0 0 60 60"
        fill="none"
        aria-hidden="true"
      >
        <path d="M50 5 L14 50" stroke="currentColor" strokeWidth="2" />
        <path d="M14 50 L14 36 M14 50 L28 50" stroke="currentColor" strokeWidth="2" />
      </svg>

      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-10 text-center">
        <h2 className="font-display font-semibold text-4xl sm:text-5xl leading-[1.1]">
          Subscribe to
          <br />
          our newsletter
        </h2>
        <p className="mt-4 text-sm sm:text-base text-ink/70">
          To make your stay special and even more memorable
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          noValidate
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:flex-1 rounded-full px-5 py-3 text-sm bg-cream border border-ink/10 focus:outline-none focus:ring-2 focus:ring-violet placeholder:text-ink/40"
          />
          <button
            type="submit"
            className="w-full sm:w-auto shrink-0 rounded-full bg-ink text-cream px-7 py-3 text-sm font-semibold hover:bg-ink/85 active:scale-[0.98] transition"
          >
            Subscribe Now
          </button>
        </form>

        <p className="mt-3 h-5 text-xs" role="status" aria-live="polite">
          {status === 'success' && (
            <span className="text-ink/70">Thanks for subscribing! Check your inbox soon.</span>
          )}
          {status === 'error' && (
            <span className="text-coral">Please enter a valid email address.</span>
          )}
        </p>
      </div>
    </section>
  )
}
