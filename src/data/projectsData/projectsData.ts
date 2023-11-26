export type ProjectData = {
    title: string;
    description: string[];
    hrefSite: string;
    link1Text: string;
    hrefGitHub: string;
    link2Text: string;
    imageSrc: string;
    imageAlt: string;
    techStack: string;
};

export const projectsData: ProjectData[] = [
    {
        "title": "My Portfolio Site",
        "description": [
          `I built my portfolio site with React and Typescript using an accessibility-first approach. To validate UI 
          functionality and compliance with accessibility standards, I combined Playwright's automated testing 
          tools with my own custom scripts. I also used Lighthouse and axe Dev Tools to test for performance and
          accessibility.
          `,
          `I created a clean and maintainable codebase by decouplying content from UI code. Most of the content
          is stored in JSON files and then sorted and mapped within a given component.`,
          ],
        "hrefSite": "https://dev.to/corinamurg/my-first-tests-in-playwright-20lc/",
        "link1Text": "View Tests",
        "hrefGitHub": "https://github.com/CorinaMurg/corina-portfolio",
        "link2Text": "View Code",
        "imageSrc": "/assets/corinaAboutJson2.png",
        "imageAlt": `Screenshot of a JavaScript object code snippet titled 'aboutData'. It has a property 
                    called 'currently' which is an array including objects with properties 'prefix', 'link', 
                    'linkText', 'suffix', and 'extras'. The prefix includes the text 'Learning Playwright, 
                    and the extras contain a nested object with a statement about Corina's testing
                    this website with Playwright. It also includes the GitHub link to Corina's portfolio 
                    and aria-label and title attributes. The code is set against a dark editor background with 
                    syntax highlighting`,
        "techStack": "React  •  Playwright  •  Typescript",
    },
    {
        "title": "Twain & Company",
        "description": [
            "This is a bookstore website built with React and Firebase. It integrates ReactDOM.createPortal to implement a shopping cart modal. The Firebase backend implementation is used to store book data and orders.",
            "I used an accessibility-first approach with skip-to-content button, color contrast, focus outline, modal access via keyboard, and aria-live triggered by cart updates.",
            ],
        "hrefSite": "https://twain-and-company.netlify.app/",
        "link1Text": "View Site",
        "hrefGitHub": "https://github.com/CorinaMurg/twain-and-company",
        "link2Text": "View Code",
        "imageSrc": "/assets/booksOnATable.jpg",
        "imageAlt": "books in rows lined up on a table.",
        "techStack": "React  •  CSS GRID  •  Playwright  •  Accessibility Guidelines",
    },
    {
        "title": "Space Tourism Agency",
        "description": [
            "A multipage website built with JavaScript, HTML and CSS. Leverages semantic HTML5 tags, ARIA roles and properties for enhanced accessibility.",
            "Employs CSS Grid + Flexbox for responsive layout. Deploys <picture> elements to provide webp images with png fallbacks for better performance",
            ],
        "hrefSite": "https://corina-space-tourism.netlify.app/",
        "link1Text": "View Site",
        "hrefGitHub": "https://github.com/CorinaMurg/space-tourism-website",
        "link2Text": "View Code",
        "imageSrc": "/assets/spaceTourismMars.png",
        "imageAlt": "",
        "techStack": "JavaSCRIPT  •  CSS GRID + FLEXBOX  •  BEM  •  A11y",
    },
    {
        "title": "Lava Leap",
        "description": [
            `A 2D platform game implemented in JavaScript. Your player progresses through multiple challenging 
            levels. A collision with lava means the level restarts. Should the player run out of lives or 
            successfully complete all levels, the game will come to an end, with the option to restart.`,
            "Want an extra challenge or need some help? Adjust your player's number of lives directly in the URL.",
            ],
        "hrefSite": "https://lava-leap.netlify.app/",
        "link1Text": "View Site",
        "hrefGitHub": "https://github.com/CorinaMurg/lava-leap-game",
        "link2Text": "View Code",
        "imageSrc": "/assets/lavaLeapBlog.jpg",
        "imageAlt": "Grid with blue background. Player is shown as a vertical black rectangle standing on a horizontal wall. Two yellow squares representing coins, two red lava pits, plus several wall structures in white.",
        "techStack": "JavaScript  •  ES6 Classes and Constructors",
    },
];

    // {
    //     "title": "Neat Notes",
    //     "description": [
    //         "Desktop note-taking app built with React. Utilizes state, effects, and props to manage interactivity and data flow",
    //         "Integrates the React-Mde and Showdown packages for editing and conversion into HTML. Interacts with Local Storage using JavaScript's Web Storage API, saving and retrieving notes as needed",
    //         "Features a toggleable dark mode, enhancing accessibility and user preference"
    //         ],
    //     "hrefSite": "https://neatnotes.netlify.app/",
    //     "hrefGitHub": "https://github.com/CorinaMurg/neat-notes",
    //     "imageSrc": "/assets/neatNotesDark.jpg",
    //     "imageAlt": "Screenshot of NeatNotes app in dark mode",
    //     "techStack": "REACT •  REACTmde  •  SPLIT.JS   •  BEM",
    //     "sampleImageSrc": "./public/assets/lavaLeapSample.jpg",
    //     "sampleImageAlt": "Grid with blue background. Player is shown as a vertical black rectangle standing on a horizontal wall. Two yellow squares representing coins, two red lava pits, plus several wall structures in white.",
    //     "sampleImageCredit": "",
    //     "sampleProjectDescription": ""
    // },

  