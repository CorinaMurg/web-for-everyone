
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import YourUsers from "./pages/YourUsers"
import Accessibility from './pages/Accessibility';
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import React from "react";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="your-users" element={<YourUsers />} />
          <Route path="accessibility" element={<Accessibility />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
