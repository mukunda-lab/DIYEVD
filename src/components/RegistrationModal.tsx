import { useState, useEffect } from 'react'
import { countries } from '../data/events'

interface Props {
  country: string
  onClose: () => void
}

type FormState = {
  name: string
  email: string
  phone: string
  country: string
  city: string
  message: string
}

export default function RegistrationModal({ country, onClose }: Props) {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    country,
    city: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [visible, setVisible] = useState(false)

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

  const countryNames = countries.map((c) => c.name)

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
            <h3 className="text-lg font-medium" style={{ color: '#f0f0ff' }}>
              Registro de participación
            </h3>
            <p className="text-sm mt-0.5" style={{ color: 'rgba(180,180,220,0.6)' }}>
              Día Internacional del Yoga · {country}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(200,200,240,0.7)' }}
          >
            ✕
          </button>
        </div>

        {submitted ? (
          /* Success state */
          <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5 text-3xl"
              style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(124,58,237,0.4)' }}
            >
              🙏
            </div>
            <h4 className="text-xl font-light mb-2" style={{ color: '#f0f0ff' }}>
              ¡Namaste, {form.name}!
            </h4>
            <p className="text-sm mb-6" style={{ color: 'rgba(180,180,220,0.7)' }}>
              Tu registro fue recibido. Te contactaremos pronto con más información sobre las actividades en <strong style={{ color: '#e8697a' }}>{form.country}</strong>.
            </p>
            <button
              onClick={handleClose}
              className="btn-gradient px-8 py-2.5 rounded-xl text-sm font-medium text-white"
            >
              Cerrar
            </button>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-medium mb-1.5 tracking-wider uppercase" style={{ color: 'rgba(180,160,255,0.7)' }}>
                Nombre completo *
              </label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Tu nombre"
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(124,58,237,0.25)',
                  color: '#f0f0ff',
                }}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1.5 tracking-wider uppercase" style={{ color: 'rgba(180,160,255,0.7)' }}>
                Email *
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="tu@email.com"
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(124,58,237,0.25)',
                  color: '#f0f0ff',
                }}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium mb-1.5 tracking-wider uppercase" style={{ color: 'rgba(180,160,255,0.7)' }}>
                  País *
                </label>
                <select
                  required
                  value={form.country}
                  onChange={(e) => setForm({ ...form, country: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{
                    background: 'rgba(10,10,42,0.9)',
                    border: '1px solid rgba(124,58,237,0.25)',
                    color: '#f0f0ff',
                  }}
                >
                  {countryNames.map((c) => (
                    <option key={c} value={c} style={{ background: '#0a0a2a' }}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5 tracking-wider uppercase" style={{ color: 'rgba(180,160,255,0.7)' }}>
                  Ciudad
                </label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="Tu ciudad"
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(124,58,237,0.25)',
                    color: '#f0f0ff',
                  }}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium mb-1.5 tracking-wider uppercase" style={{ color: 'rgba(180,160,255,0.7)' }}>
                Teléfono (opcional)
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+1 234 567 890"
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(124,58,237,0.25)',
                  color: '#f0f0ff',
                }}
              />
            </div>
            <div>
              <label className="block text-xs font-medium mb-1.5 tracking-wider uppercase" style={{ color: 'rgba(180,160,255,0.7)' }}>
                Mensaje (opcional)
              </label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="¿Alguna consulta o comentario?"
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-none"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(124,58,237,0.25)',
                  color: '#f0f0ff',
                }}
              />
            </div>
            <button
              type="submit"
              className="btn-gradient w-full py-3 rounded-xl text-sm font-medium text-white tracking-wide mt-2"
            >
              🙏 Confirmar registro
            </button>
            <p className="text-xs text-center" style={{ color: 'rgba(160,160,200,0.5)' }}>
              Actividad gratuita y abierta a todo público
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
