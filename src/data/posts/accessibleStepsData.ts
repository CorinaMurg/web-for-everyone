
type AccessibleStepsDataTypes = {
    title: string;
    description: string[];
    imageElement: {
        line1: string;
        line2?: string;
        line3?: string;
        line4?: string;
    };
    code: string;
};

export const accessibleStepsData: AccessibleStepsDataTypes[] = [
    {
        "title": "Language Attribute",
        "description": [
          `I built my portfolio site with React and Typescript using an accessibility-first approach. To validate UI 
          functionality and compliance with accessibility standards, I combined Playwright's automated testing 
          tools with my own custom scripts. I also used Lighthouse and axe Dev Tools to test for performance and
          accessibility.`,
          `I built my portfolio site with React and Typescript using an accessibility-first approach. To validate UI 
          functionality and compliance with accessibility standards, I combined Playwright's automated testing 
          tools with my own custom scripts. I also used Lighthouse and axe Dev Tools to test for performance and
          accessibility.`,
        ],
        "imageElement": 
                {
                    line1: `<html lang="en">`,
                },
        "code": ``,
    },
    {
        "title": "Title Element",
        "description": [
          `I built my portfolio site with React and Typescript using an accessibility-first approach. To validate UI 
          functionality and compliance with accessibility standards, I combined Playwright's automated testing 
          tools with my own custom scripts. I also used Lighthouse and axe Dev Tools to test for performance and
          accessibility.`
        ],
        "imageElement": 
                {
                    line1: `<head>`,
                    line2: `   <title>...</title>`,
                    line3: ``,
                    line4: `<head>`,
                },
        "code": ``,
    },
    {
        "title": `Add the "alt" Attribute to Images`,
        "description": [
          `I built my portfolio site with React and Typescript using an accessibility-first approach. To validate UI 
          functionality and compliance with accessibility standards, I combined Playwright's automated testing 
          tools with my own custom scripts. I also used Lighthouse and axe Dev Tools to test for performance and
          accessibility.`
        ],
        "imageElement": 
                {
                    line1: `<img`,
                    line2: `   src="..."`,
                    line3: `   alt="..."`,
                    line4: `>`,
                },
        "code": ``,
    },

];
