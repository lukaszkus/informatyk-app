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
                <h3>Wybierz ofertę</h3>
                <p>Wybierz specjalistę, dobierz wygodną formę współpracy i dokonaj płatności (30% przed wykonaniem zlecenia i 70% po dostarczeniu pracy).</p>
              </div>
              <div className="hiw-img">
                <img src={list} alt="list" />
              </div>
            </div>
            <div className="hiw-row">
              <div className="hiw-desc">
                <span className="hiw-number">2</span>
                <h3>Odbierz maila</h3>
                <p>Jeżeli wybrałeś połączenie wideo, sprawdź skrzynkę mailową,
              dostaniesz zaproszenie do rozmowy w formie linku, żeby porozmawiać o swoim projekcie.<br /><br />
              Jeżeli wybrałeś rozmowę telefoniczną, oczekuj na kontakt ze strony eksperta.</p>
              </div>
              <div className="hiw-img">
                <img src={mail} alt="mail" />
              </div>
            </div>
            <div className="hiw-row">
              <div className="hiw-desc">
                <span className="hiw-number">3</span>
                <h3>Opisz oczekiwania</h3>
                <p>Przedstaw fachowcowi swoje wymagania i ustalcie szczegóły współpracy.</p>
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
