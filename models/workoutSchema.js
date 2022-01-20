const mongoose = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                name: {
                    type: String,
                    trim: true,
                    required: "Enter a name for workout"
                },
                type: {
                    type: String,
                    trim: true,
                    required: "Enter in exercise type"
                },
                weight: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                duration: {
                    type: Number,
                    required: "Enter a an exercise duration in minutes"
                }
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }

);

workoutSchema.virtual("totalDuration").get(function (){
    console.log(this)
    if(typeof this.exercises === 'undefined'){
        return 0;
    }
    return this.exercises.reduce((total, exercise)=>{
        return total + exercise.duration;
    },0)
});



const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;