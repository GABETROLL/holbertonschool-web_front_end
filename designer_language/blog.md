This Blog is a project divided into 3 sub-projects: **Research**, where we empathize with the user, and make ideas to better the user's UX experience, **Prototype**, where we make a Figma prototype that illustrates our final idea, and **Usability Study**, where we present our project to 5 people, and let them test what we did, and gather their feedback.

## Note
This is my first UX project, and the point of this blog post is for me to learn, so if you have any constructive feedback, I'd love to hear it!

Also, I want to appologize, because I constantly skipped learning/informing myself/preparing things in previous steps, which resulted in the next steps being half-baked.

I've never used Spotify, and at first, I almost didn't use the interface. Most of the ideas I made, I made before I even searched for a song online!

I ended up refining some things later, for the final 3-1 idea, but I rushed through the big majority of the project, and therefore there's probably still lots I don't know. I also had a lot better ideas after, that I didn't include.

So, let me know all of the inaccuracies I made in this project, your feedback on my ideas, and what I could improve. I'd love to hear about them. God bless you.

## Research
### Chosen Persona
#### Regina's Persona
<img src="Regina_persona.jpg">

Regina studied to be an Opera Singer. After that, she realized that she wouldn't make a living out of it. Since she liked road-trips, she reinvented herself by driving cargo trucks cross country, while listening to music and endlessly singing her heart out.

Regina is not so comfortable with new technologies, but her grandson introduced her to Spotify, since he thought it would be a better idea that her switching CD's all day long.

