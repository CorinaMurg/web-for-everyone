
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import YourUsers from "./pages/YourUsers"
import Resources from './pages/Resources'
import ResourcesLayout from "./components/ResourcesLayout"
import WhatIsA11y from "./pages/Posts/UnderstandingA11y/WhatIsA11y"
import HowA11yWorks from "./pages/Posts/UnderstandingA11y/HowA11yWorks"
// import A11yGuidelines from "./pages/Posts/UnderstandingA11y/A11yGuidelines"
// import InaccessibleIllegal from "./pages/Posts/UnderstandingA11y/InaccessibleIllegal"
import MostCommonBugs from "./pages/Posts/UnderstandingA11y/MostCommonBugs"
// import TestingForA11y from "./pages/Posts/UnderstandingA11y/TestingForA11y"
import MakeItAccessible from "./pages/Posts/AccessibleDigitalPresence/MakeItAccessible"
import MakeItAccessible2 from "./pages/Posts/AccessibleDigitalPresence/MakeItAccessible2"
import SimilarButDifferent from "./pages/Posts/HTMLForAccessibility/SimilarButDifferent"
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
                            <Route path="what-is-accessibility" element={<WhatIsA11y />} />
                            <Route path="how-accessibility-works" element={<HowA11yWorks />} />
                            <Route path="most-common-bugs" element={<MostCommonBugs />} />
                            {/* <Route path="accessibility-guidelines" element={<A11yGuidelines />} />
                            <Route path="does-inaccessible-equal-illegal" element={<InaccessibleIllegal />} /> */}
                            {/* <Route path="testing-for-accessibility" element={<TestingForA11y />} /> */}
                            <Route path="make-it-accessible-part1" element={<MakeItAccessible />} />
                            <Route path="make-it-accessible-part2" element={<MakeItAccessible2 />} />
                            <Route path="similar-but-different" element={<SimilarButDifferent />} />
                                
                        </Route>
                        <Route path="about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

