const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Match extends Model {}

Match.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    group_id: {
      type: DataTypes.UUID,
      references:{
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
    modelName: 'Match',
  }
);

module.exports = Match;