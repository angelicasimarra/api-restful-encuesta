var db = require('../conexion/con');

class usuariosController{
	
	getUsuarios(req, res) {
		let id_usuario  = req.params.id;
		let where = id_usuario == undefined ? '' : ` AND usuario_id = ${id_usuario}`;
		db.query(`SELECT usuario_id as id, usuario_nombre as nombre, usuario_username as username, 
				usuario_token as token 
			   FROM usuarios WHERE usuario_estado = 'A' ${where} ` ,function(err,result) {
				   
			res.contentType("application/json");
		    if(err){
		    	db.end();
		        res.status(400).send(err);
		    }
		    
		    if(result.rowCount <= 0){
		    	res.status(400).send("El usuario no existe.");
		    }
		    
		    res.status(200).send(result.rows);
		});
	}
	
}

module.exports = new usuariosController();