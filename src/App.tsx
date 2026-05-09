import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import FatwaPage from "./pages/Fatwa";
import EducationPage from "./pages/Education";
import EdizioniPage from "./pages/Edizioni";
import StudiosPage from "./pages/Studios";
import KidsPage from "./pages/Kids";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fatwa" element={<FatwaPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/edizioni" element={<EdizioniPage />} />
        <Route path="/studios" element={<StudiosPage />} />
        <Route path="/kids" element={<KidsPage />} />
      </Routes>
    </Router>
  );
}
