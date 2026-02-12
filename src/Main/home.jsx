<<<<<<< HEAD
import { useState } from "react";
import "./home.css";
import "./msandvs.css";
import LoadingScreen from "../loadingScreen/loadingScreen";
import { LanguageContext } from "../LanguageContext.jsx";
=======
import { useState, useEffect } from "react";
import "./home.css";
import "./msandvs.css";
import LoadingScreen from "../loadingScreen/loadingScreen";
import { LanguageContext } from "../LanguageContext";
>>>>>>> 3ca1dbff1ca01a723ca12543088f24b11dbbfea3
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
<<<<<<< HEAD
          <h2 id="hakkimizda">Team 11000</h2>
        </div>
        <img src="/src/assets/takım.png" alt="" />
      </div>
      <div  className="Hakkımızda">
=======
          <h2>Team 11000</h2>
        </div>
        <img src="/src/assets/takım.png" alt="" />
      </div>
      <div id="hakkimizda" className="Hakkımızda">
>>>>>>> 3ca1dbff1ca01a723ca12543088f24b11dbbfea3
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
<<<<<<< HEAD
      <section className="misyonvizyon-page">
=======
      <section id="misyonumuz" className="misyonvizyon-page">
>>>>>>> 3ca1dbff1ca01a723ca12543088f24b11dbbfea3
        <div className="tabs">
          <button
            className={activeTab === "misyon" ? "active" : ""}
            onClick={() => setActiveTab("misyon")}
          >
            {t.Main.misyon}
          </button>
<<<<<<< HEAD
          <button 
=======
          <button
>>>>>>> 3ca1dbff1ca01a723ca12543088f24b11dbbfea3
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
<<<<<<< HEAD
              <p id="sss">
=======
              <p>
>>>>>>> 3ca1dbff1ca01a723ca12543088f24b11dbbfea3
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
