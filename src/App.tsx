import { useState } from 'react'
import Hero from './components/Hero'
import CountryGrid from './components/CountryGrid'
import RegistrationModal from './components/RegistrationModal'
import Footer from './components/Footer'

function App() {
  const [modalCountry, setModalCountry] = useState<string | null>(null)

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #030318 0%, #08082a 50%, #0f0222 100%)' }}>
      <Hero />
      <CountryGrid onRegister={setModalCountry} />
      <Footer />
      {modalCountry && (
        <RegistrationModal
          country={modalCountry}
          onClose={() => setModalCountry(null)}
        />
      )}
    </div>
  )
}

export default App
