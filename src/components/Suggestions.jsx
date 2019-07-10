import React from "react";

function Suggestions(props) {
  return (
    <div className="suggestions">
      <h3>Lorem Ipsum</h3>
      <ul className="list-unstyled">
        <li>
          <p>{props.title1}</p>
          <buttton>Add user</buttton>
        </li>
        <li>
          <p>{props.title2}</p>
          <buttton>Add user</buttton>
        </li>
        <li>
          <p>{props.title3}</p>
          <buttton>Add user</buttton>
        </li>
      </ul>
    </div>
  );
}

export default Suggestions;
