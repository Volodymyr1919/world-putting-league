import React from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import notFound from "./notFound.scss";

export default function NotFound() {

    const navigate = useNavigate();

    return(
        <main className="notFound">
            <h1>404</h1>
            <p>Sorry, page not found</p>
            <p>Back to homepage?</p>
            <p><span onClick={() => navigate("/")}>Yes</span> | <span onClick={() => navigate(-1)}>No</span></p>
        </main>
    );
}