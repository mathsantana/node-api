'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize
        .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
        .then(() => {
          return queryInterface.createTable('itens', {
            id: {
              type: Sequelize.UUID,
              defaultValue: Sequelize.literal('uuid_generate_v4()'),
              primaryKey: true,
            },
            nome: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            preco_unidade: {
              type: Sequelize.FLOAT,
              allowNull: false,
            },
            created_at: {
              type: Sequelize.DATE,
              allowNull: false,
            },
            updated_at: {
              type: Sequelize.DATE,
              allowNull: false,
            },
          });
        });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('itens');
  },
};
