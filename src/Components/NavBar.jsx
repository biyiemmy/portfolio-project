import "./NavBar.css";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "react-bootstrap-icons";

const NavBar = () => {
  return (
    <>
      <div className="nav-unreal fixed-top mb-5 py-2">
        <div className="container d-flex justify-content-between nav-real">
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
      </div>
    </>
  );
};

export default NavBar;
