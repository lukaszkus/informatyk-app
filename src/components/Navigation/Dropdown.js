import React from 'react'
import { Link } from "react-scroll";
import { FaTimes } from 'react-icons/fa'

import './Dropdown.scss'
export default function Dropdown({ isOpen, toggle }) {

    const dropdownOpacity = isOpen ? { opacity: "100%", top: 0 } : { opacity: 0, top: "-100%" };

    return (
        <div className="dropdown" onClick={toggle} style={dropdownOpacity}>
            <div className="dropdown-icon">
                <div className="dropdown-close">
                    <FaTimes />
                </div>
            </div>
            <ul className="dropdown-menu">
                <li className="dropdown-link">
                <Link
                activeClass="active"
                to="header"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={toggle}
              >
                Home
              </Link>
                </li>
                <li className="dropdown-link">
                <Link
                activeClass="active"
                to="why"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={toggle}
              >
                Dlaczego warto?
              </Link>
                </li>
                <li className="dropdown-link">
                <Link
                activeClass="active"
                to="howItWorks"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={toggle}
              >
                Jak to działa
              </Link>
                </li>
                <li className="dropdown-link">
                <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={toggle}
              >
                Kontakt
              </Link>
                </li>
            </ul>
        </div>
    )
}
