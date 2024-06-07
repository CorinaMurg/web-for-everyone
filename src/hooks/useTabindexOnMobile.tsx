
import { useState, useEffect } from 'react';

export default function useTabindexOnMobile(maxWidth = 600) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= maxWidth);

    useEffect(() => {
        // set state based on window size
        function readWindowSize() {
            setIsMobile(window.innerWidth <= maxWidth);
        }

        // While React efficiently updates the DOM based on state changes, it does not inherently know about 
        // external events unless you set up listeners for them. 
        // By adding window.addEventListener('resize', handleResize), you instruct the browser to call 
        // the handleResize function every time the window size changes.
        window.addEventListener('resize', readWindowSize);

        return () => {
            window.removeEventListener('resize', readWindowSize);
        };
    }, [maxWidth]);

    return isMobile;
}

