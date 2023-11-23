import React from "react";
import { PostData } from "../../data/homeData/recentPostsData";
import "./RecentPost.css"

export default function RecentPost ( {
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
    } : PostData) {
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
                    {description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
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

