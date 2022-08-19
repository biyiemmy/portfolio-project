import {
  Github,
  Twitter,
  Linkedin,
  Envelope,
  Telephone,
} from "react-bootstrap-icons";

const ContactMe = () => {
  return (
    <>
      <div
        className="my-5 d-flex justify-content-around"
        style={{ width: "1440px", maxWidth: "100%" }}
      >
        <div className="container" style={{ width: "790px" }}>
          <h3>Get In Touch.</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras <br />{" "}
            nec sollicitudin tellus. Phasellus ac nisi augue.
          </p>
          <div className="icon d-flex pt-3">
            <Github className="icons" color="royalblue" size={30} />
            <Twitter className="icons" color="royalblue" size={30} />
            <Linkedin className="icons" color="royalblue" size={30} />
            <h5 className="px-3"> - biyiemmy</h5>
          </div>
          <div className="d-flex mt-5">
            <Envelope className="icons mt-2" color="royalblue" size={30} />
            <div className="px-2">
              <a
                style={{ textDecoration: "none" }}
                href="mailto:webmaster@example.com"
              >
                adebiyiemmanuel11@gmail.com
              </a>
              <p>Send a message at anytime!</p>
            </div>
          </div>
          <div className="d-flex">
            <Telephone className="icons mt-2" color="royalblue" size={30} />
            <div className="px-2">
              <a
                style={{ textDecoration: "none" }}
                href="tel:+234 - 9035 - 722886"
              >
                +234 - 9035 - 722886
              </a>
              <p>Call me anytime!</p>
            </div>
          </div>
        </div>

        <div style={{ width: "650px", backgroundColor: "#1C41B0" }}>
          <h3>Need a Service?</h3>
          <h4>Send A Message</h4>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
