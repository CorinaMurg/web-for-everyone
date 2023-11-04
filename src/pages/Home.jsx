import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconMapping } from '../utils/iconMapping.js'
import { introCorina } from "../data/introCorinaData.js"
import { RecentPostsContainer } from "../components/RecentPostsContainer.jsx"
import { SampleProjectsContainer } from "../components/SampleProjectsContainer.jsx"
import "./Home.css"


export default function Home() {
    return (
        <div className="home">
            <div className="home--intro">
                <h1>HELLO, I&rsquo;m CORINA!</h1>
                {introCorina.description.map((item, index) => (
                    <div className="home--intro-Corina-line" key={index}>
                        <div className='home--intro--fontawe-container'>
                            <FontAwesomeIcon icon={iconMapping[item.icon]} color={item.color} />
                        </div>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>

            <SampleProjectsContainer className="home--sample-projects-container"/>
            <RecentPostsContainer className="home--recent-posts-container"/>

        </div>
    )
}


