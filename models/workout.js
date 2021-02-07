const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    excercises: [
        {
            type: {
                type: String,
                trim:true,
                required:"exercise type"
            },
            name: {
                type: String,
                trim:true,
                required:"exercise type"
            },
            duration: {
                type: Number,
                trim:true,
                required:"exercise type"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            },
        }
    ]
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout; 