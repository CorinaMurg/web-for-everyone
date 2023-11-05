// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { iconMapping } from '../utils/iconMapping.js'
import { useEffect } from "react"
import HomeIntro from "../components/HomeIntro.jsx"
import RecentPosts from "../components/RecentPosts.jsx"
import SampleProjects from "../components/SampleProjects.jsx"

import "./Home.css"


export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="home">
            <HomeIntro className="home--intro"/>
            <SampleProjects className="home--sample-projects"/>
            <RecentPosts className="home--recent-posts"/>
        </div>
    )
}


