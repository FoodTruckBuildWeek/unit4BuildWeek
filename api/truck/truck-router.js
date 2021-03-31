const router = require("express").Router();
const Trucks = require("./truck-model.js");

//get truck current location by id
router.get("/:truck_id", (req, res, next) => { 
  Trucks.findById(req.params.truck_id)
    .then(truck => {
      res.json(truck);
    })
    .catch(next);
});

//get truck departure Time by id
router.get("/:truck_id", (req, res, next) => { 
    Trucks.findById(req.params.truck_id)
      .then(truck => {
        res.json(truck);
      })
      .catch(next);
  });

module.exports = router;