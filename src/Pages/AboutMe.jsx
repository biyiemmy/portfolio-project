import "./AboutMe.css";
import { Github, Twitter, Linkedin } from "react-bootstrap-icons";

const AboutMe = () => {
  return (
    <>
      <div className="text-center about">
        <div className="about-main">
          <h3 className="">About Me </h3>
          <p className="pt-2 font-monospace d-flex justify-content-center fs-5">
            <div className="w-50">
              Adebiyi Emmanuel is a passionate and goal driven Techpreneur whose
              interest is in using technology to build solutions to solve real
              world problems.
            </div>
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
