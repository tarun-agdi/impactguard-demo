const { getToken, isTokenValid } = require("./auth");

function makeRequest() {
  const token = getToken();

  if (!isTokenValid(token)) {
    return "Please login again";
  }

  return `Request sent with ${token}`;
}

module.exports = { makeRequest };
