export type PostData = {
    title: string;
    description: string[];
    href: string;
    hrefAriaLabel: string;
    imageSrc: string;
    imageAlt: string;
    photographer: string;
    photographerSrc: string;
    photographerSrcAriaLabel: string;
    readMoreAriaLabel: string;
};

export type RecentPostsData = {
    intro: {
        heading: string;
        paragraphs: string[];
    };
    posts: PostData[];
};

export const recentPostsData: RecentPostsData = {
    "intro": 
        {
            "heading": "Explore my blog, join my coding journey",
            "paragraphs": [
                `Interested in JavaScript or accessibility? I’m always diving into new topics on my blog. It’s where I break things down and make them easier to understand.`,
            ],
        },

    "posts": [
        {
            "title": "Testing with Playwright",
            "description": [
                `I'm a developer focused on web accessibility and I have recently added Playwright to my toolset 
                for testing web accessibility compliance. It offers straightforward syntax and 
                excellent automation capabilities. Plus, the best documentation out there!`,
                    
                `Please check out my blog series about the tests I wrote and how I applied them to this very site!`,
                ],
            "href": "https://dev.to/corinamurg/my-first-tests-in-playwright-20lc",
            "hrefAriaLabel": "Testing with Playwright blog series by Corina published on dev.to.",
            "imageSrc": "/assets/testingTubes3Colors.jpg",
            "imageAlt": `The image shows a hand pouring a blue liquid from a glass test tube into a flask with red liquid, 
                                    and another hand pouring a green liquid into the flask. The background is plain white.`,
            "photographer": "Alex Kondratiev",
            "photographerSrc": "https://unsplash.com/@alexkondratiev",
            "photographerSrcAriaLabel": "Alex Kondratiev profile on Unsplash",
            "readMoreAriaLabel": "read more link to Testing with Playwright blog series by Corina.",
        },
        {
            "title": "Semantic HTML: Buttons vs Links",
            "description": [
                    `Buttons and links are fundamental elements in web design, each with distinct semantic 
                    meanings and accessibility implications. Semantic meaning refers to the message
                    HTML elements convey, particularly users of assistive technologies.`,
                    `Therefore, for accessibility (and beyond!), it's essential to use the appropriate 
                    element given the functionality you aim to implement. Let’s see how to use them!`,
                ],
            "href": "https://dev.to/corinamurg/html-buttons-vs-links-5059",
            "hrefAriaLabel": "Semantic HTML: Buttons vs Links blog post by Corina published on dev.to.",
            "imageSrc": "/assets/personHoldingCompass.jpg",
            "imageAlt": "hand holding a black and green compass pointing to west",
            "photographer": "Aaron Visuals",
            "photographerSrc": "https://unsplash.com/@aronvisuals",
            "photographerSrcAriaLabel": "Aaron Visuals profile on Unsplash",
            "readMoreAriaLabel": "read more link to Semantic HTML buttons vs links blog post by Corina.",
        },
        {
            "title": "How I Finally Understood ES6 Classes & Constructors",
            "description": [
                `Hint: it involved building Lava Leap, a 2D platform game. And I don't even play video games!
                I used to believe that classes & constructors were secret backend tools. 
                For this game I had to use the word “Constructor” SEVEN times!`,
                `Read about my experience building the game using the "Eloquent JavaScript" book as a guide and 
                under the mentorship of a senior game developer.`,
                ],
            "href": "https://dev.to/corinamurg/lava-leap-a-2d-platform-game-built-with-javascript-5a1g-temp-slug-5684513?preview=5b079149c8396e0d0423d566cf5d44b4e802ce90833d2dd5185ff13bd6d9a03a5adcf05128269743bf288f65f4a3918d9bd53fb601424e4a8c8fa4eb",
            "hrefAriaLabel": "How I finally understood ES6 Classes & Constructors blog post by Corina published on dev.to.",
            "imageSrc": "/assets/lavaLeap.jpg",
            "imageAlt": "Grid with blue background. Player is shown as a vertical black rectangle standing on a horizontal wall. Two yellow squares representing coins, two red lava pits, plus several wall structures in white.",
            "photographer": "",
            "photographerSrc": "",
            "photographerSrcAriaLabel": "",
            "readMoreAriaLabel": "read more link to How I finally understood ES6 Classes and Constructors blog post by Corina.",
        },

        {
            "title": "Immutability in React",
            "description": [
                "JavaScript objects are mutable. We can change their content. BUT, React wants us (ok, implores us!) that we treat objects that are already in state as read-only. Should we listen?",
                "This post is a quick dive into the world of React documentation to look at what it means to use immutable objects and how to safely update objects in state.",
                ],
            "href": "https://dev.to/corinamurg/immutability-in-react-1apa",
            "hrefAriaLabel": "Immutability in React blog post by Corina published on corinamurg.dev.",
            "imageSrc": "/assets/redAndBlueCameleon.jpg",
            "imageAlt": "A red and blue chameleon sitting on a branch.",
            "photographer": "Simon Schwyter",
            "photographerSrc": "https://unsplash.com/@saimens",
            "photographerSrcAriaLabel": "Simon Schwyter profile on Unsplash",
            "readMoreAriaLabel": "read more link to Immutability in React blog post by Corina.",
        },
        {
            "title": "Testing with Playwright",
            "description": [
            `I'm a developer focused on web accessibility and I have recently added Playwright to my toolset 
            for testing web accessibility compliance. It offers straightforward syntax and 
            excellent automation capabilities. Plus, the best documentation out there!`,
            
            `Please check out my blog series about the tests I wrote and how I applied them to this very site!`,
            ],
            "href": "https://dev.to/corinamurg/my-first-tests-in-playwright-20lc",
            "hrefAriaLabel": "Testing with Playwright blog series by Corina published on dev.to.",
            "imageSrc": "/assets/testingTubes3Colors.jpg",
            "imageAlt": `The image shows a hand pouring a blue liquid from a glass test tube into a flask with red liquid, 
                        and another hand pouring a green liquid into the flask. The background is plain white.`,
            "photographer": "Alex Kondratiev",
            "photographerSrc": "https://unsplash.com/@alexkondratiev",
            "photographerSrcAriaLabel": "Alex Kondratiev profile on Unsplash",
            "readMoreAriaLabel": "read more link to Testing with Playwright blog series by Corina.",
        },
        {
            "title": "Semantic HTML: Buttons vs Links",
            "description": [
                `Buttons and links are fundamental elements in web design, each with distinct semantic 
                meanings and accessibility implications. Semantic meaning refers to the message
                HTML elements convey, particularly users of assistive technologies.`,
                `Therefore, for accessibility (and beyond!), it's essential to use the appropriate 
                element given the functionality you aim to implement. Let’s see how to use them!`,
            ],
            "href": "https://dev.to/corinamurg/html-buttons-vs-links-5059",
            "hrefAriaLabel": "Semantic HTML: Buttons vs Links blog post by Corina published on dev.to.",
            "imageSrc": "/assets/personHoldingCompass.jpg",
            "imageAlt": "hand holding a black and green compass pointing to west",
            "photographer": "Aaron Visuals",
            "photographerSrc": "https://unsplash.com/@aronvisuals",
            "photographerSrcAriaLabel": "Aaron Visuals profile on Unsplash",
            "readMoreAriaLabel": "read more link to Semantic HTML buttons vs links blog post by Corina.",
        },
        {
            "title": "How I Finally Understood ES6 Classes & Constructors",
            "description": [
            `Hint: it involved building Lava Leap, a 2D platform game. And I don't even play video games!
            I used to believe that classes & constructors were secret backend tools. 
            For this game I had to use the word “Constructor” SEVEN times!`,
            `Read about my experience building the game using the "Eloquent JavaScript" book as a guide and 
            under the mentorship of a senior game developer.`,
            ],
            "href": "https://dev.to/corinamurg/lava-leap-a-2d-platform-game-built-with-javascript-5a1g-temp-slug-5684513?preview=5b079149c8396e0d0423d566cf5d44b4e802ce90833d2dd5185ff13bd6d9a03a5adcf05128269743bf288f65f4a3918d9bd53fb601424e4a8c8fa4eb",
            "hrefAriaLabel": "How I finally understood ES6 Classes & Constructors blog post by Corina published on dev.to.",
            "imageSrc": "/assets/lavaLeap.jpg",
            "imageAlt": "Grid with blue background. Player is shown as a vertical black rectangle standing on a horizontal wall. Two yellow squares representing coins, two red lava pits, plus several wall structures in white.",
            "photographer": "",
            "photographerSrc": "",
            "photographerSrcAriaLabel": "",
            "readMoreAriaLabel": "read more link to How I finally understood ES6 Classes and Constructors blog post by Corina.",
        },
        {
            "title": "Immutability in React",
            "description": [
            "JavaScript objects are mutable. We can change their content. BUT, React wants us (ok, implores us!) that we treat objects that are already in state as read-only. Should we listen?",
            "This post is a quick dive into the world of React documentation to look at what it means to use immutable objects and how to safely update objects in state.",
            ],
            "href": "https://dev.to/corinamurg/immutability-in-react-1apa",
            "hrefAriaLabel": "Immutability in React blog post by Corina published on corinamurg.dev.",
            "imageSrc": "/assets/redAndBlueCameleon.jpg",
            "imageAlt": "A red and blue chameleon sitting on a branch.",
            "photographer": "Simon Schwyter",
            "photographerSrc": "https://unsplash.com/@saimens",
            "photographerSrcAriaLabel": "Simon Schwyter profile on Unsplash",
            "readMoreAriaLabel": "read more link to Immutability in React blog post by Corina.",
        },
    ],
};
  