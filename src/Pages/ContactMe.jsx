import {
  Github,
  Twitter,
  Linkedin,
  Envelope,
  Telephone,
} from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ContactMe = () => {
  return (
    <>
      <div className="row" style={{}}>
        <div className="col-md-6">
          <div
            className="d-flex flex-column min-vh-50 justify-content-center align-items-center"
            style={{}}
          >
            <h3>Get In Touch.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras{" "}
              <br /> nec sollicitudin tellus. Phasellus ac nisi augue.
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
        </div>

        <div className="col-md-6">
          <div
            className="bg-primary text-white d-flex flex-column min-vh-100 justify-content-center align-items-left px-5"
            style={{}}
          >
            <h3>Need a Service?</h3>
            <h4>Send A Message</h4>

            <div>
              <Form hasValidation className="pt-3">
                <Form.Group className="mb-3">
                  <Form.Label>Fullname:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Fullname..."
                  />
                  {/* <Form.Text className="text-muted text-danger">
                  We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Your Email Address..."
                  />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Write A Message:</Form.Label>
                  <Form.Control as="textarea" rows={5} />
                </Form.Group>

                <Button
                  variant=""
                  className="bg-white text-primary text-center"
                  type="submit"
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
