const router = require("express").Router();

router
  .route("/")
  .get(function (req, res) {
    res.render("index");
  });

router
  .route("/checkout")
  .get(function (req, res) {
    res.render("checkoutView");
  });

router
  .route("/receipt")
  .get(function (req, res) {
    res.render("receiptView");
  });

  router
  .route("/registration")
  .get(function(req,res){
    res.render("newReg")
  })

// router
//   .route("/grouppage")
//   .get(function (req, res) {
//     res.render("grouppage");
//   });

//   router
//   .route("/login")
//   .get(function (req, res) {
//     res.render("login");
//   })

//   router
//   .route("/signup")
//   .get(function (req, res) {
//     res.render("signup");
//   })

module.exports = router;