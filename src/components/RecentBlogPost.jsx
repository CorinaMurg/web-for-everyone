import "./RecentBlogPost.css"

import PropTypes from "prop-types"

export function RecentBlogPost ( {
    title, 
    blogPostDescription, 
    hrefToBlogPost, 
    hrefToBlogPostTitle,
    blogPostImageAlt, 
    blogPostImageSrc,
    blogPostImagePhotographer,
    blogPostImagePhotographerSrc,
    blogPostImagePhotographerSrcTitle,
    unsplashSrc,
    unsplashSrcTitle,
    
    } ) {
    return (
        <article className="recent-blog-post">
            <div className="recent-blog-post--left">
                <a className="recent-blog-post--left--title-anchor" href={hrefToBlogPost} target="_blank" rel="noopener noreferrer">
                    <h3>{title}</h3>
                </a>
                <div className="recent-blog-post--description">
                    {blogPostDescription.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
                <a className="recent-post-link" href={hrefToBlogPost} target="_blank" rel="noopener noreferrer" title={hrefToBlogPostTitle}>
                    Visit Post
                </a>
            </div>
            <div className="recent-blog-post--right">
                <a href={hrefToBlogPost} target="_blank" rel="noopener noreferrer" title={hrefToBlogPostTitle}>
                    <div className="recent-blog-post--right--image-div">
                        <img
                            src={blogPostImageSrc}
                            alt={blogPostImageAlt}
                        />
                    </div>
                </a>
                <div className="photo-credit">
                    {blogPostImagePhotographer && (
                        <>
                            Photo by{' '}
                            <a href={blogPostImagePhotographerSrc} target="_blank" rel="noopener noreferrer" title={blogPostImagePhotographerSrcTitle}>
                                {blogPostImagePhotographer}
                            </a>
                            {' '}on{' '}
                            <a href={unsplashSrc} target="_blank" rel="noopener noreferrer" title={unsplashSrcTitle}>
                                Unsplash
                            </a>
                        </>
                    )}
                </div>

               
                
            </div>
        </article>
    );
}

RecentBlogPost.propTypes = {
    title: PropTypes.string.isRequired,
    blogPostDescription: PropTypes.arrayOf(PropTypes.string).isRequired,
    hrefToBlogPost: PropTypes.string.isRequired,
    hrefToBlogPostTitle: PropTypes.string.isRequired,
    blogPostImageSrc: PropTypes.string.isRequired,
    blogPostImageAlt: PropTypes.string.isRequired,
    blogPostImageCredit: PropTypes.string.isRequired,
    blogPostImagePhotographer: PropTypes.string.isRequired,
    blogPostImagePhotographerSrc: PropTypes.string.isRequired,
    blogPostImagePhotographerSrcTitle: PropTypes.string.isRequired,
    unsplashSrc: PropTypes.string.isRequired,
    unsplashSrcTitle: PropTypes.string.isRequired,
};