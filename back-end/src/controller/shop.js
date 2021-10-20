const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const Shop = require('../models/shopSchema');
exports.registerShop = (req, res)=>{
    const { vendorID, name, address, phoneNumber, category }= req.body;
    if(!vendorID || !name || !address || !phoneNumber || !category){
        return res.status(422).json({error: "Fill all fileds"});
    }
    Shop.findOne({address:address})
    .then((shopExist)=>{
        if(shopExist){
            return res.status(500).json({error: `Already registered: Unique address`});
        }
        const shop = new Shop({vendor:mongoose.Types.ObjectId('615b2ef0459d9cdc6ced1'), name, address, phoneNumber, category });
        shop.save().then(()=>{
            return res.status(201).json({message: "Succesfully registered"});
        }).catch((err)=>{
            return res.status(500).json({error: 'eer'});
        });
    }).catch((err)=>{
        return res.status(500).json({error: err});
    });
}