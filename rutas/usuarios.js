var rutasUsuarios = require("express").Router();
var usuariosController = require('../controladores/usuariosController');

rutasUsuarios.get('/usuarios', usuariosController.getUsuarios);
rutasUsuarios.get('/usuarios/:id', usuariosController.getUsuarios);
rutasUsuarios.post('/usuarios', usuariosController.insertarUsuario);
rutasUsuarios.put('/usuarios', usuariosController.actualizarUsuario);
rutasUsuarios.delete('/usuarios/:id', usuariosController.eliminarUsuario);

module.exports = rutasUsuarios;