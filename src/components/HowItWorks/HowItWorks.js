import React from 'react'

import './HowItWorks.scss'
import list from '../../images/list.svg'
import mail from '../../images/mail.svg'
import hands from '../../images/hands.svg'

export default function HowItWorks() {
  return (
    <section id="howItWorks" className="howItWorks-wrapper">
      <div className="container">
        <div className="howItWorks">
          <div className="hiw-title">
            <h2>Jak to działa?</h2>
          </div>
          <div className="hiw-rows">
            <div className="hiw-row">
              <div className="hiw-desc">
                <span className="hiw-number">1</span>
                <h3>Wybierz obszar wsparcia</h3>
                <p>Wybierz obszar, w którym potrzebujesz wsparcia i określ ramy czasowe, kiedy zadanie ma być zrealizowane.
                  Dodaj inne kryteria, które są dla Ciebie istotne.</p>
              </div>
              <div className="hiw-img">
                <img src={list} alt="list" />
              </div>
            </div>
            <div className="hiw-row">
              <div className="hiw-desc">
                <span className="hiw-number">2</span>
                <h3>Wybierz Specjalistę</h3>
                <p>System automatycznie wskaże Ci ekspertów, którzy pomogą Ci w realizacji zadania.
                  Pisz z nimi w czacie na żywo i nawiąż współpracę z osobą, która najbardziej Ci odpowiada.</p>
              </div>
              <div className="hiw-img">
                <img src={mail} alt="mail" />
              </div>
            </div>
            <div className="hiw-row">
              <div className="hiw-desc">
                <span className="hiw-number">3</span>
                <h3>Zatwierdź zamówienie i oceń je po realizacji</h3>
                <p>Przedstaw fachowcowi swoje wymagania i ustalcie szczegóły współpracy.
                Po wykonanym zleceniu wystaw ocenę.</p>
              </div>
              <div className="hiw-img">
                <img src={hands} alt="hands" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
