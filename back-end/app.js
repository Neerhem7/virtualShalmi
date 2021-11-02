const dotenv = require('dotenv');
const express = require('express');
const app = express();
dotenv.config({path:'./config.env'});
const port= process.env.PORT || 8000;
require('./src/db/conn');
app.use(express.json());
const userRoutes = require('./src/router/user');
const shopRoutes = require('./src/router/shop');
const categoryRoutes = require('./src/router/category');
const productRoutes = require('./src/router/product');

app.use(require('./src/router/auth'));

app.use('/user', userRoutes);
app.use('/shop', shopRoutes);
app.use('/category', categoryRoutes);
app.use('/product', productRoutes);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});