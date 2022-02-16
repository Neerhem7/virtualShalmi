import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './AllProducts.css'
import { ProductCard } from '../../Components/Products/ProductCard';
import { Error } from '../../Components/Messages/messages';
import { UserLayout } from '../../Components/Layouts/UserLayout';
import { Checkbox } from 'antd';
import { RightOutlined } from '@ant-design/icons';

export const AllProducts = () => {
    const location = useLocation();
    const [products, setProducts] = useState([]);
    const [show, setShow] = useState(false);
    const [categories, setCategories] = useState([]);

    const getAllProducts = async () => {
        await axios.get(`/api/products/get`).then(res => {
            if (res.status === 200) {
                setProducts(res.data);
            } else {
                Error(res.data.errorMessage);
            }
        })
    }

    const getProductsByCategory = async (id) => {
        await axios.get(`/api/products/cat/${id}`).then(res => {
            if (res.status === 200) {
                setProducts(res.data);
            } else {
                Error(res.data.errorMessage);
            }
        })
    }
    const getAllCategories = async () => {
        await axios.get(`/api/categories/get`).then(res => {
            if (res.status === 200) {
                setCategories(res.data);
            } else {
                Error(res.data.errorMessage);
            }
        })
    }

    useEffect(() => {
        location.search ? getProductsByCategory(location.search.substring(1)) : getAllProducts();
        getAllCategories();
        return () => {

        }
    }, []);


    return (
        <UserLayout navbar>
            <div className='all-products mt-5'>
                <p className='fs-2 text-center'>All Products</p>
                <div className='row main-row'>
                    <div className='col-md-2 pl-2 sidebar'>
                        <div>
                            <div className='mb-2 pl-3'>
                                <button className = 'btn' onClick={() => { getAllProducts() }}>All Categories</button>
                            </div>

                            {
                                categories.length > 0 && categories.map(category => {
                                    return (
                                        <div id="menuContainer">
                                            <div className="menuItem first d-flex justify-content-between px-3 pr-5">
                                                <div className="text">{category.name}</div>
                                                <RightOutlined className = 'text-dark' />
                                            </div>
                                            <div id="settingsMenu" className = ''>
                                                {
                                                    category.children && category.children.length > 0 && category.children.map(sub => {
                                                        return (
                                                            <button className="menuItem mx-2">
                                                                {/* <div className = ''> */}
                                                                    <button className = 'btn' onClick={() => getProductsByCategory(sub._id)}>{sub.name}</button>
                                                                {/* </div> */}
                                                            </button>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='col-md-10'>
                        <div className='row mr-1'>
                            {
                                products.length > 0 && products.map((product, index) => {
                                    return (
                                        <div className='col-md-3'>
                                            <ProductCard product={product} />
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </UserLayout>
    )
}
