const router = require('express').Router();
let Inventory = require('../models/inventory.model');

router.route('/').get((req, res) => {
  Inventory.find()
    .then(inventory => res.json(inventory))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const productid = req.body.productid;
  const producttitle = req.body.producttitle;
  const quantity = req.body.quantity;

  const newInventory = new Inventory({productid, producttitle, quantity});

  newInventory.save()
    .then(() => res.json('Inventory added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;