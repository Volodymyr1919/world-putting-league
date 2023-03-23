import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    let links = [
        {route: "/", title: "HOME"},
        {route: "/press-release", title: "PRESS RELEASE"},
        {route: "/top-8", title: "TOP 8 FINALISTS"},
        {route: "/day-1", title: "DAY 1 RESULTS"},
        {route: "/day-2", title: "DAY 2 RESULTS"}
    ]
    return(
        <nav>
            <ul>
                {
                    links.map(item => 
                        <li key={item.route}>
                            <NavLink to={item.route} activeclassname="active">{item.title}</NavLink>
                        </li>)
                }
            </ul>
        </nav>
    );
}