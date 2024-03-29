import React from "react";
import { FiMail } from "react-icons/fi";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Footer.scss";

import { animateScroll as scroll } from "react-scroll";

export default function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer id="footer" className="footer-wrapper">
      <div className="container">
        <div className="footer" data-aos="fade-down">
          <div className="contact">
            <h3>Masz pytanie? Napisz do nas!</h3>
            <div className="mail">
              <span>
                <FiMail />
              </span>
              <p> info@informatyknagodziny.eu</p>
            </div>
          </div>
          <div className="logo" onClick={scrollToTop}>
            <p>
              informatyknagodziny<span>.eu</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
