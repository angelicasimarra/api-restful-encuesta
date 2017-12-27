var rutasPreguntas = require("express").Router();
var db = require('../conexion/con');

rutasPreguntas.get('/preguntas', (req, res) => {
	
	db.query(` ` ,function(err,result) {
        if(err){
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
	
});

module.exports = rutasPreguntas;