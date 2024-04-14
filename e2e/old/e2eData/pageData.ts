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
        webPage: 'Accessibility Statement'
    },
    {
        url: 'https://webforeveryone.us/resources/make-it-accessible-part1',
        excludeElements: [],
        disableRules: [],
        webPage: 'Make It Accessible Part 1'
    },
    {
        url: 'https://webforeveryone.us/resources/make-it-accessible-part2',
        excludeElements: [],
        disableRules: [],
        webPage: 'Make It Accessible Part 2'
    },
    {
        url: 'https://webforeveryone.us/resources/what-is-accessibility',
        excludeElements: [],
        disableRules: [],
        webPage: 'What is Accessibility'
    },
    {
        url: 'https://webforeveryone.us/resources/how-accessibility-works',
        excludeElements: ['iframe'],
        disableRules: [],
        webPage: 'How Accessibility Works'
    },
    {
        url: 'https://webforeveryone.us/resources/most-common-bugs',
        excludeElements: [],
        disableRules: [],
        webPage: 'Most Common Bugs'
    },
    {
        url: 'https://webforeveryone.us/resources/similar-but-different',
        excludeElements: [],
        disableRules: [],
        webPage: 'Similar But Different'
    }
];

