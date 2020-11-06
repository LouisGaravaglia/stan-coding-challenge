import React from "react";
import "./App.css"

const Header = ({title}) => {

  return (
    <div className="Header">
      <div className="Header-NavBar">
        <div><h1 className="Header-NavBar-Logo">DEMO Streaming</h1></div>
        <div className="Header-NavBar-RightSide"><p className="Header-Login">Login</p><button className="Header-Btn">Start your free trial</button></div>
      </div>
      <div className="Header-SubHeader">
        <h2 className="Header-SubHeader-Title">{title}</h2>
      </div>
    </div>
  )

}

export default Header;