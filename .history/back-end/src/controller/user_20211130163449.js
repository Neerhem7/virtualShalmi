const User = require('../models/userSchema');
const Product = require('../models/productSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Token = require('../models/tokenSchema');
const crypto=require('crypto');
const sendEmail=require('../sendEmail')
// const sendmail = require('@sendgrid/mail');
// var nodemailer = require('nodemailer');



exports.signup = async (req, res)=>{
    const {name, email, phoneNumber, password, cpassword, role}= req.body;
    // if(!name || !email || !phoneNumber || !password || !cpassword ){
    //     console.log('love')
    //     return res.status(422).json({error: "Fill all fileds"});
    // }
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
       await user.save();

         var token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });
         await token.save();
       
         const message = `${process.env.BASE_URL}/user/verify/${user.id}/${token.token}`;
    await sendEmail(user.email, "Verify Email", message);

    res.send("An Email sent to your account please verify");
    }catch(e){
        return res.status(500).json({error: e});
    }
};
exports.verify=async (req, res)=>{
    try {
        const user = await User.findOne({ _id: req.params.id });
        if (!user) return res.status(400).send("Invalid link");
    
        const token = await Token.findOne({
        //   userId: user._id,
          token: req.params.token,
        });
        if (!token) return res.status(400).send("Invalid link");
    
        await User.updateOne({ _id: user._id, verified: true });
        await Token.findByIdAndRemove(token._id);
    
        res.send("email verified sucessfully");
      } catch (error) {
        res.status(400).send("An error occured");
      }
}

exports.signin = async (req, res) =>{
    const {email, password, role}= req.body;
    if(!email || !password || !role){
        return res.send({
            message: "Fill all fileds",
            
        });
    }
    try{
        const user =await User.findOne({ email: email});

        if(!user)
        {
            res.send({
                message: "you entered a wrong email as user with this email doesn't exist",

            })
        }
        if(user.isVerified==false)
        {
            res.send({
                message: 'kindly verify you your email address before log in'
            })
        }
        
        if(bcrypt.compare(password, user.password)){
                const token = jwt.sign({_id: user._id , role: user.role}, process.env.JWT_SECERT_KEY,{ expiresIn: '1h'});

                if(user.role == role){


                    return res.status(200).json({ token, user, User_Exist: true});
                }
                return res.send({message: 'email or password is wrong'})
                
            }
        } catch(e){
        return res.status(500).json({error: e});
    }
};

exports.dashboard = (req, res)=>{
    res.send({message: "dashboard"});
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
            return res.status(200).json({ token, user});        
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