import { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useReveal } from './hooks.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ChatWidget from './components/ChatWidget.jsx'
import ToTop from './components/ToTop.jsx'
import Home from './pages/Home.jsx'
import Industries from './pages/Industries.jsx'
import Pricing from './pages/Pricing.jsx'
import Contact from './pages/Contact.jsx'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Reveal() { useReveal(); return null }

export default function App() {
  return (
    <HashRouter>
      <ScrollTop />
      <Reveal />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <ChatWidget />
      <ToTop />
    </HashRouter>
  )
}
