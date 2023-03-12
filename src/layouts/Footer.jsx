import * as React from "react";
import Navbar from "../components/footer/navbar";
import logo from "../assets/footer_logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

import insta from "../assets/insta.png";
import facebook from "../assets/facebook.png";
import tweeter from "../assets/tweeter.png";

function Footer(){
    return(
        <footer className='footer'>
            <img src={logo} alt="logo alternatif de Quality Contracts"></img>
            <Navbar/>
            <p className="footer__copyright">Copyright <FontAwesomeIcon icon={faCopyright}/> onlyfan.gg 2022 </p>
            <div className="footer__socialbar">
                <p className="footer__socialbar__text">Follow us</p>
                <a href="https://www.facebook.com" className="footer__socialbar__social"><img src={facebook} alt="Logo de facebook" className="footer__navbar__socialbar__social__icon" /></a>
                <a href="https://twitter.com" className="footer__socialbar__social"><img src={tweeter} alt="Logo de twitter" className="footer__navbar__socialbar__social__icon" /></a>
                <a href="https://www.instagram.com" className="footer__socialbar__social"><img src={insta} alt="Logo de instagram" className="footer__navbar__socialbar__social__icon" /></a>
            </div>
        </footer>
    )
}

export default Footer;