In this blog, I choose Regina, one of 3 personas from my Holberton assignment, to create a better UX experience for her, and to learn more about UX.

[Regina's Persona](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/misc/2020/2/c7786afc216b3a98a651.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230912%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230912T190044Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=2da63b72e0f996c73ca5b1ecac423098d31a59c3f1b30d846a30282b28cc891c)
[Regina's User Journey Map](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/misc/2020/2/accd845a3edce3f3f311.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230912%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230912T190059Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ca6798041403175929ddc3a23a401d1e85ad3375b7ea950027d88952a7aab478)

I chose Regina because she seemed very different from me. I wanted to try and have a break from myself, and try and see things from a different point of view, so that I can be a more un-biased designer.

After looking through her profile, she seems like a very fun person that I would simpathize with very much, like the part where her profile says that she "likes to sing her heart off" in the trucks she's driving. I believe this could help me do a better job.

## Ideas
Before I start, I'd like to clarify that I know that implementing some features that I mentioned here may be difficult to implement, even if they're simple, and in real-life, I'd find a way to satisfy both engineers and the user, but for the sake of pleasing Regina, I'll spit any idea that sounds good at first, in order to brainstorm, then pick what seems best.

- Sort the songs automatically?
    No, because Regina may want to sort by date, genre, year, etc.

### My first approach would be to have an option for everything

"Your Library" would have a search bar for everything, each folder would have a search bar for each playlist, each playlist would have a search bar for each song.

The same would be true for playing them, and sorting-by.

Each set of options would popup when collapsing a folder, playlist, song, etc..., And would let you search for and play anything below its hierarchy.

**IMAGE HERE**

### Just make te searchbars be able to yield results for ANYTHING in its category.
After trully inspecting the Spotify GUI, I realized that you already can find particular songs inside of a separate search bar for a playlist, **But you can't find a song through the main "Your Library" searchbar.**

I think that having the "Your Library" searchbar look for EVERYTHING in "Your Library" is better **when you don't know where to look for things.** For example: searching in a folder should yield results for all of the playlists there, and all the songs there, in any of those playlists, as well.

Then, I'd have every sub-searchbar that may appear in the app do the same, for maximum coverage.

The search results should CLEARLY AND BOLDLY be labeled as a playlist, folder, genre, album, etc...

### Organizing Regina's Library
To **organize her library by groups** and have those groups be **patterns**:

- I'd simply have a feature that creates a new folders to organize her already existing songs (like a "soft link" folder to existing songs in her library). You could have different folders dedicated to different ways of orginazing them, too. And to go above and beyond, have the option to manually make some changes before "saving" them, or sticking to the current ones. It should also allow Regina to manually edit the mistakes the algorhtims may make.
- Or simply add a ``sort by genre`` option when playing songs. However, this doesn't let Regina have a permanent, organized library, like she wanted.
- Automatically generate and organize folders with different genres, dates, etc... **This should only be a search result, and not stored permanently**


