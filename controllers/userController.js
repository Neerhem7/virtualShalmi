const User = require('../models/userModel');
const Order = require('../models/orderModel');
const Product = require('../models/productModel');
var bcrypt = require('bcryptjs');
const config = require('../config/keys');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const crypto = require('crypto');
const cloudinary = require('../middlewares/cloudinary');
const cloudinaryConfig = require('../middlewares/cloudinaryConf');
const nodemailer = require('nodemailer');

exports.getAllUsers = async (req, res) => {
    const findUsers = await User.find();
    if (findUsers) {
        res.status(200).json(findUsers);
    } else {
        res.status(404).json({ errorMessage: 'No Users Found' });
    }
}

exports.getAllRetailers = async (req, res) => {
    const findUsers = await User.find({ role: 0 });
    if (findUsers) {
        res.status(200).json(findUsers);
    } else {
        res.status(404).json({ errorMessage: 'No Users Found' });
    }
}

exports.getAllVenders = async (req, res) => {
    console.log('saksf')
    const findUsers = await User.find({ role: 0.5 });
    console.log(findUsers)
    if (findUsers) {
        res.status(200).json(findUsers);
    } else {
        res.status(404).json({ errorMessage: 'No Users Found' });
    }
}

exports.getUserById = async (req, res) => {
    const findUser = await User.findOne({ _id: req.params.id });
    if (findUser) {
        res.status(200).json(findUser);
    } else {
        res.status(404).json({ errorMessage: 'No Users Found' });
    }
}

exports.giveStar = async (req, res) => {
    const findUser = await User.findOne({ _id: req.params.id });
    if (findUser) {
        findUser.star = req.body.star;
        findUser.save((err, result) => {
            if (result) {
                res.status(200).json({ successMessage: 'Stars added!' });
            } else {
                console.log('error', err)
            }
        })
    } else {
        res.status(404).json({ errorMessage: 'No Users Found' });
    }
}

exports.VendorSignUp = async (req, res) => {
    const ifEmailAlreadyPresent = await User.findOne({ email: req.body.email });
    const ifUsernameAlreadyPresent = await User.findOne({ username: req.body.username });
    if (ifEmailAlreadyPresent) {
        res.status(201).json({ errorMessage: 'Email already exists. Please try another one.' });
    }
    else if (ifUsernameAlreadyPresent) {
        res.status(201).json({ errorMessage: 'Username already exists. Please try another one.' });
    }
    else if (req.body.password !== req.body.confirm) {
        res.status(202).json({ errorMessage: "The two passwords you entered don't match." })
    }
    else {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        const uploader = async (path) => await cloudinary.uploads(path, 'VirtualShalmi/User');
        const { path } = req.file;
        const newPath = await uploader(path);
        fs.unlinkSync(path);
        const user = new User({
            role: '0.5',
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            shopName: req.body.shopName,
            shopAddress: req.body.shopAddress,
            postalCode: req.body.postalCode,
            phone: req.body.phone,
            city: req.body.city,
            country: req.body.country,
            password: hash,
            userPicture: newPath
        });

        const saveUser = await user.save();
        if (saveUser) {
            res.status(200).json({ successMessage: 'Account created successfuly!. Please Sign in.' });
        } else {
            res.status(400).json({ errorMessage: 'Account not created. Please try again' });
        }
    }
}

exports.RetailorSignUp = async (req, res) => {
    const ifEmailAlreadyPresent = await User.findOne({ email: req.body.email });
    const ifUsernameAlreadyPresent = await User.findOne({ username: req.body.username });
    if (ifEmailAlreadyPresent) {
        res.status(201).json({ errorMessage: 'Email already exists. Please try another one.' });
    }
    else if (ifUsernameAlreadyPresent) {
        res.status(201).json({ errorMessage: 'Username already exists. Please try another one.' });
    }
    else {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        const uploader = async (path) => await cloudinary.uploads(path, 'Irtaza/User/Images');
        const { path } = req.file;
        const newPath = await uploader(path);
        fs.unlinkSync(path);
        const user = new User({
            role: '0',
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            username: req.body.username,
            postalCode: req.body.postalCode,
            phone: req.body.phone,
            city: req.body.city,
            country: req.body.country,
            password: hash,
            userPicture: newPath
        });

        const saveUser = await user.save();
        if (saveUser) {
            res.status(200).json({ successMessage: 'Account created successfuly!. Please Sign in.' });
        } else {
            res.status(400).json({ errorMessage: 'Account not created. Please try again' });
        }
    }
}



