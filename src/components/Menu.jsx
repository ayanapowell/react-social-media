import React from "react";

function Menu(props) {
  var menuStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #ccc",
    padding: "30px"
  };
  return (
    <div>
      <ul className="list-unstyled" style={menuStyles}>
        {props.menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
