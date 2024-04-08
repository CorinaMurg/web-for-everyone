
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home/Home"
import Blog from './pages/Blog/Blog'
import BlogLayout from "./components/BlogLayout"
import WhatIsA11y from "./pages/Posts/UnderstandingA11y/WhatIsA11y"
import HowA11yWorks from "./pages/Posts/UnderstandingA11y/HowA11yWorks"
// import A11yGuidelines from "./pages/Posts/UnderstandingA11y/A11yGuidelines"
// import InaccessibleIllegal from "./pages/Posts/UnderstandingA11y/InaccessibleIllegal"
import MostCommonBugs from "./pages/Posts/UnderstandingA11y/MostCommonBugs"
// import TestingForA11y from "./pages/Posts/UnderstandingA11y/TestingForA11y"
import MakeItAccessible from "./pages/Posts/YourDigitalPresence/MakeItAccessible"
import MakeItAccessible2 from "./pages/Posts/YourDigitalPresence/MakeItAccessible2"
import SimilarButDifferent from "./pages/Posts/HTMLForAccessibility/SimilarButDifferent"
import About from "./pages/About/About"
import A11yStatement from "./pages/A11yStatement/A11yStatement"
import NotFound from "./pages/NotFound/NotFound"
import React from "react"

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        {/* <Route path="your-users" element={<YourUsers />} /> */}
                        <Route path="blog" element={<BlogLayout />}>
                            <Route index={true} element={<Blog />} />
                            <Route path="what-is-accessibility" element={<WhatIsA11y />} />
                            <Route path="how-accessibility-works" element={<HowA11yWorks />} />
                            <Route path="most-common-bugs" element={<MostCommonBugs />} />
                            {/* <Route path="accessibility-guidelines" element={<A11yGuidelines />} />
                            <Route path="does-inaccessible-equal-illegal" element={<InaccessibleIllegal />} /> */}
                            {/* <Route path="testing-for-accessibility" element={<TestingForA11y />} /> */}
                            <Route path="fixing-the-six-most-common-bugs" element={<MakeItAccessible />} />
                            <Route path="lets-uncover-six-more-bugs" element={<MakeItAccessible2 />} />
                            <Route path="similar-but-different" element={<SimilarButDifferent />} />
                                
                        </Route>
                        <Route path="about" element={<About />} />
                        <Route path="accessibility-statement" element={<A11yStatement />} />
                        <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