exports.vendorLogin = async (req, res) => {
    const findUser = await User.findOne({
        $or: [{ email: req.body.email }, { username: req.body.email }]
    });

    if (findUser && findUser.role === 0.5) {
        const checkPassword = bcrypt.compareSync(req.body.password, findUser.password);
        if (checkPassword) {
            const payload = {
                user: {
                    _id: findUser._id,
                    role: findUser.role
                }
            }
            jwt.sign(payload, config.jwtSecret, (err, token) => {
                if (err) res.status(400).json({ errorMessage: 'Jwt Error' })

                const {
                    _id,
                    role,
                    firstName,
                    lastName,
                    username,
                    email,
                    userPicture,
                    verification,
                    shopName,
                    shopAddress,
                    postalCode,
                    city,
                    country
                } = findUser;

                res.status(200).json({
                    _id,
                    role,
                    firstName,
                    lastName,
                    username,
                    email,
                    userPicture,
                    token,
                    verification,
                    shopName,
                    shopAddress,
                    postalCode,
                    city,
                    country,
                    successMessage: 'Logged In Successfully',

                });
            });
        } else {
            res.status(201).json({ errorMessage: 'Incorrect username or password.' })
        }

    } else {
        res.status(201).json({ errorMessage: 'Incorrect username or password.' })
    }
}

exports.RetailorLogin = async (req, res) => {
    const findUser = await User.findOne({
        $or: [{ email: req.body.email }, { username: req.body.email }]
    });

    if (findUser && findUser.role === 0) {
        const checkPassword = bcrypt.compareSync(req.body.password, findUser.password);
        if (checkPassword) {
            const payload = {
                user: {
                    _id: findUser._id,
                    role: findUser.role
                }
            }
            jwt.sign(payload, config.jwtSecret, (err, token) => {
                if (err) res.status(400).json({ errorMessage: 'Jwt Error' })

                const {
                    _id,
                    role,
                    firstName,
                    lastName,
                    username,
                    email,
                    userPicture,
                    verification,
                    postalCode,
                    city,
                    country,
                } = findUser;
                res.status(200).json({
                    _id,
                    role,
                    firstName,
                    lastName,
                    username,
                    email,
                    userPicture,
                    token,
                    verification,
                    postalCode,
                    city,
                    country,
                    successMessage: 'Logged In Successfully',

                });
            });
        } else {
            res.status(201).json({ errorMessage: 'Incorrect username or password.' })
        }

    } else {
        res.status(201).json({ errorMessage: 'Incorrect username or password.' })
    }
}

exports.adminLogin = async (req, res) => {
    const findUser = await User.findOne({
        $or: [{ email: req.body.email }, { username: req.body.email }]
    });

    if (findUser && findUser.role === 1) {
        const checkPassword = bcrypt.compareSync(req.body.password, findUser.password);
        if (checkPassword) {
            const payload = {
                user: {
                    _id: findUser._id,
                    role: findUser.role
                }
            }
            jwt.sign(payload, config.jwtSecret, (err, token) => {
                if (err) res.status(400).json({ errorMessage: 'Jwt Error' })

                const { _id, firstName, role, lastName, username, email, userPicture, verification } = findUser;
                res.status(200).json({
                    _id,
                    role,
                    firstName,
                    lastName,
                    username,
                    email,
                    userPicture,
                    token,
                    verification,
                    successMessage: 'Logged In Successfully',

                });
            });
        } else {
            res.status(201).json({ errorMessage: 'Incorrect username or password.' })
        }

    } else {
        res.status(201).json({ errorMessage: 'Incorrect username or password.' })
    }
}


exports.updateVendor = async (req, res) => {
    const findUser = await User.findOne({ _id: req.user._id });
    let imageUpload;
    if (req.file) {
        const imgUrl = findUser.userPicture.id;
        await cloudinaryConfig.uploader.destroy(imgUrl);
        const { path } = req.file;
        const uploading = await cloudinary.uploads(path, 'Irtaza/User/Images');
        imageUpload = uploading;
        await fs.unlinkSync(path);
    }
    else if (req.body.image) {
        imageUpload = findUser.userPicture;
    }
    if (findUser) {
        findUser.firstName = req.body.firstName;
        findUser.lastName = req.body.lastName;
        findUser.email = req.body.email;
        findUser.username = req.body.username;
        findUser.phone = req.body.phone;
        findUser.city = req.body.city;
        findUser.country = req.body.country;
        findUser.shopName = req.body.shopName;
        findUser.shopAddress = req.body.shopAddress;
        findUser.postalCode = req.body.postalCode;
        findUser.userPicture = imageUpload;

        const saveUser = await findUser.save();
        if (saveUser) {
            res.status(200).json({ successMessage: 'User Updated Successfully' })
        } else (
            res.status(400).json({ errorMessage: 'User could not be Updated.' })
        )
    } else {
        res.status(404).json({ errorMessage: 'User not found.' })
    }
}


