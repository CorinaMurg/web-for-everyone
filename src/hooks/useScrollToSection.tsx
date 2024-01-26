import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useScrollToSection () {
    const location = useLocation();

    useEffect(() => {
        // Extract the section ID from the hash
        const sectionId = location.hash.replace('#', '');
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]); // Dependency on location object
};

