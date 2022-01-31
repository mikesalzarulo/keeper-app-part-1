import React from "react";
import ReactDOM from "react-dom";

let currentYear = new Date().getFullYear();

function Footer(){
    return <div className="footer">
    <p className="footer p">Copyright {currentYear}</p>
    </div>;
};
 
export default Footer;