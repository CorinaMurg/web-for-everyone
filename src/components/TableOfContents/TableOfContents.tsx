
import React from 'react';
import styles from './TableOfContents.module.css';
import "../../global.css"

interface TableOfContentsLine {
  href: string;
  text: string;
  ariaLabel?: string;
  className1?: string;
  className2?: string;
}

interface TableOfContentsProps {
  contents: TableOfContentsLine[];
  activeId: string; 
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ contents, activeId }) => {
    return (
        <div className={styles['table-contents']}>
            <h2 className={styles['table-contents--heading']} id="table-contents">
                Table of Contents
            </h2>
            <nav aria-labelledby='table-contents'>
                <ul>
                    {contents.map((item, index) => (
                    <li key={index} className={`${item.className1} ${item.className2}`}>
                        <a href={item.href} 
                            className={`hover-pink ${item.href.substring(1) === activeId ? styles.active : ''}`}
                            {...(item.ariaLabel ? { 'aria-label': item.ariaLabel } : {})}
                        >
                            {item.text}
                        </a>
                    </li>
                    ))}
                </ul>
            </nav>            
        </div>
    );
};

export default TableOfContents;


// export default function TableOfContents ({ contents }: { contents: Array<any> }) {
//     return (
//         <div className={styles['table-contents']}>
//             <h2 className={styles['table-contents--heading']} id="table-contents">
//                 <code>Table of Contents</code>
//             </h2>
//             <nav aria-labelledby='table-contents'>
//                 <ul className={styles['table-contents--list']}>
//                     {contents.map((item: any, index: number) => (
//                     <li key={index} className={styles['table-contents--list--item']}>
//                         <a  href={item.href} 
//                             className={`hover-pink ${item.className}`}
//                             {...(item.ariaLabel ? { 'aria-label': item.ariaLabel } : {})}
//                         >
//                             <code>{item.text}</code>
//                         </a>
//                     </li>
//                     ))}
//                 </ul>
//             </nav>
            
//         </div>
//     );
// };

// TableOfContents.propTypes = {
//     contents: PropTypes.arrayOf(
//         PropTypes.shape({
//         href: PropTypes.string.isRequired,
//         text: PropTypes.string.isRequired,
//         ariaLabel: PropTypes.string,
//         className: PropTypes.string,
//         activeID: PropTypes.string,
//         })
//     ).isRequired,
// };


// const getClassNames = (level: number) => {
//     if (level === 2) {
//         return "heading3"
//     }
// };

// ${getClassNames(heading.level)}

// export default function TableOfContents ({ headings }) {
//     return (
//         <div className={styles['table-contents']}>
//             <h2 className={styles['table-contents--heading']}>
//                 <code>Table of Contents</code>
//             </h2>
//             <ul className={styles['table-contents--list']}>
//                 <li className={styles['table-contents--list--item']}>
//                     <Link to="#intro"
//                         className="hover-pink"
//                         {...(introAriaLabel ? { 'aria-label': introAriaLabel } : {})}
//                     >
//                         <code>{intro}</code>
//                     </Link>
//                 </li>
//                 {headings.map((heading, index) => (
//                 <li key={index} className={styles['table-contents--list--item']}>
//                     <Link  to={heading.to} 
//                         className={`hover-pink `}
//                         {...(heading.ariaLabel ? { 'aria-label': heading.ariaLabel } : {})}
//                     >
//                         <code>{heading.text}</code>
//                     </Link>
//                 </li>
//                 ))}
//             </ul>
//         </div>
//     );
