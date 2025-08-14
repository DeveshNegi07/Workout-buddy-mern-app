const mongoose = require("mongoose");

exports.connect = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(console.log("connection is established"))
    .catch((err) => {
      console.log(`error is :${err}`);
    });
};
