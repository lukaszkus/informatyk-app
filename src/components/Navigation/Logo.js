import React from 'react'
import { animateScroll as scroll } from "react-scroll"

import './Logo.scss'

export default function Logo() {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="logo" onClick={scrollToTop}>
      <p>informatyknagodziny<span>.eu</span></p>
    </div>
  )
}
