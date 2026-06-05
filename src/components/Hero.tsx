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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #030318 0%, #0a0828 40%, #13022e 100%)' }}
    >
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
            zIndex: 2,
          }}
        />
      ))}

      {/* Top bar */}
      <div
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6 z-10"
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

      {/* Banner image */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 1.2s ease 0.3s' }}
      >
        <img
          src="/images/Horizontal.png"
          alt="Yoga para Ser — Día Internacional del Yoga 2026"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Feather overlays — color sólido del fondo que se come la imagen */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        {/* Arriba */}
        <div className="absolute top-0 left-0 right-0" style={{
          height: '42%',
          background: 'linear-gradient(to bottom, #030318 0%, #030318 20%, rgba(3,3,24,0.85) 55%, transparent 100%)',
        }} />
        {/* Abajo */}
        <div className="absolute bottom-0 left-0 right-0" style={{
          height: '42%',
          background: 'linear-gradient(to top, #030318 0%, #030318 20%, rgba(3,3,24,0.85) 55%, transparent 100%)',
        }} />
        {/* Izquierda */}
        <div className="absolute top-0 bottom-0 left-0" style={{
          width: '22%',
          background: 'linear-gradient(to right, #030318 0%, rgba(3,3,24,0.7) 60%, transparent 100%)',
        }} />
        {/* Derecha */}
        <div className="absolute top-0 bottom-0 right-0" style={{
          width: '22%',
          background: 'linear-gradient(to left, #030318 0%, rgba(3,3,24,0.7) 60%, transparent 100%)',
        }} />
      </div>

      {/* Bottom content: date + CTA */}
      <div
        className="relative flex flex-col items-center text-center px-4 mt-auto mb-16"
        style={{ zIndex: 2, opacity: visible ? 1 : 0, transition: 'opacity 1s ease 0.8s' }}
      >
        {/* Date badge */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8 mb-8">
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
        <div className="flex flex-wrap justify-center gap-2 mb-8">
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
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float z-10"
        style={{ color: 'rgba(180,180,220,0.4)', animationDuration: '3s' }}
      >
        <div
          className="w-px h-10"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(124,58,237,0.5))' }}
        />
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  )
}
