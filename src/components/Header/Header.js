import React from "react";
import keyConceptsImage from "../../assets/images/key-concepts.png";

const Header = () => {
  return (
    <div className="header">
      <img src={keyConceptsImage} alt="keyConceptsImage" />
      <h3>Key React Concepts</h3>
      <p>Selected Key React Cocepts You Shoud Know About</p>
    </div>
  );
};

export default Header;
