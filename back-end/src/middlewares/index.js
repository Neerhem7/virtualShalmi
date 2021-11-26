const jwt = require('jsonwebtoken');
const User = require('../models/userSchema');
const Product = require('../models/productSchema');
exports.authenticate = async (req,res,next)=>{
    try{
        const token = req.headers.authorization.split(" ")[1];
        console.log(token)
        const verifytoken = jwt.verify(token , process.env.JWT_SECERT_KEY);
        const user = await User.findOne({_id: verifytoken._id});
        if(user){
            const product = await Product.findOne({createdBy : user._id})

            req.token=token;
            req.user=user;
            req.product=product;
        }

    }catch(e){
        return res.status(500).json({error: "hreskj"});
    }
    next();
}
exports.requireSignin = (req, res, next)=>{
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        const user = jwt.verify(token , process.env.JWT_SECERT_KEY);
        req.user = user;
    }else{
        return res.status(400).json({error: "authorization required"});
    }
    next();
}

exports.vendorMiddleware = (req,res, next)=>{
    if(req.user.role !== 'vendor'){
        return res.status(400).json({error: "access deined "});
    }

    next();
}
exports.adminMiddleware = (req,res, next)=>{
    if(req.user.role !== 'admin'){
        return res.status(400).json({error: "access deined "});
    }
    next();
}