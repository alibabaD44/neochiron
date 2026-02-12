import React, { useContext } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { LanguageContext } from "../LanguageContext.jsx";
=======
import { LanguageContext } from "../LanguageContext";
>>>>>>> 3ca1dbff1ca01a723ca12543088f24b11dbbfea3
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
          <a href="#hakkimizda">{t.Navbar.Hak}</a>
          <Link to="/kaynaklar">{t.Navbar.Pro}</Link>
          <Link to="/neobot">{t.Navbar.Neo}</Link>
        </div>

        <div className="footer-links">
          <h4>{t.Footer.dstk}</h4>
          <a href="#sss">{t.Navbar.sss}</a>
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

<<<<<<< HEAD
            <a href="https://www.linkedin.com/company/neochiron" className="icon linkedin" target="_blank"
              rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>

            </a>

=======
>>>>>>> 3ca1dbff1ca01a723ca12543088f24b11dbbfea3
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
<<<<<<< HEAD
        © 2026 NeoChiron. All rights reserved.
=======
        © 2026 Neochiron. All rights reserved.
>>>>>>> 3ca1dbff1ca01a723ca12543088f24b11dbbfea3
      </div>
    </footer>
  );
}

export default Footer;
