export type AboutDataImage = {
    src: string;
    alt: string;
};

export type AboutDataExtras = {
    prefix: string;
    link: string;
    linkText: string;
    linkAriaLabel?: string;
    suffix: string;
};

export type AboutDataItemTypes = {
    prefix: string;
    link: string;
    linkText: string;
    linkAriaLabel?: string;
    suffix: string;
    extras?: AboutDataExtras;
};

export type AboutDataTypes = {
    currently: AboutDataItemTypes[];
};


export const aboutData: AboutDataTypes = {
    "currently": [
        {
            prefix: `Writing about JavaScript and 
                     accessibility on `,
            link: "https://dev.to/corinamurg/",
            linkText: "my blog The Web is for Everyone",
            linkAriaLabel: "",
            suffix: ".",
        },
    ]
}

   

// {
//     prefix: `Testing with 🎭 and documenting the experience on my 
//             blog. Check out `,
//     link: "https://dev.to/corinamurg/series/25417",
//     linkText: "my series of posts about Playwright",
//     linkAriaLabel: "",
//     suffix: ".",
//     extras: 
//         {
//             prefix: `I've written my first tests in Playwright 
//                     for this very website! Visit the `, 
//             link: "https://github.com/CorinaMurg/corina-portfolio",
//             linkText: "GitHub repo for my Portfolio site",
//             linkAriaLabel: "",
//             suffix: " to see the tests in action.",
//         },
    
// },