const mongoose = require('mongoose');
const shopSchema = new mongoose.Schema({
    vendorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
        min: 3
    },
    address: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    country:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    zipcode:{
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},{timestamps: true})

const Shop = mongoose.model('SHOP', shopSchema);

module.exports = Shop;