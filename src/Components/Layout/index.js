import React from "react";
import Footer from "./Footer/footer";
import Navbar from "./Navbar/navbar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
