import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
//simport { DocsLink } from 'src/reusable'

const AddProduct = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      <CRow>
        <CCol xs="12" sm="8">
          <CCard>
            <CCardHeader>
              Add New Product
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="name">Name</CLabel>
                    <CInput id="name" name="name"  placeholder="Product name" required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="ccnumber">Product Descriptiion</CLabel>
                    <CTextarea 
                      name="description" 
                      id="description" 
                      rows="9"
                      placeholder="Description..." 
                    />
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
          <CCard>
            <CCardHeader>
              Inventory
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">SKU</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="sku" name="sku" placeholder="SKU number" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="price-input">Regular Price (Rs)</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="number" id="price" name="price" placeholder="Enter Price" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="instock-input">Stock Qty</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="number" id="instock" name="instock" placeholder="In Stock Qty"/>
                    
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Out Stock</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="number" id="outstock" name="outstock" placeholder="Out Stock Qty" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Allow Backorder</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="backorder" id="order">
                      <option value="0">Do not allow</option>
                      <option value="1">Allow</option> 
                    </CSelect>
                  </CCol>
                </CFormGroup>
                
              </CForm>
            </CCardBody>
            
          </CCard>
          <CCard>
            <CCardHeader>              
              <CFormGroup row>
                  <CCol tag="label" sm="3" className="col-form-label">
                    On Sale
                  </CCol>
                  <CCol sm="9">
                    <CSwitch
                      className="mr-1"
                      color="success"
                    />
                  </CCol>
                </CFormGroup>
            </CCardHeader>
            <CCardBody>
            <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="saleprice-input">Regular Price (Rs)</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="number" id="saleprice" name="saleprice" placeholder="Enter Sale Price" />
                  </CCol>
                </CFormGroup>
            <CFormGroup row>
           
                  <CCol md="3">
                    <CLabel htmlFor="date-input">Sale Start Date</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput type="date" id="startdate" name="startdate" placeholder="Start date" />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
           
           <CCol md="3">
             <CLabel htmlFor="date-input">Sale End Date</CLabel>
           </CCol>
           <CCol xs="12" md="9">
             <CInput type="date" id="enddate" name="enddate" placeholder="End Date" />
           </CCol>
         </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="4">

          <CCard>
            <CCardHeader>
              Company
              <small> Form</small>
            </CCardHeader>
            <CCardBody>
              <CRow >

            <CCol md="6">
            <CButton type="submit" size="sm" color="secondary"><CIcon name="draft" /> Save Draft</CButton>
            </CCol>
            <CCol md="6" >
              <CButton type="submit" size="sm" color="success"><CIcon name="publish" /> Publish</CButton>
            </CCol>
            </CRow>
            </CCardBody>
            
          </CCard>
          <CCard>
            <CCardHeader>
              Product Category
            </CCardHeader>
            <CCardBody>
           
            <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Category</CLabel>
                  </CCol>
                 
                </CFormGroup>
                
            </CCardBody>
           
          </CCard>

          <CCard>
            <CCardHeader>
              Product Gallery
            </CCardHeader>
            <CCardBody>
            <CFormGroup row>
                  <CLabel col md={4}>Featured Image</CLabel>
                  <CCol xs="12" md="8">
                    <CInputFile custom id="custom-file-input"/>
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                      Choose file...
                    </CLabel>
                  </CCol>
                </CFormGroup>
  
                
            </CCardBody>
           
          </CCard>

          <CCard>
            <CCardHeader>
              Product Images
            </CCardHeader>
            <CCardBody>
           
            <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Images</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInputFile 
                      id="file-multiple-input" 
                      name="file-multiple-input" 
                      multiple
                      custom
                    />
                    <CLabel htmlFor="file-multiple-input" variant="custom-file">
                      Choose Files...
                    </CLabel>
                  </CCol>
                </CFormGroup>
                
            </CCardBody>
           
          </CCard>

        </CCol>
      </CRow>
    

     
               
    </>
  )
}

export default AddProduct
