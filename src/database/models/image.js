'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {

    static associate(models) {
      this.belongsTo(models.Product)
    }
  }
  Image.init({
    name: DataTypes.STRING,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};





