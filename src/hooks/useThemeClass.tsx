import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export function useThemeClass() {
    const { theme } = useContext(ThemeContext);
    return theme === "light" ? 'light' : 'dark';
}