##### Her UX goals
(What she's trying to achieve)
- finding songs more easily in her library
- organize her library by groups
- efficiently find songs added to her library when she has something specific in mind

##### Her UX needs
(What will help achieve her goals)
- Get quality over quantity in her search
- Sort or group her songs by patterns
- Accompainment with the search

##### Her UX wants
(What will make achieveing her UX goals easier)
- Build up a permanent library of saved songs like the one she has in real life
- Intuitive ways to filter her library
- Control her classification

##### Her UX fears
(Regina's worst-case UX scenarios)
- Not knowing where to initiate her search
since there are many entry points in the
app
- Scroll her entire library to find this one
particular song
- Listen to the same content at the top of her
library
- Have to build playlist that she will have to
maintain overtime
- Shuffle her entire library and end up with
classical mixed with soul music

#### Regina's User Journey Map
<img src="Regina_user_journey_map.jpg">

Regina wanted to find her favorite music, so she first went into her ``Liked Songs`` in the ``Your Library`` section and scrolled endlessly, making her feel annoyed.

Then, seached for it in the top searchbar, but then she relized that that searchbar isn't searching in __her__ music. So, she re-typed it in the correct one, and played it.

After that music finished playing, another song of a completely different genre started playing. Regina hates it when the genres switch.

#### Why did I choose Regina?

I chose Regina because she didn't seem too comfortable with new technologies, and I simpathize with her for that. I also chose her because she seemed very different from me, and that could help me both simpathize and be an un-biased UX designer at the same time. I also chose her because of her age, since I'd love to design easier and more intuitive GUI's for her, my grandparents, and for people like me, who don't know what we're doing all of the time, and can't pick up the skills for using a GUI right away.

### Opportunities for Improving the UI
The biggest opportunities for improvement that I saw, after doing the sketches and protypes, are:
- to make the purpose of the widgets in the app be more clear
- to make adding new songs easier, as little operations as possible
- to make finding a song in ``Your Library`` easier
- making the size of widgets bigger
- unhiding important widgets
- making building, playing and searching in ``Your Library`` much easier, since the current Spotify makes it difficult.
- Making the GUI simpler
- Making the organization of the songs and ``Your Library`` simpler, easier, intuitive and more reliable

### Ideas
- Sort the songs automatically?
    No, because Regina may want to sort by date, genre, year, etc.

#### My first approach would be to have an option for everything

"Your Library" would have a search bar for everything, each folder would have a search bar for each playlist, each playlist would have a search bar for each song.

The same would be true for playing them, and sorting-by.

Each set of options would popup when collapsing a folder, playlist, song, etc..., And would let you search for and play anything below its hierarchy.

<img src="idea0.jpg">

#### Just make the searchbars be able to yield results for ANYTHING in its category.
After trully inspecting the Spotify GUI, I realized that you already can find particular songs inside of a separate search bar for a playlist, **But you can't find a song through the main "Your Library" searchbar.**

I think that having the "Your Library" searchbar look for EVERYTHING in "Your Library" is better, **when you don't know where to look for things.** For example: searching in a folder should yield results for all of the playlists there, and all the songs there, in any of those playlists, as well.

Then, I'd have every sub-searchbar that may appear in the app do the same, for maximum coverage.

The search results should CLEARLY AND BOLDLY be labeled as a playlist, folder, genre, album, etc...

<img src="idea1.jpg">

(I had refused to trully use Spotify yet, so I didn't know that the playlists would become big in the main panel, and their own searchbars would be there, but I discovered that the searchbar in ``Your Library`` was **still incapable of searching for ANY SONG, and not just playlists**)

#### Organizing Regina's Library
To **organize her library by groups** and have those groups be **patterns**:

I'd simply have a feature that creates a new folders to organize her already existing songs (like a "soft link" folder to existing songs in her library). You could have different folders dedicated to different ways of orginazing them, too. And to go above and beyond, have the option to manually make some changes before "saving" them, or sticking to the current ones. It should also allow Regina to manually edit the mistakes the algorhtims may make.

Or simply add a ``sort by genre`` option when playing songs. However, this doesn't let Regina have a permanent, organized library, like she wanted.

<img src="idea2.jpg">

Automatically generate and organize folders with different genres, dates, etc... **This should only be a search result, and not stored permanently**

Adding an option to create a new group (or playlist or folder). Then adding an option to save music from online into ``Your Library``, and having the app make Regina choose where. (I think adding a new playlist or new folder in ``Your Library`` could do the same)

(By this time, I had used the interface a bit more)

#### Position and label search widgets to make their purpose clear
I'd move the ``Home Search`` div to be above the whole screen and make it bigger. Also, make the left side panel a bit bigger by default.

<img src="idea4.jpg">

I'd then turn the little search button inside the ``Your Library`` into a visible searchbar, make it a bit bigger, and display a ``Search in Your Library`` placeholder, to make it more clear which search query goes where.

<img src="idea5.jpg">

I'd add placeholders / labels for ALL the search bars, or make them go in clearly seperated sections that are somewhat clearly separated, or are farther appart from eachother.

<img src="idea6.jpg">

Change the color of the divs to match their purpose: the header and public Spotify search results should have the same background color A, and the ``Your Library`` ``div`` and private search results should have matcing background color B.

Make the playlist and song search results "come out" from ``Your Library`` when the results are in ``Your Library``, and search results "come out" from the top navbar when they are public search results

#### Add folders, playlists and songs to Your Library directly from the song's interface
There should be a ``+`` button to add a song being played from public results, that can search through places in ``Your Library`` to place the song in.

<img src="idea7.jpg">

### Final 3-in-1 Solution

After reviewing my work a bit more, and tweaking and considering my final solution, I've decided:

#### Specify more what each widget does
- move the ``Home Search Online`` panel to be a header, **to make it easier for Regina to know that that searchbar is public, and not private**
- Make all of the searchbars have intuitive placeholders that say where each searchbar is searching, **to give Regina more of a clue to where she's searching**
- Make the library searchbar bigger and always visible, so that the placeholder can show up, **and show its purpose, that way Regina doesn't get confused where the input is going**
- Add ``Your Feed``, or something similar, at the top of the feed, **to indicate its purpose**

#### Add more ways to find and organize search results, in search results or Playlists
- Make all of the searchbars search for ANYTHING where they're searching (folder, playlist, song, and maybe more), **So that Regina can find what she's looking for**
- Add ``Sort by`` option to **play AND search for** music in a playlist
- Add ``Genre`` and ``Year`` as ``Sort by`` options, since **Regina felt frustrated about that in her user chart**.

#### Add 2 more options to add songs to Your Library
- Un-hide the ``Add to Your Library...`` and ``Add to playlist..`` popups on public playlist and song results, **to make it easier for her to add it**. Having the ``...`` buttons only show up when the mouse is hovering the song makes it much harder to know how to add the song to ``Your Library``.

- Add two ways to add a song in a library: search for songs online, or use songs already in ``Your Library`` (The songs would be added as a "link" to a song. This would allow results to not repeat when being searched, while still maintaining copies of songs in multiple playlists/folders when necessary)

#### Mockups
<img src="chosen_idea_1.jpg">
How the initial state of the app is when you first open it. You can see the ``Home Search`` panel is now the header, ``Your Feed`` is at the top of your feed, and the ``Your Library`` search options have been clearly labeled.
<img src="chosen_idea_3.jpg">
How the app should function when the user types something in the ``Your Library`` searchbar, coming from the previous mockup.

At the left, the search results in ``Your Library`` display anything inside of ``Your Library`` with a similar name.

The user would have also clicked on the searchbar for the playlist at the right, which would have the same effect there.

**The playlist pops out of the ``Your Library`` panel, and should __seem__ connected to it**
<ing src="chosen_idea_0.jpg">
``Sort by`` ``Genre`` and ``Year`` an option in both search results in ``Your Library`` and in playlist.

(The sorting method should affect both the playlist and the playist's search results. IT SHOULD NOT BE PERMANENTLY CHANGING THE ORDER THAT THEY'RE STORED IN)

I'm not sure if sorting by Genre is always possible, but I think it could work if it were a new data piece that all songs could carry. The purpose of this project was to give the customer a better experience in theory, regardless of how feasable the changes are.

<img src="chosen_idea_4.jpg">
<img src="chosen_idea_5.jpg">
(The first image is the top result of a song online, and the second is a playlist online, and you can get to these by searching for them online through the searchbar, through the feed, or maybe another searching method that I don't know about)

Anything that could be added to ``Your Library`` found online should have a VISIBLE button called ``Add to Your Library...``, that spawns a pop-up or extends a menu that gives Regina the option to save it somewhere.

As it would later turn out, Spotify HAS that option, hidden inside a ``...`` popup button, which only shows up when the mouse hovers the song, but that's very unclear. Poor Regina!

### Why did I choose these ones over the other ones?
I thought they would give more control, express purpose clearly, and allow Regina to find and add songs to her library in less steps.

Some other solutions I made had less control or were a bit overwhelming. Although this final solution is also a bit overwhelming.

The idea for automatically sorting her library was too easy for the algorithms to mess up. And sorting the songs automatically without any option how would be beyond frustrating.

It definitely doesn't solve the app being very overwhelming, having too many things on screen, and making the process of building/organizing ``Your Library`` easier. In fact, in the real interface, there's a lot more hidden options that I didn't find, since I wasn't looking for them, like the radio or the queue.

### Regina's Feedback
"I'm glad that there's now an option to add music from Online directly to My Library! I also appreciate that the searchbars have been labeled, and I'm glad that there's now more ways to sort the playlists. But I still think there are too many things on screen, and organizing and building my library is still as tough as ever! I prefer this version, since it's more practical, but it's still hard to understand."

## Prototype
Here's the [Figma prototype](https://www.figma.com/file/qAa7DvyAHcFIZXxjQvdMpx/Spotify-(Copy)?type=design&node-id=615%3A141&mode=design&t=deZIyV7Zcdr3WKVv-1).

## Usability Study
In this last part, I must get 5 or more people to use my Figma prototype, and see their reactions to know if my prototype was successful.

My prototype doesn't actually contain any functionality for playing, storing playlists, sorting or searching, and it's just a hollow mockup. This is because I didn't work that hard, or because some of those things were too hard to implement.

Keep in mind that I typed these results after our interviews finished, and my memory was very foggy, since I kept telling them the answers, even though I shouldn't have, and had to try to guess how they were doing before I told them.

### My Peers' Reactions
#### Guillermo #0's Results
Guillermo is one of my peers from Holberton, SJ, Puerto Rico, and is in Cohort 21.

##### What he understood
He understood where to search for something in ``Your Library``, how to add a song to ``Your Library``, how to add a song to a personal playlist, and how to sort.

##### Grey area
After trying to search in ``Your Library``, he started to click on the online searchbar, and that's when I told him the ``Your Library`` choice was correct.

Once he tried to add a song to a playlist, I asked him if it would be easier to add the song this way, and he hesitated to say yes.

He was surprised that none of the buttons led anywhere. He also saw the blue flashes that Figma uses to indicate where the user can click, and was surprised, and I explained to him what those are for.

##### What he didn't understand
He also didn't understand the ``Search Online`` example searches functionality, which I showed to him later.
He tried to scroll down in the ``Sort by`` menu, which was clipped by the bottom of the screen.
He also got a bit confused at the end of our session.

**He understood about half of the interface tasks I presented him with.** His biggest missunderstanding was **where** things belong. He seemed surprised/disappointed that the buttons don't go anywhere, and you can't play music.

He eventually completed the tasks I gave him, as far as my mockup allows, but some tasks took 2 or 3 tries. When I asked him how he thought the missing functionalities would work, he responded correctly. He also said that the missing functionality options **would** work okay, but seemed hesitant about it. He also just told me that he didn't know what he was doing when I brought him in, so he was hesitant, because he didn't know what to do (I think I should have done a better job at communicating before the test). He went for the wrong searchbar, and tried to scroll down the ``Sort by`` dropdown menu of a playlist. He also went to click a lot of options that don't have any functionality, and pointed that out.

#### Guillermo #1's Results
Guillermo is one of my peers in Holberton SJ, Puerto Rico, and is in Cohort **20**.

##### What he understood
He understood almost nothing at first.
##### What my prototype lacked
- He attempted to play the songs.
- The add options didn't lead anywhere.
- The ``Search Online`` button options. He attempted to type the searches instead.

##### What he didn't understand
- He went for the ``Search Online`` button, instead of the one in ``Your Library``.
- Where to add a new song to a playlist. He went for the add button in ``Your Library`` instead, then corrected his mistake when I told him the instruction again.
- Using the ``Sort by`` in ``Your Library``. He went for the playlist instead.
- There was a layering bug with the playlists in ``Your Library`` and the ``Your Library`` ``Sort by`` dropdown, which he noticed.

**He almost didn't understand the prototype.** To me, it seemed as if there were several widgets that could be confused with eachother, like the searchbars and adding songs.

He was able to complete the tasks I gave him, with an average of about 2-3 tries. He said the dropdown options felt natural, but noticed a lot of room for improving the design. He also said that he colors respect the color pallete of Spotify, and that the drop-down ``Sort by`` options fit in well with the real Spotify. He also said that I have to use the Spotify app as a reference for my prototype, and that most of my widgets were slightly missaligned from the actual app. He kept clicking on things to explore, even though some of them didn't lead anywhere, and I constantly told him so. He was also much more focused on talking about a lot of suggestions and ideas about UX design, since he actually is very passionate about it, instead of trying the prototype as a consumer.

**After that, I fixed the layering bug.**

#### Rafael's Result
Rafael is my peer at Holberton, San Juan, Puerto Rico, and is in Cohort 19, just like me.

##### What he understood
- How to sort a playlist
- How to make a new playlist in ``Your Library``
- How to play a playlist
- How to add a song to a playlist in ``Your Library``
- How to make
- How to search online
##### What he didn't understand
- How to search for a playlist in ``Your Library``. He went for the top searchbar instead, the one that searches online.

**At the end, he understood most of the interface, but didn't understand how to search, since there are too many searchbars.**
He hesitated a bit before each click, but seemed somewhat confident a few fractions of a second or two later.

He completed all/almost all of the tasks I gave him first try, except for the searchbars, because he confused where each one searches. He said he felt all of the app was good, except the searchbars, which are confusing. are too many search bars for different things. Tipically, Rafael just goes for the search icon, without reading the text. He also mentioned that in his Spotify app in his phone, searching online or in ``Your Library`` is always available at the top. He also mentioned the widgets are too crammed into their boxes, too close to their boxes' edges, too big and need more space to breathe.

#### Michael's Results
Michael just recently joined Holberton, SJ, Puerto Rico, and is in Cohort 22.

##### What he didn't understand
He took a long time to find the ``Your Library`` searchbar, but he had opened ``+ to You Library...``, then clicked on ``Search online...``. Eventually, he clicked one of the displayed playlists instead. Once I asked him to add something to ``Your Library``, he didn't remember where to, and searched everywhere, before I finally broke it to him.
When I asked him to sort the headers in ``Your Library``, his first response was to go for the one in the playlist.
When I asked him to add a public playlist result to ``Your Library``, he clicked on adding a song in that playlist instead, then I corrected him.
##### Grey area
He had already opened the ``Search Online`` widget, so when I told him to do that next, he already knew what to do.
##### What he understood
He knew how to go back to the feed, but hesitated and said "Home?" before pushing the ``Home`` button. He found the way to add a public song result to ``Your Library``.

**He got confused more than half of the time. At first, he would confuse all of the different widgets, but then, began making progress.** I'm sorry, but I influenced him to understand the interface more, and I shouldn't have, and since I told him the correct answer after he had gotten it wrong everal times, I believe he became better at finding things out. He also confused the similar widgets for different sections a bit.

After a lot of attempts in the first tasks, and very few attempts in later tasks, he was able to complete all of them, as far as the mockup allows. He feels that this was a really good recreation of Spotify, that the ``Sort by`` options for the playlists would be very good, but that ``Sort by Artist`` may be a 50/50, that ``Sort by Genre and Year`` would be a good addition, that the mockup's colors respect Spotify's color pallette, but could have some color other than grey. I believe he had agreed that the many options are confusing.
#### ???

## Conclusion
