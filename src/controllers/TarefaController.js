const Tarefas = require("../models/Tarefas.js");

module.exports = {
  async list(req, res) {
    try {
      const taskList = await Tarefas.findAll();

      return res.json(taskList);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async getTaksById(req, res) {
    try {
      const { id } = req.params;
      const taskById = await Tarefas.findOne({ where: { id: Number(id) } });
      if (!taskById) {
        return res.status(404).send({ message: "Task not found" });
      }

      return res.json(taskById);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async deleteTaksById(req, res) {
    try {
      const { id } = req.params;
      const taskById = await Tarefas.findOne({ where: { id: Number(id) } });
      if (!taskById) {
        return res.status(404).send({ message: "Task not found" });
      }

      await Tarefas.destroy({ where: { id: Number(id) }})

      return res.status(200).send({ message: "Task deleted successfully"});
    } catch (error) {
      console.log('error ->', error)
      return res.status(400).send(error);
    }
  },

  async store(req, res) {
    try {
      const { tarefas, vencidos, d_zero, d_um, d_dois, d_tres, total } =
        req.body;

      const resTarefas = await Tarefas.create({
        tarefas,
        vencidos,
        d_zero,
        d_um,
        d_dois,
        d_tres,
        total,
      });

      return res.json(resTarefas);
    } catch (error) {
      console.log("error -->", error);
      return res.status(400).send(error);
    }
  },
};
