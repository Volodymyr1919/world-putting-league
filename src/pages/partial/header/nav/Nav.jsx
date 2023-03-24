import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
    let links = [
        {route: "/", title: "HOME"},
        {route: "http://theworldputtingleague.com/PLN_Press%20Release_WorldPuttingLeague_22823.pdf", title: "PRESS RELEASE"},
        {route: "/top-8", title: "TOP 8 FINALISTS"},
        {route: "http://theworldputtingleague.com/results22723.html", title: "DAY 1 RESULTS"},
        {route: "http://theworldputtingleague.com/results22823.html", title: "DAY 2 RESULTS"}
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