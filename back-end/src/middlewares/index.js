const jwt = require('jsonwebtoken');
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