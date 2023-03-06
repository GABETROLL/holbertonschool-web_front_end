# Adding CSS to the website made in the HTML folder

## Directory
```images/```: contains images for the website that will be styled here. (the images and website used here is the one from ```<this project's root folder>/html_advanced```)
```styles/```: Contains CSS files that style the website in the HTML directory mentioned above, with new features in each file, along with explanations for some of them.
---
The exercises are:
0. Get images
1. How to make the website to scroll smoothly
2. How to
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
17 How to declare the ```padding```s of multiples sides of a box in a single line using spaces
