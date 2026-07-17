import { testimonialAvatars, testimonial } from '../data/content'
import Avatar from './Avatar'

const POSITION_CLASSES = {
  'top-left-1': 'lg:absolute lg:left-2 lg:top-4',
  'top-left-2': 'lg:absolute lg:left-40 lg:top-0',
  'bottom-left-1': 'lg:absolute lg:left-0 lg:bottom-8',
  'bottom-left-2': 'lg:absolute lg:left-36 lg:bottom-0',
  'top-right-1': 'lg:absolute lg:right-40 lg:top-0',
  'top-right-2': 'lg:absolute lg:right-4 lg:top-8',
  'mid-right': 'lg:absolute lg:right-24 lg:top-40',
  'bottom-right': 'lg:absolute lg:right-2 lg:bottom-4',
}

export default function Testimonials() {
  const left = testimonialAvatars.filter((a) => a.pos.includes('left'))
  const right = testimonialAvatars.filter((a) => a.pos.includes('right') || a.pos === 'mid-right')

  return (
    <section id="faqs" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <h2 className="text-center font-display font-semibold text-4xl sm:text-5xl leading-[1.1]">
          <span className="highlight-mark highlight-mint">What</span> our customer
          <br />
          says <span className="underline-squiggle underline-orange">About Us</span>
        </h2>

        <div className="relative mt-14 lg:min-h-[380px] flex items-center justify-center">
          {/* avatars, absolutely placed on large screens for the scattered layout */}
          <div className="hidden lg:block">
            {testimonialAvatars.map((a) => (
              <div key={a.id} className={POSITION_CLASSES[a.pos]}>
                <Avatar src={a.src} size={a.size} alt="Happy Elementum client" />
              </div>
            ))}
          </div>

          {/* Quote card */}
          <blockquote className="relative z-10 max-w-xl bg-mint/60 rounded-[2.5rem] px-8 sm:px-12 py-10 sm:py-12 text-center">
            <span className="block font-display text-5xl sm:text-6xl leading-none text-ink/30 mb-2">
              &ldquo;
            </span>
            <p className="text-sm sm:text-base text-ink/80 leading-relaxed -mt-4">
              {testimonial.quote}
            </p>
            <span className="block font-display text-5xl sm:text-6xl leading-none text-ink/30 mt-2 rotate-180">
              &rdquo;
            </span>
            <footer className="mt-4 text-sm font-semibold">
              {testimonial.author}
              <span className="block text-xs font-normal text-ink/50">{testimonial.role}</span>
            </footer>
          </blockquote>

          {/* Mobile fallback: simple avatar row */}
          <div className="lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 flex -space-x-3">
            {[left[0], right[0], left[2], right[2]].filter(Boolean).map((a) => (
              <Avatar key={a.id} src={a.src} size="xs" alt="Happy Elementum client" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
