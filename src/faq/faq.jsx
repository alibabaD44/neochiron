import React, { useState } from "react";
import "./faq.css";
import { LanguageContext } from "../LanguageContext.jsx";
import tr from "../locales/tr.json";
import en from "../locales/en.json";
import { useContext } from "react";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);
  const { lang } = useContext(LanguageContext);

  const t = lang === "tr" ? tr : en;

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div  className="faq">
      <div className="baslik">
        <h1>{t.Faq.faqbsk}</h1>
      </div>
      
      <ul>
        <li className="soru-kutu">
          <div className="soru">
            <h2>{t.Faq.soru1bsk}</h2>
            <button onClick={() => toggle(0)}>
              {openIndex === 0 ? "−" : "+"}
            </button>
          </div>

          {openIndex === 0 && (
            <div className="cevap">
              <h3>
                {t.Faq.soru1cvp}
              </h3>
            </div>
          )}
        </li>

        <li className="soru-kutu">
          <div className="soru">
            <h2>{t.Faq.soru2bsk}</h2>
            <button onClick={() => toggle(1)}>
              {openIndex === 1 ? "-" : "+"}
            </button>
          </div>

          {openIndex === 1 && (
            <div className="cevap">
              <h3>
                {t.Faq.soru2cvp}
              </h3>
            </div>
          )}
        </li>

        <li className="soru-kutu">
          <div className="soru">
            <h2>{t.Faq.soru3bsk}</h2>
            <button onClick={() => toggle(2)}>
              {openIndex === 2 ? "−" : "+"}
            </button>
          </div>

          {openIndex === 2 && (
            <div className="cevap">
              <h3>
                {t.Faq.soru3cvp}
              </h3>
            </div>
          )}
        </li>

        <li className="soru-kutu">
          <div className="soru">
            <h2>{t.Faq.soru4bsk}</h2>
            <button onClick={() => toggle(3)}>
              {openIndex === 3 ? "−" : "+"}
            </button>
          </div>

          {openIndex === 3 && (
            <div className="cevap">
              <h3>
                {t.Faq.soru4cvp}
              </h3>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Faq;
