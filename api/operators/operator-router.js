const express = require('express')
const Operator = require('./operator-model')
const router = require('express').Router()
const {validateTruckId, validateTruckPost} = require('../middleware/middleware.js')

//get array of trucks owned by id
router.get('/trucks/:id', (req, res, next) => {
    Operator.findById()
        .then(operators => {
            res.status(200).json(operators)
        })
        .catch(next)
})

//get images of truck
router.get("/", (req, res) => {
    Operator.get()
      .then((images) => {
        res.status(200).json(images);
      })
      .catch((err) => {
        res.status(500).json({ message: "there was an error" });
      });
  });

//get cuisine types
router.get("/", (req, res) => {
    Operator.get()
      .then((cuisine) => {
        res.status(200).json(cuisine);
      })
      .catch((err) => {
        res.status(500).json({ message: "there was an error" });
      });
  });

//get array of all customer ratings
router.get("/", (req, res) => {
    Operator.get()
      .then((rating) => {
        res.status(200).json(rating);
      })
      .catch((err) => {
        res.status(500).json({ message: "there was an error" });
      });
  });

//get average customer rating
router.get("/", (req, res) => {
  Operator.get()
    .then((rating) => {
      res.status(200).json(rating);
    })
    .catch((err) => {
      res.status(500).json({ message: "there was an error" });
    });
});

//create new truck
router.post('/', validateTruckPost, (req, res, next) => {
    Operator.createTruck(req.body)
    .then((newTruck) => {
        res.status(200).json(newTruck)
    })
    .catch(error => {
        res.status(500).json({message: error.message})
    })
})

//delete truck
router.delete('/:id', validateTruckId, (req, res, next) => {
    Operator.remove(req.params.id)
    .then((truck) => {
        res.status(200).json(truck)
    })
    .catch(next)
})

//edit truck
router.put('/:id', validateTruckId, (req, res, next) => {
    Operator.update(req.params.id, req.body)
    .then(truck => {
        res.status(200).json(truck)
    })
    .catch((error) => {
        res.status(400).json({message: error.message})
    })
})

module.exports = router;