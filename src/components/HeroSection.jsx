import React, { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoChevronUpSharp } from "react-icons/io5";
import { BiChevronRight } from "react-icons/bi";
import CardInfomation from "./CardInfomation";
function HeroSection() {
  const [upDown, setUpDown] = useState(true);
  return (
    <div className="herosection">
      <div className="herocontainer">
        <div>
          <h1 className="title-heading">Best Website builders in the US</h1>
        </div>
        <div className="information-container">
          <div className="informtion">
            <div className="text-information">
              <CiCircleCheck /> <span style={{ marginLeft: "4px" }}></span> Last
              Updated - February 22, 2020
            </div>
            <div className="text-information">
              <CiCircleInfo /> <span style={{ marginLeft: "4px" }}></span>
              Advertising Disclosure
            </div>
          </div>
          <div className="text-information">
            Top Relevant{" "}
            <span onClick={() => setUpDown(!upDown)}>
              {upDown ? <IoChevronDownSharp /> : <IoChevronUpSharp />}
            </span>
          </div>
        </div>

        <div className="tools">
          <div className="tool">Tools</div>
          <div className="tool">AWS Builder</div>
          <div className="tool">Start Build</div>
          <div className="tool">Build Supplies</div>
          <div className="tool">Tooling</div>
          <div className="tool">BlueHosting</div>
          <div className="tool emtytool"></div>
        </div>

        <div className="Hosting-name">
          <div>Home</div>
          <div className="rihgticon">
            <BiChevronRight />
          </div>
          <div>Hosting for all</div>
          <div className="rihgticon">
            <BiChevronRight />
          </div>
          <div>Hosting</div>
          <div className="rihgticon">
            <BiChevronRight />
          </div>
          <div>Hosting6</div>
          <div className="rihgticon">
            <BiChevronRight />
          </div>
          <div>Hosting5</div>
        </div>

        <div className="allcard">
          <CardInfomation />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
