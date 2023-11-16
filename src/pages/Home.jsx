// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { iconMapping } from '../utils/iconMapping.js'

import HomeIntro from "../components/Home/HomeIntro.jsx"
import RecentPosts from "../components/Home/RecentPosts.jsx"
import SampleProjects from "../components/Home/SampleProjects.jsx"
import "./Home.css"

export default function Home() {
    return (
        <div className="home">
            <HomeIntro className="home--intro"/>
            <SampleProjects className="home--sample-projects"/>
            <RecentPosts className="home--recent-posts"/>
        </div>
    )
}


