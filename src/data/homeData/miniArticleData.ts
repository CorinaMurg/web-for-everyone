
type MiniArticleDataTypes = {
    title: string;
    description: string;
    link: string;
    ariaLabel?: string;
};

export const miniArticleData: MiniArticleDataTypes[] = [
    {
        title: "How Does Accessibility Work?",
        description: `Just starting to learn about web development? 
                        Here are four concepts to help you understand what happens behind the scenes: 
                        accessibility tree, assitive technologies, accessibility APIs, and 
                        accessible name.`,
        link: "/resources",
        ariaLabel: "Build with accessibility in mind blog post.",
    },
    {
        title: "Accessibility Guidelines",
        description: `The guidelines themselves are for the brave of heart 
                    (unless you were a lawyer in a past life, and you enjoy reading legal documents).
                    This article is introducing you to the various acronyms and
                    how to navigate the guidelines.`,
        link: "/resources",
        ariaLabel: "Getting started with accessibilityy blog post.",
    },
    {
        title: "Does inaccessible === ilegal?",
        description: `The "Websites and Software Applications Accessibility Act" was 
                recently Introduced in US Congress. It makes clear that websites and software
                must be accessible to people with disabilities. In other words, lack of accessibility 
                is discrimination!`,
        link: "/resources",
        ariaLabel: "How can WE Web for Everyone help blog post.",
    },
    
    {
        title: "What is Accessibility? Why does it matter?",
        description: `Semantic HTML is the foundation of an accessible website. 
                    Plus, it has SEO advantages, and it makes your code more readable and maintainable.`,
        link: "/resources",
        ariaLabel: "What is Accessibility? Why does it matter? article by WE Web for Everyone.",
    },
    {
        title: "Getting started with a11y",
        description: "Our best .",
        link: "/resources",
        ariaLabel: "What is Accessibility? Why does it matter? article by WE Web for Everyone.",
    },
    // {
    //     title: "The Growth of Gaming",
    //     description: "How the pandemic has sparked fresh opportunities."
    // }
];
