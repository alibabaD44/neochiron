import { Link } from "react-router-dom";
import "./comingsoon.css";
import { LanguageContext } from "../LanguageContext.jsx";
import tr from "../locales/tr.json";
import en from "../locales/en.json";
import { useContext } from "react"

function ComingSoonScreen() {
  const { lang } = useContext(LanguageContext);

  const t = lang === "tr" ? tr : en;
  return (
    <div className="cs">
      <div className="cs-bg" />

      <div className="cs-content">
        <span className="cs-eyebrow">COMING SOON</span>

        <h1>{t.comingSoon.title}</h1>

        <p>{t.comingSoon.desc}</p>

        <div className="cs-btn">
          <Link to="/" className="nf-primary">
            {t.comingSoon.button}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ComingSoonScreen;
