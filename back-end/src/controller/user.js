const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sendmail = require('@sendgrid/mail');
const crypto = require('crypto');
var nodemailer = require('nodemailer');



exports.signup = async (req, res)=>{
    const {name, email, phoneNumber, password, cpassword, role, emailToken, isVerified}= req.body;
    if(!name || !email || !phoneNumber || !password || !cpassword || !role){
        return res.status(422).json({error: "Fill all fileds"});
    }
    try{
        const userExist =  await User.findOne({ email: email});
        if(userExist){
            return res.status(422).json({error: "Email already regitered"});
        }
        if(password != cpassword){
            return res.status(422).json({error: "Password and Confrim password not match"});
        }
        
        
       const verifycode= Math.floor(100000 + Math.random() * 900000);
      
    

        var transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
                user: 'sp18-bse-117@cuilahore.edu.pk',
                pass: 'mehr2000'
            }
        });
        const mailOptions = {
          from: 'sp18-bse-117@cuilahore.edu.pk', // sender address
          to: email, // list of receivers
          subject: 'Verify the User', // Subject line
          html: `<p>Thanks You For verification :: ${verifycode} </p>`// plain text body
        };
        transporter.sendMail(mailOptions, function (err, info) {
           if(err)
             console.log(err)
           else
             console.log(info);
        });


        console.log('check mail');
        const user= new User({name, email, phoneNumber, password, role,verify:verifycode});

        await user.save()
        return res.status(201).json({message: "Succesfully registered"});
        
    }catch(e){
        return res.status(500).json({error: e});
    }
};

exports.signin = async (req, res) =>{
    const {email, password}= req.body;
    if(!email || !password){
        return res.status(422).json({error: "Fill all fileds"});
    }
    try{
        const userExist =await User.findOne({ email: email});
        if(userExist){
            if(bcrypt.compare(password, userExist.password)){
                const token = jwt.sign({_id: userExist._id , role: userExist.role}, process.env.JWT_SECERT_KEY,{ expiresIn: '1h'});
                return res.status(200).json({ token, userExist});
            }
        }
        return res.status(422).json({error: "email or password is wrong"});
        
    }catch(e){
        return res.status(500).json({error: e});
    }
};
exports.dashboard = (req, res)=>{
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