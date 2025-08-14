const mongoose = require("mongoose");

exports.connect = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/WorkoutBuddy")
    .then(console.log("connection is established"))
    .catch((err) => {
      console.log(`error is :${err}`);
    });
};
