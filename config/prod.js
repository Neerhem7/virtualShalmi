module.exports = {
    mongoURI: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpire: process.env.JWT_EXPIRE,
    api_key: process.env.API_KEY,
    DOMAIN: process.env.DOMAIN,
    cloudinary_cloud_name: process.env.CLOUD_NAME,
    cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
    cloudinary_api_secret: process.env.CLOUDINARY_SECRET_KEY,
    stripe_secret: process.env.STRIPE_SECRET_KEY
}
