import React, { useState, useRef } from "react";
import {
  Viewer,
  Worker,
  ViewMode,
  SpecialZoomLevel,
  ScrollMode,
} from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./PdfViewerPanel.css";

const PDF_WORKER_URL = "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js";
const ZOOM_STEP = 0.25;
const ZOOM_MIN = 0.25;
const ZOOM_MAX = 4;

function FabControls({ currentPage, numPages, onPrev, onNext, onZoomIn, onZoomOut, zoomLevel }) {
  if (numPages <= 0) return null;
  const canPrev = currentPage > 0;
  const canNext = currentPage < numPages - 1;

  return (
    <div className="pdf-viewer-fab">
      {/* Zoom */}
      <div className="pdf-viewer-fab-zoom">
        <button
          type="button"
          className="pdf-viewer-fab-btn pdf-viewer-fab-btn--zoom"
          title="Uzaklaştır"
          onClick={onZoomOut}
          disabled={zoomLevel <= ZOOM_MIN}
        >
          −
        </button>
        <span className="pdf-viewer-fab-zoom-label">
          {Math.round(zoomLevel * 100)}%
        </span>
        <button
          type="button"
          className="pdf-viewer-fab-btn pdf-viewer-fab-btn--zoom"
          title="Yaklaştır"
          onClick={onZoomIn}
          disabled={zoomLevel >= ZOOM_MAX}
        >
          +
        </button>
      </div>

      {/* Sayfa */}
      <div className="pdf-viewer-fab-pages">
        <button
          type="button"
          className="pdf-viewer-fab-btn"
          title="Önceki sayfa"
          disabled={!canPrev}
          onClick={onPrev}
        >
          ‹
        </button>
        <span className="pdf-viewer-fab-page-info">
          {currentPage + 1} / {numPages}
        </span>
        <button
          type="button"
          className="pdf-viewer-fab-btn"
          title="Sonraki sayfa"
          disabled={!canNext}
          onClick={onNext}
        >
          ›
        </button>
      </div>
    </div>
  );
}

function PdfViewerInner({ fileUrl }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [numPages, setNumPages] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  // zoom() fonksiyonunu Viewer mount olduktan sonra erişebilmek için ref
  const zoomFnRef = useRef(null);

  const pageNavPlugin = pageNavigationPlugin();
  const zoomPluginInstance = zoomPlugin({
    enableShortcuts: false,
  });

  // zoomPlugin, Viewer'a bağlandıktan sonra zoom() metodunu expose eder
  // install hook'u ile yakalarız
  const originalInstall = zoomPluginInstance.install;
  zoomPluginInstance.install = (pluginFunctions) => {
    if (originalInstall) originalInstall(pluginFunctions);
    zoomFnRef.current = pluginFunctions.zoom;
  };

  const handleDocumentLoad = (e) => {
    setNumPages(e.doc.numPages);
    setCurrentPage(0);
  };

  const handlePageChange = (e) => {
    setCurrentPage(e.currentPage);
  };

  const handleZoomIn = () => {
    const next = Math.min(parseFloat((zoomLevel + ZOOM_STEP).toFixed(2)), ZOOM_MAX);
    if (zoomFnRef.current) {
      zoomFnRef.current(next);
    }
    setZoomLevel(next);
  };

  const handleZoomOut = () => {
    const next = Math.max(parseFloat((zoomLevel - ZOOM_STEP).toFixed(2)), ZOOM_MIN);
    if (zoomFnRef.current) {
      zoomFnRef.current(next);
    }
    setZoomLevel(next);
  };

  return (
    <div className="pdf-viewer-wrapper">
      <Viewer
        fileUrl={fileUrl}
        viewMode={ViewMode.SinglePage}
        scrollMode={ScrollMode.Page}
        defaultScale={SpecialZoomLevel.PageFit}
        theme="dark"
        plugins={[pageNavPlugin, zoomPluginInstance]}
        onDocumentLoad={handleDocumentLoad}
        onPageChange={handlePageChange}
        onZoom={(e) => setZoomLevel(e.scale)}
      />
      <FabControls
        currentPage={currentPage}
        numPages={numPages}
        onPrev={() => pageNavPlugin.jumpToPreviousPage()}
        onNext={() => pageNavPlugin.jumpToNextPage()}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        zoomLevel={zoomLevel}
      />
    </div>
  );
}

function PdfViewerPanel({ fileUrl }) {
  if (!fileUrl) return null;

  return (
    <div className="pdf-viewer-panel">
      <Worker workerUrl={PDF_WORKER_URL}>
        <PdfViewerInner key={fileUrl} fileUrl={fileUrl} />
      </Worker>
    </div>
  );
}

export default PdfViewerPanel;