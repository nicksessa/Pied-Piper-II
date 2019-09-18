# Guide to Routing

Whenever I get stuck, I find it useful to do like Vizzini in the Princess Bride said to do, and to go back to the beginning.

> In the beginning...  

Assume the following structure:
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
### NOTE: I think it might be a good idea to use file names that describe the function of the file.  For example, the following might be a good practice:

Function | Suggested Name | Relative Path
---------|----------------|---------------
route | myAppNameRouts.js | ./routes
model | myAppNameModel.js  | ./models
config | ormConfig.js or just orm.js | ./cofig


We start with the things that call other things.  In this case, the beginning (besides the html web page that acts as a sort of container) starts with the JavaScript file that starts the action.

This file (or files):

`./public/assets/js/[someScript.js]`

creates API calls that are caught by the router or routers.

File | Imports | File
-----|---------|------
./server.js | -->  IMPORTS  --> | ./route/[someRouter.js]  *
./routes/[someRouter.js] | -->  IMPORTS  --> | ./models/[someModel.js]
./models/[someModel.js] | -->  IMPORTS  --> | .config/orm.js
./config/orm.js  | -->  IMPORTS  --> | ./config/connection.js

* Note: You _can_ use index.js in your ./route folder and you will not have to require it in your server.js file.
        You can then use the index.js file to import the route files in say the ./routes/html directory.

## Server.js
This file establishes where your routes are by defining the routes by a variable:

```js
var routes = require("./routes")
```

## Routers

Route files contain "end points".
They define the API functions.

Sample endpoints:
```js
router
  .route("/")
  .get(function (req, res) {
  res.render("index");
});
router
  .route("/login")
  .get(function (req, res) {
  res.render("login");
})
```
The above are "simple" routes.  More complex routes are ones that function as API routes.
For example:

```js
router.post("/api/newUser", function(req, res) {
  appNameModel.create(["user_ID", "password"], [req.body.user_ID, req.body.password], function(result) {
    res.json({id: result.insertID})
  })
})
```

For this API route example, it has to first require the model.  For example:

```js
var appNameModel = require("./models/appNameModel.js")
```


## Models

Model files have functions that utilize the orm functions.  For example:

```js
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var cat = {
  all: function(cb) {
    orm.all("cats", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("cats", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("cats", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = cat;
```

## ORM.js 

The ORM files contain the SQL statements which are encapsulated in an "orm" object:

```js
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
```

## Connection.js

The connection.js file contains the DB connection information.

```js
// Set up MySQL connection.
var mysql = require("mysql");

var connection

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "foo_db"
  });
}
  // Make connection.
  connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  // Export connection for our ORM to use.
  module.exports = connection;
```



