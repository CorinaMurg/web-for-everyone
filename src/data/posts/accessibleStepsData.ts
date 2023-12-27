
type AccessibleStepsDataTypes = {
    title: string;
    description: string[];
    codeElement: {
        line1: string;
        line2?: string;
        line3?: string;
        line4?: string;
        line5?: string;
        line6?: string;
        line7?: string;
    };
    code: string;
    image?: string;
    imageAlt?: string;
};

export const accessibleStepsData: AccessibleStepsDataTypes[] = [
    {
        "title": "Language Attribute",
        "description": [
            `Use a valid language in the "lang" attribute`,
            `(Notice that it is part of the html tag, not the head tag!)`,
            `It enables screen readers to correctly identify the language of 
            the webpage content.`,
            `When setting up a screen reader, users choose a default language. If a webpage doesn't have
            a "lang" attribute, the screen reader defaults to the user's chosen language. This can be problematic for 
            multilingual users accessing content in various languages.`,
            

            `Is it common that a project would lack this attribute? Not at all! That's because when 
            we initiate a new code base we are likely to use editors that generate an HTML file
            pre-configured with all the essential elements, including the lang attribute. The only sites
            I came across that lacked the lang attribute were bbc.com (checked on December 27, 2023) and 
            portfolio sites that had started as templates 
            and were not updated to include it. Rememeber to check
            in case you are using a template!`,
            `Did you know?`,
            `You can specify the language of a certain word or section of the page:`,
            `<p>Hello in English <span lang="fr">Bonjour</span> in French.</p>`,
            `You can choose a the specific dialect:`,
            `<html lang="en-US">`,

            
        ],
        "codeElement": 
                {
                    line1: `<html lang="en">`,
                },
        "code": ``,
    },
    {
        "title": "Title Element",
        "description": [
            `Let users know what page they are on`,
            `The content of the <title> element gets displayed in the browser's title bar or tab. It's important because:`,
            `1️⃣ It helps sighted users identify a certain page when they have multiple tabs open.`,
            `2️⃣ It also plays a crucial role for screen reader users. As they navigate from page to page, the title 
            is the first element announced by the screen reader. This way they understand which page they are on, 
            especially when browsing through multiple pages on the same website.`,
            `Do make sure each page has a unique title!`,
            `It gets more complex with a Single Page Application (SPA), but each framework has specific features or 
            libraries that allow for changing the title. Research, choose one, and implement it.`,
            
            `(I built this site with just React, and created a custom hook to update the title.)`,
        ],
        "codeElement": 
                {
                    line1: `<head>`,
                    line2: `   <title>Web for Everyone | Home</title>`,
                    line3: ``,
                    line4: `<head>`,
                },
        "code": ``,
    },
    {
        "title": "Skip Link",
        "description": [
            `Allow users to jump straight into your main content`,
            `A user that navigates with a mouse can simply click on the desired element on the page.
            A keyboard user needs to repeatedly press the Tab key to move through all interactive elements 
            before reaching a certain element.`,
            `What if they want to get to a link in the main section of the 
            content? They would have to traverse your entire navigation first!`,
            `Improve their experience and include a "Skip to main content" 
            link at the beginning of the page. This way they can bypass navigation and jump 
            directly to the main content.`,
        ],
        "codeElement": 
                {
                    line1: `<nav>`,
                    line2: `   <a class="skip-to-content" href="#main">`,
                    line3: `      Skip to content`,
                    line4: `   </a>`,
                    line5: `   ... other navigation elements`,
                    line6: `</nav>`,
                    
                },
        "code": ``,
    },
    {
        "title": `The "alt" Attribute for Images`,
        "description": [
            `Help screen readers decide whether to read an image or not`,
            `Is your image purely decorative? Then it's best to leave the alt attribute empty.`,
            `Does your image contain information that is not available in the text? Then add a short description
            in the alt attribute.`,
            `Either way, it's important to add the alt attribute to all images. If empty, it tells the screen
            reader to skip the image. This way it doesn't waste time reading it. If it's missing though, the screen 
            reader will read the image's file name, which is not helpful to the user.`,
        ],
        "codeElement": 
                {
                    line1: `<img`,
                    line2: `   src="..."`,
                    line3: `   alt="Fill me in or leave me empty, but do include me!"`,
                    line4: `/>`,
                },
        "code": ``,
    },
    {
        "title": `Color Contrast`,
        "description": [
            `Mind the color contrast ratio to help users with low vision`,
            `Users with low vision can struggle with perceiving contrast. If there's not a significant 
            difference between light and dark areas in their sight, everything tends to look similarly 
            bright. They can't spot outlines, edges, and other details. Reading can also be challenging when the 
            text color doesn't stand out much from the background.`,
            `As mentioned above, when you run a test with Lighthouse or axe DevTools, if any elements failed
            the contrast ratio guidelines, you will know right away.`,
            `If you'd like to me more proactive, you can use a color contrast checker to test your colors 
            as you're building. I love WebAIM's contrast checker (see link in the Explore Further section), 
            but a quick web search will reveal many others.`,
            `Checking is easy: enter the foreground and background colors for a given element, 
            and the tool will tell you if the contrast ratio is sufficient.`,
            `Time for a quick quiz!`,
             `Is the contrast ratio below sufficient? Check your answer in the
            Explore Further section.`,
        ],
        "codeElement": 
                {
                    line1: `I'm tiny text.`,
                    line2: `I need a contrast ratio of at least 4.5:1.`,
                    line3: `I'm not-too-large (19px or larger), but bold text.`,
                    line4: `I need a contrast ratio of at least 3:1.`,
                    line5: `I'm large text (24px or larger).`,
                    line6: `I need a contrast ratio of at least 3:1.`,
                },
        "code": ``,
        "image": `/assets/images/colorContrast.jpg`,
        "imageAlt": `A screenshot of WebAIM's color contrast checker. The foreground color entered is a dark grey 
        (#212121) and the background color is a dark green (#078005). The contrast ratio displayed is 3.14:1. `
    },
    {
        "title": `Visible Focus`,
        "description": [
            `Let keyboard users know where they are on the page`,
            `If you're a mouse user, how do you know where you are on a page? Or how do you tell an element is 
            actionable?`,
            `You notice where your mouse pointer is placed. And hovering over it with the mouse and see the arrow 
            turn into a hand when. 
            Most likely other hover effects will kick in as well, like a change in background color or  
            an underline appearing under a link. `,
            `How do keyboard only users know which elements are actionable? They tab through the page and

            is visually tracking where they are in a page.`, 
        //   `To accommodate sighted keyboard only users, it is important that when the keyboard focus is 
        //   set to a link, for example, that the link changes its appearance so the user knows where the focus is. 
        //   This is called a focus state. If there is no focus state, it can be impossible to know where you are on 
        //   a page or what is actionable.`
        ],
        "codeElement": 
                {
                    line1: `<img`,
                    line2: `   src="..."`,
                    line3: `   alt="Always add an alt attribute to images"`,
                    line4: `/>`,
                },
        "code": ``,
    },
    {
        "title": `Button or Link?`,
        "description": [
            `It depends on the functionality you want to implement`,
            `Do you need it to trigger an action, like submitting a form or opening a modal? Use a button.`,
            `Should it take the user from the current location to a new resource: a different page, a different 
            section of the same page, or an external website? It's a job for a link.`,
        ],
        "codeElement": 
                {
                    line1: `<img`,
                    line2: `   src="..."`,
                    line3: `   alt="Always add an alt attribute to images"`,
                    line4: `/>`,
                },
        "code": ``,
    },
    {
        "title": `Buttons with Icons`,
        "description": [
            `Add descriptive text to help screen reader users`,
            `Example: a button used to close a modal uses an "X" icon instead of text.
            How would a screen reader user know what it does?`,
            `Add a visually hidden text that describes the action.`,
            `Or, use the aria-label attribute to add a description.`,
        
        ],
        "codeElement": 
                {
                    line1: `<button aria-label="Close modal" ...> `,
                    line2: `   X`,
                    line3: `   <span class="visually-hidden">Close modal</span>`,
                    line4: `</button>`,
                },
        "code": ``,
    },
    {
        "title": `Use rem units for font sizes`,
        "description": [
          `An all too common challenge for keyboard only users is visually tracking where they are in a page.`, 
          `Mouse users can move the mouse around the page and see the arrow turn into a hand when hovering over 
          actionable elements, to indicate they are actionable. Normally this happens together with the element 
          changing state to indicate it is actionable. For example an underline appearing under a link. 
          This is called a hover state.`,
        ],
        "codeElement": 
                {
                    line1: `<img`,
                    line2: `   src="..."`,
                    line3: `   alt="Always add an alt attribute to images"`,
                    line4: `/>`,
                },
        "code": ``,
    },

];



