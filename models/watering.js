'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Watering extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Watering.init({
    day: {
      type: DataTypes.ENUM('Monday','Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'),
      defaultValue: 'Sunday'
    },
    plantFoodAdded: { 
      type: DataTypes.ENUM('Yes','No')
    },
    plantId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Plants',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Watering',
  });
  return Watering;
};