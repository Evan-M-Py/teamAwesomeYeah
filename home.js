const express = require("express");

const path = require("path");

//Set port to 3000

const app = express();

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Create a function for handling requests and responses coming into our server
function handleRequest(req, res) {
    if (err) throw err;
  };



//////////ARRAYS OF OBJECTS//////////////

const reservations = [{
    name: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  }, {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  }, {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
  }];
  


//////////////ROUTES////////




  ///////START SERVER//////


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });