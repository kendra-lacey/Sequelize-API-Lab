'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Plant.hasMany(models.Watering, {
        foreignKey: 'catId',
        as: 'waterings'
      })
    }
  }
  Plant.init({
    name: DataTypes.STRING,
    lightRequirements: DataTypes.STRING,
    toxic: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Plant',
  });
  return Plant;
};