const router = require('express').Router()
const Vehicle = require('../models/vehicle')

router.get('/', async (req, res) => {
    const vehicles = await Vehicle.find()
    res.json(vehicles)
})

router.post('/', async (req, res) => {
    const vehicles = await new Vehicle(req.body).save()
    res.json(vehicles)

})

module.exports = router