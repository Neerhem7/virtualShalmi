const mongoonse = require('mongoose');

const productShema = new mongoonse.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    user: {
        type: mongoonse.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true
    },
    offer: {
        type: Number,
        required: true
    },
    qty: {
        type: Number,
        default: 0
    },
    productPictures: {
        type: Array
    },
    mainCategory: { type: mongoonse.Schema.Types.ObjectId, ref: 'Category', required: true },
    subCategory: { type: mongoonse.Schema.Types.ObjectId, ref: 'Category', required: false}
});

const productModel = new mongoonse.model('Product', productShema);
module.exports = productModel;