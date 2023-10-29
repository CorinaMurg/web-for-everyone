import { introCorina } from "../data/introCorinaHomePage.js"
import { projectsData } from "../data/projectsData.js"
import { SampleProject } from "../components/SampleProject.jsx"
import { Link } from "react-router-dom"
import "./Home.css"

export default function Home() {
    return (
        <div className="home">
            <div className="home--intro">
                <h1>HELLO, I&rsquo;m CORINA!</h1>
                {introCorina.description.map((line, index) => (
                    <p key={index} className="home--intro-Corina-line">{line}</p>
                ))}  
            </div>
            <div className="home--sample-projects">
                {projectsData.slice(0, 3).map((project) => (
                    <SampleProject
                        key={project.title}
                        title={project.title}
                        sampleImageAlt={project.sampleImageAlt}
                        sampleImageSrc={project.sampleImageSrc}
                    />
                ))}

            </div>

        </div>
    )
}

