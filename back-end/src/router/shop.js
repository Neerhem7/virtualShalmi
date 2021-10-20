const express = require('express');
const router = express.Router();
const { registerShop } = require('../controller/shop');


router.post('/registerShop', registerShop);

module.exports = router;

