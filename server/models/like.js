const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Like extends Model { }

Like.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true,
    },

    user_id: {
      type: DataTypes.UUID,
      references: {
        model: 'User',
        key: 'id'
      }
    },

    group_id: {
      type: DataTypes.UUID,
      references: {
        model: 'Group',
        key: 'id'
      }
    },

    pet_id: {
      type: DataTypes.UUID,
      references: {
        model: 'Pet',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Like',
  }
);

module.exports = Like;