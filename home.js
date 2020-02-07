const http = require("http");

const fs = require("fs");

//Set port to 3000

const PORT = process.env.PORT || 3000;

const server = http.createServer(handleRequest);

// Create a function for handling requests and responses coming into our server
function handleRequest(req, res) {
    if (err) throw err;
  };


// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});