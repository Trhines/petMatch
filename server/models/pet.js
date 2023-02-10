
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Pet extends Model {}

Pet.init(
  {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },

    animalType:{
        type: DataTypes.STRING,
        defaultValue:''
    },

    breed:{
        type: DataTypes.STRING,
    },

    size:{
        type: DataTypes.STRING,
        //small, medium, large, xlarge
    },

    gender:{
        type: DataTypes.STRING,
    },

    age:{
        type: DataTypes.STRING
    },

    color:{
        type: DataTypes.STRING
    },

    coat:{
        type: DataTypes.STRING
    },

    good_with_children:{
        type: DataTypes.BOOLEAN
    },

    good_with_dogs:{
        type: DataTypes.BOOLEAN
    },

    good_with_cats:{
        type: DataTypes.BOOLEAN
    },

    house_trained:{
        type: DataTypes.BOOLEAN
    },

    declawed:{
        type: DataTypes.BOOLEAN
    },

    special_needs:{
        type: DataTypes.BOOLEAN
    },

    location:{
        type: DataTypes.STRING
        //city, state; latitude,longitude; or postal code.
    },

    distance:{
        type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Pet',
  }
);

module.exports = Pet;