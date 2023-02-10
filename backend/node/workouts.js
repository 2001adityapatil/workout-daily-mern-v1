const express = require('express');
const Workout = require("../models/workoutModels");
const {createWorkout, getWorkouts, getWorkout, deletWorkout, updateWorkout} = require("../controllers/functionControllers");
const router = express.Router();

router.get('/', getWorkouts);

router.post('/', createWorkout);

router.get('/:id', getWorkout);

router.delete('/:id', deletWorkout);

router.patch('/:id', updateWorkout);

module.exports = router;