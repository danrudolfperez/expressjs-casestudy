const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessSchema = new Schema({
  businessname: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
  email: { // email is the username
    type: String,
    required: true,
  },   
}, {
  timestamps: true,
});

const Business = mongoose.model('Business', businessSchema);

module.exports = Business;