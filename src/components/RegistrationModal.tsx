import { useEffect } from 'react'

interface Props {
  country: string
  onClose: () => void
}

export default function RegistrationModal({ onClose }: Props) {
  useEffect(() => {
    // Load script once
    const scriptId = 'leadconnector-form-embed'
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.src = 'https://link.msgsndr.com/js/form_embed.js'
      document.body.appendChild(script)
    }

    // Close our React state when user clicks outside the LeadConnector popup
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.classList.contains('lc-backdrop') || target.id === 'lc-backdrop') {
        onClose()
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [onClose])

  return (
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
  )
}
