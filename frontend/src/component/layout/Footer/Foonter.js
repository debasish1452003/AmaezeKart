import React from "react";
import playStore from "../../../images/PlayStore.png";
import appStore from "../../../images/AppStore.png";
import "./Footer.css";

const Footer = () => {
  return (
    // <div className="footers">
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>AmazeKART</h1>
        <p>High Quality is our first priority</p>

        <p>Copyright 2023 &copy; Debasish</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/meDeboR">Instagram</a>
        <a href="http://youtube.com/meDeboR">Youtube</a>
        <a href="http://twitter.com/meDeboR">Twitter</a>
      </div>
    </footer>
    // </div>
  );
};

export default Footer;

// 4:55:00
