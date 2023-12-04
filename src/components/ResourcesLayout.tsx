import React from "react"
import { Outlet } from "react-router-dom"

export default function ResourcesLayout() {
    return (
        <main id="main">
            <Outlet />
        </main>  
    )
}