exports.updateUser = async (req, res) => {
    const findUser = await User.findOne({ _id: req.user._id });
    let imageUpload;
    if (req.file) {
        const imgUrl = findUser.userPicture.id;
        await cloudinaryConfig.uploader.destroy(imgUrl);
        const { path } = req.file;
        const uploading = await cloudinary.uploads(path, 'Irtaza/User/Images');
        imageUpload = uploading;
        await fs.unlinkSync(path);
    }
    else if (req.body.image) {
        imageUpload = findUser.userPicture;
    }
    if (findUser) {
        findUser.firstName = req.body.firstName;
        findUser.lastName = req.body.lastName;
        findUser.email = req.body.email;
        findUser.username = req.body.username;
        findUser.phone = req.body.phone;
        findUser.city = req.body.city;
        findUser.country = req.body.country;
        findUser.postalCode = req.body.postalCode;
        findUser.userPicture = imageUpload;

        const saveUser = await findUser.save();
        if (saveUser) {
            res.status(200).json({ successMessage: 'User Updated Successfully' })
        } else (
            res.status(400).json({ errorMessage: 'User could not be Updated.' })
        )
    } else {
        res.status(404).json({ errorMessage: 'User not found.' })
    }
}

exports.deleteUser = async (req, res) => {
    const findUser = await User.findOne({ _id: req.params.id });
    if (findUser) {
        const del = findUser.remove();
        if (del) {
            res.status(200).json({ successMessage: 'User Deleted Successfully' });
        }
        else {
            res.status(400).json({ errorMessage: 'User could not be deleted. Please Try Again' });
        }


    } else {
        res.status(404).json({ errorMessage: 'User Not Found.' })
    }
}


exports.changePassword = async (req, res) => {
    if (req.body.newPassword !== req.body.confirmNewPassword) {
        res.status(400).json({ errorMessage: 'Passwords do not match.' })
    }
    else {
        const findUser = await User.findById({ _id: req.user._id });
        if (findUser) {
            const checkPassword = bcrypt.compareSync(req.body.oldPassword, findUser.password);
            if (checkPassword) {
                var salt = bcrypt.genSaltSync(10);
                var hash = bcrypt.hashSync(req.body.newPassword, salt);
                findUser.password = hash;
                findUser.save((error, result) => {
                    if (error) {
                        res.status(400).json({ errorMessage: 'Failed to change password' });
                    } else {
                        res.status(200).json({ successMessage: 'Password changed Successfully.' })
                    }
                })
            } else {
                res.status(201).json({ errorMessage: 'Please enter correct old password.' })
            }

        }
    }
}



/***************************************************************** Email Verification ***********************************************************/
exports.sendConfirmationEmail = async (req, res) => {
    crypto.randomBytes(32, (error, buffer) => {
        if (error) {
            console.log(error);
        }
        const token = buffer.toString("hex");
        User.findOne({ email: req.body.email }).then(user => {
            if (!user) {
                res.status(201).json({ errorMessage: 'Email does not exist' });
            } else {
                user.resetToken = token;
                user.save((err, result) => {
                    if (err) {
                        res.status(400).json({ errorMessage: 'Token saving failed' });
                    }
                    if (result) {
                        let url = '';
                        if (process.env.NODE_ENV === 'production') {
                            url = `https://gistoscope-web.herokuapp.com/confirm-email/${token}`
                        } else {
                            url = `http://localhost:3000/confirm-email/${token}`
                        }
                        let transporter = nodemailer.createTransport({
                            service: 'gmail',
                            secure: false,
                            port: 587,
                            auth: {
                                user: config.EMAIL,
                                pass: config.PASSWORD
                            },
                            tls: {
                                rejectUnauthorized: false
                            }
                        })
                        transporter.sendMail({
                            from: config.EMAIL,
                            to: req.body.email,
                            subject: "Email Verification Link",
                            html: `<p>Click this <a href = ${url}>${url}</a> to verify your email.</p>`,
                        }).then(data => {
                            res.status(200).json({ successMessage: 'Check your Inbox!', data });
                        })

                    }
                })
            }

        })
    })


}

exports.confirmEmail = async (req, res) => {
    await User.findOne({ resetToken: req.body.token }).then(user => {
        if (!user) {
            res.status(201).json({ errorMessage: 'Try again. Session expired!' });
        }
        if (user) {
            user.verification = true;
            user.resetToken = '',
                user.save((error, result) => {
                    if (error) {
                        res.status(400).json({ errorMessage: 'Failed to confirm Email' });
                    }
                    if (result) {
                        const { _id, firstName, role, lastName, username, email, userPicture, verification } = result;
                        res.status(200).json({
                            _id,
                            role,
                            firstName,
                            lastName,
                            username,
                            email,
                            userPicture,
                            verification,
                            successMessage: 'Email Confirmed Successfully. Login again!',
                        });
                    }
                })
        }
    });
}



