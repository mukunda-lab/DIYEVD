export default function Footer() {
  return (
    <footer
      className="relative py-16 px-6 text-center overflow-hidden"
      style={{ borderTop: '1px solid rgba(124,58,237,0.15)' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        style={{
          width: '400px',
          height: '200px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      <div className="relative z-10">
        <p
          className="font-script text-3xl mb-3"
          style={{ color: 'rgba(232,105,122,0.7)' }}
        >
          Yoga para Ser
        </p>
        <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: 'rgba(180,180,220,0.4)' }}>
          Escuela Valores Divinos · Día Internacional del Yoga 2026
        </p>
        <div
          className="inline-block px-4 py-1.5 rounded-full text-xs"
          style={{
            background: 'rgba(245,197,24,0.08)',
            border: '1px solid rgba(245,197,24,0.2)',
            color: 'rgba(245,197,24,0.6)',
          }}
        >
          21 de junio · Actividad gratuita y abierta al público
        </div>
        <p className="mt-8 text-xs" style={{ color: 'rgba(120,120,160,0.4)' }}>
          © 2026 Escuela Valores Divinos
        </p>
      </div>
    </footer>
  )
}
