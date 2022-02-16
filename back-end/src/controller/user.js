const User = require('../models/userSchema');
const Product = require('../models/productSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// const sendmail = require('@sendgrid/mail');
// var nodemailer = require('nodemailer');



exports.signup = async (req, res)=>{
    const {name, email, phoneNumber, password, cpassword, role}= req.body;
    if(!name || !email || !phoneNumber || !password || !cpassword || !role){
        return res.status(422).json({error: "Fill all fileds"});
    }
    try{
        const userExist =  await User.findOne({ email: email});
        if(userExist && userExist.role == role){
            return res.send({
                message: "Email Already Exist. Try different Email or Sign In",
                Already_Exist: true,
            });
        }
        if(password != cpassword){
            return res.send({
                message: "Password and Confirm password not match",
                Confirm_Password: true,
            });
        }
        const user= new User({name, email, phoneNumber, password, role});

        await user.save()
        return res.status(201).json({user});
        
    }catch(e){
        return res.status(500).json({error: e});
    }
};

exports.signin = async (req, res) =>{
    const {email, password, role}= req.body;
    if(!email || !password || !role){
        return res.send({
            message: "Fill all fileds",
            
        });
    }
    try{
        
        const user =await User.findOne({ email: email});
        if(user){
            const match = await bcrypt.compare(password, user.password);
            console.log(match)
            if(match){
                const token = jwt.sign({_id: user._id , role: user.role}, process.env.JWT_SECERT_KEY,{ expiresIn: '1h'});
                if(user.role == role){
                    return res.status(200).json({ token, user, User_Exist: true});
                }  
            }
        }
        return res.send({
            message: "email or password is wrong",
            Wrong_User : true
        });
        
    }catch(e){
        return res.status(500).json({error: e});
    }
};

exports.retailerdashboard = async (req, res)=>{
    try{
        const user = req.user;
        if(user){
            const user = await User.find({_id : user._id }); 
            return res.status(200).json({ user});        
        }
        return res.send({
            message: "Sothemthing wrong",
            Wrong_User : true
        });
        
    }catch(e){
        return res.status(500).json({error: e});
    }
};
exports.vendordashboardProduct= async (req, res)=>{
    const user = req.user;
    try {
        const product = await Product.find({createdBy : user._id })
        return res.status(200).json({ product}); 
    } catch (error) {
        
    }
};
exports.vendordashboard =  async (req, res)=>{
    try{
        const user = req.user;
        if(user){
            const product = await Product.find({createdBy : user._id }).countDocuments();
            const publish = await Product.find({createdBy : user._id, visibility:"yes" }).countDocuments();
            const sale = await Product.find({createdBy : user._id, onSale: "yes" }).countDocuments();
            const outstock = await Product.find({createdBy : user._id, status: "outStock" }).countDocuments();
            console.log(outstock);
            return res.status(200).json({ user,
                tProduct: product,
                saleProduct: sale,
                publish: publish,
                outstock: outstock
            });        
        }
        return res.send({
            message: "Sothemthing wrong",
            Wrong_User : true
        });
        
    }catch(e){
        return res.status(500).json({error: e});
    }
};
exports.getUser = async (req, res)=>{

    try {
        const user = await User.find({}); 
        res.status(201).json({user});
    } catch (e) {
        return res.status(500).json({error: e});
    }
};
exports.getAdmin = async (req, res)=>{
    try {
        const user = await User.find({"role":"admin"}); 
        res.status(201).json({user});
    } catch (e) {
        return res.status(500).json({error: e});
    }
};
exports.getVendor = async (req, res)=>{
    try {
        const user = await User.find({"role":"vendor"}); 

        res.status(201).json(user);
    } catch (e) {
        return res.status(500).json({error: e});
    }
};
exports.getRetailer = async (req, res)=>{
    try {
        const user = await User.find({"role":"retailer"}); 
        res.status(201).json({user});
    } catch (e) {
        return res.status(500).json({error: e});
    }
};
exports.updateUser = async (req, res)=>{
    var {name, phoneNumber, password, cpassword}= req.body;
    var _id = req.user._id;
    if(password){
        if(password != cpassword){
            return res.status(422).json({error: "Password and Confrim password not match"});
        }
        else{
            password = await bcrypt.hash(password, 12);
        }
    }
    try{
        const update = await User.findOneAndUpdate({_id},{name, phoneNumber, password});
        return res.status(200).json({message: "changed"});
    }catch{
        return res.status(422).json({error: err});
    }
};

exports.deleteUser = (req, res)=>{
    const {email, reason}= req.body;
    if(!email || !reason){
        return res.status(422).json({error: "Fill all fileds"});
    }
    User.findOneAndDelete({email: email})
    .then(()=>{
        return res.status(200).json({message: "Deleted"});
    }).catch((err)=>{
        return res.status(422).json({error: "not 1 exist"});
    });  
}