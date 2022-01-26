const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');
// const Tarefa = require('../models/Tarefas.js')

const connection = new Sequelize(dbConfig);

// Tarefa.init(connection);

module.exports = connection;