import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Demo from './pages/Demo'
import Hackathon from './pages/Hackathon'
import Contact from './pages/Contact'
import FloatingShape from './components/FloatingShape'
import Footer from './components/Footer'
import GoldenJubilee from './pages/GoldenJubilee'
import ScrollToTop from './components/ScrollToTop'
import SplashCursor from './blocks/Animations/SplashCursor/SplashCursor'


const App = () => {
  return (
    <Router>
      <SplashCursor />
      <ScrollToTop />
      <div>
        <Navbar />
        <FloatingShape />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/GoldenJubilee" element={<GoldenJubilee />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Hackathon" element={<Hackathon />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
