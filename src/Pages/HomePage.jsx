import NavBar from "../Components/NavBar";
import { Github, Twitter, Linkedin } from "react-bootstrap-icons";
import Picture from "../Images/adebiyi.jpg";
import AboutMe from "./AboutMe";
import Skills from "../Components/Skills";
import Services from "./Services";
import Testimony from "../Components/Testimony";
import ContactMe from "./ContactMe";

const HomePage = () => {
  return (
    <>
      <NavBar />

      <div className="container py-3 d-flex justify-content-between">
        <div className="text-left home-text pt-5">
          <h4 className="text-primary pt-5">Hi there</h4>
          <h3 className="text-primary pt-1">I'm Adebiyi Emmanuel</h3>
          <h2 className="pt-1">
            A Developer, <br /> Technical-Writer & <br />{" "}
            Community-Manager.
          </h2>
          <div>
            <div className="icon pt-3">
              <Github className="icons" color="royalblue" size={30} />
              <Twitter className="icons" color="royalblue" size={30} />
              <Linkedin className="icons" color="royalblue" size={30} />
            </div>
          </div>
        </div>

        <img src={Picture} alt="" />
      </div>

      <AboutMe />
      <Skills />
      <Services />
      <Testimony />
      <ContactMe />
    </>
  );
};

export default HomePage;
