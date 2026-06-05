export default function Footer() {
  return (
    <footer
      className="relative py-16 px-6 text-center overflow-hidden"
      style={{ borderTop: '1px solid rgba(245,197,24,0.15)' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: '400px',
          height: '200px',
          background: 'radial-gradient(ellipse, rgba(245,197,24,0.06) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      <div className="relative z-10">
        <p
          className="font-script text-3xl mb-3"
          style={{ color: 'rgba(255,245,220,0.85)' }}
        >
          Yoga para Ser
        </p>
        <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'rgba(240,230,200,0.65)' }}>
          Escuela Valores Divinos · Día Internacional del Yoga 2026
        </p>
        <div
          className="inline-block px-4 py-1.5 rounded-full text-xs"
          style={{
            background: 'rgba(245,197,24,0.1)',
            border: '1px solid rgba(245,197,24,0.35)',
            color: 'rgba(255,235,150,0.9)',
          }}
        >
          21 de junio · Actividad gratuita y abierta al público
        </div>
        <p className="mt-8 text-xs" style={{ color: 'rgba(220,210,185,0.5)' }}>
          © 2026 Escuela Valores Divinos
        </p>
      </div>
    </footer>
  )
}
