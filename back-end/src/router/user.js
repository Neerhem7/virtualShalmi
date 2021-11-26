const express = require('express');
const router = express.Router();
const { signup , signin, dashboard,vendordashboard, updateUser, deleteUser, getUser, getVendor, getRetailer, getAdmin} = require('../controller/user');
const {requireSignin,authenticate, vendorMiddleware} = require('../middlewares/index');
router.post('/registerUser', signup);
router.post('/signin', signin);
router.post('/dashboard', requireSignin , dashboard);

router.post('/updateUser',requireSignin, updateUser);
router.post('/deleteUser',deleteUser);


router.post('/vendor/dashboard', authenticate, (req, res)=>{
    const user = req.user;
    const product = req.product
    res.status(201).json({user, product});
})
router.get('/getUser',getUser);
router.get('/getAdmin',getAdmin);
router.get('/getVendor',getVendor);
router.get('/getRetailer', getRetailer);

module.exports = router;