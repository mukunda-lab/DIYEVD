import { useState } from 'react'
import { countries } from '../data/events'
import CountryCard from './CountryCard'

interface Props {
  onRegister: (country: string) => void
}

function CountryNav({
  openId,
  onSelect,
}: {
  openId: string | null
  onSelect: (id: string) => void
}) {
  return (
    <div
      className="lg:hidden flex gap-2 overflow-x-auto pb-2 mb-6 px-1"
      style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
    >
      {countries.map((c) => {
        const active = openId === c.id
        return (
          <button
            key={c.id}
            onClick={() => onSelect(c.id)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-200"
            style={{
              background: active ? `${c.accentColor}28` : 'rgba(255,255,255,0.05)',
              border: `1px solid ${active ? c.accentColor : 'rgba(255,255,255,0.1)'}`,
              color: active ? c.accentColor : 'rgba(200,200,240,0.75)',
            }}
          >
            <span>{c.flag}</span>
            <span>{c.name}</span>
          </button>
        )
      })}
    </div>
  )
}

export default function CountryGrid({ onRegister }: Props) {
  const [openId, setOpenId] = useState<string | null>(null)

  const handleNavSelect = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  return (
    <section id="sedes" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '800px',
          height: '2px',
          background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.4), rgba(232,105,122,0.4), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.35em] uppercase mb-3"
            style={{ fontFamily: '"Cormorant SC", Georgia, serif', fontWeight: 300, color: 'rgba(240,220,170,0.55)' }}
          >
            Escuela Valores Divinos
          </p>
          <h2
            className="mb-4"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', fontWeight: 700, color: '#f0f0ff', letterSpacing: '-0.01em', lineHeight: 1.1 }}
          >
            Actividades por{' '}
            <span style={{ background: 'linear-gradient(135deg, #f5c518, #e8697a)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Sede
            </span>
          </h2>
          <p
            className="text-lg max-w-lg mx-auto"
            style={{ fontWeight: 300, color: 'rgba(220,225,245,0.6)' }}
          >
            Únete a la celebración del Día Internacional del Yoga en tu ciudad.
          </p>
        </div>

        {/* Mobile country navigation pills */}
        <CountryNav openId={openId} onSelect={handleNavSelect} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => (
            <CountryCard
              key={country.id}
              country={country}
              onRegister={() => onRegister(country.name)}
              isOpen={openId === country.id}
              onToggle={() => setOpenId((prev) => (prev === country.id ? null : country.id))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
