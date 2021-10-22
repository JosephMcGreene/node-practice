const https = require("https");
const http = require("http");

/**
 * print message to the console
 * @param  {} username
 * @param  {} badgeCount
 * @param  {} points
 */
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
  console.log(message);
}
/**
 * print errors to the console
 * @param  {} error
 */
function printError(error) {
  console.error(error.message);
}

function getProfile(username) {
  try {
    // Connect to API url: https://teamtreehouse.com/${username}.json
    const request = https.get(
      `https://teamtreehouse.com/${username}.json`,
      (response) => {
        if (response.statusCode === 200) {
          let body = "";

          // Read the data
          response.on("data", (data) => {
            body += data.toString();
          });

          response.on("end", () => {
            try {
              // Parse the data
              const profile = JSON.parse(body);

              // Print the data
              printMessage(
                username,
                profile.badges.length,
                profile.points.JavaScript
              );
            } catch (error) {
              printError(error);
            }
          });
        } else {
          const message = `There was an error the getting the profile for ${username}: ${
            http.STATUS_CODES[response.statusCode]
          }.`;
          const statusCodeError = new Error(message);
          printError(statusCodeError);
        }
      }
    );
    request.on("error", printError);
  } catch (error) {
    printError(error);
  }
}

module.exports = {
  getProfile: getProfile,
};
