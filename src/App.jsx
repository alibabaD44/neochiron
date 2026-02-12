import Home2 from "./home";
import { Routes, Route } from "react-router-dom";
import Project from "./Projects/project";
import Neobot from "./Neobot/Neobot";
import NotFound from "./notFound/notFound";
import SourcePage from "./Sources/Sources";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/kaynaklar" element={<SourcePage />} />
        <Route path="/neobot" element={<Neobot />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
