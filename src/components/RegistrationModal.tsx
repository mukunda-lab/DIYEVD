import { useState, useEffect } from 'react'

interface Props {
  country: string
  onClose: () => void
}

const LABEL: React.CSSProperties = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 700,
  color: '#ffffff',
  marginBottom: '6px',
  letterSpacing: '0.04em',
}

const INPUT: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '10px',
  border: '1px solid rgba(124,58,237,0.35)',
  background: 'rgba(255,255,255,0.06)',
  color: '#ffffff',
  fontSize: '14px',
  outline: 'none',
}

export default function RegistrationModal({ country, onClose }: Props) {
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    country: country,
    email: '',
    phone: '',
    consent: false,
  })

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10)
    return () => clearTimeout(t)
  }, [])

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 300)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: 'rgba(7,21,53,0.92)',
        backdropFilter: 'blur(8px)',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
    >
      <div
        className="glass w-full max-w-md rounded-2xl overflow-hidden"
        style={{
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
          transition: 'transform 0.3s ease',
          border: '1px solid rgba(124,58,237,0.3)',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <div
          className="px-6 py-5 flex items-center justify-between"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div>
            <h3 className="text-lg font-bold" style={{ color: '#ffffff' }}>
              Registro de participación
            </h3>
            <p className="text-sm mt-0.5" style={{ color: '#ffffff' }}>
              Día Internacional del Yoga · {country}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.07)', color: '#ffffff' }}
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-14 px-6 text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 text-3xl"
              style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)' }}>
              🙏
            </div>
            <h4 className="text-xl font-semibold mb-2" style={{ color: '#ffffff' }}>
              ¡Namaste, {form.name}!
            </h4>
            <p className="text-sm mb-6" style={{ color: 'rgba(220,220,255,0.85)' }}>
              Tu registro fue recibido. Te contactaremos pronto con más información sobre las actividades en <strong style={{ color: '#e8697a' }}>{form.country}</strong>.
            </p>
            <button onClick={handleClose} className="btn-gradient px-8 py-2.5 rounded-xl text-sm font-medium">
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label style={LABEL}>Nombre Completo *</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Tu nombre"
                style={INPUT}
              />
            </div>

            <div>
              <label style={LABEL}>País de Residencia *</label>
              <input
                required
                type="text"
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
                placeholder="Tu país"
                style={INPUT}
              />
            </div>

            <div>
              <label style={LABEL}>Email *</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="tu@correo.com"
                style={INPUT}
              />
            </div>

            <div>
              <label style={LABEL}>WhatsApp *</label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+1 234 567 890"
                style={INPUT}
              />
            </div>

            <div className="flex items-start gap-3 pt-1">
              <input
                required
                type="checkbox"
                id="consent"
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                style={{ marginTop: '2px', accentColor: '#7c3aed', width: '16px', height: '16px', flexShrink: 0 }}
              />
              <label htmlFor="consent" style={{ fontSize: '13px', fontWeight: 600, color: '#ffffff', lineHeight: 1.5 }}>
                Acepto recibir información
              </label>
            </div>

            <button
              type="submit"
              className="btn-gradient w-full py-3 rounded-xl text-sm font-semibold text-white tracking-wide mt-2"
            >
              Confirmar Registro
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
