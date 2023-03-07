# Adding CSS to the website made in the HTML folder

## Directory
```images/```: contains images for the website that will be styled here. (the images and website used here is the one from ```<this project's root folder>/html_advanced```)
```styles/```: Contains CSS files that style the website in the HTML directory mentioned above, with new features in each file, along with explanations for some of them.
---
THE EXPLANATIONS ARE MY OWN THEORIES OF WHAT I THINK IS GOING ON, I KNOW NOTHING ABOUT CSS. PLEASE DON'T TAKE ANYTHING I SAY SERIOUSLY. I AM JUST A HYPOCRITE TO LEARN CSS AND MAKE A GITHUB REPOSITORY FOR MY COLLEGE, AND NOT LEAVE YOU IN THE DARK AS TO WHAT IS GOING ON
---
The exercises are:
0. Get images
1. How to make the website to scroll smoothly
2. How to:
- set the text color (aka "foreground color") to the contents of a tag
- make a tag's contents invisible
3. How to create global variables to use in properties in the CSS code
4. How to set a tag's ```font-family``` to be a list of fonts
5. How to set a tag's font's size to be the root's (```html```'s) font size times some amount
6. How to set a tag's font's boldness
- ```key point```: Boldness is set in 9 intensities: 100-900 counting each multiple of 100, from thinnest to thickest
7. Add ```Open Sans``` to ```Raleway``` to ```--font-family-title``` as the new first choices
- ```key point```: Every font in a font family is there in case the previous font wasn't found by the user's browser. This is to ensure that a nice font is found, and the default font doesn't get deployed.
8. How to specify the ```line-height``` of text (aka: "how tall is the text's box)
- ```key point```: the height is measured using the text's ```content-area```'s height as the unit of measurement
9. How to remove the anchor tag's text decoration
10. How to horizontally center the text in a tag (with a class)
11. How to transform a tag's text to ```uppercase```
12. How to set a tag (with a class)'s margin to 0
13. How to use pseudo classes to check an ```a```'s state
14. Copying and pasting a ```normalize.css``` file from GitHub to ensure browser consistency
- file: (normalize.css)[https://github.com/necolas/normalize.css/blob/master/normalize.css]
15. How to reset the way all the boxes are displayed, and make their border and padding take part INSIDE their ```width``` and ```height```, and not be placed outside
16. How to split the margin equally on the left and right of a tag's boxes
17. How to declare the ```padding```s of multiples sides of a box in a single line using spaces
18. How to:
- target an element that's a member of a class, and that's a child of another element that's a member of another class
- make an element display in the same horizontal position as other elements (like the ```span``` tag) and still have its ```width``` and ```height``` attributes work
- make an element take-up the whole width of the screen
- remove any type of bullet from the left of each element when it's being listed (in a ```.nav .nav-list``` class, most likely for a link list in the ```nav``` tag)
19. How to:
- make items "float" to one direction
- align text (seemingly) similar to MS Word
