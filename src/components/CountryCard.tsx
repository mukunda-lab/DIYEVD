import { useState, useEffect } from 'react'
import type { Country, DayEvent } from '../data/events'

interface Props {
  country: Country
  onRegister: () => void
}

const cardGradients: Record<string, string> = {
  espana:    'linear-gradient(135deg, #1a0510 0%, #2d0a1a 50%, #1a0510 100%)',
  uruguay:   'linear-gradient(135deg, #05101a 0%, #0a2040 50%, #05101a 100%)',
  usa:       'linear-gradient(135deg, #05051a 0%, #0a1535 50%, #1a0510 100%)',
  mexico:    'linear-gradient(135deg, #051a0a 0%, #0a2a10 50%, #1a1005 100%)',
  venezuela: 'linear-gradient(135deg, #1a1005 0%, #2a1800 50%, #1a1005 100%)',
  chile:     'linear-gradient(135deg, #1a0505 0%, #2a0808 50%, #051005 100%)',
  italia:    'linear-gradient(135deg, #05150a 0%, #0a2515 50%, #05150a 100%)',
  argentina: 'linear-gradient(135deg, #050e1a 0%, #0a1a30 50%, #050e1a 100%)',
}

function DayBlock({ day, accentColor }: { day: DayEvent; accentColor: string }) {
  return (
    <div>
      <p className="text-xs tracking-[0.25em] uppercase mb-1" style={{ fontFamily: '"Cormorant SC", Georgia, serif', fontWeight: 500, color: accentColor }}>
        {day.date}
      </p>
      {day.location && (
        <p className="text-xs mb-1.5 leading-relaxed" style={{ color: 'rgba(160,160,200,0.6)' }}>
          📍 {day.location}
        </p>
      )}
      <ul className="space-y-1">
        {day.items.map((item, ii) => (
          <li key={ii} className="flex items-start gap-1.5">
            {item.time && (
              <span className="text-xs font-mono shrink-0 mt-0.5" style={{ color: 'rgba(200,180,255,0.55)', minWidth: '62px' }}>
                {item.time}
              </span>
            )}
            <span className="text-xs leading-relaxed" style={{ color: 'rgba(220,225,245,0.82)' }}>
              {item.activity}
            </span>
          </li>
        ))}
      </ul>
      {day.contact && (
        <p className="text-xs mt-1" style={{ color: 'rgba(160,160,200,0.45)' }}>
          ✆ {day.contact}
        </p>
      )}
    </div>
  )
}

export default function CountryCard({ country, onRegister }: Props) {
  const gradient = cardGradients[country.id] ?? 'linear-gradient(135deg, #05051a, #0a0a2a)'
  const days = country.days

  // On desktop (≥1024px) always expanded; on mobile collapsed by default
  const [isMobile, setIsMobile] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const expanded = !isMobile || mobileOpen

  // Two columns layout for desktop
  const useColumns = days.length >= 2
  const mid = Math.ceil(days.length / 2)
  const leftDays = useColumns ? days.slice(0, mid) : days
  const rightDays = useColumns ? days.slice(mid) : []

  return (
    <div
      className="glass card-hover rounded-2xl overflow-hidden flex flex-col"
      style={{ borderColor: `${country.accentColor}25` }}
    >
      {/* Image placeholder — hidden on mobile when collapsed */}
      {(!isMobile || mobileOpen) && (
        <div
          className="relative h-32 flex items-center justify-center overflow-hidden shrink-0"
          style={{ background: gradient }}
        >
          <div
            className="absolute rounded-full"
            style={{
              width: '140px', height: '140px',
              background: `radial-gradient(circle, ${country.accentColor}28 0%, transparent 70%)`,
              filter: 'blur(18px)',
            }}
          />
          <div className="relative z-10 flex flex-col items-center gap-0.5">
            <span className="text-4xl">{country.flag}</span>
            <span className="text-xs font-medium tracking-[0.18em] uppercase mt-1" style={{ color: 'rgba(200,200,240,0.45)' }}>
              Próximamente imagen
            </span>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: `linear-gradient(to right, transparent, ${country.accentColor}, transparent)` }}
          />
        </div>
      )}

      {/* Mobile accordion header — only visible on mobile */}
      {isMobile && (
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-between w-full px-4 py-3.5"
          style={{
            borderBottom: mobileOpen ? `1px solid ${country.accentColor}20` : 'none',
          }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-1 h-5 rounded-full shrink-0" style={{ background: country.accentColor }} />
            <span className="text-xl" style={{ fontWeight: 700, color: '#f0f0ff' }}>
              {country.flag} {country.name}
            </span>
          </div>
          <span
            className="text-xs transition-transform duration-300"
            style={{
              color: country.accentColor,
              display: 'inline-block',
              transform: mobileOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          >
            ▼
          </span>
        </button>
      )}

      {/* Card body */}
      {expanded && (
        <div className="flex flex-col flex-1 p-4">
          {/* Desktop header */}
          {!isMobile && (
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-6 rounded-full shrink-0" style={{ background: country.accentColor }} />
              <h3 className="text-2xl" style={{ fontWeight: 700, color: '#f0f0ff', letterSpacing: '0.01em', lineHeight: 1 }}>
                {country.flag} {country.name}
              </h3>
            </div>
          )}

          {/* Schedule */}
          <div className={`flex-1 mb-4 ${!isMobile && useColumns ? 'grid grid-cols-2 gap-x-4 gap-y-3' : 'space-y-3'}`}>
            {!isMobile && useColumns ? (
              <>
                <div className="space-y-3">
                  {leftDays.map((day, di) => <DayBlock key={di} day={day} accentColor={country.accentColor} />)}
                </div>
                <div className="space-y-3">
                  {rightDays.map((day, di) => <DayBlock key={di} day={day} accentColor={country.accentColor} />)}
                </div>
              </>
            ) : (
              days.map((day, di) => <DayBlock key={di} day={day} accentColor={country.accentColor} />)
            )}
          </div>

          <div className="h-px mb-3" style={{ background: `linear-gradient(to right, transparent, ${country.accentColor}30, transparent)` }} />

          <button
            onClick={onRegister}
            className="btn-gradient w-full py-2.5 rounded-xl text-sm font-medium tracking-wide"
          >
            Registrarse
          </button>
        </div>
      )}
    </div>
  )
}
