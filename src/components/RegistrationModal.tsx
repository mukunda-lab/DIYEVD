import { useState, useEffect } from 'react'

interface Props {
  country: string
  onClose: () => void
}

export default function RegistrationModal({ country, onClose }: Props) {
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', country, email: '', phone: '', consent: false })

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

  const label: React.CSSProperties = {
    display: 'block',
    fontSize: '13px',
    fontWeight: 700,
    color: '#1a1a2e',
    marginBottom: '6px',
    letterSpacing: '0.03em',
  }

  const input: React.CSSProperties = {
    width: '100%',
    padding: '11px 14px',
    borderRadius: '10px',
    border: '1.5px solid #d0d0e0',
    background: '#f8f8fc',
    color: '#1a1a2e',
    fontSize: '14px',
    outline: 'none',
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
        className="w-full max-w-md rounded-2xl overflow-hidden"
        style={{
          background: '#ffffff',
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
          transition: 'transform 0.3s ease',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <div
          className="px-6 py-5 flex items-center justify-between"
          style={{ background: '#071535', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div>
            <h3 className="text-lg font-bold" style={{ color: '#ffffff' }}>
              Registro de participación
            </h3>
            <p className="text-sm mt-0.5" style={{ color: 'rgba(200,215,255,0.85)' }}>
              Día Internacional del Yoga · {country}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(255,255,255,0.12)', color: '#ffffff' }}
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-14 px-6 text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5 text-3xl"
              style={{ background: 'rgba(124,58,237,0.1)', border: '2px solid rgba(124,58,237,0.3)' }}>
              🙏
            </div>
            <h4 className="text-xl font-bold mb-2" style={{ color: '#1a1a2e' }}>
              ¡Namaste, {form.name}!
            </h4>
            <p className="text-sm mb-6" style={{ color: '#444466' }}>
              Tu registro fue recibido. Te contactaremos pronto con más información sobre las actividades en <strong style={{ color: '#7c3aed' }}>{form.country}</strong>.
            </p>
            <button onClick={handleClose} className="btn-gradient px-8 py-2.5 rounded-xl text-sm font-semibold">
              Cerrar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label style={label}>Nombre Completo *</label>
              <input required type="text" value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Tu nombre" style={input} />
            </div>

            <div>
              <label style={label}>País de Residencia *</label>
              <input required type="text" value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
                placeholder="Tu país" style={input} />
            </div>

            <div>
              <label style={label}>Email *</label>
              <input required type="email" value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="tu@correo.com" style={input} />
            </div>

            <div>
              <label style={label}>WhatsApp *</label>
              <input required type="tel" value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+1 234 567 890" style={input} />
            </div>

            <div className="flex items-start gap-3 pt-1">
              <input required type="checkbox" id="consent" checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                style={{ marginTop: '2px', accentColor: '#7c3aed', width: '16px', height: '16px', flexShrink: 0 }} />
              <label htmlFor="consent" style={{ fontSize: '13px', fontWeight: 700, color: '#1a1a2e', lineHeight: 1.5 }}>
                Acepto recibir información
              </label>
            </div>

            <button type="submit"
              className="btn-gradient w-full py-3 rounded-xl text-sm font-semibold tracking-wide mt-2">
              Confirmar Registro
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
