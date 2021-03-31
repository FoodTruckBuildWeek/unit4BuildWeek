const express = require("express");
const Operator = require("./operator-model");
const router = require("express").Router();

//get array of trucks owned by id
router.get("/:id", (req, res, next) => {
  Operator.findById(req.params.id)
    .then((operators) => {
      res.status(200).json(operators);
    })
    .catch(next);
});

router.get("/:id/trucks", (req, res, next) => {
  Operator.findOwnedTrucks(req.params.id)
    .then((operators) => {
      res.status(200).json(operators);
    })
    .catch(next);
});

module.exports = router;
