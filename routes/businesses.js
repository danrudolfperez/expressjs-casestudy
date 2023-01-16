const router = require('express').Router();
let Business = require('../models/business.model');

router.route('/').get((req, res) => {
  Business.find()
    .then(businesses => res.json(businesses))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const businessname = req.body.businessname;
  const email = req.body.email;

  const newBusiness = new Business({businessname, email});

  newBusiness.save()
    .then(() => res.json('Business added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;