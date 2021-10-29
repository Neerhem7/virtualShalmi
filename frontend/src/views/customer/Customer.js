import React from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CButtonGroup,
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
const fields = ["Number", "Name","Shipping Address","Billing Address","Orders","Last Order", "action"];

const Customer = () => {
  return (
    <>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Customer</CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={20}
                pagination
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                action: ()=>(
                <td>
                  
                  <CButtonGroup>
              <CButton color="secondary"><CIcon name="cil-lightbulb" /></CButton>
             
            </CButtonGroup>

          
                </td>   
                )
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Customer;
