export default function NoiseOverlay() {
  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0.03,
          filter: 'url(#noise-filter)',
          mixBlendMode: 'overlay',
        }}
      />
    </>
  )
}
