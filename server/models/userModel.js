const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

//static signup function
userSchema.statics.signup = async (email, password) => {
  const exists = await User.findOne({ email });
  if (exists) {
    throw Error("Email already exist");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await User.create({ email, password: hash });
  return user;
};

//static login function

userSchema.statics.login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect password");
  }
  return user;
};

module.exports = User = new mongoose.model("user", userSchema);
