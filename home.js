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

const reservations = [{ //ONLY 5 TABLES -- after 5 tables created, then waitlist has info
    name: "#",
    id: "#",
    email: "#",
    phone: 1,
  }];

const waitlist = [{
    name: "#",
    id: "#",
    email: "#",
    phone: 2,
}];
  

//////////////ROUTES////////




  ///////START SERVER//////


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });