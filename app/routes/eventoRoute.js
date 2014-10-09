var express = require('express');
var router = express.Router();

var EventoNegocio = require('../negocio/EventoNegocio');




/* GET Login */
router.get('/', function(req, res) {
	var en = new EventoNegocio();
	var eventos = en.listado();
	res.render('evento', {eventos:eventos});

});


module.exports = router;
