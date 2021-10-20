const express = require('express');
const router = express.Router();
const { signup , signin, dashboard, updateUser, deleteUser, getUser, getVendor, getRetailer, getAdmin} = require('../controller/user');
const {requireSignin} = require('../middlewares/index');
router.post('/registerUser', signup);
router.post('/signin', signin);

router.post('/dashboard', requireSignin , dashboard);

router.post('/updateUser',requireSignin, updateUser);
router.post('/deleteUser',deleteUser);

router.get('/getUser',getUser);
router.get('/getAdmin',getAdmin);
router.get('/getVendor',getVendor);
router.get('/getRetailer', getRetailer);

module.exports = router;