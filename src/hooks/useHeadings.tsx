import { useState, useEffect } from 'react';

interface Heading {
    to: string;
    text: string;
    level: number;
}


export default function useHeadings (tags: string[]) {
    const [headings, setHeadings] = useState<Heading[]>([]);

    useEffect(() => {
        const tagsList = tags.join(', ');
        const elements = Array.from(document.querySelectorAll(tagsList))
            .map(elem => ({
                to: `#${elem.id}`,
                text: elem.textContent || '',
                level: Number(elem.nodeName.charAt(1))
            }));
        setHeadings(elements);
    }, [tags]); 

    return headings;
};



