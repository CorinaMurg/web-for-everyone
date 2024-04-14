import React from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';
import ExternalLink from '../ExternalLink/ExternalLink';
import styles from './WeCanHelp.module.css';
import '../../global.css';

export default function WeCanHelp() {

    return (
        <aside role="complementary" aria-labelledby="how-can-we-help" className={styles['we-can-help']}>
            <h2 id="how-can-we-help" className={styles['we-can-help--heading']}
            >
                How can <span className='code-blue-color'>Web for Everyone</span> help
            </h2>
            <ul>
                <li>
                    <h3><span>Checklist </span> <span>for bugs</span></h3>
                    <p>
                        Use <span> </span>
                        <Link to="/blog#your-portfolio-site"
                            onClick = {() => { useScrollToTop(); }}
                        >
                            Your portfolio site
                        </Link> <span> </span>
                        guide to find and fix common accessibility issues.
                    </p>
                </li>
                <li>
                    <h3><span>Portfolio</span> <span>review</span></h3>
                    <p>
                        Share your site and receive feedback on how to improve its accessibility.
                    </p>
                </li>
                <li>   
                    <h3><span>Connect </span></h3>
                    <p>
                        Join our community on <span> </span>
                        <ExternalLink
                            href="https://www.linkedin.com/company/webforeveryone" 
                            visibleText='LinkedIn'
                        />
                        <span> </span>
                        to seek advice and share suggestions.
                    </p>
                </li>
            </ul>
            
        </aside>
    )
}

// {
//     title: "Contact us",
//     description: `Use our LinkedIn page to share the link to your portfolio site, and let us know
//         the kind of help you are looking for.`,
// }