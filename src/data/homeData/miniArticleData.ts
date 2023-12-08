
type MiniArticleDataTypes = {
    title: string;
    description: string;
    link: string;
    ariaLabel?: string;
};

export const miniArticleData: MiniArticleDataTypes[] = [
    {
        title: "Build with accessibility in mind",
        description: `Just starting to learn about web development? 
                        These are the things you should know about accessibility.`,
        link: "/resources",
        ariaLabel: "Build with accessibility in mind blog post.",
    },
    {
        title: "Getting started with a11y",
        description: "A list of resources and courses to help you create a site that everyone can access.",
        link: "/resources",
        ariaLabel: "Getting started with accessibilityy blog post.",
    },
    {
        title: "How can WE help",
        description: `Looking for feedback on a project?
                    Read about taking two easy steps to receive a free accessibility review of your site.`,
        link: "/resources",
        ariaLabel: "How can WE Web for Everyone help blog post.",
    },
    
    // {
    //     title: "Do you know your HTML?",
    //     description: `Semantic HTML is the foundation of an accessible website. 
    //                 Plus, it has SEO advantages, and it makes your code more readable and maintainable.`
    // },
    // {
    //     title: "Getting started with a11y",
    //     description: "Our best ." 
    // },
    // {
    //     title: "The Growth of Gaming",
    //     description: "How the pandemic has sparked fresh opportunities."
    // }
];
