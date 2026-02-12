import { Link } from "react-router-dom";
import "./notfound.css";
import LoadingScreen from "../loadingScreen/loadingScreen";
import { LanguageContext } from "../LanguageContext";
import tr from "../locales/tr.json";
import en from "../locales/en.json";
import { useContext } from "react";

function NotFound() {
  const { lang } = useContext(LanguageContext);

  const t = lang === "tr" ? tr : en;
  return (
    <>
      <LoadingScreen />
      <div className="nf">
        <div className="nf-bg" />

        <div className="nf-content">
          <span className="nf-eyebrow">ERROR</span>

          <h1 className="nf-code">404</h1>

          <p className="nf-text">{t.Error.des}</p>

          <div className="nf-actions">
            <Link to="/" className="nf-primary">
              {t.Error.button}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
