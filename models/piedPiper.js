// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var piedPiperCart = {
  all: function(cb) {
    orm.all("shoppingCart", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("shoppingCart", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("shoppingCart", objColVals, condition, function(res) {
      cb(res);
    });
  },
      // Delete a burger
    deleteOne: function(condition, cb) {
        orm.deleteOne("shoppingCart", condition, function(res) {
            cb(res);
        });
    }
};

var piedPiperUsers = {
  all: function(cb) {
    orm.all("piedPiperUsers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("piedPiperUsers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("piedPiperUsers", objColVals, condition, function(res) {
      cb(res);
    });
  },
      // Delete a burger
    deleteOne: function(condition, cb) {
        orm.deleteOne("piedPiperUsers", condition, function(res) {
            cb(res);
        });
    }
};
// Export the database functions for the controller (burgersController.js).
module.exports = piedPiperCart;
module.exports = piedPiperUsers;
