// const mongoose = require("mongoose")
// const bcrypt = require('bcrypt')

// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   email: {
//     type: String,
//     unique: true,
//     trim: true,
//     required: "Name of type string required for user"
//   },
//   password: {
//     type: String,
//     required: "Password of type string required for user"
//   },
//   name:{
//     type: String,
//     default: "none"
//   }
// })

// userSchema.pre('save', async function(next) {
//   if(this.isNew || this.isModified('password')) {
//     this.password = await bcrypt.hash(this.password, 10)
//   }
// })

// userSchema.methods.checkPassword = async function (password){
//   return await bcrypt.compare(password, this.password)
// }

// const User = mongoose.model("User", userSchema)

// module.exports = User;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');
const bcrypt = require('bcrypt')

class User extends Model {}

User.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
    
  },
  {
    
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        if (updatedUserData.password) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        }
        return updatedUserData;
      },
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'User',
  }
);

User.prototype.checkPassword = async function (password){
  return await bcrypt.compare(password, this.password)
}

module.exports = User;