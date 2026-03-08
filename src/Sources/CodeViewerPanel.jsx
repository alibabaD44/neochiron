import React, { useState, useEffect } from "react";
import "./CodeViewerPanel.css";

const CODE_EXTENSIONS = [
  ".java", ".js", ".jsx", ".ts", ".tsx", ".py", ".css", ".scss", ".html", ".htm",
  ".json", ".md", ".c", ".cpp", ".h", ".hpp", ".cs", ".go", ".rs", ".kt", ".sql",
  ".sh", ".bash", ".yaml", ".yml", ".xml", ".vue", ".svelte",
];

export function isCodeFile(item) {
  const ext = (item?.ext || "").toLowerCase().trim();
  return CODE_EXTENSIONS.includes(ext);
}

function CodeViewerPanel({ fileUrl, fileName, fileDate, onDownload, downloadLabel = "İndir" }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!fileUrl) {
      setContent("");
      setLoading(false);
      setError(null);
      return;
    }
    setLoading(true);
    setError(null);
    fetch(fileUrl)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
      })
      .catch((err) => {
        setError(err?.message || "Dosya yüklenemedi");
        setContent("");
        setLoading(false);
      });
  }, [fileUrl]);

  const lines = content ? content.split("\n") : [];
  const lineCount = lines.length;

  return (
    <div className="code-viewer-panel">
      <header className="code-viewer-header">
        <div className="code-viewer-title">
          <span className="code-viewer-icon" aria-hidden>{"{}"}</span>
          <h3 className="code-viewer-filename">{fileName}</h3>
          {fileDate && (
            <span className="code-viewer-date">{fileDate}</span>
          )}
        </div>
        {onDownload && (
          <button
            type="button"
            className="code-viewer-download-btn"
            onClick={onDownload}
            title={downloadLabel}
          >
            {downloadLabel}
          </button>
        )}
      </header>

      <div className="code-viewer-content">
        {loading && (
          <div className="code-viewer-loading">Yükleniyor…</div>
        )}
        {error && (
          <div className="code-viewer-error">{error}</div>
        )}
        {!loading && !error && (
          <div className="code-viewer-scroll">
            <table className="code-viewer-table">
              <tbody>
                {lines.map((line, i) => (
                  <tr key={i} className="code-viewer-line">
                    <td className="code-viewer-num" aria-hidden>
                      {i + 1}
                    </td>
                    <td className="code-viewer-code">
                      <code>{line || "\u00A0"}</code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {lineCount === 0 && (
              <div className="code-viewer-empty">Dosya boş</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default CodeViewerPanel;
