import React from "react";
import img from "../assets/computer.png";
function VarticalCard() {
  return (
    <div className="varticalcard">
      <div className="img-div">
        <img src={img} alt="img" />
      </div>
      <div className="off-div">
        {" "}
        <div className="off offvalue">20% off</div>{" "}
        <div className="off limited-time offvalue">Limited time </div>
      </div>
      <h4 className="Webbuilder">Webbuilder 1</h4>
      <p className="web-des">Computer Modern clasic with wix support</p>
      <div className="price-div">
        <div className="price">$39.78</div>{" "}
        <div className="discount">
          $49.96 <span className="per-off">(20% off)</span>
        </div>
      </div>
      <div className="view-button card-button">View Deal</div>
    </div>
  );
}

export default VarticalCard;
