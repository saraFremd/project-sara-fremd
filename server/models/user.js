const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
  name: { type: String },
  age: { type: String },
  city: { type: String },
  email: { type: String },
  phone: { type: String , default:'',minlength:'8'}
})


module.exports = mongoose.model( 'User' , userSchema)