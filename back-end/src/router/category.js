const express = require('express');
const router = express.Router();
const { addCategory,getCategory } = require('../controller/category');
const { adminMiddleware , requireSignin} = require('../middlewares/index');

router.post('/addCategory',requireSignin,adminMiddleware, addCategory);
router.get('/getCategory',getCategory);
module.exports = router;