var express = require('express');
var router = express.Router();

var LugarNegocio = require('../negocio/LugarNegocio');




/* GET Login */
router.get('/', function(req, res) {
	var ln = new LugarNegocio();
	var lugares = ln.listado();
	res.render('lugar', {lugares:lugares});

});


//Buscar 
router.get('/buscar', function(req, res) {
	
	var lugares = [];
	var ln = new LugarNegocio();


	if (req.query.q!=null && req.query.q.length) {
		lugares = ln.buscar(req.query.q);
	}else{
		lugares = ln.listado();
	}

  res.render('lugarBuscar', 
  			{lugares:lugares,
  			 query:req.query.q});
});


module.exports = router;
