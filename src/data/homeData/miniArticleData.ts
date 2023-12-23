
type MiniArticleDataTypes = {
    title: string;
    description: string;
    link: string;
    ariaLabel?: string;
    image?: string;
    imageAlt?: string;
};

export const miniArticleData: MiniArticleDataTypes[] = [
    {
        title: "What is Accessibility?",
        description: `And why does it matter?`,
        link: "/resources",
        ariaLabel: "What is Accessibility? Why does it matter? article by WE Web for Everyone.",
        image: "assets/images/missionA11y.jpg",
        imageAlt: "",
    },
    {
        title: "How Does A11y Work?",
        description: `To understand what happens behind the scenes, 
                        let's explore these four concepts: 
                        accessibility tree, assitive technologies, accessibility APIs, and 
                        accessible name.`,
        link: "/resources",
        ariaLabel: "Build with accessibility in mind blog post.",
        image: "assets/images/image-web-3-mobile.jpg",
        imageAlt: "",
    },
    {
        title: "Most Common Bugs",
        description: "Our best .",
        link: "/resources/most-common-bugs",
        ariaLabel: "Most common accessibility bugs as revealed by the WebAIM Million analysis.",
        image: "assets/images/image-web-3-mobile.jpg",
        imageAlt: "",
    },
    {
        title: "A11y Guidelines",
        description: `The guidelines themselves are for the brave of heart 
                    (unless you were a lawyer in a past life).
                    This article is introducing you to the various acronyms and
                    how to navigate the guidelines.`,
        link: "/resources",
        ariaLabel: "Getting started with accessibilityy blog post.",
        image: "assets/images/image-web-3-mobile.jpg",
        imageAlt: "",
    },
    
    {
        title: "Does inaccessible === ilegal?",
        description: `The "Websites and Software Applications Accessibility Act" was 
                recently Introduced in US Congress. It makes clear that websites and software
                must be accessible to people with disabilities. In other words, lack of accessibility 
                is discrimination!`,
        link: "/resources",
        ariaLabel: "How can WE Web for Everyone help blog post.",
        image: "assets/images/image-web-3-mobile.jpg",
        imageAlt: "",
    },
    {
        title: "Getting started with a11y",
        description: "Our best .",
        link: "/resources",
        ariaLabel: "What is Accessibility? Why does it matter? article by WE Web for Everyone.",
        image: "assets/images/image-web-3-mobile.jpg",
        imageAlt: "",
    },
];
