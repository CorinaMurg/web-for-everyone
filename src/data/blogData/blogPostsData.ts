export interface BlogPostDataTypes {
    label: string;
    id?: string;
    title: string;
    subtitle?: string;
    author?: string;
    description: string;
    to?: string;
    href?: string;
    ariaLabel: string;
}


export const blogPostsData: BlogPostDataTypes[] = [
    {
        "label": "accessibility-101",
        "id": "what-is-accessibility",
        "title": "What is accessibility?",
        "subtitle": "",
        "author": "",
        "description": `When you create websites and apps that everyone, including people with disabilities, 
            can easily navigate and understand, you make accessibility happen.`,
        "to": `/blog/what-is-accessibility`,
        "ariaLabel": "",
    },
    {
        "label": "accessibility-101",
        "id": "assistive-technologies",
        "title": "Assistive technologies",
        "subtitle": "",
        "author": "",
        "description": `Users with certain disabilities rely on hardware and/or software to navigate the web.
            These tools, known as assistive technologies, help users interact with digital content in a way that suits their needs.`,
        "to": `/blog/assistive-technologies`,
        "ariaLabel": "",
    },
    {
        "label": "accessibility-101",
        "id": "how-accessibility-works",
        "title": "How accessibility works",
        "subtitle": "",
        "author": "",
        "description": `Take a peek behind the scenes! Learn about the DOM's smaller but powerful sibling, 
            the accessibility tree, 
            and how assistive technologies use it for accessibility.`,
        "to": `/blog/how-accessibility-works`,
        "ariaLabel": "",
    },
    {
        "label": "accessibility-101",
        "id": "most-common-bugs",
        "title": "The most common accessibility bugs",
        "subtitle": "Findings from the 2024 WebAIM Million Study",
        "author": "",
        "description": 
            `The bad news: a handful of bugs is responsible for the majority of 
            accessibility issues detected via automated tools. The good news: they are quite easy to avoid or fix!`,
        "to": `/blog/most-common-bugs`,
        "ariaLabel": "",
    },
    {
        "label": "html-for-accessibility",
        "id": "importance-of-semantic-html",
        "title": "The importance of semantic HTML",
        "subtitle": "",
        "author": "Blog post on dev.to",
        "description": `In conversations about accessibility, the use of semantic HTML is most 
            likely to be the first and most common piece of advice. This post looks at the role it 
            plays in accessibility and beyond.`,
        "href": `https://dev.to/corinamurg/use-semantic-html-4b97`,
        "ariaLabel": "",
    },
    {
        "label": "html-for-accessibility",
        "id": "html-buttons-or-links",
        "title": "HTML: buttons or links? How to choose",
        "subtitle": "",
        "author": "Blog post on dev.to",
        "description": `Buttons and links are fundamental elements in web design, each with distinct semantic 
            meanings and accessibility implications. For accessibility, it's essential to use the appropriate 
            element given the functionality you aim to implement. Let’s see how to use them!`,
        "href": `https://dev.to/corinamurg/html-buttons-vs-links-5059`,
        "ariaLabel": "",
    },
    // {
    //     "label": "html-for-accessibility",
    //     "id": "how-to-design-great-alt-text",
    //     "title": "How to design great alt text",
    //     "subtitle": "",
    //     "author": "By Caitlin Geier on deque.com/blog",
    //     "description": `Alt text is essential for users relying on screen readers or slow internet connections. 
    //         Learn to distinguish between decorative and informative images, 
    //         and how the context of an image determines the need for alt text, which is also a ranking factor for SEO.`,
    //     "href": `https://www.deque.com/blog/great-alt-text-introduction/`,
    //     "ariaLabel": "",
    // },
    {
        "label": "html-for-accessibility",
        "id": "similar-but-different",
        "title": "Similar, but different: HTML and ARIA terms",
        "subtitle": "",
        "author": "",
        "description": `How do you bring focus to a link: with ":focus" or ":focus-visible"?
            For a button that lacks visible text, do you use "aria-label" or "aria-labelledby" to create an accessible name? 
            Let's match these terms agaist each other to see how they differ.`,
        "to": `/blog/similar-but-different`,
        "ariaLabel": "",
    },
    {
        "label": "html-for-accessibility",
        "id": "html-tag-vs-element",
        "title": "HTML: tag vs. element",
        "subtitle": "",
        "author": "Blog post on dev.to",
        "description": `It’s common for web developers to use HTML element and HTML tag interchangeably. 
            But are they really the same thing? Or is there more than meets the eye? Let's decode this lingo!`,
        "href": `https://dev.to/corinamurg/html-tag-vs-element-3dc5`,
        "ariaLabel": "",
    },
    {
        "label": "css-for-accessibility",
        "id": "codepen-css",
        "title": "A CSS-focused CodePen collection",
        "subtitle": "",
        "author": "On codepen.io",
        "description": `CSS can play an active role in improving the accessibility of your website. 
            Creating a skip link
            or adding a media query to account for reduced motion preferences are
            ways in which you can improve the experience for all users.`,
        "href": "https://codepen.io/collection/kNqjVV",
        "ariaLabel": "",
    },
   
    {
        "label": "example-accessible-components",
        "id": "codepen-components",
        "title": "CodePens of accessible components",
        "subtitle": "",
        "author": "On codepen.io",
        "description": `This is a collection of small (but mighty!) accessible components that you can use in your projects.
            Buttons, links or dropdown menus can all be easily built with just HTML tags and CSS, and sometimes a touch of JavaScript.`,
        "href": "https://codepen.io/collection/zxbLrQ",
        "ariaLabel": "",
    },
    
    {
        "label": "your-portfolio-site",
        "id": "fixing-the-six-most-common-bugs",
        "title": "Fixing the six most common bugs",
        "subtitle": "",
        "author": "",
        "description": `You're adding the finishing touches to your portfolio site. Will it be ready 
                to welcome all visitors? Let's check for the most common accessibility bugs. The only 
                tools we'll need are HTML and CSS.`,
        "to": `/blog/fixing-the-six-most-common-bugs`,
        "ariaLabel": "",
    },
    {
        "label": "your-portfolio-site",
        "id": "the-next-six-bugs",
        "title": `Level up: the next 6 bugs to watch for`,
        "subtitle": "",
        "author": "",
        "description": `We've learned about the 6 most common accessibility bugs. Can we find 6 more? Will JavaScript
            be necessary this time? Let's learn where to look for them and how to avoid them.`,
        "to": `/blog/the-next-six-bugs`,
        "ariaLabel": "",
    },
    // {
    //     "label": "your-digital-presence",
    //     "id": "tips-for-accessible-github-profile",
    //     "title": "Tips for an accessible GitHub profile",
    //     "subtitle": "",
    //     "author": "By Annie Streater on github.blog",
    //     "description": `A post with practical advice on how to ensure  
    //         all users, including those with disabilities, can navigate and understand your GitHub profile. You'll find tips
    //         on link context, alt text for images, heading structure, plain language, and use of emojis. A treat!`,
    //     "href": "https://github.blog/2023-10-26-5-tips-for-making-your-github-profile-page-accessible/",
    //     "ariaLabel": "",
    // },
    {
        "label": "testing-for-accessibility",
        "id": "automated-browser-tools",
        "title": "Automated browser tools",
        "subtitle": "",
        "author": "",
        "description": `You can press a button and get a list of accessibility issues on your site. 
                        You will certainly NOT catch all the bugs, but these tools are a great starting point. 
                        Let's see how they work and what they can do for you.`,  
        "to": `/blog/automated-browser-tools`,
        "ariaLabel": "",
    },
];
