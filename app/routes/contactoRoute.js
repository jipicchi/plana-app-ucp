var express = require('express');
var router = express.Router();

var ContactoNegocio = require('../negocio/ContactoNegocio');




/* GET Login */
router.get('/', function(req, res) {
	var cn = new ContactoNegocio();
	var contactos = cn.listado();
	res.render('contacto', {contactos:contactos});

});


//Buscar 
router.get('/buscar', function(req, res) {
	
	var contactos = [];
	var cn = new ContactoNegocio();


	if (req.query.q!=null && req.query.q.length) {
		contactos = cn.buscar(req.query.q);
	}else{
		contactos = cn.listado();
	}

  res.render('contactoBuscar', 
  			{contactos:contactos,
  			 query:req.query.q});
});


module.exports = router;
