import React from "react";
import './Navbar.css';
import {BsToggleOff} from 'react-icons/bs';
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
    return(
        <nav>
            <a href="#" className="nav__logo">AR</a>
            <NavbarLinks/>
            <BsToggleOff className="nav__toggle-icon"/>
        </nav>
    )
}

export default Navbar;