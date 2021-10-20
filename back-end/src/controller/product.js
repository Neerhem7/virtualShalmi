const Product = require('../models/productSchema');
const mongoose = require('mongoose');
exports.addProduct = async (req, res)=>{

    //res.status(200).json( {file: req.files, body: req.body});
    const {Sku, name, status, visibility, shortDescription, Description, price, salePrice, DateSaleStart, 
    DateSaleEnd, inStock, outStock, category, backOrder} = req.body;

    //var category = mongoose.Types.ObjectId(categoryId);
    try{

        let productImg = [];
        if(req.files.length > 0){
            productImg = req.files.map(file =>{ 
                return {img : file.filename};
            })
        }
        const product = new Product({Sku, name, status, visibility, shortDescription, Description, price, salePrice, DateSaleStart, 
            DateSaleEnd, inStock, outStock, backOrder, productImg, category, createdBy: req.user._id});
        
        await product.save()
        return res.status(201).json({ product });
            
    }catch(e){
        return res.status(500).json({error: e});
    }

}