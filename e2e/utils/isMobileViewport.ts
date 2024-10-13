import { Page } from 'playwright';

export const isMobileViewport = ({ page }: { page: Page }) => {
    const viewport = page.viewportSize();
    if (viewport) {
        return viewport.width < 800;
    }
    return false;
}