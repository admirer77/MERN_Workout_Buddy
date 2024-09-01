const express =  require('express');
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout
} = require('../Controllers/workoutControllers')


const router = express.Router()

router.get('/', getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', (req,res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router