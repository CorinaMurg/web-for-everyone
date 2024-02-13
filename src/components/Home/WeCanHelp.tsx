import React from 'react';
import WELogo from '../WELogo/WELogo';
import { weCanHelpData } from '../../data/homeData/weCanHelpData';
import styles from './WeCanHelp.module.css';
import '../../global.css';

export default function WeCanHelp() {

    return (
        <aside aria-labelledby="how-can-we-help" className={styles['we-can-help']}>
            <h2 id="how-can-we-help"
                aria-label="How can web for everyone help?"
            >
                How can&nbsp; <WELogo size="1.5rem"/> &nbsp;help
            </h2>
            <ul>
                {weCanHelpData.map((article, index) => (
                    <li key={index}> 
                        <div> 
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                        </div>
                    </li>
                ))}
                <li>
                    <div>
                        <h3>Contact</h3>
                        <p>
                            Use&nbsp;
                            <a href="https://www.linkedin.com/company/webforeveryone" 
                                target='_blank' rel="noopener noreferrer" 
                            >       
                                LinkedIn
                                <span className="sr-only"> opens in a new tab</span>
                                <span className="external-linksvg-wrap">
                                    &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512">
                                        <path d="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM160 144c-13.3 0-24 10.7-24 24s10.7 24 24 24h94.1L119 327c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l135-135V328c0 13.3 10.7 24 24 24s24-10.7 24-24V168c0-13.3-10.7-24-24-24H160z"/>
                                    </svg>    
                                </span>
                            </a>&nbsp; to
                            share the link to your portfolio site, and any accessibility help you are looking for.
                        </p>
                    </div>
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