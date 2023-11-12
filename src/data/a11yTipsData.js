
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
        "descriptionLeft": [`The <title> tag is used within the <head> section of an HTML document. 
            It defines the title of the document or webpage, but it's not visible in the main content 
            area of the webpage. Instead, it's displayed on the browser's title bar or 
            tab.`,
            `The title is important for accessibility as it is the first element that a screen reader will
            announce about a page. It is also used by search engines to identify the page and can be crucial 
            for SEO (Search Engine Optimization).`,
        ],
        "descriptionRight": [`Headings are used within the <body> of the HTML document and are represented by 
            the <h1>, <h2>, <h3>, <h4>, <h5>, and <h6> tags. Headings are visible to the users and help them 
            navigate through the content. They define the titles or subtitles we see on a page.`,
            `Screen reader users and search engines use headings to understand the structure and content of a 
            webpage.`
        ],
    },
    {
        "left": "label",
        "right": "aria-label",
        "descriptionLeft": [`A label is an HTML tag (<label>) used to define a label for several form elements 
            like input, select, textarea, etc. We connect it with a specific element either by wrapping 
            the element or by using the "for" attribute.`,
            `The label element improves accessibility by providing information about the form element 
            to screen readers. It also enhances user experience because when clicked it brings focus to 
            the associated form element.`
        ],
        "descriptionRight": [`This is an attribute part of the Web Accessibility Initiative - Accessible Rich 
            Internet Applications (WAI-ARIA) suite. Unlike the label element, aria-label doesn't have to be linked 
            to a specific form element. It can be used on interactive elements like buttons, links, or even divs 
            and spans that are made interactive through JavaScript.`,
            `It's particularly useful for screen reader users when a visual label isn't needed, or when there's 
            no visible label due to the design.`
            ],
    },
    {
        "left": "hidden",
        "right": "aria-hidden",
        "descriptionLeft": [`The hidden attribute is a standard HTML boolean attribute used to hide elements 
            from the page. When this attribute is applied to an element, it is removed from the visual display 
            and not rendered on the screen.`,
            `This attribute affects both the accessibility tree and the visual rendering. An element with the 
            hidden attribute will not be seen by users, and screen readers will not read it out.`
        ],
        "descriptionRight": [`This attribute is part of the WAI-ARIA (Web Accessibility Initiative - 
            Accessible Rich Internet Applications) specification. It indicates whether the element 
            is visible to screen readers.`,
            `Setting aria-hidden="true" hides the element from the accessibility tree, making it invisible 
            to screen readers, but it does not affect the visual rendering. The content will still be visible 
            on the screen. This is useful when you want to hide elements that are purely decorative.`
        ],

    },
    {
        "left": "display:none",
        "right": "visibility:hidden",
        "descriptionLeft": [`When you apply display: none to an element, it is completely removed from the 
            document layout. It's as if the element doesn't exist in the document flow. This means that the 
            element will not take up any space on the page, and the space it would normally occupy is 
            collapsed and filled by other elements.`,
            `In terms of accessibility, an element with display: none is also hidden from screen readers and 
            is not navigable or focusable.`
        ],
        "descriptionRight": [`This property hides the element from view, but unlike display: none, the element 
            still occupies its space in the layout. The element is rendered invisible, but it still affects 
            layout and the positions of other elements in the document flow.`,
            `From an accessibility standpoint, visibility: hidden also hides the element from screen readers. 
            However, unlike display: none, if the visibility is toggled back to visible via JavaScript, 
            the state change can be detected by assistive technologies.`
        ],
    },
    {
        "left": "aria-label",
        "right": "aria-labelledby",
        "descriptionLeft": [`This attribute is used to define a string that labels the current element.
        It is used when there is no visible label text on the screen or when a different, more detailed label 
        is required for screen reader users.`,
        `Example:`,
        `<button aria-label="Close">X</button>.`,
        `Here, the button has a visual label "X," but the aria-label provides a more descriptive label 
        for screen reader users.`,
        `Text in aria-label is not visible on the screen, while aria-labelledby references visible text.`
        ],
        "descriptionRight": [`This attribute is used to reference other elements on the page to define a label.
            It accepts an id (or a list of ids) which points to the elements that label the current element.`,
            `Example:`,
            `<span id="spanLabel">Name:</span>`,
            `<input aria-labelledby="spanLabel">`,
            `Here, the input field is labeled by the text "Name:" which is in a different element.`,
            `This attribute can concatenate text from multiple elements to form a single label, which is 
            not possible with aria-label. So it is ideal for when a label is composed of multiple separate elements or 
            when you want to use visible text on the page as the label.`
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
        "descriptionLeft": [`A tag is used to create an HTML element. 
            The tag refers to the opening <tagname> or closing </tagname> syntax used in HTML documents.`,
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
