import React from "react";
import "./App.css"
import placeholder from "./logos/placeholder.png";

const Film = ({title, image=placeholder}) => {

  return (
  <div className="Film-Container">

    <div className="Film">

      <img className="Film-Img" src={image} />

    </div>
<p className="Film-Subtitle">{title}</p>
    

  </div>
  )

}

export default Film;