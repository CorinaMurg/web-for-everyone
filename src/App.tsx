import React, { useState, useEffect } from "react"
import { ThemeContext } from "./contexts/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home/Home"
import Blog from './pages/Blog/Blog'
import BlogLayout from "./components/BlogLayout"
import WhatIsA11y from "./pages/Posts/UnderstandingA11y/WhatIsA11y"
import HowA11yWorks from "./pages/Posts/UnderstandingA11y/HowA11yWorks"
import MostCommonBugs from "./pages/Posts/UnderstandingA11y/MostCommonBugs"
import TestingWithPlaywright from "./pages/Posts/UnderstandingA11y/TestingWithPlaywright/TestingWithPlaywright"
import MakeItAccessible from "./pages/Posts/YourDigitalPresence/MakeItAccessible"
import MakeItAccessible2 from "./pages/Posts/YourDigitalPresence/MakeItAccessible2"
import SimilarButDifferent from "./pages/Posts/HTMLForAccessibility/SimilarButDifferent"
import About from "./pages/About/About"
import A11yStatement from "./pages/A11yStatement/A11yStatement"
import Gaad from "./pages/Gaad/Gaad"
import NotFound from "./pages/NotFound/NotFound"

export default function App() {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const toggleTheme = () => {
        setTheme(currentTheme => {
            const newTheme = currentTheme === "light" ? "dark" : "light";
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="blog" element={<BlogLayout />}>
                            <Route index={true} element={<Blog />} />
                            <Route path="what-is-accessibility" element={<WhatIsA11y />} />
                            <Route path="how-accessibility-works" element={<HowA11yWorks />} />
                            <Route path="most-common-bugs" element={<MostCommonBugs />} />
                            <Route path="testing-with-playwright" element={<TestingWithPlaywright />} />
                            <Route path="fixing-the-six-most-common-bugs" element={<MakeItAccessible />} />
                            <Route path="the-next-six-bugs" element={<MakeItAccessible2 />} />
                            <Route path="similar-but-different" element={<SimilarButDifferent />} />  
                        </Route>
                        <Route path="GAAD-2024" element={<Gaad/>} />
                        <Route path="about" element={<About />} />
                        <Route path="accessibility-statement" element={<A11yStatement />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
        
    );
}

