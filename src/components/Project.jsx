import "./Project.css"
import PropTypes from "prop-types"

export function Project( {title, description, hrefSite, hrefGitHub, imageAlt, imageSrc } ) {
    return (
        <section className="project">
            <div className="project--left">
                <h2 className="project--left--title">{title}</h2>
                {description.map((line, index) => (
                    <p key={index} className="project--left--description-line">{line}</p>
                ))}  
                <div className="project--left--links">
                    <a className="project--left--links--site" href={hrefSite} target="_blank" rel="noopener noreferrer">Live site</a>
                    <a className="project--left--links--github" href={hrefGitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div> 
            </div>
            <div className="project--right">
                <img className="project--right--image" src={imageSrc} alt={imageAlt} />
            </div>
            
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