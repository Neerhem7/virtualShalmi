const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    verify:{
        type: Number
    },
    isVerified:{
        type: Boolean
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'vendor','retailer'],
        default: 'retailer',
        trim: true
    },
    profileImage:{
        type: String
    }
},{timestamps: true})


userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});
userSchema.pre("update", async function(next) {
    console.log('hi')
    const password = this.getUpdate().$set.password;
    if (!password) {
        return next();
    }
    try {
        this.getUpdate().$set.password = await bcrypt.hash(password, 12);
        next();
    } catch (error) {
        return next(error);
    }
});
const User = mongoose.model('USER', userSchema);
module.exports = User;