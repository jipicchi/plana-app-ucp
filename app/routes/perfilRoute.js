var express = require('express');
var router = express.Router();




/* GET Login */
router.get('/', function(req, res) {
  res.render('perfil', {});
});


module.exports = router;
