import { heroAvatars } from '../data/content'
import { WavyLoop } from './decor/Shapes'
import underlineThinkers from '../assets/underline.png'
import blobPurple from '../assets/Ellipse.png'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-4 pb-20 sm:pb-28">
      <WavyLoop className="hidden lg:block absolute -left-6 top-40 w-24 text-coral opacity-70 pointer-events-none" />
      <img
        src={blobPurple}
        alt=""
        aria-hidden="true"
        className="absolute rotate-180 right-4 top-24 w-14 sm:w-16 lg:w-20 lg:right-10 pointer-events-none select-none"
      />

      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-10 text-center">
        <h1 className="font-gerbil font-semibold leading-[1.05] text-[2.6rem] sm:text-6xl lg:text-7xl flex flex-col items-center space-y-[1rem]">
          <span className="block">
            The{' '}
            <span className="relative inline-block isolate">
              thinkers
              <img
                src={underlineThinkers}
                alt=""
                aria-hidden="true"
                className="absolute left-0 -bottom-2 sm:-bottom-3 w-full h-auto pointer-events-none select-none z-[-1]"
              />
            </span>{' '}
            and
          </span>
          <span className="block">
            doers were{' '}
            <span className="relative inline-block isolate after:content-[''] after:absolute after:right-[-4px] after:top-[-4px] after:bottom-[-4px] after:w-[18rem] after:bg-[#ffc2ea] after:rounded-full after:z-[-1] ">
              changing
            </span>
          </span>
          <span className="block">
            the{' '}
            <span className="relative inline-block isolate bg-[#D7EEDD] rounded-full">
              status
            </span>{' '}
            Quo with
          </span>
        </h1>

        <p className="font-satoshi mt-6 max-w-xl mx-auto text-sm sm:text-base text-ink/60 leading-relaxed">
          We are a team of strategists, designers communicators, researchers. Together,
          we believe that progress only happens when you refuse to play things safe.
        </p>

     <div className="relative mt-14 mx-auto w-full max-w-4xl" style={{ aspectRatio: '1172 / 413' }}>
  {[
    { idx: 0, left: '4.4%',  top: '40.7%', w: '12%' },   // cluster 1 - bada
    { idx: 1, left: '13.9%', top: '33.9%', w: '8.5%' },  // cluster 1 - chhota (top-right overlap)

    { idx: 2, left: '30%',   top: '9.3%',  w: '11.5%' }, // cluster 2 - bada
    { idx: 3, left: '36.8%', top: '41.9%', w: '11%' },   // cluster 2 - chhota (bottom-right overlap)

    { idx: 4, left: '51.8%', top: '17%',   w: '11.5%' }, // cluster 3 - bada
    { idx: 5, left: '61.4%', top: '30.3%', w: '11%' },   // cluster 3 - chhota (bottom-right overlap)

    { idx: 6, left: '73.8%', top: '9.3%',  w: '11.5%' }, // cluster 4 - bada
    { idx: 7, left: '87%',   top: '36.3%', w: '11%' },   // cluster 4 - alag (gap wala, overlap nahi)
  ].map(({ idx, left, top, w }) => (
    <div
      key={heroAvatars[idx].id}
      className="absolute rounded-full overflow-hidden ring-4 ring-cream"
      style={{ left, top, width: w, aspectRatio: '1 / 1' }}
    >
      <img
        src={heroAvatars[idx].src}
        alt={heroAvatars[idx].label}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>
      </div>
    </section>
  )
}