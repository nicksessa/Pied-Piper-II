var express = require("express");

var router = express.Router();

// Import the model (piper.js) to use its database functions.
var piper = require("../models/piedPiper.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
// this renders the main page (main.handlebars) that also renders: index.handlebars.
    res.render("index");
});

router.post("/api/piedPiperCart", function(req, res) {
  piper.create(["user_ID", "song_title", "artist_name"], [req.body.burger_name, req.body.devoured], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.post("/api/piedPiperUsers", function (req, res){
  piper.create(["user_name", "password"], [req.body.user_name, req.body.password], function(result){
    res.json({is: result.insertId});
  })
})



router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Delete the burger
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.deleteOne(condition, function(result) {
        if (result.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404.
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
