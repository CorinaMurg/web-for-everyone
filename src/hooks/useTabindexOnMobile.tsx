
import { useState, useEffect } from 'react';

export default function useTabindexOnMobile(maxWidth = 800) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= maxWidth);

    useEffect(() => {
        function readWindowSize() {
            setIsMobile(window.innerWidth <= maxWidth);
        }

        window.addEventListener('resize', readWindowSize);

        return () => {
            window.removeEventListener('resize', readWindowSize);
        };
    }, [maxWidth]);

    return isMobile;
}

