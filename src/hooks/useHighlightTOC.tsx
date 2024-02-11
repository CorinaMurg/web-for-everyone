
import { useEffect, useState, useRef } from 'react';

export default function useHighlightTOC(): { activeId: string } {
  const observer = useRef<IntersectionObserver | null>(null);

  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleObserve = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserve, {
      rootMargin: "-20% 0% -60% 0px",
    });

   const scrollTargets = document.querySelectorAll(".scroll-target");

   scrollTargets.forEach((target) => {
    if (target.id) { 
      observer.current?.observe(target);
    }
  });

    return () => observer.current?.disconnect();
  }, []); 
  
  return { activeId };
}
