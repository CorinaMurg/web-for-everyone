
import { Link } from "react-router-dom"

export default function Projects() {
    return (
        <div className="projects-container">
            <div className="projects-intro">
                <h1>My Projects</h1>
                <p> . ..</p>
                <p>...</p>
            </div>
            <div className="project1">
                <h2>Project Title<br /> .....</h2>
                <Link className="link-button" to="/...">Project 1</Link>
            </div>
        </div>
    );
}