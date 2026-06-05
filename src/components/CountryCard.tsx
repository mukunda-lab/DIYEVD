import { useState } from 'react'
import type { Country } from '../data/events'

interface Props {
  country: Country
  onRegister: () => void
}

// Gradient backgrounds for each country placeholder image
const cardGradients: Record<string, string> = {
  espana: 'linear-gradient(135deg, #1a0510 0%, #2d0a1a 50%, #1a0510 100%)',
  uruguay: 'linear-gradient(135deg, #05101a 0%, #0a2040 50%, #05101a 100%)',
  usa: 'linear-gradient(135deg, #05051a 0%, #0a1535 50%, #1a0510 100%)',
  mexico: 'linear-gradient(135deg, #051a0a 0%, #0a2a10 50%, #1a1005 100%)',
  venezuela: 'linear-gradient(135deg, #1a1005 0%, #2a1800 50%, #1a1005 100%)',
  chile: 'linear-gradient(135deg, #1a0505 0%, #2a0808 50%, #0510 100%)',
  italia: 'linear-gradient(135deg, #05150a 0%, #0a2515 50%, #05150a 100%)',
  argentina: 'linear-gradient(135deg, #050e1a 0%, #0a1a30 50%, #050e1a 100%)',
}

export default function CountryCard({ country, onRegister }: Props) {
  const [expanded, setExpanded] = useState(false)
  const gradient = cardGradients[country.id] ?? 'linear-gradient(135deg, #05051a, #0a0a2a)'

  const visibleDays = expanded ? country.days : country.days.slice(0, 2)

  return (
    <div
      className="glass card-hover rounded-2xl overflow-hidden flex flex-col"
      style={{ borderColor: `${country.accentColor}25` }}
    >
      {/* Image / placeholder */}
      <div
        className="relative h-40 flex items-center justify-center overflow-hidden"
        style={{ background: gradient }}
      >
        {/* Glow blob */}
        <div
          className="absolute rounded-full"
          style={{
            width: '160px',
            height: '160px',
            background: `radial-gradient(circle, ${country.accentColor}30 0%, transparent 70%)`,
            filter: 'blur(20px)',
          }}
        />
        {/* Flag + country name overlay */}
        <div className="relative z-10 flex flex-col items-center gap-1">
          <span className="text-5xl">{country.flag}</span>
          <span
            className="text-xs font-medium tracking-[0.2em] uppercase mt-1"
            style={{ color: 'rgba(200,200,240,0.5)' }}
          >
            Próximamente imagen
          </span>
        </div>
        {/* Accent bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{ background: `linear-gradient(to right, transparent, ${country.accentColor}, transparent)` }}
        />
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div
            className="w-1.5 h-6 rounded-full"
            style={{ background: country.accentColor }}
          />
          <h3 className="text-lg font-medium" style={{ color: '#f0f0ff' }}>
            {country.flag} {country.name}
          </h3>
        </div>

        {/* Schedule */}
        <div className="flex-1 space-y-4 mb-4">
          {visibleDays.map((day, di) => (
            <div key={di}>
              <p
                className="text-xs font-semibold tracking-wider uppercase mb-1.5"
                style={{ color: country.accentColor }}
              >
                {day.date}
              </p>
              {day.location && (
                <p
                  className="text-xs mb-2 leading-relaxed"
                  style={{ color: 'rgba(160,160,200,0.65)' }}
                >
                  📍 {day.location}
                </p>
              )}
              <ul className="space-y-1.5">
                {day.items.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-2">
                    {item.time && (
                      <span
                        className="text-xs font-mono shrink-0 mt-0.5"
                        style={{ color: 'rgba(200,180,255,0.6)', minWidth: '70px' }}
                      >
                        {item.time}
                      </span>
                    )}
                    <span className="text-sm" style={{ color: 'rgba(220,220,240,0.85)' }}>
                      {item.activity}
                    </span>
                  </li>
                ))}
              </ul>
              {day.contact && (
                <p
                  className="text-xs mt-1.5"
                  style={{ color: 'rgba(160,160,200,0.5)' }}
                >
                  ✆ {day.contact}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Show more */}
        {country.days.length > 2 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs mb-4 text-left transition-colors"
            style={{ color: 'rgba(180,160,255,0.6)' }}
          >
            {expanded ? '▲ Mostrar menos' : `▼ Ver ${country.days.length - 2} día(s) más`}
          </button>
        )}

        {/* Register button */}
        <button
          onClick={onRegister}
          className="btn-gradient w-full py-2.5 rounded-xl text-sm font-medium text-white tracking-wide"
        >
          Registrarse
        </button>
      </div>
    </div>
  )
}
