# Accessibility
## Exercises
``00-*``: starter files

``keyboard/01-*``: Make the "cards" ``a`` appear when focused with the ``Tab`` key

``skip-links/02-*``: Make Skip links, and make them pop out of the top-left corner when focused with the ``Tab`` key

``fix-a11y/``:
- Remove the CSS ``style`` to make the text colors contrast more with the background, to make it easier to see
- Add the page's ``title``
- Add ``lang="en"`` to the ``html`` tag
- Add ``alt`` for logo, and empty ``alt`` for decorative image
- Add a ``label`` for the email ``input``, change the ``input``'s ``type`` to ``email``, add ``aria-required="true"`` to it, change the ``a`` that contains ``Validate`` to a ``button`` and remove the ``placeholder`` from the ``input``
- Add an ``aria-label`` for the social media icons at the bottom, so that the [https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn](Google Chrome Screen Reader) extension reads ``Facebook. Internal link.`` and not ``Internal link.``
- Enable zooming in the page (to comply with WCAG 2.1 AA)
- Make ``h#`` levels progress one-by-one. Visualize and fix heading levels with [HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=en)
