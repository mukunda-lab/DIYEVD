import { useEffect, useState } from 'react'

const activities = ['Yoga', 'Pranayama', 'Meditación', 'Kirtan', 'Fuego Sagrado']

const BG = '#071535'
const BG_RGB = '7,21,53'


export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section style={{ background: `linear-gradient(160deg, ${BG} 0%, #0b1d48 50%, #0f1560 100%)` }}>

      {/* ── MOBILE ── */}
      <div className="lg:hidden flex flex-col">
        <div
          className="flex items-center justify-between px-5 pt-6 pb-2"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease 0.2s' }}
        >
          <p className="text-xs tracking-[0.22em] uppercase" style={{color: 'rgba(200,210,240,0.7)' }}>
            Escuela Valores Divinos
          </p>
        </div>

        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: '1 / 1',
            opacity: visible ? 1 : 0,
            transition: 'opacity 1.2s ease 0.3s',
          }}
        >
          <img
            src="/images/Horizontal.png"
            alt="Yoga para Ser — Día Internacional del Yoga 2026"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 15%',
              transform: 'scale(1.35)',
              transformOrigin: 'center 15%',
              display: 'block',
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 pointer-events-none"
            style={{ height: '35%', background: `linear-gradient(to top, rgba(${BG_RGB},1) 0%, rgba(${BG_RGB},0.6) 50%, transparent 100%)` }}
          />
        </div>

        <div
          className="flex flex-col items-center text-center px-5 pt-4 pb-10"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.8s ease 0.6s' }}
        >
          <div className="flex flex-col items-center gap-1 mb-5">
            <p className="text-xs tracking-[0.28em] uppercase" style={{color: 'rgba(180,200,240,0.5)' }}>
              Fecha principal
            </p>
            <p className="text-3xl" style={{ fontWeight: 700, color: '#f5c518' }}>
              21 de junio · 2026
            </p>
            <p className="text-base mt-1" style={{ fontWeight: 300, color: 'rgba(200,215,255,0.7)' }}>
              Actividades en 8 países
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {activities.map((act) => (
              <span
                key={act}
                className="px-3 py-1 rounded-full text-sm"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(210,220,255,0.8)', fontWeight: 300 }}
              >
                {act}
              </span>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3 w-full max-w-xs">
            <div
              className="px-4 py-2 rounded-full text-xs w-full text-center tracking-[0.22em] uppercase"
              style={{background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.3)', color: '#f5c518' }}
            >
              Actividad gratuita y abierta
            </div>
            <a href="#sedes" className="btn-gradient w-full py-3 rounded-full text-base font-medium text-center" style={{ letterSpacing: '0.04em' }}>
              Ver actividades por país ↓
            </a>
          </div>
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden lg:flex lg:flex-col relative overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0" style={{ opacity: visible ? 1 : 0, transition: 'opacity 1.4s ease 0.2s' }}>
          <img
            src="/images/Horizontal.png"
            alt="Yoga para Ser — Día Internacional del Yoga 2026"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', display: 'block' }}
          />
        </div>

        <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ zIndex: 1, height: '38%', background: `linear-gradient(to bottom, rgba(${BG_RGB},1) 0%, rgba(${BG_RGB},0.9) 12%, rgba(${BG_RGB},0.6) 45%, transparent 100%)` }} />
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 1, height: '38%', background: `linear-gradient(to top, rgba(${BG_RGB},1) 0%, rgba(${BG_RGB},0.9) 12%, rgba(${BG_RGB},0.6) 45%, transparent 100%)` }} />
        <div className="absolute top-0 bottom-0 left-0 pointer-events-none" style={{ zIndex: 1, width: '18%', background: `linear-gradient(to right, rgba(${BG_RGB},0.9) 0%, transparent 100%)` }} />
        <div className="absolute top-0 bottom-0 right-0 pointer-events-none" style={{ zIndex: 1, width: '18%', background: `linear-gradient(to left, rgba(${BG_RGB},0.9) 0%, transparent 100%)` }} />

        <div className="relative flex items-center justify-between px-8 pt-7" style={{ zIndex: 2, opacity: visible ? 1 : 0, transition: 'opacity 1s ease 0.4s' }}>
          <p className="text-xs tracking-[0.28em] uppercase" style={{color: 'rgba(200,210,240,0.75)' }}>
            Escuela Valores Divinos
          </p>
          <p className="text-sm tracking-wider" style={{color: 'rgba(200,210,240,0.5)' }}>
            {activities.join(' · ')}
          </p>
        </div>

        <div className="flex-1" style={{ minHeight: '55vh' }} />

        <div className="relative flex flex-col items-center text-center px-4 pb-14" style={{ zIndex: 2, opacity: visible ? 1 : 0, transition: 'opacity 1s ease 0.9s' }}>
          <div className="flex items-center gap-8 mb-6">
            <div className="text-center">
              <p className="text-xs tracking-[0.28em] uppercase mb-1" style={{color: 'rgba(180,200,240,0.55)' }}>Fecha principal</p>
              <p className="text-3xl" style={{ fontWeight: 700, color: '#f5c518' }}>21 de junio · 2026</p>
            </div>
            <div className="w-px h-10" style={{ background: 'rgba(245,197,24,0.3)' }} />
            <div className="text-center">
              <p className="text-xs tracking-[0.28em] uppercase mb-1" style={{color: 'rgba(180,200,240,0.55)' }}>Solsticio de verano</p>
              <p className="text-lg" style={{ fontWeight: 300, color: 'rgba(200,215,255,0.85)' }}>Actividades en 8 países</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-7">
            {activities.map((act) => (
              <span key={act} className="px-4 py-1.5 rounded-full text-sm" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(210,220,255,0.8)', fontWeight: 300 }}>
                {act}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="px-4 py-2 rounded-full text-xs tracking-[0.22em] uppercase" style={{background: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.3)', color: '#f5c518' }}>
              Actividad gratuita y abierta
            </div>
            <a href="#sedes" className="px-6 py-3 rounded-full text-base font-medium btn-gradient" style={{ letterSpacing: '0.05em' }}>
              Ver actividades por país ↓
            </a>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float" style={{ zIndex: 2, color: 'rgba(180,200,240,0.35)', animationDuration: '3s' }}>
          <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, transparent, rgba(124,158,237,0.5))' }} />
          <span className="text-xs tracking-widest uppercase">Scroll</span>
        </div>
      </div>
    </section>
  )
}
