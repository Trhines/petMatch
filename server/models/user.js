const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    required: "Name of type string required for user"
  },
  password: {
    type: String,
    required: "Password of type string required for user"
  },
  name:{
    type: String,
    default: "none"
  }
})

userSchema.pre('save', async function(next) {
  if(this.isNew || this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10)
  }
})

userSchema.methods.checkPassword = async function (password){
  return await bcrypt.compare(password, this.password)
}

const User = mongoose.model("User", userSchema)

module.exports = User;