var rutasPreguntas = require("express").Router();

rutasPreguntas.get('/preguntas', (req, res) => {
	res.send(" Preguntas ");
});

module.exports = rutasPreguntas;