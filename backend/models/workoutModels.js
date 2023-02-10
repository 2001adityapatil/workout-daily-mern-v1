
const mongoose = require('mongoose');

// const Schema = ;

const mySchema = mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load : {
        type: Number,
        required: true
    },
},{timestamps: true});   

module.exports = mongoose.model("workout", mySchema);