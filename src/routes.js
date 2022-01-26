const axios = require("axios");
const TarefaController = require("./controllers/TarefaController.js");
const TarefasModel = require("./models/Tarefas.js");

const router = function (app) {
  const api = "https://ico-fullstack-test.herokuapp.com/v1/histograma";

  app.post("/adddata", TarefaController.store);

  app.get("/tasks", TarefaController.list );

  app.get("/tasks/:id", TarefaController.getTaksById );

  app.delete("/tasks/:id", TarefaController.deleteTaksById );

  app.get("/addTaskAuto", async (req, res, next) => {
    try {
      let { data } = await axios(api);
      
      data.pop();

      let normalizedJson = [];

      for (task of data){
        normalizedJson.push({
          tarefas: task["TAREFA"],
          vencidos: task["VENCIDO"],
          d_zero: task["D0"],
          d_um: task["D1"],
          d_dois: task["D2"],
          d_tres: task["D3"],
          total: task["TOTAL"],
        })
      }

      //const normalizedJson = await data.map((res) => ({
      //  tarefas: res["TAREFA"],
      //  vencidos: res["VENCIDO"],
      //  d_zero: res["D0"],
      //  d_um: res["D1"],
      //  d_dois: res["D2"],
      //  d_tres: res["D3"],
      //  total: res["TOTAL"],
      //}));

      const returnBulkCreate = await TarefasModel.bulkCreate(normalizedJson, {
        returning: true,
      });

      //for (const task of normalizedJson) {
      //  const { tarefas, vencidos, d_zero, d_um, d_dois, d_tres, total } = task;
      //  await TarefasModel.create({
      //    tarefas,
      //    vencidos,
      //    d_zero,
      //    d_um,
      //    d_dois,
      //    d_tres,
      //    total
      //  });
      //}
      
      return res.json(returnBulkCreate);
    } catch (error) {
      console.error(error);
      return res.status(500).json();
    }
  });
};

module.exports = router;
