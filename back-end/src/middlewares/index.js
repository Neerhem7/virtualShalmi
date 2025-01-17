const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');
const Product = require('../models/productSchema');
exports.requireSignin = async (req, res, next)=>{
    console.log("verfiy");
    try {
        if(req.headers.authorization){
            const token = req.headers.authorization.split(" ")[1];
            const user = jwt.verify(token , process.env.JWT_SECERT_KEY);
            req.user = user;        
        }else{
            return res.send({
                message: "authorization required",
                Authenticate : false
            });
        }
    } catch (error) {
        return res.send({
            message: "authorization required",
            Authenticate : false
        });
    }
   
    next();
}

exports.vendorMiddleware =  (req,res, next)=>{
        console.log("vendor")
        if(req.user.role !== 'vendor'){
            return res.send({
                message: "aaccess deined",
                Authenticate : false
            });
        }
    next();
}
exports.retailerMiddleware =  (req,res, next)=>{
    console.log("retailer")
    if(req.user.role !== 'retailer'){
        return res.send({
            message: "aaccess deined",
            Authenticate : false
        });
    }
next();
}
exports.adminMiddleware = (req,res, next)=>{
    console.log("vadmin")
    if(req.user.role !== 'admin'){
        return res.status(400).json({error: "access deined "});       
    }
    next();
}