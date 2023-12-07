
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import YourUsers from "./pages/YourUsers"
import Resources from './pages/Resources'
import ResourcesLayout from "./components/ResourcesLayout"
import MakeItAccessible from "./pages/Posts/MakeItAccessible"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import React from "react"

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="your-users" element={<YourUsers />} />
                        <Route path="resources" element={<ResourcesLayout />}>
                                <Route index={true} element={<Resources />} />
                                <Route path="make-it-accessible" element={<MakeItAccessible />} />
                        </Route>
                        <Route path="about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

