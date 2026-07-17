// Small, self-contained decorative SVGs used to recreate the
// hand-drawn accents from the Figma design (triangles, blobs, squiggles).

export function TriangleShape({ className = '', fill = '#f16a58', rotate = 0 }) {
  return (
    <svg
      viewBox="0 0 100 90"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <path d="M50 4 L96 86 L4 86 Z" fill={fill} />
    </svg>
  )
}

export function BlobShape({ className = '', fill = '#7c4fe0' }) {
  return (
    <svg viewBox="0 0 120 130" className={className} aria-hidden="true">
      <path
        d="M60 4C88 2 116 24 118 56C120 90 96 128 60 128C28 128 2 100 2 62C2 28 30 6 60 4Z"
        fill={fill}
      />
    </svg>
  )
}

export function SquigglyLine({ className = '', stroke = '#f16a58' }) {
  return (
    <svg viewBox="0 0 300 60" className={className} fill="none" aria-hidden="true">
      <path
        d="M2 40 C 40 5, 70 5, 100 30 S 160 55, 200 25 S 260 5, 298 30"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function WavyLoop({ className = '', stroke = '#e76a58' }) {
  return (
    <svg viewBox="0 0 120 260" className={className} fill="none" aria-hidden="true">
      <path
        d="M60 4C20 30 100 55 60 85C20 115 100 140 60 170C20 200 100 225 60 255"
        stroke={stroke}
        strokeWidth="2.5"
      />
    </svg>
  )
}

export function ConnectorSquiggle({ className = '', stroke = '#e76a58' }) {
  return (
    <svg viewBox="0 0 600 260" className={className} fill="none" aria-hidden="true">
      <path
        d="M4 8 C 160 8, 120 140, 260 150 C 400 160, 380 230, 596 220"
        stroke={stroke}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
