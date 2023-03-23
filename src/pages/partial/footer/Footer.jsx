import React from "react";
import logo from "../../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import footerStyle from "./footer.scss";

export default function Footer() {
    return(
        <footer>
            <section className="footer__top">
                <NavLink to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
                <p>
                    World Putting League is sanctioned by the 
                    <b> <a href="prominigolf.com">USPMGA</a> </b>
                    (US Pro MiniGolf Association) and produced by
                    <b> <a href="proleaguenetwork.com">Pro League Network</a> </b>
                </p>
            </section>
            <section className="footer__bottom">
                <ul>
                    <li><a href="https://www.instagram.com/worldputtingleague/"><i className="bi bi-instagram"></i></a></li>
                    <li><a href="https://twitter.com/worldputtleague"><i className="bi bi-twitter"></i></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100088495053500"><i className="bi bi-facebook"></i></a></li>
                </ul>
            </section>
        </footer>
    );
}