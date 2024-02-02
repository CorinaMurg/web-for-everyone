
import { useEffect } from 'react';

export default function useDocTitle (title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
