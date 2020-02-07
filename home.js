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
    email: "#",
    phone: 1,
  }];

const waitlist = [{
    name: "#",
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

app.get("/api/tableData", function(req, res) {
  return res.json(tables);
});

app.post("/api/makeTable", function(req, res) {
  const newTable = req.body;
  if(tables.length <= 6){
    waitlist.push(newTable)
    res.json(newTable);
  }else{
  tables.push(newTable);
  res.json(newTable);
  }
    console.log(req);
    return res.json(newTable); // have to return the input so that Postman shows it
});

  ///////START SERVER//////

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });