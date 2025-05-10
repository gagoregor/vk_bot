const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  description: DataTypes.TEXT,
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  imageUrl: DataTypes.STRING
});

module.exports = Product;
