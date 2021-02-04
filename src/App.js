import React, { useState } from 'react'

import Navigation from './components/Navigation'
import Header from './components/Header'
import Why from './components/Why'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Dropdown from './components/Dropdown'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="App">
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Navigation toggle={toggle} />
      <Header />
      <Why />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
