const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Group extends Model {}

Group.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    group_name:{
        type: DataTypes.STRING,
        allownull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Group',
  }
);

module.exports = Group;