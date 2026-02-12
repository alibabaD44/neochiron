import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { LanguageProvider } from "./LanguageProvider.jsx";
=======
import { LanguageProvider } from "./LanguageContext.jsx";
>>>>>>> 3ca1dbff1ca01a723ca12543088f24b11dbbfea3


createRoot(document.getElementById("root")).render(
  <LanguageProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </LanguageProvider>,
);
