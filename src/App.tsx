import { Route, Routes } from "react-router";
import MainAnimation from "./components/MainAnimation";
import Home from "./pages/Home";
import About from "./pages/about";
import PortFolio from "./pages/PortFolio";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./components/ScroolToTop";
import { useEffect } from "react";
import LightDarkSwitch from "./components/LightDarkSwitch";

const App = () => {
  useEffect(() => {
    document.body.classList.add("bg-[#ffffff]");
    document.body.classList.add("dark:bg-[#212429]");
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <LightDarkSwitch />
      <Routes>
        <Route
          path="/"
          element={<MainAnimation menu={false} children={<Home />} />}
        />
        <Route path="/about" element={<MainAnimation children={<About />} />} />
        <Route
          path="/portfolio"
          element={<MainAnimation children={<PortFolio />} />}
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
