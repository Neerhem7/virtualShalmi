const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    slug:{
        type: String,
        required: true,
        trim: true
    },
    parentId:{
        type: String,
    }
}, {
    timestamps: true
});

const Category = mongoose.model('CATEGORY', categorySchema);

module.exports = Category;