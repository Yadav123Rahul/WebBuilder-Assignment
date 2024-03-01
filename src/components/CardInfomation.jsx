import React, { useState } from "react";
import img from "../assets/computer.png";
import HalfRating from "./Rating";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoChevronUpSharp } from "react-icons/io5";
import { AiOutlineCheck } from "react-icons/ai";
import { IoDiamondOutline } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import VarticalCard from "./VarticalCard";
function CardInfomation() {
  const [upDown, setUpDown] = useState(true);
  return (
    <>
      <div className="card">
        <div className="Srnumber">1</div>
        <div className="bage">
          <GoTrophy />
          <div>Best Choice</div>
        </div>
        <div className="computer">
          <img src={img} alt="img" />
          <p>Builder 1</p>
        </div>
        <div>
          <p className=" description">
            <span className="desTitle">
              WixPro 72-Inch Responsive Website Builder-
            </span>{" "}
            Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue)
          </p>
          <h4 className="highlight">Main highlights</h4>
          <div className="douwn-des">
            <p className=" description">
              [What You Get]: Receive the WixPro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailed step-by-step guides.
            </p>
          </div>
          <div className="showmore">
            <div
              style={{
                cursor: "pointer ",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => setUpDown(!upDown)}
            >
              Show More{" "}
              <span className="showarrow">
                {upDown ? <IoChevronDownSharp /> : <IoChevronUpSharp />}
              </span>
            </div>
          </div>
        </div>
        <div className="rating-div">
          <div className="rating">
            <h1 className="rateNo">9.8</h1>
            <p className="rateDes">Exceptional</p>
            <p className="rateImg">
              <HalfRating rating={4.8} />
            </p>
          </div>
          <div className="view-button">View</div>
        </div>
      </div>
      <div className="card">
        <div className="Srnumber">2</div>
        <div className="bage">
          <IoDiamondOutline />
          <div>Best Value</div>
        </div>
        <div className="computer">
          <img src={img} alt="img" />
          <p>Builder</p>
        </div>
        <div>
          <p className=" description">
            <span className="desTitle">
              WixPro 72-Inch Responsive Website Builder-
            </span>{" "}
            Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue)
          </p>
          <h4 className="highlight">Main highlights</h4>
          <div className="douwn-des">
            <p className=" description">
              [What You Get]: Receive the WixPro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailed step-by-step guides.
            </p>
          </div>
          <div className="showmore">
            <div
              style={{
                cursor: "pointer ",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => setUpDown(!upDown)}
            >
              Show More{" "}
              <span className="showarrow">
                {upDown ? <IoChevronDownSharp /> : <IoChevronUpSharp />}
              </span>
            </div>
          </div>
        </div>
        <div className="rating-div">
          <div className="rating">
            <h1 className="rateNo">9.5</h1>
            <p className="rateDes">Excellent</p>
            <p className="rateImg">
              <HalfRating rating={4.5} />
            </p>
          </div>
          <div className="view-button">View</div>
        </div>
      </div>
      <div className="card">
        <div className="Srnumber">3</div>
        <div className="computer">
          <img src={img} alt="img" />
          <p>Builder 1</p>
        </div>
        <div>
          <p className=" description">
            <span className="desTitle">
              WixPro 72-Inch Responsive Website Builder-
            </span>{" "}
            Comprehensive Digital Platform Creation Tool, Streamlined Design
            Interface for Professional Websites and Online Stores (Black/Blue)
          </p>
          <h4 className="highlight">Main highlights</h4>
          <div className="douwn-des">
            <p className=" description">
              [What You Get]: Receive the WixPro website builder suite, access
              to premium design templates, an extensive library of widgets and
              apps, and detailed step-by-step guides.
            </p>
          </div>
          <div className="showmore">
            <div
              style={{
                cursor: "pointer ",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => setUpDown(!upDown)}
            >
              Show More{" "}
              <span className="showarrow">
                {upDown ? <IoChevronDownSharp /> : <IoChevronUpSharp />}
              </span>
            </div>
          </div>
        </div>
        <div className="rating-div">
          <div className="rating">
            <h1 className="rateNo">9.3</h1>
            <p className="rateDes">Excellent</p>
            <p className="rateImg">
              <HalfRating rating={4.3} />
            </p>
          </div>
          <div className="view-button">View</div>
        </div>
      </div>
      <div className="card">
        <div className="Srnumber">4</div>
        <div className="computer">
          <img src={img} alt="img" />
          <p>CDK</p>
        </div>
        <div>
          <p className=" description">
            <span className="desTitle">CDK Resposive Builder: </span> An
            extensive library of widgets and apps, and detailed step-by-step
            guides
          </p>
          <div className="off">20% off</div>
          <h4 className="highlight">Main highlights</h4>
          <div className="extraitem">
            <div className="tool-rating">
              <div className="ratingmanualy">9.9</div>
              <div className="ratingtext">Building Responsive</div>
            </div>
            <div className="tool-rating">
              <div className="ratingmanualy">8.9</div>
              <div className="ratingtext">Cool</div>
            </div>
            <div className="tool-rating">
              <div className="ratingmanualy">8.9</div>
              <div className="ratingtext">Docs</div>
            </div>
          </div>
          <div>
            <p className=" description">Why we love it</p>
            <div className="welovesection">
              <div className="tool-rating">
                <div className="lineCheck">
                  <AiOutlineCheck />
                </div>
                <div className="ratingtext">Documentation</div>
              </div>
              <div className="tool-rating">
                <div className="lineCheck">
                  <AiOutlineCheck />
                </div>
                <div className="ratingtext">Easy Use</div>
              </div>
              <div className="tool-rating">
                <div className="lineCheck">
                  <AiOutlineCheck />
                </div>
                <div className="ratingtext">Out of box</div>
              </div>
            </div>
          </div>
          <div className="showmore">
            <div
              style={{
                cursor: "pointer ",
                display: "flex",
                alignItems: "center",
              }}
              onClick={() => setUpDown(!upDown)}
            >
              Show More{" "}
              <span className="showarrow">
                {upDown ? <IoChevronDownSharp /> : <IoChevronUpSharp />}
              </span>
            </div>
          </div>
        </div>
        <div className="rating-div">
          <div className="rating">
            <h1 className="rateNo">9.1</h1>
            <p className="rateDes">Very Good</p>
            <p className="rateImg">
              <HalfRating rating={4.1} />
            </p>
          </div>
          <div className="view-button">View</div>
        </div>
      </div>

      <div className="card-div">
        <VarticalCard />
        <VarticalCard />
        <VarticalCard />
      </div>

      <div className="sing-container">
        <div className="signtext">Sign up and get exclusive special deals</div>
        <div className="sign-div">
          <div className="inputdiv">
            <input type="text" />
          </div>
          <div className="sign-button">Sign Up</div>
        </div>
      </div>
    </>
  );
}

export default CardInfomation;
