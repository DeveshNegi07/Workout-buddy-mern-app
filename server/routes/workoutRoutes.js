const express = require("express");
const authUser = require("../middleware/userMiddleware");

const router = express.Router();

//require controller
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  editWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

//user authentication middleware
router.use(authUser);

//get entire record
router.get("/", getWorkouts);

//get single record
router.get("/:id", getWorkout);

//create record
router.post("/", createWorkout);

//updated record
router.patch("/:id", editWorkout);

//delete record
router.delete("/:id", deleteWorkout);

module.exports = router;
