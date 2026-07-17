import { TriangleShape } from './decor/Shapes'

export default function TomorrowSection() {
  return (
    <section id="studio" className="relative">
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text */}
          <div className="relative order-2 lg:order-1">
            <h2 className="font-display font-semibold text-4xl sm:text-5xl leading-[1.1]">
              Tomorrow should
              <br />
              be{' '}
              <span className="underline-squiggle underline-ink">better</span> than{' '}
              <span className="highlight-mark highlight-mint">today</span>
            </h2>
            <p className="mt-6 max-w-md text-sm sm:text-base text-ink/60 leading-relaxed">
              We are a team of strategists, designers communicators, researchers.
              Together, we believe that progress only happens when you refuse to
              play things safe.
            </p>
            <a
              href="#services"
              className="mt-7 inline-flex items-center gap-3 text-sm font-semibold group"
            >
              Read more
              <span className="inline-block w-10 h-px bg-ink transition-all group-hover:w-14" />
            </a>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="absolute -inset-10 bg-coral/10 blur-3xl rounded-full pointer-events-none" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl">
              <img
                src="https://picsum.photos/id/1027/700/700"
                alt="Two colleagues shaking hands after a productive meeting"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <TriangleShape
              className="absolute -right-2 top-4 w-16 sm:w-20 drop-shadow-md"
              rotate={12}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
