import React, { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoChevronUpSharp } from "react-icons/io5";
const Footer = () => {
  const [upDown, setUpDown] = useState(true);
  return (
    <div className="Footer">
      <div className="F-1 F">
        <p className="p-Head">CATEGORIES</p>
        <p>Web Builder</p>
        <p>Hosting</p>
        <p>Data Center</p>
        <p>Robotic-Automation</p>
      </div>
      <div className="F-2 F">
        <p className="p-Head">CONTACT</p>
        <p>Contact</p>
        <p>Privacy Policy</p>
        <p>Terms Of Service</p>
        <p>Categories</p>
        <p>About</p>
      </div>
      <div className="F-3 F">
        <p>
          United States{" "}
          <span onClick={() => setUpDown(!upDown)}>
            {upDown ? <IoChevronDownSharp /> : <IoChevronUpSharp />}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
