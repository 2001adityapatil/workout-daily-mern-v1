const { json } = require('body-parser');
const express = require('express');
require('dotenv').config();
const workoutRoutes = require("./node/workouts")
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// middleware
app.use(function(req, res, next){
    console.log(req.path, req.method);
    next();
});

app.use("/api/workouts", workoutRoutes);

// app.get("/", function(req, res){
//     res.json({mssg: "Hello world"});
// });

mongoose.connect(process.env.MONGO_URL)
.then(function(){
    console.log("connected");
    app.listen(process.env.PORT, function(req, res){
        console.log("server started");
    });
})
.catch(function(error){
    console.log(error);
})

