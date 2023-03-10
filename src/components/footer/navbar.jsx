import { NavLink } from "react-router-dom";

function Navbar(){
    const about = "About";
    const privacy = "Privacy";
    const cookies = "Cookies";
    const terms = "Terms";
    const contact = "Contact";
    return(
        <nav className="footer__navbar">
            <NavLink to="/" className="footer__navbar__link">
                {about}
            </NavLink >
            <NavLink to="/" className="footer__navbar__link">
                {privacy}
            </NavLink>
            <NavLink to="/" className="footer__navbar__link">
                {cookies}
            </NavLink>
            <NavLink to="/" className="footer__navbar__link">
                {terms}
            </NavLink>
            <NavLink to="/" className="footer__navbar__link">
                {contact}
            </NavLink>
        </nav>
    )
}

export default Navbar;