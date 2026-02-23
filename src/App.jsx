import Home2 from "./home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./notFound/notFound";
import SourcePage from "./Sources/Sources";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/kaynaklar" element={<SourcePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
