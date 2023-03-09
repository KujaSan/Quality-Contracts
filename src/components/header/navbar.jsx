import { NavLink } from "react-router-dom";

function Navbar(){
    const jobs = "Find Jobs";
    const recruiter = "For Recruiters";
    const ressources = "Ressources";
    const how = "How it works";
    const contact = "Contact Us";
    return(
        <div>
            <nav className="header__navbar">
                <NavLink to="/" className="header__navbar__link">
                    {jobs}
                </NavLink >
                <NavLink to="/" className="header__navbar__link">
                    {recruiter}
                </NavLink>
                <NavLink to="/" className="header__navbar__link">
                    {ressources}
                </NavLink>
                <NavLink to="/" className="header__navbar__link">
                    {how}
                </NavLink>
                <NavLink to="/" className="header__navbar__link">
                    {contact}
                </NavLink>
                <div className="header__navbar__buttonbar">
                    <button className="header__navbar__buttonbar__button1">Post a Job</button>
                    <button className="header__navbar__buttonbar__button2">Sign In</button>
                </div>
            </nav>
            
        </div>
    )
}

export default Navbar;