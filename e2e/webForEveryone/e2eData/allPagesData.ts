export interface PageDataTypes {
    url: string;
    excludeElements?: string[];
    disableRules?: string[];
    webPage?: string;
}

export const pageData: PageDataTypes[] = [
    {
        url: 'https://webforeveryone.us/',
        excludeElements: [],
        disableRules: [],
        webPage: 'Home'
    },
    {
        url: 'https://webforeveryone.us/blog',
        excludeElements: [],
        disableRules: [],
        webPage: 'Blog'
    },
    {
        url: 'https://webforeveryone.us/about',
        excludeElements: [],
        disableRules: [],
        webPage: 'About'
    },
    {
        url: 'https://webforeveryone.us/accessibility-statement',
        excludeElements: [],
        disableRules: [],
        webPage: 'Accessibility statement'
    },
    {
        url: 'https://webforeveryone.us/blog/fixing-the-six-most-common-bugs',
        excludeElements: [],
        disableRules: [],
        webPage: 'Fixing the six most common bugs'
    },
    {
        url: 'https://webforeveryone.us/blog/lets-uncover-six-more-bugs',
        excludeElements: [],
        disableRules: [],
        webPage: 'Let\'s uncover six more bugs'
    },
    {
        url: 'https://webforeveryone.us/blog/what-is-accessibility',
        excludeElements: [],
        disableRules: [],
        webPage: 'What is accessibility'
    },
    {
        url: 'https://webforeveryone.us/blog/how-accessibility-works',
        excludeElements: ['iframe'],
        disableRules: [],
        webPage: 'How accessibility works'
    },
    {
        url: 'https://webforeveryone.us/blog/most-common-bugs',
        excludeElements: [],
        disableRules: [],
        webPage: 'Most common bugs'
    },
    {
        url: 'https://webforeveryone.us/blog/similar-but-different',
        excludeElements: [],
        disableRules: [],
        webPage: 'Similar but different'
    },
    {
        url: 'https://webforeveryone.us/*',
        excludeElements: [],
        disableRules: [],
        webPage: 'Not found'
    }
];

