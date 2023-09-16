In this blog, I choose Regina, one of 3 personas from my Holberton assignment, to create a better UX experience for her, and to learn more about UX.

[Regina's Persona](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/misc/2020/2/c7786afc216b3a98a651.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230912%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230912T190044Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=2da63b72e0f996c73ca5b1ecac423098d31a59c3f1b30d846a30282b28cc891c)
[Regina's User Journey Map](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/misc/2020/2/accd845a3edce3f3f311.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230912%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230912T190059Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ca6798041403175929ddc3a23a401d1e85ad3375b7ea950027d88952a7aab478)

I chose Regina because she seemed very different from me. I wanted to try and have a break from myself, and try and see things from a different point of view, so that I can be a more un-biased designer.

## Introduction
This is my first UX project, and the point of this blog post is for me to learn, so if you have any constructive feedback, I'd love to hear it!

Also, I want to appologize, because I've never used Spotify, and I didn't decided not to even try to use the interface. Most of the ideas I made, I made before I even searched for a song online. So, let me know all of the inaccuracies I made in this project.

## Ideas
- Sort the songs automatically?
    No, because Regina may want to sort by date, genre, year, etc.

### My first approach would be to have an option for everything

"Your Library" would have a search bar for everything, each folder would have a search bar for each playlist, each playlist would have a search bar for each song.

The same would be true for playing them, and sorting-by.

Each set of options would popup when collapsing a folder, playlist, song, etc..., And would let you search for and play anything below its hierarchy.

<img src="idea0.jpg">

### Just make te searchbars be able to yield results for ANYTHING in its category.
After trully inspecting the Spotify GUI, I realized that you already can find particular songs inside of a separate search bar for a playlist, **But you can't find a song through the main "Your Library" searchbar.**

I think that having the "Your Library" searchbar look for EVERYTHING in "Your Library" is better **when you don't know where to look for things.** For example: searching in a folder should yield results for all of the playlists there, and all the songs there, in any of those playlists, as well.

Then, I'd have every sub-searchbar that may appear in the app do the same, for maximum coverage.

The search results should CLEARLY AND BOLDLY be labeled as a playlist, folder, genre, album, etc...

<img src="idea1.jpg">

(I had refused to trully use Spotify yet, so I didn't know that the playlists would become big in the main panel, and their own searchbars would be there, but I discovered that the searchbar in ``Your Library`` was **still incapable of searching for ANY SONG, and not just playlists**)

### Organizing Regina's Library
To **organize her library by groups** and have those groups be **patterns**:

I'd simply have a feature that creates a new folders to organize her already existing songs (like a "soft link" folder to existing songs in her library). You could have different folders dedicated to different ways of orginazing them, too. And to go above and beyond, have the option to manually make some changes before "saving" them, or sticking to the current ones. It should also allow Regina to manually edit the mistakes the algorhtims may make.

Or simply add a ``sort by genre`` option when playing songs. However, this doesn't let Regina have a permanent, organized library, like she wanted.

<img src="idea2.jpg">

Automatically generate and organize folders with different genres, dates, etc... **This should only be a search result, and not stored permanently**

Finally, to me, It just seems more reasonable to me if she just clicks on the ``+`` in the ``Your Library`` tab, make a new playlist, then add songs to it using a PUBLIC search bar, and a PRIVATE search bar, for her already added music. This wouldn't be so hard to implement, but for the best UX experience, would need better guidance with the icons, and again, knowing where to find things.

<img src="idea3.jpg">
(By the time I drew this sketch, I had ACTUALLY used the interface a bit more)

### Position and label search widgets to make their purpose clear
I'd move the ``Home Search`` div to be above the whole screen and make it bigger. Also, make the left side panel a bit bigger by default.

<img src="idea4.jpg">

I'd then turn the little search button inside the ``Your Library`` into a visible searchbar, make it a bit bigger, and display a ``Search in Your Library`` placeholder, to make it more clear which search query goes where.

<img src="idea5.jpg">

I'd add placeholders / labels for ALL the search bars, or make them go in clearly seperated sections that are somewhat clearly separated, or are farther appart from eachother.

<img src="idea6.jpg">

Change the color of the divs to match their purpose: the header and public Spotify search results should have the same background color A, and the ``Your Library`` ``div`` and private search results should have matcing background color B.

Make the playlist and song search results "come out" from ``Your Library`` when the results are in ``Your Library``, and search results "come out" from the top navbar when they are public search results

### Add folders, playlists and songs to Your Library directly from the song's interface
There should be a ``+`` button to add a song being played from public results, that can search through places in ``Your Library`` to place the song in.

<img src="idea7.jpg">

## Final Ideas I've chosen

I've finally decided to
- move the ``Home Search Online`` panel to be a header, **to make it easier for Regina to know that that searchbar is public, and not private**
- Add placeholders that say where each searchbar is searching, **to give Regina more of a clue to where she's searching**
- Make the library searchbar bigger and always visible, so that the placeholder can show up, **and show its purpose, that way Regina doesn't get confused where the input is going**
- Make all of the searchbars search for ANYTHING where they're searching (folder, playlist, song, and maybe more), **So that Regina can find what she's looking for**
- Add ``Your Feed``, or something similar, at the top of the feed, **to indicate its purpose**
- Add ``Sort by`` option to **play** music
- Add sorting by genre and year, if not present, since **Regina felt frustrated about that in her user chart**
- Add an ``Add to Your Library...`` button on a song result in Soptify's public search results, and not just in the playlist, **to make it easier for her to add it**
- Add two ways to add a song in a library: search for songs online, or use songs already in ``Your Library`` (**I just realized that this may make copies of songs, making them repeat while playing them, which may be annoying. This
change may be removed in the prototype.**)

### Mockups
<img src="chosen_idea_1.jpg">
How the initial state of the app is when you first open it
<img src="chosen_idea_3.jpg">
At the left, the search results in ``Your Library`` display anything inside of ``Your Library`` with that same name, same for the playlist at the right (This was meant to be a __zoomed in__ mockup of the app, don't panick)

**The playlist pops out of the ``Your Library`` panel, and should __seem__ connected to it**
<ing src="chosen_idea_0.jpg">
Sort by genre is an option in both search results in ``Your Library`` and in playlists

(The sorting method should affect both the playlist and the playist's search results. IT SHOULD NOT BE PERMANENTLY CHANGING THE ORDER THAT THEY'RE STORED IN)
<img src="chosen_idea_2.jpg">
The ``+`` button should expand the two search queries at the right.
