import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import { useThemeClass } from "../hooks/useThemeClass"

export default function Layout() {

    const themeClass = useThemeClass();
    return (
        <div className={themeClass}>
            <Header />
            <main id="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}