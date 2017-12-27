var express = require("express");
var app = express();

/*Configuracion Basica*/
var bodyParse = require("body-parser");
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended : true }));

/*Configuracion Rutas*/
app.get('/', function (req, res) {
  res.send('Hello!');
});

var rutaUsuario = require("./rutas/usuarios");
var rutaPreguntas = require("./rutas/preguntas");
app.use( rutaUsuario );
app.use( rutaPreguntas );

/*Arrancar servidor*/
var server = app.listen(3000, () => {
	console.log("Server is running, port 3000...");
});