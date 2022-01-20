
const Workout = require("../models/workoutSchema.js");


module.exports = function(app){

app.post("/api/workouts", ({ body }, res) => {
    console.log("HITTING POST")
    Workout.create({})
        .then(dbWorkout => {
            console.log("DATA TO POST TO DB ", dbWorkout)
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

app.get("/api/workouts", function (req, res) {
    console.log("HITTING GET WORKOUTS")
    Workout.find({})
        .then((data) => {
            console.log("DATA FROM DB", data)
        res.json(data);
        })
        .catch((err) => {
            console.log(err)
        res.status(400).json(err);
        });
    });

app.put("/api/workouts/:id", (req, res) => {
    console.log("HIT UPATE WORKOUTS")
    Workout.findByIdAndUpdate(
       {_id: req.params.id},
        // req.params.id,
        { $push: { exercises: req.body } },
        { new: true})
        .then((data) => res.json(data))
        .catch(err => {
            res.status(400).json(err);
        });
    });

app.get("/api/workouts/range", function (req, res) {
    Workout.find()
        .then((data) => res.json(data))
        .catch((err) => {
        res.json(err);
        });
    });
    
    app.post("/api/workouts/range", function (req, res) {
    Workout.create({})
        .then((data) => res.json(data))
        .catch((err) => {
        res.json(err);
        });
    });


}