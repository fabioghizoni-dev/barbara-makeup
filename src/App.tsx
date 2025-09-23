import { lazy, Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Spinner from "./pages/Spinner";

const Home = lazy(() => import("./pages/Home"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Care = lazy(() => import("./pages/Care"));

function AnimatedBackground() {
  return (
    <div className="background-container">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <AnimatedBackground />
      <div className={`App ${theme}`}>
        <div className="theme-switcher">
          <button role="button" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/care" element={<Care />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
