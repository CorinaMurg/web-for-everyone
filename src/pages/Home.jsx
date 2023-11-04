// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { iconMapping } from '../utils/iconMapping.js'
import { introCorina } from "../data/introCorinaData.js"
import { RecentPosts } from "../components/RecentPosts.jsx"
import { SampleProjects } from "../components/SampleProjects.jsx"
import "./Home.css"


export default function Home() {
    return (
        <div className="home">
            <div className="home--intro">
                <h1>HELLO, I&rsquo;m CORINA!</h1>
                {introCorina.description.map((item, index) => (
                    <div className="home--intro--lines" key={index}>
                        {/* <div className='home--intro--fontawe-container'>
                            <FontAwesomeIcon icon={iconMapping[item.icon]} color={item.color} />
                        </div> */}
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>

            <SampleProjects className="home--sample-projects"/>
            <RecentPosts className="home--recent-posts"/>

        </div>
    )
}


