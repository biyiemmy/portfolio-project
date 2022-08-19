

const Recommedation = ({image, text, subText}) => {
  return (
    <>
      <div className="my-5">
        <img src={image} alt="" style={{height:"90px", width:"90px"}} />
        <h5 className="pt-3">{text}</h5>
        <p>{subText}</p>
      </div>
    </>
  );
};

export default Recommedation;
