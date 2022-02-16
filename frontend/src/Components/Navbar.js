import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Badge, Dropdown, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../Redux/Redux';
import { isAuthenticated, logout } from './Auth/auth';
import { ShoppingCartOutlined, ProfileOutlined } from '@ant-design/icons';



export const Navbar = () => {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const productsList = useSelector(state => state.productsList);
  const { productsInCart } = productsList;
  const cart = productsInCart && productsInCart ? productsInCart.products && productsInCart.products.length : 0;
  const getDATA = localStorage.getItem("product") ? JSON.parse(localStorage.getItem('product')) : [];
  const uniqueCart = Array.from(getDATA.reduce((map, obj) => map.set(obj._id, obj), new Map()).values());
  const localCartProducts = uniqueCart;


  const fetchCategories = () => {
    axios.get('/api/categories/get').then(data => {
      setCategories(data.data);
    })
  }

  const userId = isAuthenticated()._id;
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated()) {
      dispatch(listProducts(userId));
    }


    return () => {

    }
  }, [userId]);

  useEffect(() => {
    fetchCategories();

    return () => {

    }
  }, []);


  const menu = (
    <div className='navMenu'>
      <div className=''></div>
      {
        isAuthenticated()
          ?
          <Menu style={{ paddingTop: '10px', paddingBottom: '10px' }}>
            <Menu.Item>
              <p className='pt-2'>
                <h6>Hello {isAuthenticated().firstName}</h6> <br />
              </p>
              <div style={{ borderBottom: '1px solid #eaeaec', paddingTop: '0px' }}></div>
            </Menu.Item>
            <Menu.Item>
              <Link to={isAuthenticated().role === 1 ? "/admin/get-products" : isAuthenticated().role === 0.5 ? '/vendor/get-products' : '/my/profile'}>
                Dashboard
              </Link>
            </Menu.Item>
            <div style={{ borderBottom: '1px solid #eaeaec', paddingTop: '20px' }}></div>
            <Menu.Item>
              <a href='/retailer/login' onClick={(e) => { logout(() => { }) }}>
                Logout
              </a>
            </Menu.Item>
          </Menu>

          :
          <Menu style={{ padding: '10px' }}>
            <h6>Welcome</h6>
            <p>To access account and manage orders</p>
            <Menu.Item>
              <Link to="/retailer/login" className='px-4 login-btn' style={{ border: '1px solid #f5f5f6', color: 'var(--second-color)', padding: '8px', fontWeight: '500', fontSize: '12px' }}>
                Login/Signup
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/vendor/login" className='px-4 login-btn' style={{ border: '1px solid #f5f5f6', borderRadius:'3px', color: 'var(--second-color)', padding: '8px', fontWeight: '500', fontSize: '12px' }}>
                Become a Vendor
              </Link>
            </Menu.Item>
          </Menu>
      }
    </div>
  );


  return (
    <div className='main-nav'>
      <nav className="navbar navbar-expand-lg fixed-top" style={{backgroundColor: "var(--primary-color)", color: "white"}}>
        <Link className="navbar-brand" to="/" style={{color:"white"}}>Virtual Shalmi</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto list-unstyle pt-3 mx-4" style={{ fontSize: '12px' , color: "white"}}>
            {/* {
              categories.map(data => {
                return (
                  <li className='nav-item'>
                    <Link className="dropdown allCat">
                      <a className='nav-link' id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {data.name}
                      </a>

                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                        <div className='rows'>


                          {
                            data.children.length > 0 ?
                              data.children.map(sub => {

                                return (
                                  <>
                                    <div className='nav-columns font-weight-bold' key={data.id} style={{ fontSize: '12px' }}>
                                      <a
                                        className="dropdown-item text-danger"
                                        style={{ fontSize: '12px' }}
                                        onClick={() => {
                                          history.push({
                                            pathname: '/',
                                            search: sub._id, 
                                            state: { 
                                              update: false,
                                            },
                                          });
                                          window.location.reload()
                                        }}
                                      >{sub.name}</a>
                                    </div>
                                  </>

                                )
                              }) : null

                          }



                        </div>
                      </div>
                    </Link>
                  </li>

                )
              })


            } */}
            <li className='nav-item profile ml-5' style={{ fontWeight: 'normal' }}>
              <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  <ProfileOutlined style={{ fontSize: '21px', paddingLeft: '10px' ,color:"white" }} />
                  <br />
                  <span style={{ fontSize: '14px', color:"white"}}>Profile</span>
                </a>
              </Dropdown>

            </li>

            <li className='ml-2'>
              <Badge count={isAuthenticated() ? cart : localCartProducts.length}>
                <Link to='/cart'><ShoppingCartOutlined style={{ fontSize: '24px', paddingBottom: '1px', color:"white" }} /><br /><span style={{ fontSize: '14px',color:"white" }}>
                  Bag
                </span>
                </Link>

              </Badge>

            </li>

          </ul>
        </div>
      </nav>
    </div>
  )
}
