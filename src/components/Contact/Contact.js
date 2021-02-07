import React from 'react'
import './Contact.scss'

import { ReactComponent as Smartphone } from '../../images/smartphone.svg'

export default function Contact() {
  return (
    <section id="contact" className="contact-wrapper">
      <div className="container">
        <div className="contact">
          <div className="contact-col">
            <div className="contact-title">
              <h2>Ekspert zawsze pod ręką</h2>
              <p>Wystarczy smartfon lub komputer żeby połączyć się z naszymi ekspertami.</p>
              <p>Nie musisz instalować dodatkowych programów czy aplikacji.
              Pierwsza konsultacja w zależności od preferencji jest w postaci chatu lub wideo połączenia.</p>
            </div>
          </div>
          <div className="contact-img">
            <Smartphone className="smartphone" alt="Smartphone" />
          </div>
        </div>
      </div>
    </section>
  )
}
