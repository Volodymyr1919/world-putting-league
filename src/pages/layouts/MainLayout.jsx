import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../partial/header/Header";
import Footer from "../partial/footer/Footer";

export default function MainLayout() {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}