import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import { ThemeProvider } from "./context/ThemeContext";

// Import global styles
import "./style/global.css";
import "./style/bootstrap-overrides.css";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Hooks Pages
import UseStatePage from "./pages/hooks/UseStatePage";
import UseEffectPage from "./pages/hooks/UseEffectPage";
import UseContextPage from "./pages/hooks/UseContextPage";
import UseReducerPage from "./pages/hooks/UseReducerPage";
import UseRefPage from "./pages/hooks/UseRefPage";
import UseMemoPage from "./pages/hooks/UseMemoPage";

// Workshop Pages
import WorkshopHome from "./pages/workshops/WorkshopHome";
import Workshop1 from "./pages/workshops/Workshop1";
import Workshop2 from "./pages/workshops/Workshop2";
import Workshop3 from "./pages/workshops/Workshop3";
import Workshop4 from "./pages/workshops/Workshop4";
import Workshop5 from "./pages/workshops/Workshop5";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <div className="content-container">
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />

              {/* Hooks Routes */}
              <Route path="/usestate" element={<UseStatePage />} />
              <Route path="/useeffect" element={<UseEffectPage />} />
              <Route path="/usecontext" element={<UseContextPage />} />
              <Route path="/usereducer" element={<UseReducerPage />} />
              <Route path="/useref" element={<UseRefPage />} />
              <Route path="/usememo" element={<UseMemoPage />} />

              {/* Workshop Routes */}
              <Route path="/workshops" element={<WorkshopHome />} />
              <Route path="/workshops/1" element={<Workshop1 />} />
              <Route path="/workshops/2" element={<Workshop2 />} />
              <Route path="/workshops/3" element={<Workshop3 />} />
              <Route path="/workshops/4" element={<Workshop4 />} />
              <Route path="/workshops/5" element={<Workshop5 />} />

              {/* About Page */}
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
