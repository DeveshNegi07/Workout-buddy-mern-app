const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
//port
const port = process.env.PORT || 4000;
//db connection
require("./db/connection").connect();
//require routes
const workoutRoutes = require("./routes/workoutRoutes");
const userRoutes = require("./routes/userRoutes");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`server is running at port: ${port}`);
});
