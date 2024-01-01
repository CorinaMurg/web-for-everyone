export type ResourcesPostDataTypes = {
    label: string;
    title: string;
    shortTitle?: string;
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
        "title": "What is Accessibility?",
        "shortTitle": "",
        "author": "Web for Everyone",
        "description": `In most conversations about accessibility, the use of semantic HTML is most 
            likely to be the first and most common piece of advice. My post looks at the role it 
            plays in accessibility and beyond.`,
        "to": `/resources/what-is-accessibility`,
        "ariaLabel": "What is Accessibility article by Web for Everyone.",
        "readMoreAriaLabel": "",
    },
    {
        "label": "html-for-accessibility",
        "title": "The Importance of Semantic HTML",
        "shortTitle": "The Importance of Semantic HTML",
        "author": "By Corina Murg",
        "description": `In most conversations about accessibility, the use of semantic HTML is most 
            likely to be the first and most common piece of advice. My post looks at the role it 
            plays in accessibility and beyond.`,
        "to": `/resources/semantic-html`,
        "ariaLabel": "The importance of semantic HTML blog post.",
        "readMoreAriaLabel": "read more link to The importance of semantic HTML blog post.",
    },
    {
        "label": "html-for-accessibility",
        "title": "HTML: Buttons or Links? How to Choose",
        "shortTitle": "Buttons or Links? How to Choose",
        "author": "By Corina Murg",
        "description": `Buttons and links are fundamental elements in web design, each with distinct semantic 
            meanings and accessibility implications. For accessibility, it's essential to use the appropriate 
            element given the functionality you aim to implement. Let’s see how to use them!`,
        "to": `/resources/buttons-or-links`,
        "ariaLabel": "HTML: buttons or links? How to choose blog post.",
        "readMoreAriaLabel": "read more link to HTML: buttons or links? How to choose blog post.",

    },
    {
        "label": "html-for-accessibility",
        "title": "How to Design Great Alt Text: An Introduction",
        "shortTitle": "How to Design Great Alt Text",
        "author": "By Caitlin Geier on deque.com/blog",
        "description": `This article from Deque on writing effective alt text emphasizes its importance in web 
            accessibility. Alt text is essential users relying on screen readers or slow internet connections. 
            Learn to distinguish between decorative and informative images, 
            and how the context of an image determines the need for alt text, which is also a ranking factor for SEO.`,
        "href": `https://www.deque.com/blog/great-alt-text-introduction/`,
        "ariaLabel": "How to Design Great Alt Text: An Introduction by Caitlin Geier on deque.com/blog.",
        "readMoreAriaLabel": "read more link to How to Design Great Alt Text blog post.",
    },
    {
        "label": "html-for-accessibility",
        "title": "HTML: Tag vs. Element",
        "shortTitle": "HTML: Tag vs. Element",
        "author": "By Corina Murg",
        "description": `It’s common for web developers to use HTML element and HTML tag interchangeably. 
            But are they really the same thing? Or is there more than meets the eye? Let's decode this lingo!`,
        "to": `/resources/tag-vs-element`,
        "ariaLabel": "HTML tag vs element blog post published by Corina.",
        "readMoreAriaLabel": "read more link to HTML tag vs element blog post.",
    },
    {
        "label": "css-for-accessibility",
        "title": "Is \"rem\" Always the Best Choice for Accessibility?",
        "shortTitle": "Is \"rem\" Always the Best Choice for Accessibility?",
        "author": "By Ashlee M Boyer on ashleemboyer.com",
        "description": `While rem units are often championed for their scalability, particularly for 
            text to aid with zoom and accessibility, they may not be the best choice for margins, padding, 
            and spacing. Read Ashlee M Boyer's post on how using px units in these cases can 
            lead to a more predictable and user-friendly layout.`,
        "href": "https://ashleemboyer.com/blog/why-you-should-use-px-units-for-margin-padding-and-other-spacing-techniques#after-updating-to-px-units",
        "ariaLabel": "Is rem Always the Best Choice for Accessibility blog post by Ashlee M Boyer.",
        "readMoreAriaLabel": "read more link to Is rem Always the Best Choice for Accessibility, a blog post by Ashlee M Boyer.",
    },
    // {
    //     "label": "ai",
    //     "title": "Can AI Help Boost Accessibility?",
    //     "shortTitle": "Can AI Help Boost Accessibility?",
    //     "author": "By UW News on washington.edu",
    //     "description": `This article published by "UW News" discusses a study by University of Washington 
    //     researchers on the accessibility potential of AI tools. The study found mixed results; while AI helped 
    //     in some tasks, such as summarizing texts and composing messages, it also frequently produced errors 
    //     and exhibited ableist biases. `,
    //     "href": "https://www.washington.edu/news/2023/11/02/ai-accessibility-chatgpt-midjourney-ableist/",
    //     "ariaLabel": "Can AI Help Boost Accessibility, a University of Washington News article.",
    //     "readMoreAriaLabel": "read more link to Can AI Help Boost Accessibility, University of Washington News article.",

    // },
    {
        "label": "build-accessible-components",
        "title": "Building the Main Navigation for a Website",
        "shortTitle": "Building the Main Navigation for a Website",
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
        "title": "5 Tips for Making Your GitHub Profile Page Accessible",
        "shortTitle": "Your GitHub Profile",
        "author": "By Annie Streater on github.blog",
        "description": `This GitHub blog post provides practical advice on how to ensure your GitHub profile 
            is navigable and understandable by all users, including those with disabilities. You'll find tips '
            on link context, image alt text, heading structure, plain language, and use of emojis. Enjoy!`,
        "href": "https://github.blog/2023-10-26-5-tips-for-making-your-github-profile-page-accessible/",
        "ariaLabel": "5 Tips for Making Your GitHub Profile Page Accessible, GitHub blog post.",
        "readMoreAriaLabel": "read more link to 5 Tips for Making Your GitHub Profile Page Accessible, GitHub blog post.",
    },
    {
        "label": "accessible-digital-presence",
        "title": "Let's Make It Accessible",
        "shortTitle": "Let's Make It Accessible",
        "author": "Corina Murg",
        "description": `You're adding the finishing touches to your portfolio site. But will it be ready 
                to welcome all visitors? Let's explore how to make it accessible to everyone.`,
        "to": `/resources/make-it-accessible`,
        "ariaLabel": "",
        "readMoreAriaLabel": "read more link to 5 Tips for Making Your GitHub Profile Page Accessible, GitHub blog post.",
    },
];
