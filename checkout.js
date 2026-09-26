const { getToken } = require("./auth");

function checkout() {
  const token = getToken();

  if (!token) {
    return "Login required";
  }

  return `Checkout started with ${token}`;
}

module.exports = { checkout };
