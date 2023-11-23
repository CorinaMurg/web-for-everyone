import React from "react";
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
    readMoreAriaLabel,
    } ) {
    return (
        <article className="recent-post">
            <div className="recent-post--left">
                <div className="recent-post--image">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        loading='lazy'
                    />
                </div>
                <div className="photo-credit">
                    {photographer && (
                        <>
                            Photo by{' '}
                            <a href={photographerSrc} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                title={photographerSrcAriaLabel} 
                                aria-label={photographerSrcAriaLabel}
                            >
                                <span className="photo-credit--link">{photographer}</span>
                            </a>
                        </>
                    )}
                </div>
            </div>
            <div className="recent-post--right">
                <a
                    href={href} target="_blank" 
                    rel="noopener noreferrer"  
                    aria-label={hrefAriaLabel}
                    className="recent-post--link hover-underline"
                >
                    <h4>{title}</h4>
                </a>
                <div className="recent-post--description">
                    {description.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                    <a className="recent-post--link" 
                        href={href} target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={readMoreAriaLabel}
                    >
                        <span className="read-more hover-underline">
                            Read more
                        </span>
                    </a>
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
    readMoreAriaLabel: PropTypes.string,
    imageSrc: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    imageCredit: PropTypes.string,
    photographer: PropTypes.string,
    photographerSrc: PropTypes.string,
    photographerSrcAriaLabel: PropTypes.string,
};