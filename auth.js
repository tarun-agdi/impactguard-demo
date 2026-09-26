function getToken() {
  return localStorage.getItem("token");
}

function isTokenValid(token) {
  return token !== null;
}

module.exports = { getToken, isTokenValid };
