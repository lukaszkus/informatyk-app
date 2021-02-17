import React from 'react'
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
          <div className="logo" onClick={scrollToTop}>
            <p>informatyknagodziny<span>.eu</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
