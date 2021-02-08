import React, {useState} from 'react'
import { FiArrowUp } from 'react-icons/fi';
import { animateScroll as scroll } from "react-scroll"

import './ScrollTopBtn.scss'

export default function ScrollTopBtn() {
    const [isVisible, setIsVisible] = useState(false)

    const scrollToTop = () => {
        scroll.scrollToTop();
      };


    return (
        <div className="scrollTop-btn" onClick={scrollToTop}>
            <FiArrowUp/>
        </div>
    )
}
