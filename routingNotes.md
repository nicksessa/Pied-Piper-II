CREATE

Submit button on the ./views/index.handlebars page eventually calls a POST operation.


form class="create-form"
id=addburger

(This submit button eventually adds a row to the db)


The javascript in ./public/assets/js/burgers.js contains the ajax code to call the APIs.


For example, the "create-form" class is given a "on("submit"...) event like so: 

$(".create-form").on("submit", function(event) {

The following function gets the new burger name and creates the POST request.  For example:

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );



The ./controllers/burgerControler.js file contains the routes.  (To make things easier, the folder should probably be renamed to "routes" and the file name should be renamed to "burgerRouter.js".


Inside the .controllers/burgerControler.js is the route:

router.post("/api/burgers", function(req, res) {
  burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});


The burger.create function is from the ./models/burger.js file.
The ./models/burger.js file pulls in the ORM data from the ./config/orm.js file.



UPDATE

the eatbutton button does an update in the database.

We're not doing an UPDATE in the new project... not yet anyway.








Pied Piper II

CREATE

There are two operations that create rows in the database:

1. New User - called from the index.handlebars page.  (or from the registration page!!!!)
2. Log User's Purchase - called from the checkout.handlebars page.



New User

create javascript file in ./public/assets/js
call it: index.js
(call it 'index' because it is called from the index.handlebars page)


Log User's Purchase
Checkout

create javascript file in ./public/assets/js
call it: checkout.js
(call it checkout because it is called from the checkout.handlebars page.)


--------------------------------------------------------------------
New User - javascript

In the ./public/assets/js/index.js file do the following:

//check to see if user already exists
(make the user_id in the users_table the primary key)


// Add a user
$("#addNewUserButton").on("submit", function(event) {
  event.preventDefault()
  var newUser = {
    user_name: $("#userNameID").val().trim()
  }
  // Send the POST request.
  $.ajax("/api/piedPiperNewUser", {
    type: "POST",
    data: newUser
  }).then(
    function() {
      console.log("created new user");
      // Reload the page to get the updated list
      location.reload();
    }
  );
})

---

Somewhere in the ./routes/ directory create a piedPiper.js file.

Then add a POST entry to handle the request above.

var express = require("express");
var router = express.Router();
var piper = require("../models/piedPiperModel.js")

router.post("/api/piedPiperNewUser", function(req, res) {
  piper.create("users", ["user_id", "user_password"], [req.body.user_name, req.body.user_password], function(result) {
    res.json({id: result.insertId})
  })
})


--------------------------------------------------------------------
Log User's Purchase in the Orders table

In the ./public/assets/js/checkout.js file add:

// Add order(s)
$("#checkoutButton").on("submit", function(event) {
  event.preventDefault()

  var piperCart = localStorage.getItem("piedPiperCart1284")

  // Send the POST request.
  $.ajax("/api/piedPiperCheckout", {
    type: "POST",
    data: piperCart
  }).then(
    function() {
      console.log("Added orders to the DB");
      // Reload the page to get the updated list
      location.reload();
    }
  );
})


---

in the ./routes/piedPiper.js file add the checkout route


router.post("/api/piedPiperCheckout", function(req, res) {
  piperCart.forEach(function(arrayItem) {
    songTitle = arrayItem.songTitle
    artistName = arrayItem.artistName
    albumName = arrayItem.albumName
    youTubeLink = arrayItem.youTubeLink

    piper.create("orders", ["user_id", "song_title", "artist_name", "album_name", "link", "price"], [req.body.user_name, req.body.song_title, req.body.artist_name, req.body.album_name, req.body.link, req.body.price], function(result) {
      res.json({id: result.insertId})
    })
  })
})










