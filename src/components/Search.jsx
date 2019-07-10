import React from "react";

function Search(props) {
  var searchStyles = {
    borderRadius: "4px",
    border: "1px solid #ccc",
    padding: "3px",
    minWidth: "200px",
    minHeight: "38px"
  };
  return (
    <div>
      <input type="text" placeholder={props.placeholder} style={searchStyles} />
    </div>
  );
}

export default Search;
