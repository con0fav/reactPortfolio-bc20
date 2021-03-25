import React from "react";

function Header(props) {
  return (
    <div className="jumbotron">
      <h1>Connor Favero Portfolio</h1>
      <p>
        {props.text}
      </p>
    </div>
  );
}

export default Header;
