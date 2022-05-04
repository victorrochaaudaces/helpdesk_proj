"use strict";

// imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");

// constantes de inicio
const api = express();
const port = 3030;

// rodar sem certificado
const serverHttp = http.createServer(api);

// config de cors
const io = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
});

// rotas
const indexR = require("./routes/indexRoute");

// api use
api.use(cors());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());
api.engine("html", require("ejs").renderFile);
api.set("view engine", "html");
api.use("/create-ticket", indexR);
// api.use("/", (req, res) => {
//     res.status(200).render(__dirname + "/src/views/index.html");
// });

module.exports = { serverHttp, io, port };
