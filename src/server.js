const express = require("express");
const cors = require("cors");

const routes = require("./routes.js");

const port = 3333;
const app = express();

app.use(cors());

app.use(express.json());

routes(app);

app.listen(port, function () {
  console.log(`Server running: http://localhost:${port}`);
  console.log(`Server shut down: crtl + c`);
});
