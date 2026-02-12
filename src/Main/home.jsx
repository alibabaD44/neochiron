import { useState, useEffect } from "react";
import "./home.css";
import "./msandvs.css";
import LoadingScreen from "../loadingScreen/loadingScreen";
import { LanguageContext } from "../LanguageContext";
import tr from "../locales/tr.json";
import en from "../locales/en.json";
import { useContext } from "react";
import BackToTop from "../BackToTop/BacktoTop";

function Home() {
  const [activeTab, setActiveTab] = useState("misyon");
  const { lang } = useContext(LanguageContext);

  const t = lang === "tr" ? tr : en;

  

  return (
    <>
      <LoadingScreen />
      <div className="Foto" >
        <div className="grayScreen">
          <h1>NEOCHIRON</h1>
          <h2>Team 11000</h2>
        </div>
        <img src="/src/assets/takım.png" alt="" />
      </div>
      <div id="hakkimizda" className="Hakkımızda">
        <div className="Hak">
          <div className="Hak-ack">
            <h2>{t.Main.Hak}</h2>
            <h3>{t.Main.Hakack}</h3>
          </div>
        </div>
        <div className="imgHak">
          <img src="/src/assets/robot.png" alt="" />
        </div>
      </div>
      <section id="misyonumuz" className="misyonvizyon-page">
        <div className="tabs">
          <button
            className={activeTab === "misyon" ? "active" : ""}
            onClick={() => setActiveTab("misyon")}
          >
            {t.Main.misyon}
          </button>
          <button
            className={activeTab === "vizyon" ? "active" : ""}
            onClick={() => setActiveTab("vizyon")}
          >
            {t.Main.vizyon}
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "misyon" && (
            <div className="content-box">
              <h2>{t.Main.misyonbsk}</h2>
              <p>
                {t.Main.misyonack}
              </p>
            </div>
          )}

          {activeTab === "vizyon" && (
            <div className="content-box">
              <h2>{t.Main.vizyonbsk}</h2>
              <p>
                {t.Main.vizyonack}
              </p>
            </div>
          )}
        </div>
      </section>
      <BackToTop/>
    </>
  );
}

export default Home;
