import React from 'react'
import { Link } from "react-scroll";
import { FaTimes } from 'react-icons/fa'

import './Dropdown.scss'
export default function Dropdown({ isOpen, toggle }) {
    return (
        <div className="dropdown" onClick={toggle} style={isOpen ? { opacity: "100%", top: 0 } : { opacity: 0, top: "-100%" }}>
            <div className="dropdown-icon">
                <div className="dropdown-close">
                    <FaTimes />
                </div>
            </div>
            <ul className="dropdown-menu">
                <li className="dropdown-link">
                    <Link to="header">Home</Link>
                </li>
                <li className="dropdown-link">
                    <Link to="why" className="dropdown-link">Dlaczego warto?</Link>
                </li>
                <li className="dropdown-link">
                    <Link to="howItWorks" className="dropdown-link">Jak to działa</Link>
                </li>
                <li className="dropdown-link">
                    <Link to="contact" className="dropdown-link">Kontakt</Link>
                </li>
            </ul>
        </div>
    )
}
