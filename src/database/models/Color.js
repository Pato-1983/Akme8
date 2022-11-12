'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {

    static associate(models) {
      // define association here
      this.hasMany(models.Product)
    }
  }
  Color.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Color',
  });
  return Color;
};