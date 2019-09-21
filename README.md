# Pied-Piper-II

## Overview

An eMusic online store which utilizes an MVC layout which calls two external APIs (LastFM and YouTube), has hooks into a MySql database and is deployed on Heroku.

## Usage

When the user clicks on or types the main URL, they are presented with the main page.
 
The menu has the following buttons:
 
  1. Main (home link)
  2. Search Music Title
  3. Login
  4. Shopping Cart
  5. About
 
## Search Function
 
When the user enters a song title in the search window and hits the `Search` button, several things happen:
 1. An AJAX api call is made to LastFM to retrieve song information.
 2. An AJAX api call is made to YouTube to retrieve a link to the video.
 
The LastFM data is displayed in either a table format or card format with links to the song on LastFM.  Buttons are also added to the song elements so that they can be added to the user's Shopping Cart.
 
The YouTube data is displayed in an element with a link to the song on YouTube.

The `Add to Cart` buttons for each song will store the data in Local Storage.
It stores the following information:

Song Title
Artist Name
Album
LastFM ID???
a link to the item on LastFM

NOTE: Each song title will also be assigned a price of .99 cents!

## Login

When a user clicks the Login button, it will pop up a modal with login fields using this as an example:

https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_login_form_modal

NOTE: The username is the user's email address.

When the user supplies both the username and password the submit button will become active.  On submit, the data will be used to query the database to see if the user exists and the password matches.  If both are there and match, the user will be logged in and their email address will display on the menu as a visual clue to them that they are logged in.  "Hello, fred@flintstone.com!"

On the Login modal will be a link that says: "Don't have an account?  Register now!"

The "Register Now" link allows the user to create a new account which creates rows in the User table in the database.

Again, the username is the email address and the password will be stored in clear text... for now.

## Shopping Cart

When the user clicks on the Shopping Cart button, it routes the user to the Shopping Cart page.  This page is populated with the information stored in the user's Local Storage.

NOTE: The cart page will display an empty cart if there are no items in it.

It also displays the total sale price of all the items.

NOTE: If there is noting in the cart, the shopping cart button will be INNACTIVE.

The Cart page has buttons to remove items from the cart which will update local storage AND the page.  It updates the price as changes are made to the cart.

The Cart page has `Submit` button that will register the sale in the sales table in the database.

The sales table holds the following information:

user_ID (user email address)
song title
artist name
album
URL

![image](https://drive.google.com/uc?export=view&id=1Wy1ZwAfAxCQm0IZI104mKfHNaKsGnzog)

## Receipt

After the user submits their purchase, the receipt page will automatically be loaded.

The receipt page displays the sale information and provide a link to allow the user to email the receipt to them.

## About

Display information about the project.  Who the authors are, usage, etc.

### File Structure
```
├───config
├───db
├───models
├───public
│   └───assets
│       ├───css
│       ├───images
│       └───js
├───routes
│   └───html
└───views
    └───layouts 
 ```
 
## Routing and Handlebars

At the root, the server.js file requires ./routes which means that it uses the index.js file inside the ./routes directory.

Inside the ./routes/index.js file are the endpoints for the project that are brought in using this statement:

`const htmlRoutes = require("./html")`

and defined using this statement:

`router.use("/", htmlRoutes);`

This means that it uses the file: ./routes/html/htmlRoutes.js

Inside the ./routes/html/htmlRoutes.js file are the actual endpoints for our project.  For example:
```js
router
  .route("/")
  .get(function (req, res) {
    res.render("home");
  });

router
  .route("/pageone")
  .get(function (req, res) {
    res.render("pageOne");
  });

router
  .route("/pagetwo")
  .get(function (req, res) {
    res.render("pageTwo");
  });
```

The pages referenced above ("home", "pageOne", "pageTwo") are found in the ./views directory.

"home" = ./views/home.handlebars
"pageOne" = ./views/pageOne.handlebars
"pageTwo" = ./views/pageTwo.handlebars

However, each of these pages need the main.handlebars file in the ./views/layouts/main.handlebars file.

The ./views/layouts/main.handlebars file contains the HTML header section and is used by all the endpoints ("home", "pageOne", "pageTwo").
 
## Notes

There is no way to remove users from the database.  An admin function will have to be added in the future.

There is no way to update user information or sales. 

There is no way to return goods.



