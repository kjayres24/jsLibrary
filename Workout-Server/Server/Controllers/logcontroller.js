var express = require('express')
var router = express.Router()      //1
var sequelize = require('../db');
var workout = sequelize.import('../Models/workout');

router.get('/', (req, res) => {
    workout.findAll()
        .then(workouts => res.status(200).json(workouts))
        .catch(err => res.status(500).json({ error: err }))
});

router.post('/create', (req, res) => {
    workout
        .create({
            result: req.body.log.result,
            description: req.body.log.description,
            definition: req.body.log.definition,
            owner: req.user.id
        })
        .then(workout => res.status(200).json(workout))
        .catch(err => res.status(500).json({ error: err }))
});

router.delete('/:id', (req, res) => {
    workout
        .destroy({ where: { id: req.params.id } })
        .then(recChanged => res.status(200).json(recChanged))
        .catch(err => res.status(500).json({ error: err }))
})

router.put('/update/:id', (req, res) => {
    workout.update(req.body.log, { where: { id: req.params.id } })
        .then(workouts => res.status(200).json(workouts))
        .catch(err => res.status(500).json({ error: err }))
})

module.exports = router;