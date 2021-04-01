const router = require("express").Router();
const Trucks = require("./truck-model.js");

//get all trucks
router.get('/', (req, res) => {
  Trucks.get()
  .then((trucks) => {
    res.status(200).json(trucks);
  })
  .catch((err) => {
    res.status(500).json({message: err})
  })
})

//get truck by id
router.get('/:id', (req, res, next) => {
  Trucks.findById(req.params.id)
      .then(trucks => {
          res.status(200).json(trucks)
      })
      .catch(next)
})

router.get("/:id/menu", (req, res, next) => {
  Trucks.findMenuItems(req.params.id)
    .then((menu) => {
      res.status(200).json(menu);
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
router.post("/", (req, res, next) => {
  Trucks.insert(req.body)
    .then((newTruck) => {
      res.status(201).json(newTruck);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

//delete truck
router.delete("/:id", (req, res, next) => {
  const {id} = req.params;
  if(id === null || id === {} || !id || id === req.body.id){
    res.status(404).json({message: `${id} not found`})
  } else{
    Trucks.remove(id)
      .then(() => {
        res.status(200).json({message: 'truck deleted'})
      })
      .catch(err => {
        res.status(500).json({message: err})
      })
  }
});

//edit truck
router.put("/:id", (req, res, next) => {
  Trucks.update(req.params.id, req.body)
    .then((truck) => {
      res.status(200).json(truck);
    })
    .catch((error) => {
      res.status(400).json({ message: error.message });
    });
});

module.exports = router;