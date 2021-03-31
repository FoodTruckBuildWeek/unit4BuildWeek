const express = require("express");
const Operator = require("./operator-model");
const router = require("express").Router();

//get array of trucks owned by id
router.get("/trucks/:id", (req, res, next) => {
  Operator.findById()
    .then((operators) => {
      res.status(200).json(operators);
    })
    .catch(next);
});


module.exports = router;
