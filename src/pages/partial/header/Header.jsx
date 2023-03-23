import React from "react";
import Nav from "./nav/Nav";
import Button from "./button/Button";
import logo from "../../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import headerStyle from "./header.scss";

export default function Header() {
    
    return(
        <header>
            <figure>
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
            </figure>
            <Nav />
            <Button />
        </header>
    );
}