const Product = require("../models/productSchema");
const { cloudinary } = require("../Cloudinary");

exports.addProduct = async (req, res) => {
  const {
    Sku,
    name,
    status,
    visibility,
    shortDescription,
    Description,
    price,
    salePrice,
    DateSaleStart,
    DateSaleEnd,
    inStock,
    outStock,
    productimg,
    category,
    backOrder,
    onSale,
  } = req.body;
  const createdBy=req.user._id;
  try {
    let productImg = [];
    if (productimg.length > 0) {
      productImg = productimg.map(async (pimg) => {
        await cloudinary.uploader.
        upload(pimg,
            {folder: 'VirtualShalmi/Product', public_id: {name}}, function(error, result){
                console.log(result)
                url=result.url;
            });
            
        console.log(url);
        return { pimg:pimg};
      });
    }

    const product = await new Product({
      Sku,
      name,
      status,
      visibility,
      onSale,
      shortDescription,
      Description,
      price,
      salePrice,
      DateSaleStart,
      DateSaleEnd,
      inStock,
      outStock,
      backOrder,
      productImg,
      category,
      createdBy,
    });
    console.log("produ")
    await product.save();
    return res.status(201).json({ product });
  } catch (e) {
    return res.status(500).json({ error: e });
  }
};
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(201).json(product);
  } catch (e) {
    return res.status(500).json({ error: e });
  }
};
exports.getSingleProduct = async (req, res) => {
  try {
    const id =req.params.id;
    console.log(id);
    const product = await Product.findOne({_id: id});
    res.status(201).json(product);
  } catch (e) {
    return res.status(500).json({ error: e });
  }
};
exports.getVendorProduct = async (req, res) => {
  const user= req.user;
    try {
        const product = await Product.find({createdBy : user._id }).sort({"createdAt":1})
        return res.status(200).json(product); 
    } catch (error) {
    return res.status(500).json({ error: e })
    }
};
