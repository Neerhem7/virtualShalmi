import { Button, Image, InputNumber, Rate, Spin } from 'antd';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { listProducts } from '../../Redux/Redux';
import { ShoppingCartOutlined, LoadingOutlined, StarFilled } from '@ant-design/icons';
import { UserLayout } from '../../Components/Layouts/UserLayout';
import { Helmet } from 'react-helmet';
import { Comments } from '../../Components/Comments';
import { isAuthenticated } from '../../Components/Auth/auth';
import { Error, Warning } from '../../Components/Messages/messages';
import { ProductCard } from '../../Components/Products/ProductCard';

export const Product = (props) => {
    const productId = props.match.params.id;
    let userId = isAuthenticated()._id;
    const [product, setProduct] = useState({});
    const [qtyToShop, setQtyToShop] = useState('1');
    const [pic, setPic] = useState('');
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const [commentsList, setCommentsList] = useState([]);
    const [products, setProducts] = useState([]);
    const [reviews, setReviews] = useState([]);


    const getProduct = async () => {
        setLoading(true);
        await axios.get(`/api/products/get/${productId}`).then(res => {
            setLoading(false);
            if (res.status === 200) {
                setProduct(res.data);
                getRelatedProducts(res.data.subCategory);
                setPic(res.data.productPictures[0].img);
                getComments(res.data.user && res.data.user._id);
                setTitle('Virtual Shalmi | ' + res.data.title);
            } else {
                Error(res.data.errorMessage);
            }
        });

    }




    useEffect(() => {
        getProduct();
        getComment();
        return () => {

        }
    }, [productId, userId]);

    const getRelatedProducts = (cat) => {
        axios.get(`/api/products/get/related/${cat}`).then(res => {
            if (res.status === 200) {
                const getAll = res.data.filter(prod => prod._id !== productId);
                setProducts(getAll);
            } else {
                Error(res.data.errorMessage);
            }
        })
    }

    const dispatch = useDispatch();
    const handleCart = async () => {
        if (qtyToShop > product.qty - 1) {
            Error('Product out of stock!')
        } else {
            setLoading(true)
            let data = new FormData();
            data.append('title', product.title);
            data.append('price', product.price);
            data.append('productId', productId);
            data.append('userId', userId);
            data.append('offer', product.offer);
            data.append('category', product.subCategory);
            data.append('offPrice', product.offPrice);
            data.append('image', product.productPictures[0].img)
            data.append('qty', qtyToShop);
            data.append('vendorId', product.user && product.user._id);
            await axios.post('/api/cart/add-to-cart', data, {
                headers: {
                    'authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then(res => {
                setLoading(false);
                if (res.status === 200) {
                    swal('success', 'Product add to Bag successfully', 'success');
                    dispatch(listProducts(userId));
                }
                else {
                    swal('Error', res.data.errorMessage, 'info');
                }
            })
        }
    }

    const saveProductToCart = () => {
        if (qtyToShop > product.qty - 1) {
            Error('Product out of stock!')
        } else {
            setLoading(true);
            var allEntries = localStorage.getItem("product") && JSON.parse(localStorage.getItem("product")) || [];
            product.productPictures = pic;
            product.image = product.productPictures && product.productPictures[0].img;
            product.productId = product._id;
            product.vendorId = product.user && product.user._id;
            product.qty = qtyToShop;
            allEntries.push(product);
            setLoading(false);
            localStorage.setItem('product', JSON.stringify(allEntries));
            swal('success', 'Product add to Bag successfully', 'success');
        }
    }



    /********************************************** Comments ******************************************************/
    const getComment = async () => {
        setLoading(true);
        await axios.get(`/api/comments/get/${productId}`).then(res => {
            setLoading(false);
            if (res.status === 200) {
                setCommentsList(res.data.result);
            } else {
                console.log('Error')
            }
        })
    }


    const updateComponent = (newComment) => {
        setCommentsList(commentsList.concat(newComment));
    }

    const updateIt = () => {
        getComment();
    }

    const getComments = async (id) => {
        await axios.get(`/api/comments/get/vender/${id}`).then(res => {
            if (res.status === 200) {
                setReviews(res.data);
                console.log(res.data)
            } else {
                setReviews('');
            }
        })
    }


    /********************************************** Related Products ******************************************************/


    const antIcon = <LoadingOutlined style={{ fontSize: 30, color: '##ff3e6c' }} spin />;
    return (
        <UserLayout navbar>
            {
                loading
                    ?
                    <div className='text-center fixed-top' style={{ marginTop: '50vh' }}>
                        <Spin indicator={antIcon} />
                    </div>

                    :

                    <>
                        <div className='row'>
                            <Helmet>
                                <title>{title}</title>
                            </Helmet>
                            <div className='col-md-7'>
                                <div className='row'>
                                    {
                                        product && product.productPictures && product.productPictures.length > 0 ? product.productPictures.map(pic => {
                                            return (
                                                <div key={pic._id} className='col-md-6 mb-4 pl-4'>
                                                    <Image.PreviewGroup className='w-100'>
                                                        <Image
                                                            height={560}
                                                            src={pic.img}
                                                        />

                                                    </Image.PreviewGroup>
                                                </div>

                                            )
                                        })
                                            :
                                            null
                                    }

                                </div>
                                <div className='ml-5 mt-5'>
                                    <h6 className='text-center'>Product Reviews ({commentsList.length} Reviews)</h6>
                                    <Comments CommentList={commentsList} vendorId={product.user && product.user._id} productId={productId} updateIt={updateIt} refreshFunction={updateComponent} />
                                </div>
                            </div>
                            <div className="col-md-5 mt-2 pl-4">
                                <div className='ml-3'>
                                    <h4>
                                        {product.title}
                                    </h4>
                                    <h5 className='mt-2'>
                                        Rs. {product.price}  ({product.offer}% Off)
                                    </h5>
                                    <h6 style={{ color: '#03a685' }} className='font-weight-bold'>
                                        Inclusive of all taxes
                                    </h6>

                                    <div className='mt-4'>
                                        <h5>Select Quantity</h5>
                                        <InputNumber min={1} max={100000} defaultValue={1} onChange={(value) => setQtyToShop(value)} />
                                        {
                                            <p className = 'mt-2'>{product.qty <= 1 && <span className='text-danger fw-bolder'>Out of Stock!</span>}</p>
                                        }
                                    </div>
                                    <div className='product-btn mt-4'>
                                        <Button onClick={() => { isAuthenticated() ? qtyToShop ? handleCart() : swal('Note', 'Please Select Quantity first', 'info') : saveProductToCart() }} size='large' icon={<ShoppingCartOutlined style={{ fontSize: '26px' }} />}>
                                            Add to Bag
                                        </Button>
                                    </div>
                                    <div>
                                        {
                                            product.user &&
                                            <div className=' mt-3 d-flex align-items-center gap-3'>
                                                <p className='fs-6 fw-bold'>Sold By:</p>
                                                <p className='fs-6'>
                                                    {product.user.firstName} {product.user.lastName}
                                                    <Rate className='mx-2' value={product.user.star} count={3} />
                                                </p>
                                                <p className='fs-6'>
                                                    ({reviews.length})
                                                    {
                                                        reviews.length > 0 &&
                                                        <span className=''>
                                                            ({Math.round(reviews.reduce((a, b) => a + b.rating, 0) / reviews.length).toFixed(1)}<StarFilled style={{ verticalAlign: 'text-bottom', marginBottom: '2px', color: '#fadb14' }} />)
                                                        </span>
                                                    }
                                                    reviews
                                                </p>
                                            </div>
                                        }

                                        <h4>Description:</h4>
                                        <p className='mr-5' style={{ wordBreak: 'break-word' }}>
                                            <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className='row mt-2 pt-4' style={{ borderTop: '1px solid #d4d5d9', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <h5 className='mb-4 text-center'>Similar Products</h5>
                            {
                                products.map(product => {
                                    return (
                                        <div className='col-md-3 col-lg-2 mt-2 mx-2'>
                                            <ProductCard product={product} />
                                        </div>
                                    )
                                })
                            }

                        </div> */}
                    </>
            }
        </UserLayout>
    )
}
