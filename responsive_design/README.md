# Me Learning Responsive Design
``1``: Make banner background have ``background-position: 65% 8rem`` and ``backgorund-size: 90rem auto``, and make ``.section-hero .section-inner`` have ``min-height: 35vh``

``2``: Replace ``width`` with ``max-width`` in the ``.container`` selector

``2-1``: Use ``@media`` queries to make the navbar disappear, make list's directions be vertical, etc., when the browser screen is ``767px`` or less.

``3``: Use multiple sizes of some images from [this webpage](https://www.responsivebreakpoints.com/), so that smaller images load in smaller browser windows

``4``: For mobile, we must add a toggle button for the navbar, that makes it visible. We're using a checkbox ``input``, since it has a binary state that could be used for the ``navbar``'s display. For now, we'll make the ``navbar``'s ``display`` be ``none``, and prepare its ``flex-direction`` to be column, to more easily fit it in the mobile screen.

``5``: Turn the label for the checkbox into a __hamburger button__

``6``: Make the ``navbar-menu`` disappear/appear when the __hamburger button__ is pressed, and make the __hamburger button__ turn into an __X__ when the ``navbar-menu`` is visible. Make the hamburger button disappear when the screen is wider than ``767px``.
``7``: Use ``html``'s ``font-size`` property to make ALL of the font-sizes fit nicely in differently-sized browser windows
``8``: Make all of the ``card-work``'s have their title always visible and right below their ``.card-outer``, but only in mobile. (search for ``/* Card WORK``)
``9``: Change the ``.footer`` padding and space its nav items when in mobile
