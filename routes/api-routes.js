const router = require("express").Router();
const Workout = require("../models/workoutSchema.js");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    // is this data or dbWorkout
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get("/api/workouts", function (req, res) {
    Workout.find({})
        .sort({ day: 1 })
        .then((data) => {
        res.json(data);
        })
        .catch((err) => {
        res.status(400).json(err);
        });
    });

// update below with put workout info
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } },
        { new: true, runValidators: true })
        .then((data) => res.json(data))
        .catch(err => {
            res.status(400).json(err);
        });
    });


// add >>>/api/workouts/range
router.get("/api/workouts/range", function (req, res) {
    Workout.find()
        .then((data) => res.json(data))
        .catch((err) => {
        res.json(err);
        });
    });
    
    router.post("/api/workouts/range", function (req, res) {
    Workout.create({})
        .then((data) => res.json(data))
        .catch((err) => {
        res.json(err);
        });
    });


module.exports = router;