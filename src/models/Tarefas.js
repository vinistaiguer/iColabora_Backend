const { Model, DataTypes } = require("sequelize");
const database = require("../database");



const Tarefas = database.define("Tasks", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  tarefas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vencidos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  d_zero: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  d_um: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  d_dois: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  d_tres: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
module.exports = Tarefas;
