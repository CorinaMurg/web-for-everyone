
import { useEffect } from 'react';

export default function useDocTitle (title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
