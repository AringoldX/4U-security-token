import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Footer from './components/Footer'
import Staking from './components/Staking'
import FAQ from './components/FAQ'
import { Web3ModalProvider } from './provider/WalletProvider'

function App() {

  return (
    <Web3ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/staking' element={<Staking />} />
        </Routes>
        <FAQ></FAQ>
        <Footer />
      </BrowserRouter>
    </Web3ModalProvider>
  )
}

export default App
