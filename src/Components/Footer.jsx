import "./Footer.css";
import { Github, Twitter, Linkedin } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <div style={{ height: "250px"}} className="footer text-white d-flex flex-column justify-content-center align-items-center">
        <h2>Adebiyi Emmanuel</h2>
        <div className="py-3">
          <Github className="icons" color="white" size={30} />
          <Twitter className="icons" color="white" size={30} />
          <Linkedin className="icons" color="white" size={30} />
        </div>
        <p>Copyright &copy; 2021 | All rights Reserved</p>
      </div>
    </>
  );
};

export default Footer;
