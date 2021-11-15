'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('heros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickname: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      realName: {
        type: Sequelize.STRING(64),
        allowNull: false,
        field: 'real_name'
      },
      originDescription: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'origin_description'
      },
      catchPhrase: {
        type: Sequelize.STRING(64),
        allowNull: false,
        field: 'catch_phrase'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('heros');
  }
};