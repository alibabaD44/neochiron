<<<<<<< HEAD
import { createContext } from "react";

export const LanguageContext = createContext(null);
=======
import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("tr");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
>>>>>>> 3ca1dbff1ca01a723ca12543088f24b11dbbfea3
