import { useEffect, useState } from 'react'

const activities = ['Yoga', 'Pranayama', 'Meditación', 'Kirtan', 'Fuego Sagrado']

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20"
      style={{ background: 'linear-gradient(160deg, #030318 0%, #0a0828 40%, #13022e 100%)' }}
    >
      {/* Background blobs */}
      <div
        className="absolute rounded-full animate-glow-pulse pointer-events-none"
        style={{
          width: '520px',
          height: '520px',
          background: 'radial-gradient(circle, rgba(232,105,122,0.22) 0%, rgba(180,80,130,0.12) 50%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(20px)',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 65%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(30px)',
        }}
      />
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none animate-float"
          style={{
            width: `${4 + (i % 3) * 3}px`,
            height: `${4 + (i % 3) * 3}px`,
            background: i % 2 === 0 ? 'rgba(232,105,122,0.5)' : 'rgba(245,197,24,0.4)',
            top: `${15 + (i * 9)}%`,
            left: `${8 + (i * 11)}%`,
            animationDelay: `${i * 0.9}s`,
            animationDuration: `${5 + i}s`,
          }}
        />
      ))}

      {/* Top bar */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6"
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 1s ease 0.2s' }}
      >
        <p
          className="text-xs font-light tracking-[0.25em] uppercase"
          style={{ color: 'rgba(180,180,220,0.7)' }}
        >
          Escuela Valores Divinos
        </p>
        <p
          className="hidden sm:block text-xs font-light tracking-wider text-right"
          style={{ color: 'rgba(180,180,220,0.55)' }}
        >
          {activities.join(' · ')}
        </p>
      </div>

      {/* Main content */}
      <div
        className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto"
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 1s ease 0.4s' }}
      >
        {/* Eyebrow */}
        <div
          className="mb-6 px-5 py-2 rounded-full text-xs font-medium tracking-[0.3em] uppercase"
          style={{
            background: 'rgba(124,58,237,0.15)',
            border: '1px solid rgba(124,58,237,0.3)',
            color: 'rgba(200,180,255,0.85)',
          }}
        >
          Día Internacional del Yoga
        </div>

        {/* Main title */}
        <h1
          className="font-script leading-none mb-4"
          style={{
            fontSize: 'clamp(72px, 14vw, 160px)',
            background: 'linear-gradient(135deg, #f0f0ff 20%, #e8697a 50%, #f5c518 80%)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientX 6s ease infinite',
            textShadow: 'none',
            filter: 'drop-shadow(0 0 40px rgba(232,105,122,0.3))',
          }}
        >
          Yoga
        </h1>
        <h2
          className="font-script leading-none mb-2"
          style={{
            fontSize: 'clamp(36px, 7vw, 80px)',
            color: 'rgba(240,240,255,0.6)',
            letterSpacing: '0.05em',
          }}
        >
          para
        </h2>
        <h1
          className="font-script leading-none mb-10"
          style={{
            fontSize: 'clamp(72px, 14vw, 160px)',
            background: 'linear-gradient(135deg, #f5c518 0%, #e8697a 40%, #8b5cf6 100%)',
            backgroundSize: '200% 200%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientX 6s ease infinite reverse',
            filter: 'drop-shadow(0 0 40px rgba(245,197,24,0.2))',
          }}
        >
          Ser
        </h1>

        {/* Date badge */}
        <div
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8 mb-8"
        >
          <div className="text-center">
            <p className="text-xs tracking-[0.25em] uppercase mb-1" style={{ color: 'rgba(180,180,220,0.6)' }}>
              Fecha principal
            </p>
            <p className="text-2xl font-light" style={{ color: '#f5c518' }}>
              21 de junio · 2026
            </p>
          </div>
          <div
            className="hidden sm:block w-px h-10"
            style={{ background: 'rgba(124,58,237,0.4)' }}
          />
          <div className="text-center">
            <p className="text-xs tracking-[0.25em] uppercase mb-1" style={{ color: 'rgba(180,180,220,0.6)' }}>
              Solsticio de verano
            </p>
            <p className="text-base font-light" style={{ color: 'rgba(200,190,255,0.8)' }}>
              Actividades en 8 países
            </p>
          </div>
        </div>

        {/* Activities pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {activities.map((act) => (
            <span
              key={act}
              className="px-4 py-1.5 rounded-full text-sm"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(210,210,240,0.8)',
              }}
            >
              {act}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div
            className="px-4 py-2 rounded-full text-xs font-medium tracking-[0.2em] uppercase"
            style={{
              background: 'rgba(245,197,24,0.1)',
              border: '1px solid rgba(245,197,24,0.3)',
              color: '#f5c518',
            }}
          >
            Actividad gratuita y abierta
          </div>
          <a
            href="#sedes"
            className="px-6 py-3 rounded-full text-sm font-medium text-white btn-gradient"
            style={{ letterSpacing: '0.08em' }}
          >
            Ver actividades por país ↓
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float"
        style={{ color: 'rgba(180,180,220,0.4)', animationDuration: '3s' }}
      >
        <div
          className="w-px h-12"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(124,58,237,0.5))' }}
        />
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  )
}
