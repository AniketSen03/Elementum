import { HiOutlineArrowRight } from 'react-icons/hi'
import { offers } from '../data/content'
import { SquigglyLine } from './decor/Shapes'

export default function OfferSection() {
  return (
    <section id="offer" className="relative pt-24 sm:pt-32 pb-16">
      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <div className="relative">
          <SquigglyLine className="hidden md:block absolute -top-8 right-0 w-64 opacity-70" />
          <h2 className="font-display font-semibold text-4xl sm:text-5xl leading-[1.1]">
            What we <span className="highlight-mark highlight-mint">can</span>
            <br />
            <span className="underline-squiggle underline-orange">offer</span> you!
          </h2>
        </div>

        <ul className="mt-14 divide-y divide-ink/10 border-t border-ink/10">
          {offers.map((offer) => (
            <li key={offer.id}>
              <a
                href="#contact"
                className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-7 sm:py-9"
              >
                <p className="w-full sm:w-56 shrink-0 text-xs sm:text-sm text-ink/50 leading-snug">
                  {offer.eyebrow}
                </p>
                <h3 className="flex-1 font-display font-semibold text-2xl sm:text-3xl lg:text-4xl transition-colors group-hover:text-coral">
                  {offer.title}
                </h3>
                <HiOutlineArrowRight className="w-6 h-6 shrink-0 self-end sm:self-center transition-transform group-hover:translate-x-2" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
