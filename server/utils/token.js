const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const createToken = (_id) => {
  return jwt.sign({ _id }, JWT_SECRET, {
    expiresIn: "3d",
  });
};

module.exports = createToken;
