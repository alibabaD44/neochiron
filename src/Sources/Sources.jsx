import React, { useState, useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import LoadingScreen from "../loadingScreen/loadingScreen";
import tr from "../locales/tr.json";
import en from "../locales/en.json";
import "./Source.css";
import Footer from "../Footer/footer";
import { LanguageContext } from "../LanguageContext";

export default function SourcePage() {
  const { lang } = useContext(LanguageContext);
  const t = lang === "tr" ? tr : en;

  const [currentFolder, setCurrentFolder] = useState(t.Files);
  const [folderStack, setFolderStack] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const openFolder = (folder) => {
    setFolderStack([...folderStack, currentFolder]);
    setCurrentFolder(folder.contents);
  };

  const goBack = () => {
    const stack = [...folderStack];
    const last = stack.pop();
    setFolderStack(stack);
    setCurrentFolder(last);
  };

  const downloadFile = async (item) => {
    try {
      const response = await fetch(item.url);
      const blob = await response.blob();

      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = item.name + item.ext;

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Dosya indirilemedi:", error);
    }
  };



  return (
    <>
      <LoadingScreen />
      <Navbar />

      <div className="Sourceİmg">
        <div className="SourceText">
          <h1>{t.Sources.kay}</h1>
        </div>
        <img src="../src/assets/robotlar_yatay.png" alt="Robot" />
      </div>

      <div className="Sources">
        <div className="source-header">
          {folderStack.length > 0 && (
            <button className="back-btn" onClick={goBack}>
              {t.Sources.back}
            </button>
          )}

          <h2>
            {selectedFile
              ? `${t.Sources.sec}: ${
                  selectedFile.name
                }${selectedFile.ext} | ${t.Sources.tar}: ${selectedFile.date}`
              : t.Sources.kay}
          </h2>
        </div>

        <div className="file-grid">
          {currentFolder.map((item, index) =>
            item.type === "folder" ? (
              <div
                key={index}
                className="file-card folder"
                onClick={() => openFolder(item)}
              >
                <span className="icon">📁</span>
                <p>{item.name}</p>
              </div>
            ) : (
              <div key={index} className="file-card file">
                <span className="icon">📄</span>
                <p
                  onClick={() =>
                    setSelectedFile({
                      name: item.name,
                      ext: item.ext,
                      date: item.date,
                      url: item.url,
                    })
                  }
                >
                  {item.name + item.ext}
                </p>

                <i
                  className="fas fa-download download-icon"
                  onClick={() => downloadFile(item)}
                ></i>
              </div>
            ),
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
