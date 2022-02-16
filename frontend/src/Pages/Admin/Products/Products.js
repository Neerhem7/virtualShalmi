import { DeleteOutlined } from '@ant-design/icons';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AdminLayout } from '../../../Components/Layouts/AdminLayout';
import { Error, Success } from '../../../Components/Messages/messages';

export const Products = () => {
    const [products, setProducts] = useState([]);
    const getAllProducts = async () => {
        await axios.get('/api/products/get').then(res => {
            if (res.status === 200) {
                setProducts(res.data);
            } else {
                Error(res.data.errorMessage);
            }
        })
    }

    useEffect(() => {
        getAllProducts()
        return () => {
        }
    }, []);


    const deleteHandler = async (id) => {
        await axios.delete(`/api/products/delete/${id}`, {
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            if (res.status === 200) {
                Success(res.data.successMessage);
                getAllProducts();
            } else {
                Error(res.data.errorMessage);
            }
        })
    }
    return (
        <AdminLayout sidebar>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Category</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length > 0 && products.map((product, index) => {
                            return (
                                <>
                                    <tr key={product._id} style={{ borderBottom: '1px solid black' }}>
                                        <th>{index + 1}</th>
                                        <th scope="col">{product.title}</th>
                                        <td className='w-50' style={{ wordBreak: 'break-word' }}><div dangerouslySetInnerHTML={{ __html: product.description }}></div></td>
                                        <th scope="col">Rs. {product.price}</th>
                                        <th scope="col">{product.qty <= 1 ? <span className = 'text-danger'>Out of Stock!</span> : product.qty}</th>
                                        <th scope="col">{product.subCategory && product.subCategory.name}</th>
                                        <th>
                                            <button className='btn' onClick={() => deleteHandler(product._id)}><DeleteOutlined /></button>
                                        </th>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </AdminLayout>
    )
}
