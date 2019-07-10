import React from "react";

function Button(props) {
  var buttonStyles = {
    borderRadius: "4px",
    border: "1px solid lightblue",
    background: "lightblue",
    color: "white"
  };
  return (
    <div>
      <button className="btn" style={buttonStyles}>
        {props.buttonText}
      </button>
    </div>
  );
}

export default Button;
