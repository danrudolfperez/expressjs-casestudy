const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Product.findById(req.params.id)
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/businessid/:businessid').get((req, res) => {
  Product.find({'businessid': req.params.businessid})
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      product.producttitle = req.body.producttitle;
      product.productdescription = req.body.productdescription;
      product.productprice = req.body.productprice;
      product.businessid = req.body.businessid;

      product.save()
      .then(() => res.json('Product updated!'))
      .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const producttitle = req.body.producttitle;
  const productdescription = req.body.productdescription;
  const productprice = req.body.productprice;
  const businessid = req.body.businessid;

  const newProduct = new Product({producttitle, productdescription, productprice, businessid});

  newProduct.save()
    .then(() => res.json('Product added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;