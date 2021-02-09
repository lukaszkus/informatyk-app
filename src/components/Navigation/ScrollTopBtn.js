import React, {useState, useEffect} from 'react'
import { FiArrowUp } from 'react-icons/fi';
import { animateScroll as scroll } from "react-scroll"

import './ScrollTopBtn.scss'

export default function ScrollTopBtn() {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

    const scrollToTop = () => {
        scroll.scrollToTop();
      };

      useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
      }, []);


    return (
        <>
        {isVisible && 
        <div className="scrollTop-btn" onClick={scrollToTop}>
            <FiArrowUp/>
        </div>}
        </>
    )
}
