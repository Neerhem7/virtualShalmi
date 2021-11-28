const express = require('express');
const router = express.Router();
const { vendorMiddleware , requireSignin} = require('../middlewares/index');
const { addProduct, getProduct, getSingleProduct } = require('../controller/product');

const multer = require('multer');
const shortid = require('shortid');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
      
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })
  
const upload = multer({ storage });

router.post('/addProduct',requireSignin, vendorMiddleware, addProduct);
router.get('/getProduct',getProduct);
router.get('/getSingleProduct/:id',getSingleProduct);

module.exports = router;
