const express = require('express');
//Vamos a routear a los pintores
let pintor = require('../controllers/PintoresController.js');

let router = express.Router();

router.get('/', pintor.list);

module.exports = router;