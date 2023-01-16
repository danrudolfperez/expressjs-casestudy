const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema;

const userSchema = new Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//     trim: true,
//     minlength: 3
//   },
  firstname: { 
    type: String,
    required: true,
    minlength: 3
  },
  lastname: { 
    type: String,
    required: true,
    minlength: 3
  },  
  email: { // email is the username
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },    
  mobilenumber: {
    type: String,
    required: true,
  },  
}, {
  timestamps: true,
});

//PASSWORD
userSchema.pre("save", function (next) {
  const user = this
  // if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError)
      } else {
        bcrypt.hash(user.password, salt, function(hashError, hash) {
          if (hashError) {
            return next(hashError)
          }
          user.password = hash
          next()
        })
      }
    })
  // } else {
  //   return next()
  // }
})
//


const User = mongoose.model('User', userSchema);

module.exports = User;