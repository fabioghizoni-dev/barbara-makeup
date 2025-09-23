import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Care from "./pages/Care";

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
          <button onClick={toggleTheme}>{theme === "light" ? "🌙" : "☀️"}</button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/care" element={<Care />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
