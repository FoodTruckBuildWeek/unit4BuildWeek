const router = require("express").Router();
const Users = require("./users-model");

router.get("/:user_id", (req, res, next) => { 
    Users.findById(req.params.user_id)
      .then(user => {
        res.json(user);
      })
      .catch(next);
  });

  router.get("/", (req, res, next) => { 
    Users.find()
      .then(user => {
        res.json(user);
      })
      .catch(next);
  });
  
  module.exports = router;
  