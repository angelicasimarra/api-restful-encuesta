var rutasUsuarios = require("express").Router();

rutasUsuarios.get('/usuarios', (req, res) => {
	res.send(" Usuarios ");
});

module.exports = rutasUsuarios;