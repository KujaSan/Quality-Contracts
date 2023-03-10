import * as React from "react";
import Navbar from "../components/header/navbar";
import logo from "../assets/header_logo.png";
/**
  * Composant représentant l'entête de page de l'application
  * @returns {JSX.Element} Élément JSX du composant Header
*/

function Header(){
    return(
        <header className='header'>
            <img src={logo} alt="logo alternatif de Quality Contracts"></img>
            <Navbar/>
        </header>
    )
}

export default Header;