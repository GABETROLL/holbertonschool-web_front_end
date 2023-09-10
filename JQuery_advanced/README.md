# JQuery
## Exercises
``0``: Check if JQuery loaded properly
``1``: Using ``.append``, append a ``p`` to the ``body``
``2``: ``append`` a ``table`` of first names and last names to the ``body``
``3``: ``append`` data to the ``table``, without using any variables
``4``: Replace the contents of the ``tbody`` using ``.html``
``5``: Add a remove button for rows of the ``table``, BEFORE the table, using ``.before``
``6``: Add ``input``s that add new members to the ``table``
``7``: Make a very tiny Google clone: Add a text entry and a ``Submit`` button that when activated, makes a ``GET`` REST API request to ``https://en.wikipedia.org/w/api.php`` that gives results to the query inside the text entry, and displays the results in a ``ul`` below.
``8``: Add ``li``s with page numbers that take you to different results, and add ``offset`` paramenters to the previous functions to tell the wikimedia API which page we're searching in
``9``: Display the list of results opaque when waiting for the ``GET`` request's response
``10``:
Make your own NODEJS server using ``json-server --watch db.json`` in the terminal
(to install ``json-server``, run ``npm install json-server`` in the terminal).

Your server should be running in your machine, at ``http://localhost:3000``.

In ``10-index.html`` (client), make a ``GET`` request to the server's ``/port`` URL and display all of the posts in the ``body``
``11``: Add a form to the beggining of the page, and make the browser submit the post to the ``http://localhost:3000/posts`` server
``12``: Add ``(delete)`` buttons at the left of each post, that send a ``DELETE`` request to the ``http://localhost:3000/...`` server, and delete the post ``p`` if the request was successful
