import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutMe from "./Pages/AboutMe";
import ContactMe from "./Pages/ContactMe";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";

function App() {
  return (
    <div className="">
      {/* <HomePage /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
