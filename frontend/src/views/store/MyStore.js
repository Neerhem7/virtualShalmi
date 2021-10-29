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

const MyStore = () => {
  return (
    <CRow>
      <CCol xs="12" sm="12" md="12">
        <CCard>
          <CCardHeader>Store Setup</CCardHeader>
          <CCardBody>
            <CForm>
              <CFormGroup row>
                <img
                  className="d-block w-100 mb-2"
                  style={{ height: "150px" }}
                ></img>
                <CCol xs="12">
                  <CInputFile custom id="custom-file-input" />
                  <CLabel htmlFor="custom-file-input" variant="custom-file">
                    Select Banner Image
                  </CLabel>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CLabel col md={2}>
                  Store Logo
                </CLabel>
                <CCol xs="12" md="8">
                  <CInputFile custom id="custom-file-input" />
                  <CLabel htmlFor="custom-file-input" variant="custom-file">
                    Choose file...
                  </CLabel>
                </CCol>
                <CCol xs="12" md="2"></CCol>
              </CFormGroup>
              <CFormGroup>
                <CRow>
                  <CCol xs="3">
                    <CLabel htmlFor="name">Store Name</CLabel>
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
                    <CLabel htmlFor="perpage">Store Products Per Page</CLabel>
                  </CCol>
                  <CCol xs="9">
                    <CInput
                      id="perpage"
                      type="number"
                      name="perpage"
                      placeholder=""
                      required
                    />
                  </CCol>
                </CRow>
              </CFormGroup>
              <CFormGroup>
                <CRow>
                  <CCol xs="3">
                    <CLabel htmlFor="address">Store Address</CLabel>
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
              <CFormGroup>
                <CRow>
                  <CCol xs="3">
                    <CLabel htmlFor="City">City</CLabel>
                  </CCol>
                  <CCol xs="9">
                    <CInput id="City" name="City" placeholder="" required />
                  </CCol>
                </CRow>
              </CFormGroup>
              <CFormGroup>
                <CRow>
                  <CCol xs="3">
                    <CLabel htmlFor="zipcode">Postal/Zip Code</CLabel>
                  </CCol>
                  <CCol xs="9">
                    <CInput
                      id="zipcode"
                      name="zipcode"
                      placeholder=""
                      required
                    />
                  </CCol>
                </CRow>
              </CFormGroup>
              <CFormGroup>
                <CRow>
                  <CCol xs="3">
                    <CLabel htmlFor="country">Country</CLabel>
                  </CCol>
                  <CCol xs="9">
                    <CInput
                      id="country"
                      name="country"
                      placeholder=""
                      required
                    />
                  </CCol>
                </CRow>
              </CFormGroup>
              <CFormGroup>
                <CRow>
                  <CCol xs="3">
                    <CLabel htmlFor="state">State</CLabel>
                  </CCol>
                  <CCol xs="9">
                    <CInput id="state" name="state" placeholder="" required />
                  </CCol>
                </CRow>
              </CFormGroup>

              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Email</CLabel>
                </CCol>
                <CCol md="9">
                  <CFormGroup variant="checkbox" className="checkbox">
                    <CInputCheckbox
                      id="checkbox1"
                      name="checkbox1"
                      value="Show Email Address in Store"
                    />
                    <CLabel
                      variant="checkbox"
                      className="form-check-label"
                      htmlFor="checkbox1"
                    >
                      Show Email Address in Store
                    </CLabel>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel>Phone Number</CLabel>
                </CCol>
                <CCol md="9">
                  <CFormGroup variant="checkbox" className="checkbox">
                    <CInputCheckbox
                      id="checkbox2"
                      name="checkbox2"
                      value="Show Phone Number in Store"
                    />
                    <CLabel
                      variant="checkbox"
                      className="form-check-label"
                      htmlFor="checkbox2"
                    >
                      Show Phone Number in Store
                    </CLabel>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
            </CForm>
          </CCardBody>
          <CCardFooter>
          <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Update</CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default MyStore;
