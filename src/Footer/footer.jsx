import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link"; // Eklendi
import { LanguageContext } from "../LanguageContext.jsx";
import tr from "../locales/tr.json";
import en from "../locales/en.json";
import "./footer.css";

function Footer() {
  const { lang } = useContext(LanguageContext);
  const t = lang === "tr" ? tr : en;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/src/assets/neochiron.svg" alt="NeoChiron Logo" />
        </div>

        <div className="footer-links">
          <h4>{t.Navbar.Hak}</h4>
          {/* href yerine NavHashLink kullanıldı */}
          <NavHashLink smooth to="/#hakkimizda">{t.Navbar.Hak}</NavHashLink>
          <Link to="/kaynaklar">{t.Navbar.Pro}</Link>
          <Link to="https://neochironai.com/">{t.Navbar.Neo}</Link>
        </div>

        <div className="footer-links">
          <h4>{t.Footer.dstk}</h4>
          {/* href yerine NavHashLink kullanıldı */}
          <NavHashLink smooth to="/#sss">{t.Navbar.sss}</NavHashLink>
        </div>

        <div className="footer-contact">
          <h4 className="footer-text">{t.Footer.flw}</h4>
          <div className="footer-icons">
            <a
              href="https://www.instagram.com/team11000/"
              className="icon insta"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@team11000" className="icon tiktok" target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-tiktok"></i>
            </a>

            <a href="https://www.linkedin.com/company/neochiron" className="icon linkedin" target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>

            </a>

            <a
              href="mailto:frcteam11000@gmail.com"
              className="icon mail"
              aria-label="Mail"
            >
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 NeoChiron. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;