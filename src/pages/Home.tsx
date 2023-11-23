// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { iconMapping } from '../utils/iconMapping.js'

import React from "react"
import HomeIntro from "../components/Home/HomeIntro.js"
import RecentPosts from "../components/Home/RecentPosts.js"
import SampleProjects from "../components/Home/SampleProjects.js"
import "./Home.css"

export default function Home() {
    return (
        <div className="home">
            <HomeIntro/>
            <SampleProjects/>
            <RecentPosts/>
        </div>
    )
}


