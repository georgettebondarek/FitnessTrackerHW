const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const workoutSchema = new Schema({
    name: {
        type: String, 
        unique: true,
        required: true

    },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: "Exercise"
    }]
});

const exercisesSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    reps: {
        type: Number,
        required: true
    }
});

const exercisesSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    reps: {
        
    }
})









module.exports = {
    Workout: require("./workout")
}