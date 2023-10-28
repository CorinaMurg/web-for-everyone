import "./Project.css"
import { Link } from "react-router-dom"

export default function Project( {title, description, hrefSite, hrefGitHub, imageAlt, imageSrc } ) {
    return (
        <section className="project">
            <h2 className="project--title">{title}</h2>
            {description.map((line, index) => (
                <p key={index} className="project--description-line">{line}</p>
            ))}   
            <Link className="project--site-link" href={hrefSite}>Live site</Link>
            <Link className="project--github-link" href={hrefGitHub}>GitHub</Link>
            <img className="project--image" src={imageSrc} alt={imgageAlt} />
        </section>
    )
}