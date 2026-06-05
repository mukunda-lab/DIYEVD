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
            className="text-xs font-medium tracking-[0.3em] uppercase mb-3"
            style={{ color: 'rgba(200,180,255,0.6)' }}
          >
            Escuela Valores Divinos
          </p>
          <h2
            className="text-4xl sm:text-5xl font-light mb-4"
            style={{ color: '#f0f0ff', letterSpacing: '-0.01em' }}
          >
            Actividades por{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #e8697a, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Sede
            </span>
          </h2>
          <p
            className="text-base font-light max-w-lg mx-auto"
            style={{ color: 'rgba(180,180,220,0.65)' }}
          >
            Únete a la celebración del Día Internacional del Yoga en tu ciudad.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
