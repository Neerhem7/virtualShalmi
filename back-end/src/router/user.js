const express = require('express');
const router = express.Router();
const { signup , signin,vendordashboard, retailerdashboard,vendordashboardProduct,updateUser, deleteUser, getUser, getVendor, getRetailer, getAdmin} = require('../controller/user');
const {requireSignin, vendorMiddleware,retailerMiddleware,} = require('../middlewares/index');
router.post('/registerUser', signup);
router.post('/signin', signin);
// router.post('/dashboard', requireSignin , dashboard);

router.post('/updateUser',requireSignin, updateUser);
router.post('/deleteUser',deleteUser);
router.get('/vendor/dashboard', requireSignin, vendorMiddleware,vendordashboard)
router.get('/vendor/dashboard/product', requireSignin, vendorMiddleware,vendordashboardProduct)

router.get('/retailer/dashboard', requireSignin, retailerMiddleware,retailerdashboard)
router.get('/getUser',getUser);
router.get('/getAdmin',getAdmin);
router.get('/getVendor',getVendor);
router.get('/getRetailer', getRetailer);

module.exports = router;