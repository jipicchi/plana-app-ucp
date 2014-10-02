var express = require('express');
var router = express.Router();




/* GET Login */
router.get('/', function(req, res) {
  res.render('evento', {});
});


module.exports = router;
