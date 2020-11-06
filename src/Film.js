import React from "react";
import "./App.css"
import placeholder from "./logos/placeholder.png";
import twitter from "./logos/twitter-blue.svg";

const Film = ({title, image}) => {

  return (
  <div className="Film-Container">

    <div className="Film">

      <p className="Film-Main-Title">{title}</p>
      <img className="Film-Img" src={image} />

    </div>

    <p className="Film-Subtitle">Subtitle</p>

  </div>
  )

}

export default Film;