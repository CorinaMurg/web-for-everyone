
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
        description: `When you create 
            sites and apps that everyone, including people with disabilities, can easily navigate, 
            you make accessibility happen. `,
        link: "/resources/what-is-accessibility",
        ariaLabel: "What is Accessibility? Why does it matter? article by Web for Everyone.",
        image: "assets/images/missionA11y.jpg",
        imageAlt: "",
    },
    {
        title: "How Does Accessibility Work?",
        description: `To understand what happens behind the scene, let's take a look at the Document
            Oject Model's parallel structure, the accessibility tree. `,
        link: "/resources/how-accessibility-works",
        ariaLabel: "Build with accessibility in mind blog post.",
        image: "assets/images/image-web-3-mobile.jpg",
        imageAlt: "",
    },
    {
        title: "Accessibility Guidelines",
        description: `The guidelines themselves are for the brave of heart, 
            but there are plenty of resources to help you understand them.
            This article is introducing you the four principles of accessibility.
            and the guidelines that support them.`,
        link: "/resources/accessibility-guidelines",
        ariaLabel: "Getting started with accessibilityy blog post.",
        image: "assets/images/image-web-3-mobile.jpg",
        imageAlt: "",
    },
    
    {
        title: "Does Inaccessible = Ilegal?",
        description: `The "Websites and Software Applications Accessibility Act" was 
                recently Introduced in US Congress. It makes clear that websites and software
                must be accessible to people with disabilities. In other words, lack of accessibility 
                is discrimination!`,
        link: "/resources/does-inaccessible-equal-illegal",
        ariaLabel: "How can WE Web for Everyone help blog post.",
        image: "assets/images/image-web-3-mobile.jpg",
        imageAlt: "",
    },
    {
        title: "Most Common Bugs",
        description: `For five years in a row, a handful of bugs have been responsible for the majority of 
            accessibility issues. The good news is that they are quite easy to avoid or fix!`,
        link: "/resources/most-common-bugs",
        ariaLabel: "Most common accessibility bugs as revealed by the WebAIM Million analysis.",
        image: "assets/images/image-web-3-mobile.jpg",
        imageAlt: "",
    },
    
    {
        title: "Testing for a11y",
        description: "Our best .",
        link: "/resources/testing-for-accessibility",
        ariaLabel: "What is Accessibility? Why does it matter? article by WE Web for Everyone.",
        image: "assets/images/image-web-3-mobile.jpg",
        imageAlt: "",
    },
];
