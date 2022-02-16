import React from 'react'
import { Link } from 'react-router-dom'
import { CarryOutOutlined } from '@ant-design/icons';
import { VendorSideBar } from '../Vendor/VendorSideBar';
import { Col, Row } from "react-bootstrap";
export const VendorLayout = (props) => {
    return (
        <div>
           {
               props.sidebar ? 
               <Row>
               {/* <div className = 'admin-layout'>
                     <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
                      <Link className="navbar-brand" to="/">Virtual Shalmi</Link>
                           <ul className = 'list-group list-group-horizontal list-unstyled list-inline' style = {{position: 'absolute' ,left: '40%' , fontSize: '12px', fontWeight: '600', letterSpacing: '3px'}}>
                             <li className = 'admin-tag'>ADMIN PANEL</li>
                             <li style = {{paddingLeft: '300px', paddingTop: '20px'}}>
                             <CarryOutOutlined style = {{color: '#20BD99', paddingRight: '10px', fontSize: '24px'}}/></li>
                             <li className = 'pt-4'>100%Secure</li>
                           
                           </ul>
                         
                          
                       </nav>
                     </div> */}
               <Col className="col-3">
                 <VendorSideBar />
               </Col>
               <Col className="col-9 bg-light m-0 pr-5">
                 <div className="admin-layout">
                   <p className="admin-tag">
                     VENDOR PANEL
                   </p>
                 </div>
                 <hr />
                 {props.children}
               </Col>
             </Row>
            //    <div className = 'row'>
            //     <div className = 'admin-layout'>
            //     <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white">
            //      <Link className="navbar-brand" to="/">Virtual Shalmi</Link>
            //           <ul className = 'list-group list-group-horizontal list-unstyled list-inline' style = {{position: 'absolute' ,left: '40%' , fontSize: '12px', fontWeight: '600', letterSpacing: '3px'}}>
            //             <li className = 'admin-tag'>VENDER DASHBOARD</li>
            //             <li style = {{paddingLeft: '300px', paddingTop: '20px'}}>
            //             <CarryOutOutlined style = {{color: '#20BD99', paddingRight: '10px', fontSize: '24px'}}/></li>
            //             <li className = 'pt-4'>100%Secure</li>
                      
            //           </ul>
                    
                     
            //       </nav>
            //     </div>
            //   <div className = 'col-md-3'>
            //     <VendorSideBar/>
            //   </div>
            //   <div className = 'col-md-9 bg-light pr-5 mt-4'>
            //     {props.children}
            //   </div>

            // </div>
            :
            props.children
           }
            
        </div>
    )
}
