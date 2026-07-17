import { heroAvatars } from '../data/content'
import Avatar from './Avatar'
import { BlobShape, WavyLoop } from './decor/Shapes'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-4 pb-20 sm:pb-28">
      {/* decorative wavy loop, left side */}
      <WavyLoop className="hidden lg:block absolute -left-6 top-40 w-24 text-coral opacity-70 pointer-events-none" />

      {/* decorative purple blob, right side */}
      <BlobShape className="absolute right-4 top-24 w-14 sm:w-16 lg:w-20 lg:right-10 pointer-events-none" />

      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-10 text-center">
        <h1 className="font-display font-semibold leading-[1.05] text-[2.6rem] sm:text-6xl lg:text-7xl">
          <span className="block">
            The{' '}
            <span className="underline-squiggle underline-orange">thinkers</span> and
          </span>
          <span className="block">
            doers were{' '}
            <span className="highlight-mark highlight-pink">changing</span>
          </span>
          <span className="block">
            the <span className="highlight-mark highlight-mint">status</span> Quo with
          </span>
        </h1>

        <p className="mt-6 max-w-xl mx-auto text-sm sm:text-base text-ink/60 leading-relaxed">
          We are a team of strategists, designers communicators, researchers. Together,
          we believe that progress only happens when you refuse to play things safe.
        </p>

        <div className="mt-14 flex items-end justify-center gap-3 sm:gap-5 flex-wrap">
          {heroAvatars.map((avatar, i) => (
            <Avatar
              key={avatar.id}
              src={avatar.src}
              alt={avatar.label}
              size={avatar.size}
              className={i % 2 === 1 ? 'sm:-translate-y-4' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
