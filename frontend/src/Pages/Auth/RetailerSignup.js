import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import axios from 'axios';
import swal from 'sweetalert';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { UserLayout } from '../../Components/Layouts/UserLayout';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const { Option } = Select;


export const RetailerSignup = (props) => {
    const [form] = Form.useForm();
    const [file, setFile] = useState('');
    const [loading, setLoading] = useState(false);
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };

    const handleImageChange = (e) => {
        setFile(
            e.target.files[0]

        )
    }

    const onFinish = async (values) => {
        window.scrollTo(0, 0);
        setLoading(true);
        let data = new FormData();
        data.append('firstName', values.FirstName);
        data.append('lastName', values.LastName);
        data.append('email', values.email);
        data.append('username', values.username);
        data.append('password', values.password);
        data.append('confirm', values.confirm);
        data.append('phone', values.phone + values.prefix);
        data.append('city', values.city);
        data.append('country', values.country);
        data.append('postalCode', values.postalCode);
        data.append('file', file);

        await axios.post('/api/users/retailor/signup', data).then(res => {
            setLoading(false);
            if (res.status === 200) {
                swal('Congrats!', res.data.successMessage, 'success');
                setTimeout(() => {
                    props.history.push('/retailer/login')
                }, 2000);
            }
            else if (res.status === 201) {
                swal(res.data.errorMessage);
            }
            else {
                swal(res.data.errorMessage);
            }
        })

    };

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="92">+92</Option>
                <Option value="1">+1</Option>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>

            </Select>
        </Form.Item>
    );

    const antIcon = <LoadingOutlined style={{ fontSize: 30, color: '##ff3e6c' }} spin />;

    return (
        loading
            ?
            <div className='text-center fixed-top' style={{ marginTop: '50vh' }}>
                <Spin indicator={antIcon} />
            </div>

            :

            <UserLayout navbar>
                <Helmet>
                    <title>Virtual Shalmi | Retailor</title>
                </Helmet>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '100px' }}>
                    <div>
                        <h2 className='text-center ml-5 my-4'>Signup as Retailor</h2>
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            initialValues={{
                                residence: ['zhejiang', 'hangzhou', 'xihu'],
                                prefix: '92',
                            }}
                            scrollToFirstError
                        >
                            <Form.Item
                                name="FirstName"
                                label="First Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your First Name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="LastName"
                                label="Last Name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Last Name!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="username"
                                label="Username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Username!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }

                                            return Promise.reject(new Error("The two passwords you entered don't match."));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                className='mt-4'
                                name="city"
                                label="City"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your City!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                className='mt-4'
                                name="postalCode"
                                label="Postal Code"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Postal Code!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                className='mt-4'
                                name="country"
                                label="Country"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Country!',
                                        whitespace: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                label="Phone Number"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone number!',
                                    },
                                ]}
                            >
                                <Input
                                    addonBefore={prefixSelector}
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.Item>

                            <div className="custom-file" style={{ marginLeft: '120px' }}>
                                <input type="file" name='file' required multiple onChange={handleImageChange} />
                                <label className="custom-file-label" for="customFile"></label>
                            </div>
                            <Form.Item {...tailFormItemLayout}>
                                <Button htmlType='submit' className='btn my-2 mt-2' style={{ width: '260px', height: '41px', background: '#ff3f6c', color: 'white' }}>
                                    Register
                                </Button>
                            </Form.Item>
                        </Form>
                        <div className='mt-4 text-center'>
                            <p>
                                Signup as Vendor? <Link to='/vendor/signup' style={{ color: '#ff5a5a', fontWeight: '700' }}>Register</Link>
                            </p>
                            <p>
                                Already have an account? <Link to='/retailer/login' style={{ color: '#ff5a5a', fontWeight: '700' }}>Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </UserLayout>
    );
};
