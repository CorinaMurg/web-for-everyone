export interface PageDataTypes {
    url: string;
    ignore?: string[];
    webPage?: string;
}

export const pageData: PageDataTypes[] = [
    {
        url: 'https://webforeveryone.us/',
        ignore: [],
        webPage: 'Home'
    },
    {
        url: 'https://webforeveryone.us/resources',
        ignore: [],
        webPage: 'Resources'
    },
    {
        url: 'https://webforeveryone.us/about',
        ignore: [],
        webPage: 'About'
    },
    {
        url: 'https://webforeveryone.us/accessibility-statement',
        ignore: [],
        webPage: 'Accessibility Statement'
    },
    {
        url: 'https://webforeveryone.us/resources/make-it-accessible-part1',
        ignore: [],
        webPage: 'Make It Accessible Part 1'
    },
    {
        url: 'https://webforeveryone.us/resources/make-it-accessible-part2',
        ignore: [],
        webPage: 'Make It Accessible Part 2'
    },
    {
        url: 'https://webforeveryone.us/resources/what-is-accessibility',
        ignore: [],
        webPage: 'What is Accessibility'
    },
    {
        url: 'https://webforeveryone.us/resources/how-accessibility-works',
        ignore: ['iframe'],
        webPage: 'How Accessibility Works'
    },
    {
        url: 'https://webforeveryone.us/resources/most-common-bugs',
        ignore: [],
        webPage: 'Most Common Bugs'
    },
    {
        url: 'https://webforeveryone.us/resources/similar-but-different',
        ignore: [],
        webPage: 'Similar But Different'
    }
];

