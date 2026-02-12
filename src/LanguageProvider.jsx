import { useState, useMemo } from "react";
import { LanguageContext } from "./LanguageContext";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("tr");

  const value = useMemo(
    () => ({ lang, setLang }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
