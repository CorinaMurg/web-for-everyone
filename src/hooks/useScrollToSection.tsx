import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// export default function useScrollToSection() {
//     const location = useLocation();

//     useEffect(() => {
//         const sectionId = location.hash.replace('#', '');
//         if (sectionId) {
//             const focusTarget = document.getElementById(`focus-${sectionId}`);
//             if (focusTarget) {
//                 // Scroll the focus target into view
//                 focusTarget.scrollIntoView({ behavior: 'smooth' });

//                 // Shift focus to the focus target
//                 focusTarget.focus();
//             }
//         }
//     }, [location]);
// }


export default function useScrollToSection () {
    const location = useLocation();

    useEffect(() => {
        const sectionId = location.hash.replace('#', '');
        if (sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]); 
};

