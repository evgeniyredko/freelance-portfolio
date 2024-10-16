import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import Contacts from "./pages/Contacts";

import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/freelance-portfolio/" element={<Home />} />
          <Route path="/freelance-portfolio/" element={<Home />} />
          <Route path="/freelance-portfolio/projects/" element={<Projects />} />
          <Route
            path="/freelance-portfolio/project/:id"
            element={<Project />}
          />
          <Route path="/freelance-portfolio/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
