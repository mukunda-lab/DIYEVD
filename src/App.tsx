import { useState } from 'react'
import Hero from './components/Hero'
import Slogan from './components/Slogan'
import CountryGrid from './components/CountryGrid'
import RegistrationModal from './components/RegistrationModal'
import Footer from './components/Footer'

function App() {
  const [modalCountry, setModalCountry] = useState<string | null>(null)

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(160deg, #071535 0%, #0b1d48 50%, #0f1560 100%)' }}>
      <Hero />
      <Slogan />
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
