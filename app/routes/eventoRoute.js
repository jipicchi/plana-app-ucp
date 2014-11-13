var express = require('express');
var router = express.Router();

var EventoNegocio = require('../negocio/EventoNegocio');




/* GET Login */
router.get('/', function(req, res) {
	var en = new EventoNegocio();
	var eventos = en.listado();
	res.render('evento', {eventos:eventos});

});


//Buscar 
router.get('/buscar', function(req, res) {
	
	var eventos = [];
	var en = new EventoNegocio();


	if (req.query.q!=null && req.query.q.length) {
		eventos = en.buscar(req.query.q);
	}else{
		eventos = en.listado();
	}

  res.render('eventoBuscar', 
  			{eventos:eventos,
  			 query:req.query.q});
});

/* Detalle */

router.get('/detalle', function(req, res) {
	var evento=null;
	if (req.query.id != null && req.query.id.length) {
		var en=new EventoNegocio();
		evento=en.obtener(req.query.id);
	}
	res.render('eventoDetalle', 
  			{evento:evento});
 
});

module.exports = router;
