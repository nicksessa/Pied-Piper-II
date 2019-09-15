const router = require("express").Router();
const htmlRoutes = require("./html");


// set up endpoints
router.use("/", htmlRoutes);

router.get("*", function (req, res) {
  res.send("<h2 style='color:red;text-align:center'>Error 404, Bad request!</h2>");
});

// ship finished routes to server.js
module.exports = router;
