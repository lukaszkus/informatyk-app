import React from 'react'
import { Link } from "react-scroll";
import { FaBars } from 'react-icons/fa'

import './Navigation.scss'

import Logo from './Logo'

export default function Navigation({ toggle }) {

  return (
    <nav className="nav" id="navbar">
      <div className="container">
        <div className="nav-content">
          <Logo />
          <ul className="nav-items">
            <li className="nav-item">
              {/* <Link
                activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Home
              </Link> */}
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="why"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Dlaczego warto?
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="howItWorks"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Jak to działa?
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                Kontakt
              </Link>
            </li>
          </ul>
          <div className="nav-mobile">
            <div className="nav-mobile-icon" onClick={toggle}>
              <FaBars />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
