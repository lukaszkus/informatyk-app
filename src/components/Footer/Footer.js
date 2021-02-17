import React from 'react'
import { FiMail } from 'react-icons/fi'

import './Footer.scss'

import { animateScroll as scroll } from "react-scroll"

export default function Footer() {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer id="footer" className="footer-wrapper">
      <div className="container">
        <div className="footer">
          <div className="contact">
            <h3>Masz pytanie? Napisz do nas!</h3>
            <div className="mail"><span><FiMail/></span><p> info@informatyknagodziny.eu</p></div>
          </div>
          <div className="logo" onClick={scrollToTop}>
            <p>informatyknagodziny<span>.eu</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
