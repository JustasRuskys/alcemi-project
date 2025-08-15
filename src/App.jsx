import { useState } from 'react'
import Header from './components/Header'
import MainHero from './components/MainHero'
import MainSellers from './components/MainSellers'
import AiButton from './components/AIButton'
import AiModal from './components/AiModal'

function App() {
  const [aiOpen, setAiOpen] = useState(false);
  return (
    <>
      <Header />
      <MainHero />
      <MainSellers />
      {!aiOpen && (
        <AiButton onClick={() => setAiOpen(true)} />
      )}
      <AiModal open={aiOpen} onClose={() => setAiOpen(false)} />
    </>
  )
}

export default App
