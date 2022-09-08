import "./AboutMe.css";
import { Github, Twitter, Linkedin } from "react-bootstrap-icons";

const AboutMe = () => {
  return (
    <>
      <div className="text-center px-5 about">
        <div className="about-main mx-5">
          <h3 className="">About Me </h3>
          <p className="pt-2 font-monospace fs-5">
            Adebiyi Emmanuel is a passionate and goal driven Techpreneur whose <br />
            interest is in using technology to build solutions to solve real
            world problems.
          </p>
        </div>

        <div className="icon">
          <Github className="icons" color="royalblue" size={30} />
          <Twitter className="icons" color="royalblue" size={30} />
          <Linkedin className="icons" color="royalblue" size={30} />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
