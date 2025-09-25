import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Spinner from "./pages/Spinner";
import ScrollToTop from "./ScrollToTop";
import "./styles/App.css";

const Home = lazy(() => import("./pages/Home"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Care = lazy(() => import("./pages/Care"));

function LightThemeBackground() {
  return (
    <div className="background-container light-theme">
      <div className="clouds"></div>
    </div>
  );
}

function DarkThemeBackground() {
  return (
    <div className="background-container dark-theme">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");
  const location = useLocation();
  const isGalleryPage = location.pathname === "/gallery";

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const timer = setTimeout(() => {
      document.body.classList.add("background-loaded");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <ScrollToTop />
      {theme === "light" ? <LightThemeBackground /> : <DarkThemeBackground />}
      <div className={`App ${theme} ${isGalleryPage ? "gallery-page" : ""}`}>
        <div className="theme-switcher">
          <button
            role="button"
            onClick={toggleTheme}
            aria-label={`Mudar para o tema ${theme === "light" ? "escuro" : "claro"}`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/care" element={<Care />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </>
  );
}

export default App;
