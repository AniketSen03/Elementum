import { useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { navLinks } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-50">
      <nav
        className="mx-auto max-w-content px-6 sm:px-8 lg:px-10 flex items-center justify-between py-6"
        aria-label="Primary"
      >
        <a href="#home" className="font-display text-2xl sm:text-3xl font-semibold tracking-wide">
          Elementum
        </a>

        <ul className="hidden md:flex items-center gap-9 text-sm font-medium text-ink/80">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative py-1 transition-colors hover:text-ink after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-coral after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="hidden md:inline-flex items-center justify-center w-11 h-11 rounded-full hover:bg-sand transition-colors"
          aria-label="Open menu"
        >
          <HiOutlineMenu className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-sand transition-colors"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <HiOutlineMenu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile / off-canvas menu */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-ink/40"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-cream shadow-xl transition-transform duration-300 flex flex-col ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-6">
            <span className="font-display text-2xl font-semibold">Elementum</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-10 h-10 inline-flex items-center justify-center rounded-full hover:bg-sand"
              aria-label="Close menu"
            >
              <HiOutlineX className="w-6 h-6" />
            </button>
          </div>
          <ul className="flex flex-col gap-2 px-6 mt-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-medium border-b border-ink/10 hover:text-coral transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
