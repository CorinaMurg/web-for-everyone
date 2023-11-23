
import "./Project.css"
import PropTypes from "prop-types"
import slugify from "../../utils/slugify.js"

export function Project( {title, description, hrefSite, link1Text, hrefGitHub, link2Text, imageAlt, imageSrc } ) {
    const slugifiedTitle = slugify(title);      

    return (
        <article className="project" id={slugifiedTitle}>
            <div className="project--left">
                <img src={imageSrc} alt={imageAlt} loading='lazy'/>
            </div> 
            <div className="project--right">
                <h2 className="project--right--title">{title}</h2>
                <div>
                    {description.map((line, index) => (
                        <p key={index} className="project--right--description-line">{line}</p>
                    ))}  
                </div>
                <div className="project--right--links">
                    <a className="site-link" href={hrefSite} target="_blank" rel="noopener noreferrer">{link1Text}</a>
                    <a className="site-link" href={hrefGitHub} target="_blank" rel="noopener noreferrer">{link2Text}</a>
                </div> 
            </div>
             
        </article>
    )
}

Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    hrefSite: PropTypes.string.isRequired,
    link1Text: PropTypes.string.isRequired,
    hrefGitHub: PropTypes.string.isRequired,
    link2Text: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
};