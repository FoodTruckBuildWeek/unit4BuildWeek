const express = require('express')
const Diner = require('./diner-model')
const router = require('express').Router()


//get location
router.get('/:id', (req, res, next) => {
    Diner.findById(req.params.id)
        .then(diners => {
            res.status(200).json(diners)
        })
        .catch(next)
})

//get array of favorite Trucks by id
router.get('/:id/trucks', (req, res, next) => {
    Diner.findFavoriteTrucks(req.params.id)
        .then(trucks => {
            res.status(200).json(trucks)
        })
        .catch(next)
})

module.exports = router;