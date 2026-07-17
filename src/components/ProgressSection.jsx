import { TriangleShape, ConnectorSquiggle } from './decor/Shapes'
import underlineThinkers from '../assets/underline.png'

export default function ProgressSection() {
  return (
    <section id="services" className="relative pt-24 sm:pt-28 pb-8">
      {/* connecting squiggle line, decorative only, hidden on small screens */}
      <ConnectorSquiggle className="hidden lg:block absolute -top-6 left-1/2 -translate-x-1/2 w-[70%] opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-content px-6 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Image */}
          <div className="relative flex justify-center lg:justify-start">
           <img src="src/assets/Polygon 1.png" alt=""  className='absolute -left-4 -top-4 w-24 sm:w-32 h-auto pointer-events-none select-none'/>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-xl">
              <img
                src="src/assets/image 348 (1).png"
                alt="Two designers reviewing work together on a laptop"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
                     <img src="src/assets/Polygon 1.png" alt=""  className='absolute left-44 -bottom-4 w-24 sm:w-32 h-auto pointer-events-none select-none'/>
          </div>

          {/* Text */}
          <div>
            <h2 className="font-gerbil font-semibold text-4xl sm:text-5xl leading-[1.1]">
              <span className="relative inline-block isolate p-3 bg-[#D7EEDD] rounded-full">See</span> how we can
              <br />
              help you{' '}
              <span className='relative inline-block isolate w-fit leading-[1.05]'>progress
                 <img
                                              src={underlineThinkers}
                                              alt=""
                                              aria-hidden="true"
                                              className="absolute left-0 -bottom-2 sm:-bottom-3 w-full h-auto pointer-events-none select-none z-[-1]"
                                            /> 
              </span>
            </h2>
            <p className="font-satoshi mt-6 max-w-md text-sm sm:text-base text-ink/60 leading-relaxed">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design
              digital, comms and social research.
            </p>
            <a
              href="#contact"
              className="font-satoshi mt-7 inline-flex items-center gap-3 text-sm font-semibold group"
            >
              Read more
              <span className="inline-block w-10 h-px bg-ink transition-all group-hover:w-14" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
