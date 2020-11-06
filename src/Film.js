import React from "react";
import "./App.css"
import placeholder from "./logos/placeholder.png";
import twitter from "./logos/twitter-blue.svg";

const Film = ({title}) => {

  return (
  <div className="Film-Container">

    <div className="Film">

      <p className="Film-Main-Title">{title}</p>
      <img className="Film-Img" scr={placeholder} />

    </div>

    <p className="Film-Subtitle">Subtitle</p>
    <img className="Film-Img" scr={twitter} />
    <p className="Film-Subtitle">Hiii</p>

  </div>
  )

}

export default Film;