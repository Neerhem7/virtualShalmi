import React from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CListGroup,
  CListGroupItem,
  CCardFooter
} from "@coreui/react";
import CIcon from '@coreui/icons-react'
import {Link} from 'react-router-dom';
import usersData from "../users/UsersData";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};
const fields = ["ttem", "name","qty","total"];

const DetailOrder = () => {
  return (
    <>

      <CRow>
        <CCol xs="12" sm="8">
          <CCard>
            <CCardHeader>Order</CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                
              />
              <CListGroup>
                <CListGroupItem className="justify-content-between">
                  Subtotal
                  <CBadge className="float-right" >14</CBadge>
                </CListGroupItem>
                <CListGroupItem className="justify-content-between">
                  Payment Method
                  <CBadge className="float-right">Cash On Delivery</CBadge>
                </CListGroupItem>
                <CListGroupItem className="justify-content-between">
                  Total
                  <CBadge className="float-right" >1</CBadge>
                </CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
            <CRow >
                <CCol xs="12" sm="6">
                <CCard>
                <CCardHeader>
                    Billing Address
                </CCardHeader>
                <CCardBody>
               
                </CCardBody>
               
            </CCard>
                </CCol>
                <CCol xs="12" sm="6">
                <CCard>
                <CCardHeader>
                    Shipping Address
                </CCardHeader>
                <CCardBody>
               
                </CCardBody>
               
            </CCard>
</CCol>
            </CRow>
        </CCol>
        <CCol xs="12" sm="4">
            <CCard>
                <CCardHeader>
General Details
                </CCardHeader>
                <CCardBody>
                <CListGroup>
                <CListGroupItem className="justify-content-between">
               
                  Order Status 
                  <CBadge className="float-right" >Completed</CBadge>
                </CListGroupItem>
                <CListGroupItem className="justify-content-between">
                Order Date
                  <CBadge className="float-right">June 23, 2021</CBadge>
                </CListGroupItem>
                <CListGroupItem className="justify-content-between">
                Earning from order
                  <CBadge className="float-right" >1</CBadge>
                </CListGroupItem>
              </CListGroup>
                </CCardBody>
                <CCardFooter>
                <CListGroup>
                <CListGroupItem className="justify-content-between">
               
                  Customer
                  <CBadge className="float-right" >Mehr</CBadge>
                </CListGroupItem>
                <CListGroupItem className="justify-content-between">
              Email
                  <CBadge className="float-right">SP18-BSE-117@CUILAHORE.EDU.PK</CBadge>
                </CListGroupItem>
                <CListGroupItem className="justify-content-between">
             Phone
                  <CBadge className="float-right" >0312-4231296</CBadge>
                </CListGroupItem>
              </CListGroup> 
                </CCardFooter>
            </CCard>
        </CCol>

      </CRow>
    </>
  );
};

export default DetailOrder;
