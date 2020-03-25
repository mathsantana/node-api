const {Model, DataTypes} = require('sequelize');

class Item extends Model {
  static init(sequelize) {
    super.init(
        {
          nome: DataTypes.STRING,
          precoUnidade: {
            type: DataTypes.FLOAT,
            validate: {
              isNumeric: true,
              isGreaterThanZero(value) {
                if (value <= 0) {
                  throw new Error('Value must be greater than zero.');
                }
              },
            },
          },
        },
        {sequelize, modelName: 'itens'},
    );
  }
}

module.exports = Item;
