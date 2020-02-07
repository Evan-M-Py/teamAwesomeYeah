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

const tables = [{ //ONLY 5 TABLES -- after 5 tables created, then waitlist has info
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

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + '/home.html'));
});

app.get("/makeReservation", function(req, res) {
  res.sendFile(path.join(__dirname + '/reserve.html'));
});

app.get("/makeReservation", function(req, res) {
  res.sendFile(path.join(__dirname + '/tables.html'));
});

app.post("/api/makeTable", function(req, res) {
  const newTable = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newTable);

  tables.push(newTable);

  res.json(newTable);
});

  ///////START SERVER//////

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });