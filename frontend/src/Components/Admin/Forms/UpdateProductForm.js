import { Select, Spin, TreeSelect } from 'antd';
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { DeleteOutlined } from '@ant-design/icons';
import { Error, Success, Warning } from "../../Messages/messages";
import { antIcon } from "../../Loading/Loading";


const { TreeNode } = TreeSelect;

export const UpdateProductForm = (props) => {
    const productId = props.productId;
    const [size, setSize] = useState([]);
    const [productPictures, setProductPictures] = useState();
    const [color, setColor] = useState([]);
    const [file, setFile] = useState('');
    const [description, setDescription] = useState('');
    const [categories, setCategories] = useState([]);
    const [mainCat, setMainCat] = useState('');
    const [product, setProduct] = useState({});
    const [subCat, setSubCat] = useState('');
    const [loading, setLoading] = useState(false);
    const [productData, setProductData] = useState({
        title: '',
        price: '',
        qty: '',
        offer: ''
    });

    const { title, price, qty, offer } = productData;

    /***********************************************onChange *******************************************/
    const handleProductChange = (e) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value
        });
    }

    const handleImageChange = (e) => {
        setFile([
            ...file,
            e.target.files[0]

        ])
    }

    const handleRemoveUploadedImage = name => {
        setFile(file => file.filter(item => item.name !== name.name))
    }

    const onMainCatChange = value => {
        setMainCat(value);
    };
    const onSubCatChange = value => {
        setSubCat(value);
    };

    function handleColorChange(value) {
        setColor(
            value

        );
    }


    const getProductById = async () => {
        await axios.get(`/api/products/get/${productId}`).then(res => {
            if (res.status === 200) {
                setProduct(res.data);
                setProductPictures(res.data.productPictures);
                setProductData(res.data);
                setDescription(res.data.description);
                setSize(res.data.productSizes);
                setColor(res.data.productColors);
                setMainCat(res.data.mainCategory);
                setSubCat(res.data.subCategory);
            } else {
                Error(res.data.errorMessage);
            }
        })
    }

   console.log(productPictures);
    /************************************************ Submit **********************************************/

    const submitHandler = (e) => {
        e.preventDefault();
        if (
            !title ||
            !subCat ||
            !mainCat ||
            !price ||
            !description
        ) {
            Warning('All fields are required');
        } else {
            setLoading(true);
            let data = new FormData();
            data.append('title', title);
            data.append('description', description);
            data.append('price', price);
            data.append('qty', qty);
            data.append('offer', offer);
            data.append('mainCategory', mainCat);
            data.append('subCategory', subCat);
            if (file) {
                for (let pic of file) {
                    data.append('file', pic);
                }
            } 
            productPictures.forEach(pic => {
                data.append('pictures', pic);
            });
            axios.post(`/api/products/update/${productId}`, data, {
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }).then(res => {
                if (res.status === 200) {
                    setLoading(false);
                    Success(res.data.successMessage);
                }
                else {
                    Error(res.data.errorMessage);
                }
            })
        }
    }

    /****************************************** Get Categories *******************************************/
    const fetchCategories = () => {
        axios.get('/api/categories/get').then(res => {
            if (res.status === 200) {
                setCategories(res.data);
            }
            else {
                Error(res.data.errorMessage);
            }
        })
    }


    useEffect(() => {
        fetchCategories();
        getProductById();
        return () => {
        }
    }, []);

    return (
        <div className='shadow-lg w-50 p-4 rounded products'>
            {
                loading
                    ?
                    <div className='text-center'>
                        <Spin indicator={antIcon} />
                    </div>

                    :
                    <div>
                        <form onSubmit={submitHandler}>
                            <h4 className='mb-5'>Create a Product</h4>
                            <div className="form-group mt-4">
                                <input type="text" className="form-control mb-2" id='title' value={title} name='title' placeholder="Enter Your Product Title" onChange={handleProductChange} />
                            </div>
                            <div className="form-group mt-4">
                                <input type="Number" className="form-control mb-2" value={price} id='price' name='price' placeholder="Enter Product's Price in Rs." onChange={handleProductChange} />
                            </div>
                            <div className="form-group mt-4">
                                <input type="Number" className="form-control mb-2" value={qty} id='qty' name='qty' placeholder="Enter Total Quantity" onChange={handleProductChange} />
                            </div>
                            <div className="form-group mt-4">
                                <input type="Number" className="form-control mb-2" value={offer} id='offer' name='offer' placeholder="Enter Offer in % e.g 10" onChange={handleProductChange} />
                            </div>
                            <div className='mt-3'>
                                <ReactQuill placeholder="Product Description" theme="snow" value={description} onChange={setDescription} />
                            </div>
                            <div className='my-3'>
                                <input type="file" name='file' multiple onChange={handleImageChange} />
                                <ul className='list-unstyled'>
                                    {
                                        file.length > 0 ?
                                            file.map(pic => {
                                                return (
                                                    <li key={pic.name}>
                                                        {pic.name}
                                                        <a onClick={() => handleRemoveUploadedImage(pic)}><DeleteOutlined style={{ marginLeft: '10px', color: 'black' }} /> </a>
                                                    </li>

                                                )
                                            })
                                            :
                                            null
                                    }
                                </ul>
                                <div className='my-4 row'>
                                    {
                                        productPictures && productPictures.map(image => {
                                            return (
                                                <div className='col-md-4 mt-4'>
                                                    <img src={image.img} alt={title} className='w-100 h-100' />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <TreeSelect
                                showSearch
                                style={{ width: '100%' }}
                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                placeholder="Please select main category"
                                allowClear
                                treeDefaultExpandAll
                                onChange={onMainCatChange}
                                className='mb-3'
                                value={mainCat}
                            >
                                {
                                    categories.map(mainCat => {
                                        return (
                                            <TreeNode value={mainCat._id} title={mainCat.name} />
                                        )
                                    })
                                }
                            </TreeSelect>
                            <TreeSelect
                                showSearch
                                style={{ width: '100%' }}
                                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                                placeholder="Please select sub category"
                                allowClear
                                treeDefaultExpandAll
                                onChange={onSubCatChange}
                                value={subCat}
                            >
                                {
                                    categories.map(mainCat => {
                                        return (
                                            <TreeNode value={mainCat._id} title={mainCat.name}>
                                                {
                                                    mainCat.children.map(subCat => {
                                                        return (
                                                            <TreeNode value={subCat._id} title={subCat.name}>
                                                                {
                                                                    subCat.children.map(childCat => {
                                                                        return (
                                                                            <TreeNode value={childCat._id} title={childCat.name} />

                                                                        )
                                                                    })
                                                                }
                                                            </TreeNode>
                                                        )
                                                    })
                                                }
                                            </TreeNode>
                                        )
                                    })
                                }
                            </TreeSelect>
                            <button type="submit" size='large' className="btn btn-dark w-100 mt-4">Submit</button>
                        </form>
                    </div>
            }
        </div>
    )
}