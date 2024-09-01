require('dotenv').config()

const express = require('express')
const mongoose =  require('mongoose')
const workoutRoutes = require('./routes/workouts')

const app = express();

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutRoutes)

mongoose.connect(process.env.MONG_URL)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Connected MongoDB and Server is running on port ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("Not Connected")
    console.log(error.message)
})
