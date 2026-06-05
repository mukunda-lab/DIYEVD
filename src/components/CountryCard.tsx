import { useState, useEffect } from 'react'
import type { Country, DayEvent } from '../data/events'

interface Props {
  country: Country
  onRegister: () => void
  isOpen?: boolean
  onToggle?: () => void
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

const SERIF: React.CSSProperties = { fontFamily: 'var(--serif)' }
const CREAM = 'var(--cream)'
const CREAM_DIM = 'var(--cream-dim)'

function Divider() {
  return (
    <div className="my-3" style={{ height: '1px', background: 'rgba(240,228,196,0.12)' }} />
  )
}

function DayBlock({ day }: { day: DayEvent }) {
  return (
    <div style={SERIF}>
      <p className="tracking-[0.18em] uppercase mb-1.5" style={{ fontSize: '14px', fontFamily: 'var(--caps)', fontWeight: 600, color: '#ffffff' }}>
        {day.date}
      </p>
      {day.location && (
        <p className="mb-2 leading-relaxed" style={{ fontSize: '14px', fontWeight: 400, color: CREAM_DIM }}>
          📍 {day.location}
        </p>
      )}
      <ul className="space-y-2.5">
        {day.items.map((item, ii) => (
          <li key={ii}>
            {item.time && (
              <p className="mb-0.5" style={{ fontSize: '13px', fontWeight: 500, color: CREAM_DIM }}>
                {item.time}
              </p>
            )}
            <p className="leading-snug" style={{ fontSize: '16px', fontWeight: 500, color: CREAM }}>
              {item.activity}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function getContacts(country: Country): string[] {
  const seen = new Set<string>()
  const result: string[] = []

  if (country.registrationPhone) seen.add(country.registrationPhone)
  if (country.registrationEmail) seen.add(country.registrationEmail)

  country.days.forEach(day => {
    if (day.contact && !seen.has(day.contact)) {
      seen.add(day.contact)
      result.push(day.contact)
    }
  })

  const countryLevel = [
    country.registrationPhone,
    country.registrationEmail,
  ].filter(Boolean) as string[]

  return [...countryLevel, ...result]
}

export default function CountryCard({ country, onRegister, isOpen, onToggle }: Props) {
  const gradient = cardGradients[country.id] ?? 'linear-gradient(135deg, #05051a, #0a0a2a)'
  const days = country.days
  const contacts = getContacts(country)

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const mobileOpen = isOpen ?? false
  const handleToggle = onToggle ?? (() => {})

  const expanded = !isMobile || mobileOpen

  const useColumns = days.length >= 2
  const mid = Math.ceil(days.length / 2)
  const leftDays = useColumns ? days.slice(0, mid) : days
  const rightDays = useColumns ? days.slice(mid) : []

  return (
    <div
      id={country.id}
      className="glass card-hover rounded-2xl overflow-hidden flex flex-col"
      style={{ borderColor: `${country.accentColor}25` }}
    >
      {(!isMobile || mobileOpen) && (
        <div
          className="relative h-32 flex items-center justify-center overflow-hidden shrink-0"
          style={{ background: gradient }}
        >
          <div className="absolute rounded-full" style={{ width: '140px', height: '140px', background: `radial-gradient(circle, ${country.accentColor}28 0%, transparent 70%)`, filter: 'blur(18px)' }} />
          <div className="relative z-10 flex flex-col items-center gap-0.5">
            <span className="text-4xl">{country.flag}</span>
            <span className="text-xs tracking-[0.18em] uppercase mt-1" style={{ color: 'rgba(200,200,240,0.4)' }}>Próximamente imagen</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, ${country.accentColor}, transparent)` }} />
        </div>
      )}

      {isMobile && (
        <button
          onClick={handleToggle}
          className="flex items-center justify-between w-full px-4 py-3.5"
          style={{ borderBottom: mobileOpen ? `1px solid ${country.accentColor}20` : 'none' }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-1 h-5 rounded-full shrink-0" style={{ background: country.accentColor }} />
            <span className="text-xl" style={{ fontWeight: 700, color: '#f0f0ff' }}>
              {country.flag} {country.name}
            </span>
          </div>
          <span className="text-xs transition-transform duration-300" style={{ color: country.accentColor, display: 'inline-block', transform: mobileOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            ▼
          </span>
        </button>
      )}

      {expanded && (
        <div className="flex flex-col flex-1 p-4">
          {!isMobile && (
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-6 rounded-full shrink-0" style={{ background: country.accentColor }} />
              <h3 className="text-2xl" style={{ fontWeight: 700, color: '#f0f0ff', letterSpacing: '0.01em', lineHeight: 1 }}>
                {country.flag} {country.name}
              </h3>
            </div>
          )}

          <div className={`flex-1 mb-3 ${!isMobile && useColumns ? 'grid grid-cols-2 gap-x-4' : ''}`}>
            {!isMobile && useColumns ? (
              <>
                <div>
                  {leftDays.map((day, di) => (
                    <div key={di}>
                      <DayBlock day={day} />
                      {di < leftDays.length - 1 && <Divider />}
                    </div>
                  ))}
                </div>
                <div>
                  {rightDays.map((day, di) => (
                    <div key={di}>
                      <DayBlock day={day} />
                      {di < rightDays.length - 1 && <Divider />}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              days.map((day, di) => (
                <div key={di}>
                  <DayBlock day={day} />
                  {di < days.length - 1 && <Divider />}
                </div>
              ))
            )}
          </div>

          {contacts.length > 0 && (
            <div className="mb-3 space-y-0.5 text-center" style={{ fontFamily: 'var(--serif)' }}>
              {contacts.map((c, i) => (
                <p key={i} style={{ fontSize: '14px', fontWeight: 400, color: CREAM_DIM }}>
                  {c.includes('@') ? '✉ ' : '✆ '}{c}
                </p>
              ))}
            </div>
          )}

          <div className="h-px mb-3" style={{ background: `linear-gradient(to right, transparent, ${country.accentColor}30, transparent)` }} />

          <button onClick={onRegister} className="btn-gradient w-full py-2.5 rounded-xl text-sm font-medium tracking-wide">
            Registrarse
          </button>
        </div>
      )}
    </div>
  )
}
