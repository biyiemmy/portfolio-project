import { Github, Twitter, Linkedin } from "react-bootstrap-icons";
import Picture from "../Images/adebiyi.jpg";
import "./Home.css"

const Home = () => {
  return (
    <div className="container mt-5 d-sm-flex justify-content-between">
      <div className="text-left home-text pt-5">
        <h4 className="text-primary pt-5">Hi there</h4>
        <h3 className="text-primary pt-1">I'm Adebiyi Emmanuel</h3>
        <h2 className="pt-1">
          A Developer, <br /> Technical-Writer & <br /> Community-Manager.
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
  );
};

export default Home;
