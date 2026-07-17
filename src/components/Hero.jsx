import { heroAvatars } from '../data/content'
import Avatar from './Avatar'
import { WavyLoop } from './decor/Shapes'
import underlineThinkers from '../assets/underline.png'
import highlightPink from '../assets/Rectanglepink.png'
import highlightMint from '../assets/Rectanglemint.png'
import blobPurple from '../assets/Ellipse.png'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-4 pb-20 sm:pb-28">
      {/* decorative wavy loop, left side */}
      <WavyLoop className="hidden lg:block absolute -left-6 top-40 w-24 text-coral opacity-70 pointer-events-none" />

      {/* decorative purple blob, right side */}
      <img
        src={blobPurple}
        alt=""
        aria-hidden="true"
        className="absolute rotate-180 right-4 top-24 w-14 sm:w-16 lg:w-20 lg:right-10 pointer-events-none select-none"
      />

      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-10 text-center">
        <h1 className="font-gerbil font-semibold leading-[1.05] text-[2.6rem] sm:text-6xl lg:text-7xl">
          <span className="block">
            The{' '}
            <span className="relative inline-block">
              thinkers
              <img
                src={underlineThinkers}
                alt=""
                aria-hidden="true"
                className="absolute left-0 -bottom-2 sm:-bottom-3 w-full h-auto pointer-events-none select-none"
              />
            </span>{' '}
            and
          </span>
          <span className="block">
            doers were{' '}
            <span className="w-96 h-16 align-bottom highlight-pink relative inline-block isolate">
              <img
                src={highlightPink}
                alt=""
                aria-hidden="true"
                className="absolute -z-10 -inset-x-3 -inset-y-2 w-[calc(100%+1.5rem)] h-[calc(100%+1rem)] pointer-events-none select-none"
              />
              changing
            </span>
          </span>
          <span className="block">
            the{' '}
            <span className="w-80 h-16 align-bottom highlight-mint relative inline-block isolate">
              <img
                src={highlightMint}
                alt=""
                aria-hidden="true"
                className="absolute -z-10 -inset-x-3 -inset-y-2 w-[calc(100%+1.5rem)] h-[calc(100%+1rem)] pointer-events-none select-none"
              />
              status
            </span>{' '}
            Quo with
          </span>
        </h1>

        <p className="font-satoshi mt-6 max-w-xl mx-auto text-sm sm:text-base text-ink/60 leading-relaxed">
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