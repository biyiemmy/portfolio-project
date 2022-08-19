import "./Card.css";
// import Card from "react-bootstrap/Card";

const CardService = ({ image, text, subText }) => {
  return (
    <>
      <div className="w-50 my-3 py-3 px-2 card-service">
        <img src={image} alt="" style={{width: "64px", height: "56px"}} />
        <h5 className="py-2">{text}</h5>
        <p>{subText}</p>
      </div>
    </>
  );
};

export default CardService;
