import React from "react";

const Header = () => {
  return (
    <div className="Main-Header">
      <div className="icon-placeholder">
        <i className="searchicon" class="fa fa-search"></i>
        <input className="myInput" type="text" placeholder="Enter here......" />
      </div>
      <p className="list">Categories</p>
      <p className="list">Website Builders</p>
      <p className="list">Today's deals</p>
    </div>
  );
};
export default Header;
