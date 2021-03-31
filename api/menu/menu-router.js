const Menu = require('./menu-model.js')
const router = require('express').Router()

//get all menu items
router.get('/', (req, res) => {
    Menu.get()
    .then((menu) => {
      res.status(200).json(menu);
    })
    .catch((err) => {
      res.status(500).json({message: err})
    })
  })
  
  //get menu item by id
  router.get('/:id', (req, res, next) => {
    Menu.findById(req.params.id)
        .then(menu => {
            res.status(200).json(menu)
        })
})

module.exports = router;