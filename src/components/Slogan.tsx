export default function Slogan() {
  return (
    <section className="relative py-16 px-6 flex justify-center overflow-hidden">
      {/* Glow de fondo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(245,197,24,0.05) 0%, transparent 70%)',
        }}
      />
      <blockquote
        className="relative z-10 max-w-2xl text-center"
        style={{
          borderLeft: 'none',
        }}
      >
        {/* Comilla decorativa */}
        <span
          className="block font-script mb-4 leading-none select-none"
          style={{ fontSize: '5rem', color: 'rgba(245,197,24,0.25)', lineHeight: 1 }}
        >
          "
        </span>
        <p
          className="text-lg sm:text-xl font-medium leading-relaxed"
          style={{ color: 'rgba(240,230,200,0.82)', letterSpacing: '0.01em' }}
        >
          El Yoga nació antes que las religiones, antes que las naciones. Pertenece a la humanidad entera. Existe para despertar la conciencia, mantener la mente atenta y el cuerpo dispuesto para habitar la vida buscando la expresión más genuina del Ser en cada uno.
        </p>
        {/* Línea decorativa */}
        <div
          className="mx-auto mt-8"
          style={{
            width: '60px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(245,197,24,0.6), transparent)',
          }}
        />
      </blockquote>
    </section>
  )
}
