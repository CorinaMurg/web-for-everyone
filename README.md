# Web for Everyone

The goal of this project is to introduce accessibility to frontend developers and designers.

## Tech stack
- React
- Typescript
- Playwright
- HTML
- CSS

Please note that this is not a finished product, and certain accessibility aspects are still in development.
Aceessibility goals: WCAG 2.2 AA

My TO DO list:

## Bugs to fix

1. Nav toggle (screen reader announces the entire content of mobile menu, and then again with each tab)

2. Missing anchor from TOC to section heading (also test with Playwright)

3. Add role=text to article h1 spans
   (see https://dequeuniversity.com/rules/axe/4.8/aria-text?application=playwright&lang=en)

4. Make \<aside\> a direct child of the body (also: check out support for \<aside\>)

5. Remove max height on accordions (and check against 1.4.12)

6. Missing breadcrumb in mobile view

7. Max 2 lines of centered text

8. Check SR issues with \<br\> tags

9. On pages with Breadcrumbs focus goes to Breadcrumb not to the Skip Link



## Best practices:

1. Add Dark mode

2. Add SITE MAP

3. Add BUG REPORT button in Footer

4. Add BACK TO TOP button for all screen sizes

5. Remove as many accordions as possible


## Features to add

1. LIKE icon

2. Contact form

3. Smooth scrolling

## Improve code

1. Replace \<div\> with \<pre\> for code examples


## Content to add

### Accessibility 101 series:

- Legal aspect of inaccessibility
- Intro to WCAG
- Testing for A11y
- Your users
- Automating a11y tests with Playwright

### Your portfolio site series:

- Accessible contact form
- Pixels or rem
- Size of clickable area

### Accessible components

- Add more examples!!!
