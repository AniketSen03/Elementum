const SIZE_MAP = {
  xs: 'w-14 h-14 sm:w-16 sm:h-16',
  sm: 'w-16 h-16 sm:w-20 sm:h-20',
  md: 'w-20 h-20 sm:w-24 sm:h-24',
  lg: 'w-24 h-24 sm:w-28 sm:h-28',
}

export default function Avatar({ src, alt = '', size = 'md', className = '', ring = true }) {
  return (
    <div
      className={`rounded-full overflow-hidden shrink-0 bg-sand ${
        ring ? 'ring-4 ring-cream' : ''
      } ${SIZE_MAP[size] || SIZE_MAP.md} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
  )
}
