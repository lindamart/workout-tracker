const router = require("express").Router();
const Workout = require("../models/workoutSchema.js");

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// router.post("/api/transaction/bulk", ({ body }, res) => {
//     Transaction.insertMany(body)
//         .then(dbTransaction => {
//             res.json(dbTransaction);
//         })
//         .catch(err => {
//             res.status(400).json(err);
//         });
// });

// update below with workout info
router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {$push:{exercises:req.body}},{new:true, runValidators:true})
    .then(dbTransaction => {
        res.json(dbTransaction);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


router.get("/api/workouts", (req, res) => {
    Transaction.find({})
        .sort({ date: -1 })
        .then(dbTransaction => {
            res.json(dbTransaction);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// add >>>/api/workouts/range
// delete??

module.exports = router;