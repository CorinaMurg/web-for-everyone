export type ResourcesPostDataTypes = {
    label: string;
    id?: string;
    title: string;
    subtitle?: string;
    author?: string;
    description: string;
    to?: string;
    href?: string;
    ariaLabel: string;
    readMoreAriaLabel: string;
};

export const resourcesPostsData: ResourcesPostDataTypes[] = [
    {
        "label": "understanding-accessibility",
        "id": "what-is-accessibility",
        "title": "What is Accessibility?",
        "subtitle": "",
        "author": "By Web for Everyone",
        "description": `When you create websites and apps that everyone, including people with disabilities, 
            can easily navigate and understand, you make accessibility happen.`,
        "to": `/resources/what-is-accessibility`,
        "ariaLabel": "What is Accessibility article by Web for Everyone.",
        "readMoreAriaLabel": "",
    },
    {
        "label": "understanding-accessibility",
        "id": "how-accessibility-works",
        "title": "How Accessibility Works",
        "subtitle": "",
        "author": "By Web for Everyone",
        "description": `Have you met the DOM' powerful sibling, the accessibility tree? 
            It's a node structure made up of accessible objects and a key player in making
            acessibility happen.`,
        "to": `/resources/how-accessibility-works`,
        "ariaLabel": "What is Accessibility article by Web for Everyone.",
        "readMoreAriaLabel": "",
    },
    
    // {
    //     "label": "understanding-accessibility",
    //     "id": "accessibility-guidelines",
    //     "title": "Accessibility Guidelines",
    //     "subtitle": "Findings from the 2023 WebAIM Million Study",
    //     "author": "Web for Everyone",
    //     "description": `In most conversations about accessibility, the use of semantic HTML is most 
    //         likely to be the first and most common piece of advice. My post looks at the role it 
    //         plays in accessibility and beyond.`,
    //     "to": `/resources/accessibility-guidelines`,
    //     "ariaLabel": "The Most Common Accessibility Bugs article by Web for Everyone.",
    //     "readMoreAriaLabel": "",
    // },
    // {
    //     "label": "understanding-accessibility",
    //     "id": "does-inaccessible-equal-illegal",
    //     "title": "Does Inaccessible Equal Illegal?",
    //     "subtitle": "Findings from the 2023 WebAIM Million Study",
    //     "author": "Web for Everyone",
    //     "description": `In most conversations about accessibility, the use of semantic HTML is most 
    //         likely to be the first and most common piece of advice. My post looks at the role it 
    //         plays in accessibility and beyond.`,
    //     "to": `/resources/does-inaccessible-equal-illegal`,
    //     "ariaLabel": "The Most Common Accessibility Bugs article by Web for Everyone.",
    //     "readMoreAriaLabel": "",
    // },
    {
        "label": "understanding-accessibility",
        "id": "most-common-bugs",
        "title": "The Most Common Accessibility Bugs",
        "subtitle": "Findings from the 2023 WebAIM Million Study",
        "author": "By Web for Everyone",
        "description": `The bad news: for five years in a row, a handful of bugs has been responsible for the 
            majority of accessibility issues. The good news: they are quite easy to avoid or fix!`,
        "to": `/resources/most-common-bugs`,
        "ariaLabel": "The Most Common Accessibility Bugs article by Web for Everyone.",
        "readMoreAriaLabel": "",
    },
    // {
    //     "label": "understanding-accessibility",
    //     "id": "testing-for-accessibility",
    //     "title": "Testing for Accessibility",
    //     "subtitle": "Findings from the 2023 WebAIM Million Study",
    //     "author": "Web for Everyone",
    //     "description": `In most conversations about accessibility, the use of semantic HTML is most 
    //         likely to be the first and most common piece of advice. My post looks at the role it 
    //         plays in accessibility and beyond.`,
    //     "to": `/resources/testing-for-accessibility`,
    //     "ariaLabel": "The Most Common Accessibility Bugs article by Web for Everyone.",
    //     "readMoreAriaLabel": "",
    // },
    {
        "label": "html-for-accessibility",
        "title": "The Importance of Semantic HTML",
        "subtitle": "",
        "author": "By Corina Murg on dev.to",
        "description": `In most conversations about accessibility, the use of semantic HTML is most 
            likely to be the first and most common piece of advice. This post looks at the role it 
            plays in accessibility and beyond.`,
        "href": `https://dev.to/corinamurg/use-semantic-html-4b97`,
        "ariaLabel": "The importance of semantic HTML blog post.",
        "readMoreAriaLabel": "read more link to The importance of semantic HTML blog post.",
    },
    {
        "label": "html-for-accessibility",
        "title": "HTML: Buttons or Links? How to Choose",
        "subtitle": "",
        "author": "By Corina Murg on dev.to",
        "description": `Buttons and links are fundamental elements in web design, each with distinct semantic 
            meanings and accessibility implications. For accessibility, it's essential to use the appropriate 
            element given the functionality you aim to implement. Let’s see how to use them!`,
        "href": `https://dev.to/corinamurg/html-buttons-vs-links-5059`,
        "ariaLabel": "HTML: buttons or links? How to choose blog post.",
        "readMoreAriaLabel": "read more link to HTML: buttons or links? How to choose blog post.",

    },
    {
        "label": "html-for-accessibility",
        "title": "How to Design Great Alt Text",
        "subtitle": "",
        "author": "By Caitlin Geier on deque.com/blog",
        "description": `Alt text is essential for users relying on screen readers or slow internet connections. 
            Learn to distinguish between decorative and informative images, 
            and how the context of an image determines the need for alt text, which is also a ranking factor for SEO.`,
        "href": `https://www.deque.com/blog/great-alt-text-introduction/`,
        "ariaLabel": "How to Design Great Alt Text: An Introduction by Caitlin Geier on deque.com/blog.",
        "readMoreAriaLabel": "read more link to How to Design Great Alt Text blog post.",
    },
    {
        "label": "html-for-accessibility",
        "title": "Similar, but Different: HTML and ARIA terms",
        "subtitle": "",
        "author": "By Web for Everyone",
        "description": `If you need to hide an element from view, do you use "display: none", "visibility: hidden", or "aria-hidden"?
            For a button that lacks visible text, do you use "aria-label" or "aria-labelledby" to create an accessible name? 
            Let's match these terms agaist each other to see how they differ.`,
        "to": `/resources/similar-but-different`,
        "ariaLabel": "How to Design Great Alt Text: An Introduction by Caitlin Geier on deque.com/blog.",
        "readMoreAriaLabel": "read more link to How to Design Great Alt Text blog post.",
    },
    {
        "label": "html-for-accessibility",
        "title": "HTML: Tag vs. Element",
        "subtitle": "",
        "author": "By Corina Murg on dev.to",
        "description": `It’s common for web developers to use HTML element and HTML tag interchangeably. 
            But are they really the same thing? Or is there more than meets the eye? Let's decode this lingo!`,
        "href": `https://dev.to/corinamurg/html-tag-vs-element-3dc5`,
        "ariaLabel": "HTML tag vs element blog post published by Corina.",
        "readMoreAriaLabel": "read more link to HTML tag vs element blog post.",
    },
    {
        "label": "css-for-accessibility",
        "title": "Is \"rem\" Always the Best Choice?",
        "subtitle": "",
        "author": "By Ashlee M Boyer on ashleemboyer.com",
        "description": `While rem units are great for 
            text to aid with zoom and accessibility, they may not be the best choice for margins, padding, 
            and spacing. Read Ashlee M Boyer's post on how using px units in these cases can 
            lead to a more predictable and user-friendly layout.`,
        "href": "https://ashleemboyer.com/blog/why-you-should-use-px-units-for-margin-padding-and-other-spacing-techniques#after-updating-to-px-units",
        "ariaLabel": "Is rem Always the Best Choice for Accessibility blog post by Ashlee M Boyer.",
        "readMoreAriaLabel": "read more link to Is rem Always the Best Choice for Accessibility, a blog post by Ashlee M Boyer.",
    },
   
    {
        "label": "example-accessible-components",
        "title": "Building the Main Navigation for a Website",
        "subtitle": "",
        "author": "By Manuel Matuzović on web.dev",
        "description": `This is an article published on Google's web.dev site. It's a thorough guide that 
        covers best practices for designing a navigation system that's user-friendly and accessible. 
        A (very long) must-read!`,
        "href": "https://web.dev/articles/website-navigation",
        "ariaLabel": "The web.dev article on building the main navigation for a website.",
        "readMoreAriaLabel": "read more link to The web.dev article on building the main navigation for a website.",
    },
    
    {
        "label": "accessible-digital-presence",
        "title": "Your Portfolio Site: Let's Make It Accessible",
        "subtitle": "Part One: Finding the 6 Most Common Bugs",
        "author": "By Web for Everyone",
        "description": `You're adding the finishing touches to your portfolio site. But will it be ready 
                to welcome all visitors? Let's check for the most common accessibility bugs.`,
        "to": `/resources/make-it-accessible-part1`,
        "ariaLabel": "",
        "readMoreAriaLabel": "read more link to 5 Tips for Making Your GitHub Profile Page Accessible, GitHub blog post.",
    },
    {
        "label": "accessible-digital-presence",
        "title": "Your Portfolio Site: Let's Make It Accessible",
        "subtitle": "Part 2: On the hunt for 6 more bugs",
        "author": "By Web for Everyone",
        "description": `We've caught the 6 most common accessibility bugs. Can we find 6 more? Will they be
            as easy to fix? Let's learn where to look and how to avoid them.`,
        "to": `/resources/make-it-accessible-part2`,
        "ariaLabel": "",
        "readMoreAriaLabel": "read more link to 5 Tips for Making Your GitHub Profile Page Accessible, GitHub blog post.",
    },
    {
        "label": "accessible-digital-presence",
        "title": "Tips for an Accessible GitHub Profile",
        "subtitle": "",
        "author": "By Annie Streater on github.blog",
        "description": `A post with practical advice on how to ensure  
            all users, including those with disabilities, can navigate and understand your GitHub profile. You'll find tips
            on link context, alt text for images, heading structure, plain language, and use of emojis. A treat!`,
        "href": "https://github.blog/2023-10-26-5-tips-for-making-your-github-profile-page-accessible/",
        "ariaLabel": "5 Tips for Making Your GitHub Profile Page Accessible, GitHub blog post.",
        "readMoreAriaLabel": "read more link to 5 Tips for Making Your GitHub Profile Page Accessible, GitHub blog post.",
    },
];
