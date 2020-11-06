import React from "react";
import "./App.css"
import placeholder from "./logos/placeholder.png";

const Placeholder = ({title, subtitle}) => {

  return (
  <div className="Film-Container">
    <div className="Film">
      <p className="Film-Main-Title">{title}</p>
      <img className="Film-Img" src={placeholder} />
    </div>
    <p className="Film-Subtitle">{subtitle}</p>
  </div>
  );

};

export default Placeholder;