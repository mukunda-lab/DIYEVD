import { useEffect, useState } from 'react'

const activities = ['Yoga', 'Pranayama', 'Meditación', 'Kirtan', 'Fuego Sagrado']

// Color base del fondo — azul profundo, no negro
const BG = '#071535'
const BG_RGB = '7,21,53'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative flex flex-col overflow-hidden"
      style={{
        minHeight: '100vh',
        background: `linear-gradient(160deg, ${BG} 0%, #0b1d48 50%, #0f1560 100%)`,
      }}
    >
      {/* Imagen: object-cover llena todo el hero sin letterboxing */}
      <div
        className="absolute inset-0"
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 1.4s ease 0.2s' }}
      >
        <img
          src="/images/Horizontal.png"
          alt="Yoga para Ser — Día Internacional del Yoga 2026"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }}
        />
      </div>

      {/* ── Feather overlays ── caen directo sobre el contenido de la imagen */}
      {/* Arriba */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          zIndex: 1,
          height: '38%',
          background: `linear-gradient(to bottom,
            rgba(${BG_RGB},1)   0%,
            rgba(${BG_RGB},0.95) 12%,
            rgba(${BG_RGB},0.7) 40%,
            rgba(${BG_RGB},0.2) 75%,
            transparent         100%)`,
        }}
      />
      {/* Abajo */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          zIndex: 1,
          height: '38%',
          background: `linear-gradient(to top,
            rgba(${BG_RGB},1)   0%,
            rgba(${BG_RGB},0.95) 12%,
            rgba(${BG_RGB},0.7) 40%,
            rgba(${BG_RGB},0.2) 75%,
            transparent         100%)`,
        }}
      />
      {/* Izquierda */}
      <div
        className="absolute top-0 bottom-0 left-0 pointer-events-none"
        style={{
          zIndex: 1,
          width: '18%',
          background: `linear-gradient(to right, rgba(${BG_RGB},0.9) 0%, transparent 100%)`,
        }}
      />
      {/* Derecha */}
      <div
        className="absolute top-0 bottom-0 right-0 pointer-events-none"
        style={{
          zIndex: 1,
          width: '18%',
          background: `linear-gradient(to left, rgba(${BG_RGB},0.9) 0%, transparent 100%)`,
        }}
      />

      {/* Top bar */}
      <div
        className="relative flex items-center justify-between px-8 pt-7 pb-0"
        style={{ zIndex: 2, opacity: visible ? 1 : 0, transition: 'opacity 1s ease 0.4s' }}
      >
        <p className="text-xs font-light tracking-[0.25em] uppercase" style={{ color: 'rgba(200,210,240,0.75)' }}>
          Escuela Valores Divinos
        </p>
        <p className="hidden sm:block text-xs font-light tracking-wider text-right" style={{ color: 'rgba(200,210,240,0.5)' }}>
          {activities.join(' · ')}
        </p>
      </div>

      {/* Espacio central — deja respirar la imagen */}
      <div className="flex-1" style={{ minHeight: '55vh' }} />

      {/* Contenido inferior: fecha + pills + CTA */}
      <div
        className="relative flex flex-col items-center text-center px-4 pb-14"
        style={{ zIndex: 2, opacity: visible ? 1 : 0, transition: 'opacity 1s ease 0.9s' }}
      >
        {/* Fecha */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8 mb-6">
          <div className="text-center">
            <p className="text-xs tracking-[0.25em] uppercase mb-1" style={{ color: 'rgba(180,200,240,0.55)' }}>
              Fecha principal
            </p>
            <p className="text-2xl font-light" style={{ color: '#f5c518' }}>
              21 de junio · 2026
            </p>
          </div>
          <div className="hidden sm:block w-px h-10" style={{ background: 'rgba(124,58,237,0.4)' }} />
          <div className="text-center">
            <p className="text-xs tracking-[0.25em] uppercase mb-1" style={{ color: 'rgba(180,200,240,0.55)' }}>
              Solsticio de verano
            </p>
            <p className="text-base font-light" style={{ color: 'rgba(200,215,255,0.8)' }}>
              Actividades en 8 países
            </p>
          </div>
        </div>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-7">
          {activities.map((act) => (
            <span
              key={act}
              className="px-4 py-1.5 rounded-full text-sm"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(210,220,255,0.8)',
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
            className="px-6 py-3 rounded-full text-sm font-medium btn-gradient"
            style={{ letterSpacing: '0.08em' }}
          >
            Ver actividades por país ↓
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float"
        style={{ zIndex: 2, color: 'rgba(180,200,240,0.35)', animationDuration: '3s' }}
      >
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, transparent, rgba(124,158,237,0.5))' }} />
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  )
}
