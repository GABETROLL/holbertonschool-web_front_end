# Devtools
In this folder, we'll be learning how to use the Chrome DevTools!

Using this site: https://dev-tools.hbtn.info/
And the [FireFox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/)

Each exercise's answer may be stored in a file starting with the same number.

0. Emulate IPhone X
1. Changing the background color of the ``body`` tag
    Press the ``body`` tag in the HTML, then go down to its CSS and change the value in ``background-color: #HERE;``
2. Force the cake button ``:hover`` to turn on
    https://developer.chrome.com/blog/triggering-of-pseudo-classes/
3. The CSS for the button
    https://developer.chrome.com/docs/devtools/css/
4. Change button styles in the DevTools
    https://developer.chrome.com/docs/devtools/css/
5. Remove cake button
    https://dirask.com/posts/Google-Chrome-how-to-remove-html-element-in-chrome-dev-tools-pJ690p
    (no need to do the first few steps, just right-click on the cake)
6. Right-Click>Inspect the *ABOUT* ``h2``, and go to the ``Computed`` pane. Where is the ``margin-bottom`` style of the "About" header defined?
    Just click on the arrow left of the property. *(It apparently gave me the right answer, but I'm not sure if this is a reliable way to do it. I could find any documentation on this. My apologies)*
7. How many click event listeners are referenced in JavaScript files?
    https://umaar.com/dev-tips/24-view-event-listeners/
    *(Remember to check the ``Framework listeners`` box to see all 9, otherwise you'd probably see 1!)*
8. What is the HSL format of the *Send!* button's ``background-color``?
    https://developer.chrome.com/docs/devtools/css/color/
    (scroll down to "Convert colors")
    *(BUT MAKE SURE YOU ROUND IT FIRST)*
9. What is the ``max-width`` of the first ``div`` with class ``container`` in the section with the "ABOUT" ``h2``?
    https://developer.chrome.com/docs/devtools/css/
10. Swap the "About" and "Portfolio" ``section``s
    I just dragged the "About" ``section`` tag in the inspect tab over the "Portfolio" ``section`` tag.
11. How many bytes does ``freelancer.css`` cover?
12. Emulate the print version of the website. Take a screenshot of it.
    https://stackoverflow.com/questions/9540990/using-chromes-element-inspector-in-print-preview-mode
13. Select the Avatar image in the header and type $0 in the console. Enter. What does it return?
    https://developer.chrome.com/docs/devtools/console/utilities/#recent-many
14. Type ``console.log(document.title)`` in the DevTools console. What does it "print"?
15. Guess which JS framework this site uses.

    A. React JS
    B. Material Design
    C. Bootstrap
    D. Angular JS

    I guessed Bootstrap because of the file names, which contained it a lot.
16. What is the total weight of the page (with all the elements)? Take a screenshot of it
17. What is the number of requests the browser does when loading the page? Take a screenshot of it.
    https://developer.chrome.com/docs/devtools/network/
18. What is the number of CSS files being loaded by the browser in the page?
    https://developer.chrome.com/docs/devtools/sources/
    (This is where I got the right answer, but I saw a different number of CSS files being loaded in the ``Network`` tab)
19. What is the number of images loaded by the browser in the page?
    https://developer.chrome.com/docs/devtools/sources/
    (I just used the same method as last exercise)
20. What is the ``type`` value of the site's favicon?
    https://developer.chrome.com/docs/devtools/dom/
    (I just went to the favicon ``link`` element, in ``head``, and found the value)
21. The site uses a *font library* for their icons, which one is it?
22. What is the name of the resource that generates 1 XHR call?
    https://www.codexworld.com/how-to/monitor-ajax-requests-google-chrome/
23. What is the notation for ``Performance`` (for desktop mode and no throttling - also called Lighthouse)?
24. Also in Lighthouse, How many static assets need a better cache policy?
25. Still in Lighthouse, what is the contrast issue?
    Write only the letter of the answer in the file starting with ``25``:

    A. Image elements do not have [alt] attributes
    B. Links do not have a discernible name
    C. Background and foreground colors do not have a sufficient contrast ratio.
26. Which classes are on the images that have no alt attribute?
    https://devtoolstips.org/tips/en/find-all-images-without-alt-text/
    https://developer.chrome.com/docs/devtools/dom/
27. Which attribute is missing on all the links with the target ``_blank``?
29. Create a new snippet called ``allcolors.js``. Copy-paste the code from [here](https://github.com/bgrins/devtools-snippets/blob/master/snippets/allcolors/allcolors.js). Run the code. Take a screenshot of the result in your console.
    https://developer.chrome.com/docs/devtools/javascript/snippets/
    https://developer.chrome.com/docs/devtools/javascript/snippets/#open
30. Block all CSS requests. Take a screenshot of it.
    https://developer.chrome.com/docs/devtools/network/#block
31. In the ``application`` panel, what is the only key present in the session storage for this page?
    https://developer.chrome.com/docs/devtools/storage/sessionstorage/
    https://www.freecodecamp.org/news/how-web-storage-works/
32. Does this page have any service workers? ``Yes`` or ``No``?
33. Which organization issued the SSL certificate for this site?
    https://developer.chrome.com/docs/devtools/security/
34. When does the SSL certificate for this site expire? Take a screenshot of it.
