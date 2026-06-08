import { useState, useEffect } from 'react'

interface Props {
  country: string
  onClose: () => void
}

export default function RegistrationModal({ country, onClose }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const scriptId = 'leadconnector-form-embed'
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.src = 'https://link.msgsndr.com/js/form_embed.js'
      document.body.appendChild(script)
    }
  }, [])

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 300)
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

        {/* LeadConnector Form */}
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/p5Fqf8ripk5f9ioi8LLq"
          style={{ display: 'none', width: '100%', height: '100%', border: 'none', borderRadius: '15px' }}
          id="popup-p5Fqf8ripk5f9ioi8LLq"
          data-layout="{'id':'POPUP'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="DIY"
          data-height="400"
          data-layout-iframe-id="popup-p5Fqf8ripk5f9ioi8LLq"
          data-form-id="p5Fqf8ripk5f9ioi8LLq"
          title="DIY"
          data-modal-height="340"
        />
      </div>
    </div>
  )
}
