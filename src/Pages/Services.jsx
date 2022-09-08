import "./Services.css";
import Picture from "../Icons/Vector.png";
import CardService from "../Components/Card";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="container py-5 service">
          <div>
            <h3>Services I Render.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec{" "}
              <br />
              sollicitudin tellus. Phasellus ac nisi augue.
            </p>
          </div>

          <div className="">
            <div className="d-sm-block d-md-flex justify-content-between">
              <CardService
                image={Picture}
                text={"Training"}
                subText={
                  "I offer instructor-led training in a way that fits with the way you work. "
                }
              />
              <CardService
                image={Picture}
                text={"IT Consulting"}
                subText={
                  "I offer Information technology consulting as a field of activity focused on advising organizations on how best to use information technology in achieving their business objectives."
                }
              />
              <CardService
                image={Picture}
                text={"Training"}
                subText={
                  "I Help design Mobile-friendly, worldclass websites that helps scales your bussiness and helps user experience get better. "
                }
              />
            </div>

            <div className="d-flex justify-content-between">
              <CardService
                image={Picture}
                text={"Training"}
                subText={
                  "With equipped skills of developing and maintaining databases i could  help develop scalable and optimized databases for your organization. "
                }
              />
              <CardService
                image={Picture}
                text={"Training"}
                subText={
                  "I help develop tehnical solutions in form of softwarres that answer to the needs of customer’s problems."
                }
              />
              <CardService
                image={Picture}
                text={"Training"}
                subText={
                  "I help test softwares ready for production to fish out bugs and give advice on how to make it scalable, usable and enterprise-friendly.  "
                }
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
