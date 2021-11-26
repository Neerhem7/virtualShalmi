const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    Sku: {
        type: String,
        min: 3,
        max: 8,
        require: true
    },
    name:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
        enum: ['inStock','outStock'],
        default:'inStock'
    },
    onSale:{
        type: String,
        required: true,
        enum: ['no','yes'],
        default:'no'
    },
    visibility:{
        type: String,
        required: true,
        enum:['yes','no'],
        default: 'yes'
    },
    shortDescription:{
        type: String,
        max: 400
    },
    Description:{
        type: String
    },
    price:{
        type: Number,
        required: true
    },
    salePrice:{
        type: Number
    },
    DateSaleStart:{
        type: Date,
        default: new Date()
    },
    DateSaleEnd:{
        type: Date
    },
    inStock:{
        type: Number,
        required: true
    },
    outStock:{
        type: Number,
        required: true
    },
    backOrder:{
        type: String,
        enum: ['yes','no'],
        default: 'yes'
    },
    productImg:[
        {img: {
            type: String
        }}
    ],
    category:{type:mongoose.Schema.Types.ObjectId, ref: "User", require: true },
    reviews:[
        {
            userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
            review:{type: String},
            reviewAt: Date
        }
    ],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: "User"
    },
    updateAt:  Date


},{timestamps: true})

const Product = mongoose.model('PRODUCT', productSchema);

module.exports = Product;