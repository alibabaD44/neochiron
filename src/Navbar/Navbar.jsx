import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
<<<<<<< HEAD
import { LanguageContext } from "../LanguageContext.jsx";
import tr from "../locales/tr.json";
import en from "../locales/en.json";
=======
import { LanguageContext } from "../LanguageContext";
import tr from "../locales/tr.json";
import en from "../locales/en.json";
import { useMemo } from "react";
>>>>>>> 3ca1dbff1ca01a723ca12543088f24b11dbbfea3

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { setLang, lang } = useContext(LanguageContext);
  const t = lang === "tr" ? tr : en;
  

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSection = (id) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <li onClick={() => goToSection("hakkimizda")}>
            {t.Navbar.Hak}
          </li>
          <li onClick={() => goToSection("sss")}>
            {t.Navbar.sss}
          </li>
          <li>
            <Link to="/kaynaklar" onClick={() => setMenuOpen(false)}>
              {t.Navbar.Pro}
            </Link>
          </li>
          <li>
            <Link
              to="https://chiron.streamlit.app/"
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
          <li onClick={() => goToSection("hakkimizda")}>
            {t.Navbar.Hak}
          </li>
          <li onClick={() => goToSection("sss")}>
            {t.Navbar.sss}
          </li>
          <li>
            <Link to="/kaynaklar">{t.Navbar.Pro}</Link>
          </li>
          <li>
            <Link to="https://chiron.streamlit.app/" target="_blank">
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
