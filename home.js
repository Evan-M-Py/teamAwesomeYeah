const http = require("http");

const fs = require("fs");

//Set port to 3000

const PORT = process.env.PORT || 3000;

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

  tables.push(newTable;

  res.json(newTable);
});

const server = http.createServer(handleRequest);

// Create a function for handling requests and responses coming into our server
function handleRequest(req, res) {
    if (err) throw err;
  };


// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});