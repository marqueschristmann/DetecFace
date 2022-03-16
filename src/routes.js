const express = require("express");

const routes = express.Router();

const Usuario = require("./controllers/usuarios.controllers.js");
const Professor = require("./controllers/professor.controllers");
///const Usuario = require("./controllers/Cadastro.controllers");

///const Usuario = require("./controllers/updateUsuarios.controllers");
///const Usuario = require("./controllers/listaUsuarios.controllers");

///const Usuario = require("./controllers/deleteUsuarios.controllers");
///const Usuario = require("./controllers/longin.controllers");

/// rotas de usuario
routes.get("/", Usuario.index);
routes.get("/api/usuarios", Usuario.index);
routes.get("/api/usuarios.details/:_id", Usuario.details);
routes.post("/api/usuarios", Usuario.create);
routes.put("/api/usuarios", Usuario.update);
routes.delete("/api/usuarios/:_id", Usuario.delete);

/// rotadas dos Professor
routes.get("/", Professor.index);
routes.get("/api/professor", Professor.index);
routes.get("/api/professor.details/:_id", Professor.details);
routes.post("/api/professor", Professor.create);
routes.put("/api/professor", Professor.update);
routes.delete("/api/professor/:_id", Professor.delete);

module.exports = routes;
