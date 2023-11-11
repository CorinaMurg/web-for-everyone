
export const a11yTipsData = [
    {
    "left": ":focus",
    "right": ":focus-visible",
    "descriptionLeft": [`The ":focus" pseudo-class applies when an element has received focus, regardless 
        of how that focus was initiated. This could be from a mouse click, keyboard navigation, or 
        programmatically (using JavaScript).`
        ],
    "descriptionRight": [`The ":focus-visible" pseudo-class, on the other hand, is more intelligent about when 
        to show focus styles. It applies when an element has focus and the browser determines that the focus 
        should be made evident on the element. This is typically when navigating with the keyboard.`,
        `It's particularly useful for accessibility. It shows focus styles for 
        keyboard navigation, but prevents them from displaying when the user 
        interacts with the mouse (which usually does not require focus indicators).`
        ],
    },

    {
    "left": "button",
    "right": "link",
    "descriptionLeft": [`Buttons are marked with the <button> HTML element and are used for actions. 
        They are intended to perform an operation or trigger a function when the user clicks on them. 
        Examples include submitting a form, opening a modal window, or any other action that does not 
        navigate to a new page or resource.`,
        `A button is considered a semantic  element: users have specific expectations when activating a 
        button (e.g., some action will occur on the page) and they can activate it with both a mouse and 
        keyboard (typically with the Enter or Space key).`
    ],
    "descriptionRight": [`Links are marked up using the <a> HTML element with an "href" attribute pointing 
        to the destination URL or page anchor. They are used for navigation. Their primary role is to take 
        the user from the current location to a new resource. This could be a different page, a different 
        section of the same page (using anchor links), an external website, or to initiate a download.`,
        `Just like a button, a link is also a semantic element. When activating a link (with both a mouse and 
        the Enter key) users expect to be redirected to a new location.`
    ],
    },
    {
        "left": "title",
        "right": "heading",
        "descriptionLeft": [`The ":focus" pseudo-class applies when an element has received focus, regardless 
        of how that focus was initiated. This could be from a mouse click, keyboard navigation, or 
        programmatically (using JavaScript).`
        ],
        "descriptionRight": [`The ":focus-visible" pseudo-class, on the other hand, is more intelligent about when 
        to show focus styles. It applies when an element has focus and the browser determines that the focus 
        should be made evident on the element. This is typically when navigating with the keyboard.`,
        `It's particularly useful for accessibility because it prevents focus styles from displaying when the user 
        interacts with the mouse, which usually does not require focus indicators, while still showing them for 
        keyboard navigation, which does.`
        ],
    },
    {
        "left": "label",
        "right": "aria-label",
        "descriptionLeft": [`The ":focus" pseudo-class applies when an element has received focus, regardless 
        of how that focus was initiated. This could be from a mouse click, keyboard navigation, or 
        programmatically (using JavaScript).`
        ],
    "descriptionRight": [`The ":focus-visible" pseudo-class, on the other hand, is more intelligent about when 
        to show focus styles. It applies when an element has focus and the browser determines that the focus 
        should be made evident on the element. This is typically when navigating with the keyboard.`,
        `It's particularly useful for accessibility because it prevents focus styles from displaying when the user 
        interacts with the mouse, which usually does not require focus indicators, while still showing them for 
        keyboard navigation, which does.`
        ],
    },
    {
        "left": "hidden",
        "right": "aria-hidden",
        "descriptionLeft": [`The ":focus" pseudo-class applies when an element has received focus, regardless 
        of how that focus was initiated. This could be from a mouse click, keyboard navigation, or 
        programmatically (using JavaScript).`
        ],
    "descriptionRight": [`The ":focus-visible" pseudo-class, on the other hand, is more intelligent about when 
        to show focus styles. It applies when an element has focus and the browser determines that the focus 
        should be made evident on the element. This is typically when navigating with the keyboard.`,
        `It's particularly useful for accessibility because it prevents focus styles from displaying when the user 
        interacts with the mouse, which usually does not require focus indicators, while still showing them for 
        keyboard navigation, which does.`
        ],

    },
    {
        "left": "display:none",
        "right": "visibility:hidden",
        "descriptionLeft": [`The ":focus" pseudo-class applies when an element has received focus, regardless 
        of how that focus was initiated. This could be from a mouse click, keyboard navigation, or 
        programmatically (using JavaScript).`
        ],
    "descriptionRight": [`The ":focus-visible" pseudo-class, on the other hand, is more intelligent about when 
        to show focus styles. It applies when an element has focus and the browser determines that the focus 
        should be made evident on the element. This is typically when navigating with the keyboard.`,
        `It's particularly useful for accessibility. It shows focus styles for 
        keyboard navigation, but prevents them from displaying when the user 
        interacts with the mouse (which usually does not require focus indicators).`
        ],
    },
    {
        "left": "aria-label",
        "right": "aria-labelledby",
        "descriptionLeft": [`The ":focus" pseudo-class applies when an element has received focus, regardless 
        of how that focus was initiated. This could be from a mouse click, keyboard navigation, or 
        programmatically (using JavaScript).`
        ],
        "descriptionRight": [`The ":focus-visible" pseudo-class, on the other hand, is more intelligent about when 
        to show focus styles. It applies when an element has focus and the browser determines that the focus 
        should be made evident on the element. This is typically when navigating with the keyboard.`,
        `It's particularly useful for accessibility because it prevents focus styles from displaying when the user 
        interacts with the mouse, which usually does not require focus indicators, while still showing them for 
        keyboard navigation, which does.`
        ],

    },
    {
        "left": "semantic",
        "right": "non-semantic",
        "descriptionLeft": [`Semantic elements like <form>, <table>, and <article> convey the purpose and 
            type of content to both the browser and the user. This functionality is particularly important 
            to users of assistive technologies because it allows them to navigate and interact with web 
            content effectively.`,
            `For example, a <button> implies an action to be taken on the current page, such as submitting a 
            form, while an <a> tag, or anchor link, traditionally signifies a transition to a new page or 
            anchor point.`
        ],
        "descriptionRight": [`Non-semantic elements are those that do not convey any particular meaning about 
            the content they contain to browsers or assistive technologies. They are typically used for 
            styling purposes or for layout. `,
            `Examples of non-semantic elements include <div> and <span>. These elements tell nothing about 
            their contents and are generally used to apply CSS styling or JavaScript behavior. They are 
            considered non-semantic because they don't provide any information about the nature of the content 
            they hold. `
        ],
    },
    {
        "left": "HTML tag",
        "right": "HTML element",
        "descriptionLeft": [`A tag, on the other hand, is used to create an HTML element. 
            The tag refers to the opening <tagname> or closing </tagname> syntax used in HTML documents. `,
            `Tags come in pairs for most elements, with an opening tag marking the beginning of the element 
            and a closing tag marking the end. However, some tags are self-closing, 
            such as <img /> or <br />, which do not need a closing tag.`
        ],
        "descriptionRight": [`An HTML element refers to everything from the start tag to the end tag, 
            including the tag itself, its attributes, and the content in between.`,
            `An element can consist of: `,
            `- the opening tag: <p>`,
            `- the content: Hello, World!`,
            `- the closing tag: </p>`,
            `So when you write <p>Hello, World!</p>, you're creating a paragraph element.`
        ],
    }
]
