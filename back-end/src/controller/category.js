const Category = require('../models/categorySchema');
const slugify = require('slugify');

function createCategory(categories, parentId =null){
    const list = [];
    let category; 
    if(parentId == null){
        category = categories.filter(cat =>cat.parentId == undefined);
    }
    else{
        category = categories.filter(cat =>cat.parentId == parentId);
    }
    for( let cate of category){
        list.push({
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            childern: createCategory(categories, cate._id)
        })
    }
    return list;
}

exports.addCategory =  async (req,res)=>{
    try {
        const category = {
            name: req.body.name,
            slug: slugify(req.body.name)
        }
        if(req.body.parentId){
            category.parentId = req.body.parentId;
        }
        const cat = new Category(category);
        await cat.save();
        return res.status(201).json({message: "add category"});
    }catch(e){
        return res.status(500).json({error: e});
    };
 };
 exports.getCategory = async(req, res)=>{
    try {
        const categories = await Category.find({}); 
        const categoryList = createCategory(categories);
        res.status(201).json(categoryList);
    } catch (e) {
        return res.status(500).json({error: e});
    }
    
 };