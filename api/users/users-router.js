const router = require("express").Router();
const Users = require("./users-model");
// const { restricted, only } = require("../auth/auth-middleware");

router.get("/:user_id", (req, res, next) => { // done for you
    Users.findById(req.params.user_id)
      .then(user => {
        res.json(user);
      })
      .catch(next);
  });
  
  module.exports = router;
  