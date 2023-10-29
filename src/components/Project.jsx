import "./Project.css"
import PropTypes from "prop-types"

export function Project( {title, description, hrefSite, hrefGitHub, imageAlt, imageSrc } ) {
    return (
        <section className="project">
            <h2 className="project--title">{title}</h2>
            {description.map((line, index) => (
                <p key={index} className="project--description-line">{line}</p>
            ))}   
            <a className="project--site-link" href={hrefSite} target="_blank" rel="noopener noreferrer">Live site</a>
            <a className="project--github-link" href={hrefGitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
            <img className="project--image" src={imageSrc} alt={imageAlt} />
        </section>
    )
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    hrefSite: PropTypes.string.isRequired,
    hrefGitHub: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
};