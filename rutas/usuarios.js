var rutasUsuarios = require("express").Router();
var usuariosController = require('../controladores/usuariosController');

rutasUsuarios.get('/usuarios', usuariosController.getUsuarios);
rutasUsuarios.get('/usuarios/:id', usuariosController.getUsuarios);

module.exports = rutasUsuarios;