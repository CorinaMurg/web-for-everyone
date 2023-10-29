import "./RecentBlogPost.css"

import PropTypes from "prop-types"

export function RecentBlogPost ( {
    title, 
    blogPostDescription, 
    hrefToBlogPost, 
    blogPostImageAlt, 
    blogPostImageSrc,
    anchorAltText,
    } ) {
    return (
        <section className="recent-blog-post">
            <div className="recent-blog-post--left">
                <a href={hrefToBlogPost} target="_blank" rel="noopener noreferrer">
                    <h3 className="recent-blog-post--left--title">{title}</h3>
                </a>
                {blogPostDescription.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
            <div className="recent-blog-post--right">
                <a href={hrefToBlogPost} target="_blank" rel="noopener noreferrer" alt={anchorAltText}>
                    <img
                        className="project--right--image"
                        src={blogPostImageSrc}
                        alt={blogPostImageAlt}
                        title="Image for recent blog post"
                    />
                </a>
            </div>
        </section>
    );
}

RecentBlogPost.propTypes = {
    title: PropTypes.string.isRequired,
    blogPostDescription: PropTypes.arrayOf(PropTypes.string).isRequired,
    hrefToBlogPost: PropTypes.string.isRequired,
    blogPostImageSrc: PropTypes.string.isRequired,
    blogPostImageAlt: PropTypes.string.isRequired,
    anchorAltText: PropTypes.string.isRequired,
};