/************************************************ Address Save *************************************************************/
exports.saveAddress = async (req, res) => {
    const user = await User.findOne({ _id: req.user._id });
    if (user) {
        user.address =
            req.body.name + ', ' +
            req.body.mobile + ', ' +
            req.body.address + ', ' +
            req.body.city + ', ' +
            req.body.pinCode + ', ' +
            req.body.country + ', '
        user.save((err, result) => {
            if (result) {
                res.status(200).json({ successMessage: 'Address Saved', result });
            } else {
                res.status(404).json({ errorMessage: 'Address not saved', err });
            }
        })

    } else {
        res.status(404).json({ errorMessage: 'No user Found' });
    }
}




/************************************************ Order *************************************************************/
exports.getAllOrders = async (req, res) => {
    const orders = await Order.find();
    if (orders) {
        res.status(200).json(orders);
    } else {
        res.status(404).json({ errorMessage: 'No orders Found' });
    }
}

exports.getAllVendorOrders = async (req, res) => {
    const orders = await Order.find({ vendorId: req.params.id });
    console.log(orders.length);
    if (orders) {
        res.status(200).json(orders);
    } else {
        res.status(404).json({ errorMessage: 'No orders Found' });
    }
}

exports.getAllOrdersByUserId = async (req, res) => {
    const orders = await Order.find({ userId: req.params.id });
    if (orders) {
        res.status(200).json(orders);
    } else {
        res.status(404).json({ errorMessage: 'No orders Found' });
    }
}

exports.getAllOrderById = async (req, res) => {
    const orders = await Order.findOne({ _id: req.params.id });
    if (orders) {
        res.status(200).json(orders);
    } else {
        res.status(404).json({ errorMessage: 'No orders Found' });
    }
}

exports.placeOrderCOD = async (req, res) => {
    await req.body.cartProducts.forEach(async (item) => {
        const order = new Order({
            userId: req.user._id,
            vendorId: item.vendorId,
            product: {
                name: item.title,
                image: item.image,
                productId: item.productId,
                price: item.price,
                qty: item.qty
            },
            user: {
                image: req.body.image,
                id: req.user._id,
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email,
                address: req.body.address
            },
            placed: req.body.placed,
        });
        await order.save(async (err, result) => {
            if (err) { console.log('Payment Failed') }
            if(result) {
                const findProduct = await Product.findOne({_id: item.productId});
                if(findProduct) {
                    findProduct.qty = findProduct.qty - item.qty;
                    findProduct.save((error, data) => {
                        if(error) {
                            console.log(error)
                        } else {
                            console.log('success');
                        }
                    })
                }
            } else {
                console.log('error');
            }
        })
    })

    res.status(200).json({ successMessage: 'Successfully Purchased Items!' });
}

exports.placeOrderPaypal = async (req, res) => {
    await req.body.cartProducts.forEach(async (item) => {
        const order = new Order({
            userId: req.user._id,
            vendorId: item.vendorId,
            product: {
                name: item.title,
                image: item.image,
                productId: item.productId,
                price: item.price,
                qty: item.qty,
                paymentId: req.body.paymentData.paymentID
            },
            user: {
                image: req.body.image,
                id: req.user._id,
                fname: req.body.fname,
                lname: req.body.lname,
                email: req.body.email,
                address: req.body.address
            },
            data: req.body.paymentData,
            placed: req.body.placed,
        });
        await order.save( async(err, result) => {
            if (err) { console.log('Payment Failed') }
            if(result) {
                const findProduct = await Product.findOne({_id: item.productId});
                if(findProduct) {
                    findProduct.qty = findProduct.qty - item.qty;
                    findProduct.save((error, data) => {
                        if(error) {
                            console.log(error)
                        } else {
                            console.log('success');
                        }
                    })
                }
            } else {
                console.log('error');
            }
        })
    })

    res.status(200).json({ successMessage: 'Successfully Purchased Items!' });
}


exports.setOrderStatus = async (req, res) => {
    const order = await Order.findOne({ _id: req.body.orderId });
    if (order) {
        order.status = req.body.status
        order.statusUpdateTime = req.body.updateTime
        order.save((error, result) => {
            if (error) res.status(400).json({ errorMessage: 'Status update failed!' });
            if (result) {
                res.status(200).json({ successMessage: 'Status Updated Successfully!' });
            }
        })
    } else {
        res.status(404).json({ errorMessage: 'No order found!' });
    }
}

exports.deleteOrder = async (req, res) => {
    const order = await Order.findOne({ _id: req.params.id }).exec();
    if (order) {
        order.remove();
        res.status(200).json({ successMessage: 'Order Deleted Successfully' });
    } else {
        res.status(404).json({ errorMessage: 'No order found!' });
    }
}


