const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');
const bcrypt = require('bcrypt')

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
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
    },

    group_id: {
      type: DataTypes.UUID,
      references:{
          model: 'Group',
          key: 'id'
      }
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