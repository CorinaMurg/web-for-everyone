# Web for Everyone

The goal of this project is to introduce accessibility to junior developers.
As soon as they know how to create a button or a link, they need to think about accessibility.

Please note that this is not a finished product, and certain accessibility aspects are still in development.

Aceessibility goals: WCAG 2.2 AA

## To fix

1. Nav toggle (screen reader announces the entire content of mobile menu, and then again with each tab)

1.1 Bug report on GitHub

1.2 anchor from TOC to section heading

2. Add role=text to article h1 spans
   https://dequeuniversity.com/rules/axe/4.8/aria-text?application=playwright&lang=en

3. Make aside a direct child of the body

4. Remove as many accordions as possible

5. Remove max height on accordions (and check against 1.4.12)

6. Add breadcrumb to mobile

7. Max 2 lines of centered text

8. Remove all <br>???

9. On pages with Breadcrumbs focus goes to Breadcrumb not Skip Link

10. Check out support for <aside>

## Features to add:

1. Dark mode

2. SITE MAP

3. BUG REPORT
   button in Footer

4. BACK TO TOP
   button for all screen sizes

5. LIKE icon

## Imporve code

1. Replace <div> with <pre> for code

## Content to add

### Accessibility 101 series:

- Legal aspect of inaccessibility
- Intro to WCAG
- Testing for A11y
- Your users

### Your portfolio site series:

- Accessible contact form
- Pixels or rem
- Size of clickable area

### Accessible components

- add more examples
