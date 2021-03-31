const router = require("express").Router();
const Trucks = require("./truck-model.js");
const Menu = require("../menu/menu-model");
const {
  validateTruckId,
  validateTruckPost,
} = require("../middleware/middleware");

//get truck by id
router.get("/:id", (req, res, next) => {
  Trucks.findById(req.params.truck_id)
    .then((truck) => {
      Menu.findByTruckId(truck_id)
        .then((menu) => {
          truck.menu = menu;
          res.json(truck);
        })
        .catch(next);
    })
    .catch(next);
});

//get truck by location
router.get("/location", (req, res, next) => {
  Trucks.findWithinRadSize(req.query.lat, req.query.lng, req.query.radSize)
    .then((truck) => {
      res.json(truck);
    })
    .catch(next);
});

//create new truck
router.post("/", validateTruckPost, (req, res, next) => {
  Trucks.insert(req.body)
    .then((newTruck) => {
      res.status(201).json(newTruck);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

//delete truck
router.delete("/:id", validateTruckId, (req, res, next) => {
  Trucks.remove(req.params.id)
    .then((truck) => {
      res.status(200).json(truck);
    })
    .catch(next);
});

//edit truck
router.put("/:id", validateTruckId, (req, res, next) => {
  Trucks.update(req.params.id, req.body)
    .then((truck) => {
      res.status(200).json(truck);
    })
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
});

module.exports = router;
