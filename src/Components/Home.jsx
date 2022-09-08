import { Github, Twitter, Linkedin } from "react-bootstrap-icons";
import Picture from "../Images/adebiyi.jpg";
import "./Home.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Home = () => {
  return (
    <div className="container mt-5 row">
      <div className="col-md-8 text-center">
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible
                  ? "animate__animated animate__delay-2s animate__fadeInLeft"
                  : ""
              }
            >
              <div className="text-left fade-in-left animated home-text py-5">
                <h4 className="text-primary pt-5 fs-2">Hi there</h4>
                <h3 className="text-primary pt-1 fs-1">I'm Adebiyi Emmanuel</h3>
                <h2 className="pt-1 fs-1 ">
                  A Developer, <br /> Technical-Writer & <br />{" "}
                  Community-Manager.
                </h2>
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__delay-3s animate__bounce"
                      : ""
                  }
                >
                  <div className="icon pt-3">
                    <Github className="icons" color="royalblue" size={30} />
                    <Twitter className="icons" color="royalblue" size={30} />
                    <Linkedin className="icons" color="royalblue" size={30} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>

      <div className="col-md-4  text-center">
        <TrackVisibility>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "animate__animated animate__fadeInRight " : ""
              }
            >
              <div className="py-5">
                <img
                  src={Picture}
                  className="rounded-circle"
                  style={{ width: "400px", height: "400px" }}
                  alt=""
                />
              </div>
            </div>
          )}
        </TrackVisibility>
      </div>
    </div>
  );
};

export default Home;
