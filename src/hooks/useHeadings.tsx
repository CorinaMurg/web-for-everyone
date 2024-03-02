// use with table of contents to dynamically generate a list of headings from the page

import { useState, useEffect } from 'react';

interface HeadingTypes {
    href: string;
    text: string;
    level: number;
}


export default function useHeadings (tags: string[]) {
    const [headings, setHeadings] = useState<HeadingTypes[]>([]);

    useEffect(() => {
        const tagsList = tags.join(', ');
        const elements = Array.from(document.querySelectorAll(tagsList))
            .map(elem => ({
                href: `#${elem.id}`,
                text: elem.textContent || '',
                level: Number(elem.nodeName.charAt(1))
            }));
        setHeadings(elements);
    }, [tags]); 

    return headings;
};



