import Recommedation from "./Recommedation";
import Profile from "../Icons/download.png";

const Testimony = () => {
  return (
    <>
      <div
        className="d-flex justify-content-between"
        style={{ maxWidth: "100%" }}
      >
        <div
          className="bg-primary text-white text-left d-flex flex-column min-vh-100 justify-content-center align-items-center"
          style={{ width: "564px" }}
        >
          <h2 className="my-auto">
            Testimony & <br /> Recommedations
          </h2>
        </div>

        <div className="mx-5 text-center" style={{ width: "576px" }}>
          <div className="d-flex justify-content-between">
            <Recommedation
              image={Profile}
              text={"Femi Okaseun"}
              subText={
                "Seyi gets things done. He’s very passionate about what he does and he’s always fun to be with."
              }
            />
            <Recommedation
              image={Profile}
              text={"Femi Okaseun"}
              subText={
                "Seyi gets things done. He’s very passionate about what he does and he’s always fun to be with."
              }
            />
          </div>

          <div className="d-flex justify-content-between">
            <Recommedation
              image={Profile}
              text={"Femi Okaseun"}
              subText={
                "Seyi gets things done. He’s very passionate about what he does and he’s always fun to be with."
              }
            />
            <Recommedation
              image={Profile}
              text={"Femi Okaseun"}
              subText={
                "Seyi gets things done. He’s very passionate about what he does and he’s always fun to be with."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimony;
