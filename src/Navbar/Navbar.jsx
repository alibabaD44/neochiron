import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { Link} from "react-router-dom";
import { NavHashLink } from "react-router-hash-link"; 
import { LanguageContext } from "../LanguageContext.jsx";
import tr from "../locales/tr.json";
import en from "../locales/en.json";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { setLang, lang } = useContext(LanguageContext);
  const t = lang === "tr" ? tr : en;


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="section1">
        <img src="/src/assets/neochiron2.svg" alt="Logo" />
        <Link to="/" className="text">
          NEOCHIRON
        </Link>
      </div>

      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavHashLink smooth to="/#hakkimizda" onClick={() => setMenuOpen(false)}>
              {t.Navbar.Hak}
            </NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="/#sss" onClick={() => setMenuOpen(false)}>
              {t.Navbar.sss}
            </NavHashLink>
          </li>
          <li>
            <Link to="/kaynaklar" onClick={() => setMenuOpen(false)}>
              {t.Navbar.Pro}
            </Link>
          </li>
          <li>
            <Link
              to="https://neochironai.com/"
              target="_blank"
              onClick={() => setMenuOpen(false)}
            >
              {t.Navbar.Neo}
            </Link>
          </li>
        </ul>
      </div>

      <div className="section2">
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className="desktop-menu">
          <li>
            <NavHashLink smooth to="/#hakkimizda">{t.Navbar.Hak}</NavHashLink>
          </li>
          <li>
            <NavHashLink smooth to="/#sss">{t.Navbar.sss}</NavHashLink>
          </li>
          <li>
            <Link to="/kaynaklar">{t.Navbar.Pro}</Link>
          </li>
          <li>
            <Link to="https://neochironai.com/" target="_blank">
              {t.Navbar.Neo}
            </Link>
          </li>
        </ul>
      </div>

      <div className="section3">
        <button className="lang-btn" onClick={() => setLang("tr")}>
          TR
        </button>
        <span className="lang-separator">|</span>
        <button className="lang-btn" onClick={() => setLang("en")}>
          EN
        </button>
      </div>
    </nav>
  );
}

export default Navbar;