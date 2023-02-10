const Workout = require("../models/workoutModels");
const mongoose = require("mongoose");


// get all workouts
const getWorkouts = async function(req, res){

    const getworkout = await Workout.find({}).sort({createdAt: -1});
    res.status(200).json(getworkout);

}

//get particular workout
const getWorkout = async function(req, res){
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: "no such workout"});
    }
    
    const getworkout = await Workout.findById(id);

    if(!getworkout)
    {
       return res.status(400).json({error: "no such workout"});
    }
    res.status(200).json(getworkout);
}


//create a new workout
const createWorkout =  async function(req, res){
    const {title, reps, load} = req.body;

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!reps) {
        emptyFields.push('load')
    }
    if (!load) {
        emptyFields.push('reps')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
    }


    try{
        const workout = await Workout.create({title, reps, load});
        res.status(200).json(workout);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
};

//delete a particular workout
const deletWorkout = async function(req, res){
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: "no such workout"});
    }
    
    const deleteworkout = await Workout.findOneAndDelete({_id: id});

    if(!deleteworkout)
    {
       return res.status(400).json({error: "no such workout"});
    }
    res.status(200).json(deleteworkout);
}

const updateWorkout = async function(req, res){
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json({error: "no such workout"});
    }

    const updateworkout = await Workout.findByIdAndUpdate({_id: id},{
        ...req.body
    });

    if(!updateworkout)
    {
       return res.status(400).json({error: "no such workout"});
    }
    res.status(200).json(updateworkout);

}


module.exports = {createWorkout, getWorkouts, getWorkout, deletWorkout, updateWorkout};

