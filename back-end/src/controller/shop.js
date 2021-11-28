const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const Shop = require('../models/shopSchema');
exports.registerShop = async (req, res)=>{
    const { vendorId, name, address, phoneNumber, category, city, country,zipcode }= req.body;
    if(!vendorId || !name || !address || !phoneNumber || !category || !city || !zipcode|| !country ){
        return res.status(422).json({error: "Fill all fileds"});
    }
    try{
        const shopExist =  await Shop.findOne({address:address});
        if(shopExist){
                return res.send({
                    message: "Already Used Address Unique Address Required",
                    Shop_Exist: true,
                });
        }
        
        const shop = new Shop({vendorId, name, address, phoneNumber, category, city, country, zipcode });

        await shop.save();
        return res.status(201).json({message: "Succesfully registered", shop});
        
    }catch(e){
        return res.status(500).json({error: e});
    }
    // Shop.findOne({address:address})
    // .then((shopExist)=>{
    //     if(shopExist){
    //         return res.send({
    //             message: "Already Used Address Unique Address Required",
    //             Shop_Exist: true,
    //         });
    //     }
    //     const shop = new Shop({vendorId, name, address, phoneNumber, category, city, country, zipcode });
    //     shop.save().then(()=>{
    //         return res.status(201).json({message: "Succesfully registered", shop});
    //     }).catch((err)=>{
    //         return res.status(500).json({error: err});
    //     });
    // }).catch((err)=>{
    //     return res.status(500).json({error: err});
    // });
   
   
}