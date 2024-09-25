import { Route, Routes } from "react-router";
import MainAnimation from "./components/MainAnimation";
import Home from "./pages/Home";
import About from "./pages/About";
import PortFolio from "./pages/PortFolio";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScroolToTop";

const App = () => {
  return (
    <BrowserRouter basename="/hamzaali/">
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<MainAnimation menu={false} children={<Home />} />}
        />
        <Route
          path="/hamzaali/about"
          element={<MainAnimation children={<About />} />}
        />
        <Route
          path="/hamzaali/portfolio"
          element={<MainAnimation children={<PortFolio />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
