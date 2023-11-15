import "./Project.css"
import PropTypes from "prop-types"

export function Project( {title, description, hrefSite, hrefGitHub, imageAlt, imageSrc } ) {
    return (
        <article className="project">
            <div className="project--right">
                <img src={imageSrc} alt={imageAlt} loading='lazy'/>
            </div> 
            <div className="project--left">
                <h2 className="project--left--title">{title}</h2>
                <div>
                    {description.map((line, index) => (
                        <p key={index} className="project--left--description-line">{line}</p>
                    ))}  
                </div>
                <div className="project--left--links">
                    <a className="project-link" href={hrefSite} target="_blank" rel="noopener noreferrer">Live site</a>
                    <a className="project-link" href={hrefGitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div> 
            </div>
             
        </article>
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