import React from 'react'
import { Link } from "react-scroll";
import './Header.scss'

import { ReactComponent as Janush } from '../../images/janush.svg'

export default function Header() {
  return (
    <header id="header" className="header-wrapper">
      <div className="container">
        <div className="header">
          <div className="header-heading">
            <h1>Potrzebujesz stworzyć
            stronę internetową
            lub aplikację
            i nie wiesz gdzie
            szukać pomocy?
            </h1>
            <ul>
              <li>Skorzystaj ze wsparcia sprawdzonych profesjonalistów IT.</li>
              <li>Określ, w jakich terminach i godzinach potrzebujesz wsparcia przy realizacji projektu.</li>
            </ul>
            <div className="header-cta">
              <Link
                to="howItWorks"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Dowiedz się jak to działa
              </Link>
            </div>
          </div>
          <div className="header-image">
            <Janush className="janush" alt="Janush the programmer" />
          </div>
        </div>
      </div>
    </header>
  )
}
