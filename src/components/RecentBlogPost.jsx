import "./RecentBlogPost.css"

import PropTypes from "prop-types"

export function RecentPost ( {title, blogPostDescription, hrefToBlogPost, blogPostImageAlt, blogPostImageSrc } ) {
    return (
        <section className="recent-blog-post">
            <div className="recent-blog-post--left">
                <h3 className="-recent-blog-post--left--title">{title}</h2>
                {description.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}  
                <div>
                    <a className="project--left--links--site" href={hrefSite} target="_blank" rel="noopener noreferrer">Live site</a>
                </div> 
            </div>
            <div className="recent-blog-post--right">
                <img className="project--right--image" src={imageSrc} alt={imageAlt} />
            </div>
            
        </section>
    )
}


RecentBlogPost.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    hrefSite: PropTypes.string.isRequired,
    hrefGitHub: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
};