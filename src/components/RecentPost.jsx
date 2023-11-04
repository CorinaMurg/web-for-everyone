import "./RecentPost.css"

import PropTypes from "prop-types"

export function RecentPost ( {
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
        <article className="recent-post">
            <div className="recent-post--left">
                <h4>{title}</h4>
                <div>
                    <div className="recent-post--description">
                        {blogPostDescription.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                    <a className="recent-post-link" href={hrefToBlogPost} target="_blank" rel="noopener noreferrer" title={hrefToBlogPostTitle}>
                        Read more
                    </a>
                </div>
            </div>
            <div className="recent-post--right">
                <a href={hrefToBlogPost} target="_blank" rel="noopener noreferrer" title={hrefToBlogPostTitle}>
                    <div className="recent-post--right--image-div">
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
                                <span className="photo-credit--link">{blogPostImagePhotographer}</span>
                            </a>
                            {' '}on{' '}
                            <a href={unsplashSrc} target="_blank" rel="noopener noreferrer" title={unsplashSrcTitle}>
                                <span className="photo-credit--link">Unsplash</span>
                            </a>
                        </>
                    )}
                </div>

               
                
            </div>
        </article>
    );
}

RecentPost.propTypes = {
    title: PropTypes.string.isRequired,
    blogPostDescription: PropTypes.arrayOf(PropTypes.string).isRequired,
    hrefToBlogPost: PropTypes.string.isRequired,
    hrefToBlogPostTitle: PropTypes.string,
    blogPostImageSrc: PropTypes.string.isRequired,
    blogPostImageAlt: PropTypes.string.isRequired,
    blogPostImageCredit: PropTypes.string,
    blogPostImagePhotographer: PropTypes.string.isRequired,
    blogPostImagePhotographerSrc: PropTypes.string,
    blogPostImagePhotographerSrcTitle: PropTypes.string,
    unsplashSrc: PropTypes.string,
    unsplashSrcTitle: PropTypes.string,
};