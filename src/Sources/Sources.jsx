import React, { useState, useContext, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import LoadingScreen from "../loadingScreen/loadingScreen";
import tr from "../locales/tr.json";
import en from "../locales/en.json";
import "./Source.css";
import Footer from "../Footer/footer";
import { LanguageContext } from "../LanguageContext.jsx";
import PdfViewerPanel from "./PdfViewerPanel";
import CodeViewerPanel, { isCodeFile } from "./CodeViewerPanel";

export default function SourcePage() {
  const { lang } = useContext(LanguageContext);
  const t = lang === "tr" ? tr : en;

  const [currentFolder, setCurrentFolder] = useState(t.Files);
  const [folderStack, setFolderStack] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    setCurrentFolder(t.Files);
    setFolderStack([]);
    setSelectedFile(null);
  }, [lang]);

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

  const isPdf = (item) =>
    item?.ext && item.ext.toLowerCase().trim() === ".pdf";
  const isCode = (item) => isCodeFile(item);

  const getFileUrl = (url) => {
    if (!url) return "";
    const path = url.startsWith("/") ? url : `/${url}`;
    return path.startsWith("/files/") ? path : `/files/${path.replace(/^\/+/, "")}`;
  };

  const renderPreviewPanel = () => {
    if (!selectedFile) {
      return (
        <div className="sources-preview-empty">
          <p>{t.Sources.selectFile}</p>
        </div>
      );
    }
    if (isPdf(selectedFile)) {
      return (
        <PdfViewerPanel
          fileUrl={selectedFile.url}
          fileName={selectedFile.name}
        />
      );
    }
    if (isCode(selectedFile)) {
      return (
        <CodeViewerPanel
          fileUrl={selectedFile.url}
          fileName={selectedFile.name + selectedFile.ext}
          fileDate={selectedFile.date}
          downloadLabel={t.Sources.download}
          onDownload={() =>
            downloadFile({
              name: selectedFile.name,
              ext: selectedFile.ext,
              url: selectedFile.url,
            })
          }
        />
      );
    }
    return (
      <div className="sources-preview-file">
        <div className="sources-preview-file-info">
          <h3>{selectedFile.name + selectedFile.ext}</h3>
          <p>{t.Sources.tar}: {selectedFile.date}</p>
          <button
            className="preview-download-btn"
            onClick={() =>
              downloadFile({
                name: selectedFile.name,
                ext: selectedFile.ext,
                url: selectedFile.url,
              })
            }
          >
            {t.Sources.download}
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <LoadingScreen />
      <Navbar />

      <div className="Sourceİmg">
        <div className="SourceText">
          <h1>{t.Sources.kay}</h1>
        </div>
        <img src="/neochiron2.svg" alt="Kaynaklar" />
      </div>

      <div className="sources-container">
        <div className="sources-main">
          <div className="sources-list">
            <div className="source-header">
              {folderStack.length > 0 && (
                <button className="back-btn" onClick={goBack}>
                  {t.Sources.back}
                </button>
              )}
              <h2>{t.Sources.kay}</h2>
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
                  <div
                    key={index}
                    role="button"
                    tabIndex={0}
                    className={`file-card file ${
                      selectedFile?.url === getFileUrl(item.url) ? "selected" : ""
                    }`}
                    onClick={() =>
                      setSelectedFile({
                        name: item.name,
                        ext: item.ext,
                        date: item.date,
                        url: getFileUrl(item.url),
                      })
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedFile({
                          name: item.name,
                          ext: item.ext,
                          date: item.date,
                          url: getFileUrl(item.url),
                        });
                      }
                    }}
                  >
                    <span className="icon">📄</span>
                    <p>{item.name + item.ext}</p>
                    <button
                      type="button"
                      className="download-icon-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        downloadFile({ ...item, url: getFileUrl(item.url) });
                      }}
                      title={t.Sources.download}
                    >
                      ↓
                    </button>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="sources-preview">{renderPreviewPanel()}</div>
        </div>
      </div>

      <Footer />
    </>
  );
}
