import "./RecentPost.css"

import PropTypes from "prop-types"

export function RecentPost ( {
    title, 
    description, 
    href, 
    hrefAriaLabel,
    imageAlt, 
    imageSrc,
    photographer,
    photographerSrc,
    photographerSrcAriaLabel,
    unsplashSrc,
    unsplashSrcAriaLabel,
    
    } ) {
    return (
        <article className="recent-post">
            <div className="recent-post--left">
                <h4>{title}</h4>
                <div>
                    <div className="recent-post--description">
                        {description.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                    <a className="read-more" href={href} target="_blank" rel="noopener noreferrer" title={hrefAriaLabel} aria-label={hrefAriaLabel}>
                        Read more
                    </a>
                </div>
            </div>
            <div className="recent-post--right">
                <a href={href} target="_blank" rel="noopener noreferrer" title={hrefAriaLabel} aria-label={hrefAriaLabel}>
                    <div className="recent-post--image">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            loading='lazy'
                        />
                    </div>
                </a>
                <div className="photo-credit">
                    {photographer && (
                        <>
                            Photo by{' '}
                            <a href={photographerSrc} target="_blank" rel="noopener noreferrer" title={photographerSrcAriaLabel} aria-label={photographerSrcAriaLabel}>
                                <span className="photo-credit--link">{photographer}</span>
                            </a>
                            {' '}on{' '}
                            <a href={unsplashSrc} target="_blank" rel="noopener noreferrer" title={unsplashSrcAriaLabel}>
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
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    href: PropTypes.string.isRequired,
    hrefAriaLabel: PropTypes.string,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    imageCredit: PropTypes.string,
    photographer: PropTypes.string,
    photographerSrc: PropTypes.string,
    photographerSrcAriaLabel: PropTypes.string,
    unsplashSrc: PropTypes.string,
    unsplashSrcAriaLabel: PropTypes.string,
};