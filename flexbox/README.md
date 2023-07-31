# Learning CSS With Flexbox

There are two files: ``index.html`` and ``styles.css``.
Each exercise updates these files, and creates a new version of them.
The number at the start of the name of each file (``#-``) represents its version.

## Exercises
0. <strong>Start working with</strong> ``index.html``. Make the ``row`` class have ``display: flex``, remove the ``row::after`` selector and remove the ``float: left`` inside ``[class*='col-']``
1. Add classes to each of the sections in ``1-index.html``
2. Add ``flex-direction: row-reverse`` to the ``row`` class inside the ``section-latest-news`` class
3. Join the two ``ul``'s in the services ``section`` into one, then add ``flex-wrap: wrap`` to ``.services-section .row``
4. Change the widths of some rows and columns to use the ``rem`` unit
5. Wrap the HTML ``header``'s contents in a div with the class ``header-container``. In CSS, make the ``header-container`` have ``display: flex; justify-content: space-around``, remove the ``header-logo`` and ``navbar-menu`` rules, and remove the ``--header-logo...`` variables
6. Cut the ``margin`` declaration from ``.nav .nav-item`` and place it in a new selector: ``.nav .nav-item + .nav-item`` (immediate ``nav-item`` siblings inside ``nav``). Also change the ``nav-item`` margin from ``0 2rem 0 0`` to ``0 0 0 2rem``
7. Vertically enter the header logo, by adding ``align-items: center`` to ``.header-container`` in CSS
8. Use ``flex`` instead of ``padding`` in the hero section
9. Center all of the columns inside the ``section-about-us``
10. Start using a new HTML file: ``article.html``. Make a new class selector ``hero-homepage``, move everything in ``section-hero`` to it, and change and add some things in the other ``section-`` seletors
11. In Add nice background and adjust some sizes (I don't know how those adjustments work)
12. Add ``ul`` article before Hero section
13. Style lists inside the ``ul`` to have commas in between, have proper fonts, have border separators and proper margins and paddings
