const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role: {
        type: Number,
        default: '0'
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userPicture: {
        type: Object
    },
    username: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    resetToken: {
        type: String
    },
    expireToken: {
        type: String
    },
    shopName: {
        type: String
    },
    shopAddress: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    postalCode: {
        type: String
    },
    verification: {
        type: Boolean,
        default: false
    },
    orders: {
        type: Array
    }, 
    address: {
        type: String,
    },
    star: {
        type: String
    }
  
}, {timestamps: true}
);

const userModel = new mongoose.model('User', userSchema);
module.exports = userModel;
