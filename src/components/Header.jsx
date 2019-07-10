import React from "react";
import Menu from "./Menu";
import Search from "./Search";
import Button from "./Button";

function Header() {
  var headerStyles = {
    width: "100%"
  };
  var leftStyles = {};
  var rightStyles = {
    display: "flex"
  };

  var menuItems = ["Menu item 1", "Menu item 2", "Menu item 3", "Menu item 4"];
  return (
    <div>
      <div className="container" style={headerStyles}>
        <div className="row">
          <div className="col-sm-6" style={leftStyles}>
            <Menu menuItems={menuItems} />
          </div>
          <div className="col-sm-6" style={rightStyles}>
            <Search placeholder="Search" />
            <Button buttonText="Tweet" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Header;
