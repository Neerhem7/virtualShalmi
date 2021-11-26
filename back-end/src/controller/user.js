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
            if(bcrypt.compare(password, user.password)){
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

exports.dashboard = (req, res)=>{
    res.send({message: "dashboard"});
};
exports.vendordashboard =  async (req, res)=>{
    const {email}= req.body;
    if(!email){
        return res.send({
            message: "Fill all fileds",
            
        });
    }
    try{
        const user =await User.findOne({ email: email});
        if(user){
            const product = await Product.find({createdBy : user._id })
            return res.status(200).json({ token, user,product});
                
           
        }
        return res.send({
            message: "Sothemthing wrong",
            Wrong_User : true
        });
        
    }catch(e){
        return res.status(500).json({error: e});
    }
    res.send({message: "dashboard"});
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
        res.status(201).json({user});
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