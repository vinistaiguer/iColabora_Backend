'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.createTable('Tasks', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        tarefas: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        vencidos: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        d_zero: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        d_um: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        d_dois: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        d_tres: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        total: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('Tasks');
    
  }
};
