import React from "react";
import "./App.css"
import facebook from "./logos/social/facebook-white.svg";
import twitter from "./logos/social/twitter-white.svg";
import instagram from "./logos/social/instagram-white.svg";
import appStore from "./logos/store/app-store.svg";
import playStore from "./logos/store/play-store.svg";
import windowsStore from "./logos/store/windows-store.svg";

const Footer = () => {

  return (
  <div>
    <div className="Footer">
        <p className="Footer-Links">Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account</p>
        <p className="Footer-Copyright">Copyright @2016 DEMO Streaming. All Rights Reserved.</p>
      <div className="Footer-Logos">
        <div className="Footer-Logos-Social">
            <img className="Facebook" src={facebook} alt="" />
            <img className="Twitter" src={twitter} alt="" />
            <img className="Instagram" src={instagram} alt="" />
        </div>
        <div className="Footer-Logos-Store">
            <img className="AppStore" src={appStore} alt="" />
            <img className="PlayStore" src={playStore} alt="" />
            <img className="WindowsStore" src={windowsStore} alt="" />
        </div>
      </div>
    </div>
  </div>
  );

};

export default Footer;