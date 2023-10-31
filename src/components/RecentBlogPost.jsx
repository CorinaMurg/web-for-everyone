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
        <section className="recent-blog-post">
            <div className="recent-blog-post--left">
                <a href={hrefToBlogPost} target="_blank" rel="noopener noreferrer">
                    <h3>{title}</h3>
                </a>
                <div className="recent-blog-post--description">
                    {blogPostDescription.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            </div>
            <div className="recent-blog-post--right">
                <a href={hrefToBlogPost} target="_blank" rel="noopener noreferrer" title={hrefToBlogPostTitle}>
                    <img
                        src={blogPostImageSrc}
                        alt={blogPostImageAlt}
                    />
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
        </section>
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