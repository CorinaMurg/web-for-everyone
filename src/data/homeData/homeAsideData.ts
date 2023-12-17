type HomeAsideDataTypes = {
    title: string;
    description: string;
    linkText?: string;
    link?: string;
};

export const homeAsideData: HomeAsideDataTypes[] = [
    {
        title: "List common bugs",
        description: `Most common accessibility bugs are easy to fix. You just need to know what to look for.
                    Start with `,
        linkText: `Let's Make It Accessible!`,
        link: `/resources/make-it-accessible`,
    },
    {
        title: "Audit your site",
        description: `Reach out for a free audit of your site. You'll receive a report
                    with a list of bugs and guidance on how to address them.`,
        linkText: "",
        link: "",
    },
    {
        title: "List common bugs",
        description: `Need more help? Schedule a free Zoom call to receive answers to your specific questions.`,
        linkText: "",
        link: "",
    }
]

