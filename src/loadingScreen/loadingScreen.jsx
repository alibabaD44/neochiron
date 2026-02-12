import { useState, useEffect } from "react";
import "./loadingScreen.css";

function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return(
    <>
        {loading && (
        <div className="loadingScreen">
          <div className="logoWrapper">
            <img src="/src/assets/neochiron2.svg" alt="Neochiron Logo" />
            <span className="ring"></span>
          </div>
        </div>
      )}
    </>
  )
}

export default LoadingScreen;
