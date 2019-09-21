const router = require("express").Router();
var connection = require("../../config/connection.js");

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
  .get(function (req, res) {
    res.render("newReg");
  });


router.post("/api/login", function (req, res) {
  var user_name = req.body.user_name
  var password = req.body.password

  connection.query('SELECT * FROM users WHERE user_name = ?', [user_name], function (error, results, fields) {
    if (error) {
      res.send({
        "code": 400,
        "failed": "error ocurred"
      })
    } else {
      if (results.length > 0) {
        if (results[0].password == password) {
          res.send({
            "code": 200,
            "success": "login successfull"
          })
        } else {
          res.send({
            "code": 204,
            "success": "User Name and Password do not match"
          })
        }
      } else {
        res.send({
          "code": 204,
          "success": "User Name does not exist"
        })
      }
    }
  })
})

router.post("/api/register", function (req, res) {
  
  var users = {
    "user_name": req.body.user_name,
    "password": req.body.password
  }
  connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
    if (error) {
      res.json({
          status:false,
          message:'there are some error with query'
      })
    }else{
        res.json({
          status:true,
          data:results,
          message:'user registered sucessfully'
      })
    }
  });
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
