const Workout = require("../models/workoutModel");

//get all data
const getWorkouts = async (req, res) => {
  const user_id = req.user._id;
  try {
    const workoutData = await Workout.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

//get single data
const getWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutData = await Workout.findById(id);
    res.status(200).json(workoutData);
  } catch (error) {
    res.status(400).json({ Error: err.message });
  }
};

//create data
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  const user_id = req.user._id;
  try {
    const workoutData = await Workout.create({ title, reps, load, user_id });
    res.status(201).json(workoutData);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

//update data
const editWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutData = await Workout.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(workoutData);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

//delete workout
const deleteWorkout = async (req, res) => {
  try {
    const id = req.params.id;
    const workoutData = await Workout.findByIdAndDelete(id);
    res.status(201).json(workoutData);
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout,
  editWorkout,
  deleteWorkout,
};
