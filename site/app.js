// Problem: We need a simple way to look at a user's badge count and JavaScript points from a web browser

// Solution: Use Node.js to perform the profile look ups and serve our template via HTTP
const http = require("http");
const router = require("./router");

// Create a web server
http
  .createServer((request, response) => {
    router.home(request, response);
    router.user(request, response);
  })
  .listen(1337, "127.0.0.1");
console.log("Server running at http://127.0.0.1:1337/");

// TODO Function that handles the reading of files and merges in values
// read from file and get a string
// merge values in toString
