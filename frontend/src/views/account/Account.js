import {
    CCard,
    CCol,
    CRow,
    CCardBody,
    CCardHeader,
    CFormGroup,
    CLabel,
    CInputFile,
    CForm,
    CInput,
    CInputCheckbox,
    CCardFooter,
    CButton,
    
  } from "@coreui/react";
  import CIcon from '@coreui/icons-react'
  import React from "react";
  
  const Account = () => {
    return (
        <>
      <CRow>
        <CCol xs="12" sm="12" md="12">
          <CCard>
            <CCardHeader>Account</CCardHeader>
            <CCardBody>
              <CForm>
              <CFormGroup>
                  <CRow>
                    <CCol xs="3">
                      <CLabel htmlFor="email">Email</CLabel>
                    </CCol>
                    <CCol xs="9">
                      <CInput id="email" name="email" placeholder="sp18-bse-00@cuilahore.edu.pk" disabled required />
                    </CCol>
                  </CRow>
                </CFormGroup>
                <CFormGroup>
                  <CRow>
                    <CCol xs="3">
                      <CLabel htmlFor="name">Name</CLabel>
                    </CCol>
                    <CCol xs="9">
                      <CInput id="name" name="name" placeholder="" required />
                    </CCol>
                  </CRow>
                </CFormGroup>
              
                <CFormGroup>
                <CRow>
                  <CCol xs="3">
                    <CLabel htmlFor="phone">Phone Number</CLabel>
                  </CCol>
                  <CCol xs="9">
                    <CInput id="phone" name="phone" placeholder="" required />
                  </CCol>
                </CRow>
              </CFormGroup>
                <CFormGroup>
                  <CRow>
                    <CCol xs="3">
                      <CLabel htmlFor="address">Address</CLabel>
                    </CCol>
                    <CCol xs="9">
                      <CInput
                        id="address"
                        name="address"
                        placeholder=""
                        required
                      />
                    </CCol>
                  </CRow>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Update</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12" sm="12" md="12">
          <CCard>
            <CCardHeader>Reset Password</CCardHeader>
            <CCardBody>
              <CForm>
              <CFormGroup>
                  <CRow>
                    <CCol xs="3">
                      <CLabel htmlFor="oldpassword">Old Password</CLabel>
                    </CCol>
                    <CCol xs="9">
                      <CInput id="oldpassword" name="oldpassword" placeholder="" required />
                    </CCol>
                  </CRow>
                </CFormGroup>
                <CFormGroup>
                  <CRow>
                    <CCol xs="3">
                      <CLabel htmlFor="newpassword">New Password</CLabel>
                    </CCol>
                    <CCol xs="9">
                      <CInput id="newpassword" name="newpassword" placeholder="" required />
                    </CCol>
                  </CRow>
                </CFormGroup>
                <CFormGroup>
                  <CRow>
                    <CCol xs="3">
                      <CLabel htmlFor="cpassword">Confirm Password</CLabel>
                    </CCol>
                    <CCol xs="9">
                      <CInput id="cpassword" name="cpassword" placeholder="" required />
                    </CCol>
                  </CRow>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Update</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      </>
    );
  };
  
  export default Account;
  