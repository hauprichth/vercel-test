const router = require('express').Router()
const vehicle = require('../models/vehicle')

router.get('/', async (req, res) => {
    const vehicles = await Vehicle.find()
    res.json(vehicles)
})

router.post('/', async (req, res) => {
    const vehicle = await new Vehicle(req.body).save()
    res.json(vehicles)

})

module.exports = router