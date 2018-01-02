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
	
	insertarUsuario(req, res){
		let data_usuario  = req.body;
		db.query(`INSERT INTO usuarios (usuario_nombre, usuario_username) VALUES 
					( '${data_usuario.nombre}', '${data_usuario.username}' ) ` ,function(err,result){
			
			res.contentType("application/json");
		    if(err){
		    	db.end();
		        res.status(400).send(err);
		    }
		    
			res.status(200).send({msj : 'Registro exitoso.'});
				   
	   });
	}
	
	actualizarUsuario(req, res){
		db.query(`UPDATE usuarios SET usuario_nombre = '${req.body.nombre}', usuario_username = '${req.body.username}' 
					WHERE usuario_id = '${req.body.id}' ` ,function(err,result){
			
			res.contentType("application/json");
		    if(err){
		    	db.end();
		        res.status(400).send(err);
		    }
		    
			res.status(200).send({msj : 'Actualizacion exitosa.'});
				   
	   });
	}
	
	eliminarUsuario(req, res){
		db.query(` DELETE FROM usuarios WHERE usuario_id = '${req.params.id}' ` ,function(err,result){
			
			res.contentType("application/json");
		    if(err){
		    	db.end();
		        res.status(400).send(err);
		    }
		    
			res.status(200).send({msj : 'Registro eliminado.'});
				   
	   });
	}
	
}

module.exports = new usuariosController();