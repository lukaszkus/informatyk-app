import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import form from "../../images/form.svg";
import "./Why.scss";

export default function Why() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="why" className="why-wrapper">
      <div className="container">
        <div className="why">
          <div className="why-cols">
            <div className="why-col-1" data-aos="fade-right">
              <h2>Dlaczego warto?</h2>
              <ul>
                <li>Potrzebujesz stworzyć stronę internetową lub aplikację?</li>
                <li>
                  Potrzebujesz ruszyć z ważnym projektem, ale brakuje Ci
                  przysłowiowych rąk do pracy?
                </li>
                <li>
                  W Internecie znajdujesz dużo ofert specjalistów IT i firm
                  informatycznych, ale nie wiesz czym kierować się przy wyborze?
                </li>
                <li>
                  Masz już dość opierania się wyłącznie na intuicji dokonując
                  istotnych wyborów?{" "}
                </li>
              </ul>
              <div className="why-image">
                <img src={form} alt="coś" />
              </div>
            </div>
            <div className="why-col-2" data-aos="fade-left">
              <h3>Czas na skorzystanie z profesjonalnego wsparcia</h3>
              <ul>
                <li>Wybierz na realizacji jakiej usługi Ci zależy.</li>
                <li>
                  Określ ramy czasowe realizacji projektu lub konkretne terminy,
                  kiedy chcesz żeby dany specjalista lub zespół specjalistów z
                  Tobą pracował.
                </li>
                <li>Wybierz preferowaną formę współpracy.</li>
                <li>
                  Wyszukaj i wybierz specjalistę lub zespół do współpracy i
                  zatwierdź zlecenie.
                </li>
                <li>
                  Dziel się swoimi opiniami z wykonanego zlecenia z innymi
                  użytkownikami.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
