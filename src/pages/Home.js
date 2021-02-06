import React, { useState } from 'react'

import Navigation from '../components/Navigation/Navigation'
import Header from '../components/Header/Header'
import Why from '../components/Why/Why'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Dropdown from '../components/Navigation/Dropdown'

function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Navigation toggle={toggle} />
      <Header />
      <Why />
      <HowItWorks />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
