import React from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.scss";

import { ReactComponent as Janush } from "../../images/janush.svg";

export default function Header() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <header id="header" className="header-wrapper">
      <div className="container">
        <div className="header">
          <div className="header-heading">
            <h1 data-aos="fade-right">
              Wygodne, szybkie i profesjonalne usługi Informatyków na godziny
              bez wychodzenia z domu.
            </h1>
            <ul data-aos="fade-right">
              <li>
                Pierwszy portal dedykowany w 100% szybkim usługom informatycznym
                dla każdego.
              </li>
              <li>Skorzystaj ze wsparcia sprawdzonych profesjonalistów IT.</li>
              <li>
                Określ, w jakich terminach i godzinach potrzebujesz wsparcia
                przy realizacji projektu.
              </li>
            </ul>
            <div className="header-cta" data-aos="fade-right">
              <Link
                to="howItWorks"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}>
                Dowiedz się jak to działa
              </Link>
            </div>
          </div>
          <div className="header-image" data-aos="fade-left">
            <Janush className="janush" alt="Janush the programmer" />
          </div>
        </div>
      </div>
    </header>
  );
}
