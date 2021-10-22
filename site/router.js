// Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
  // if url == "/" && GET
  if (request.url === "/") {
    // show search
    response.writeHead(200, { "content-Type": "text/plain" });
    response.write("Header\n");
    response.write("Search\n");
    response.end("Hello World\n");
  }
  // if url == "/" && POST
  // redirect to /:username
}

// Handle HTTP route GET /:username i.e. /josephmcgreene
function user(request, response) {
  let username = request.url.replace("/", "");

  if (username.length > 0) {
    response.writeHead(200, { "content-Type": "text/plain" });
    response.write("Header\n");
    response.write(username + "\n");
    response.end("Hello World\n");
  }
  // url == "/..."
  // get json from Treehouse
  // on "end"
  // show profile
  // on "error"
  // show error
}

module.exports = {
  home: home,
  user: user,
};
