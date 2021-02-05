import React from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CButton,
  CCardFooter,
  CForm,
} from "@coreui/react";
import { useHistory } from "react-router-dom";

const EditPassword = () => {
  const history = useHistory();

  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <div>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Edit Password</h3>
          <CButton
            color="warning"
            className="text-white"
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        <CForm>
          <CCardBody>
            <CRow>
              <CCol md="7">
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel>Password lama</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="password"
                      name="password_lama"
                      id="password_lama"
                      placeholder="Masukkan password lama"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel>Password Baru</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="password"
                      name="password_baru"
                      id="password_baru"
                      placeholder="Masukkan password baru"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel>Konfirmasi Password</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="password"
                      name="konfirmasi_password"
                      id="konfirmasi_password"
                      placeholder="Masukkan konfirmasi password"
                    />
                  </CCol>
                </CFormGroup>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CButton color="primary" type="submit" className="mr-1">
              Simpan
            </CButton>
            <CButton color="danger" type="reset" className="mr-1">
              Reset
            </CButton>
          </CCardFooter>
        </CForm>
      </CCard>
    </div>
  );
};

export default EditPassword;
