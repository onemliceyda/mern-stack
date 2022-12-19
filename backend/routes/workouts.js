const express = require("express")
const Cluster0 = require("../models/workoutModel")
//create a router
const router = express.Router()

//GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" })
})

//GET a single workouts

router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single workout" })
})

//POST a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body
  try {
    const workout = await Cluster0.create({ title, load, reps })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

//DELETE a new workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a new workout" })
})

//UPDATE a new workout
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a new workout" })
})

module.exports = router
