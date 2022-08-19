import "./NavBar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "react-bootstrap-icons";
import HomePage from "../Pages/HomePage";
import AboutMe from "../Pages/AboutMe";
import ContactMe from "../Pages/ContactMe";
import Projects from "../Pages/Projects";
import Services from "../Pages/Services";

const NavBar = () => {
  return (
    <>
      <Router>
        <div className="container d-flex justify-content-between nav-real pt-5">
          <ul className="d-flex justify-content-between text-center list-unstyled nav-main">
            <li className="">
              <Link className="a main-name" to="/">
                Adebiyi Emmanuel
              </Link>
            </li>
            <li>
              <Link className="a other" to="/about">
                About Me
              </Link>
            </li>
            <li>
              <Link className="a other" to="/contact">
                Contact Me
              </Link>
            </li>
            <li>
              <Link className="a other" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="a other" to="/services">
                Services
              </Link>
            </li>
          </ul>

          <div className="icon nav-other pt-1">
            <Github className="icons" color="royalblue" size={30} />
            <Twitter className="icons" color="royalblue" size={30} />
            <Linkedin className="icons" color="royalblue" size={30} />
          </div>
        </div>

        {/* <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/about" element={<AboutMe />}></Route>
          <Route exact path="/contact" element={<ContactMe />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
        </Routes> */}
      </Router>
    </>
  );
};

export default NavBar;
