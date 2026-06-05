import { countries } from '../data/events'
import CountryCard from './CountryCard'

interface Props {
  onRegister: (country: string) => void
}

export default function CountryGrid({ onRegister }: Props) {
  return (
    <section id="sedes" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '800px',
          height: '2px',
          background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.4), rgba(232,105,122,0.4), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country) => (
            <CountryCard
              key={country.id}
              country={country}
              onRegister={() => onRegister(country.name)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
