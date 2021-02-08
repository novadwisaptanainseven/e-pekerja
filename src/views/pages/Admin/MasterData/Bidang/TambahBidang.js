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
  CCardFooter,
  CButton,
  CForm,
} from "@coreui/react";
import { useHistory } from "react-router-dom";

const TambahBidang = ({ match }) => {
  const history = useHistory();

  // Kembali ke menu agama
  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Tambah Bidang</h3>
        </CCardHeader>
        <CForm>
          <CCardBody>
            <CRow>
              <CCol xs="12" md="6">
                <CFormGroup>
                  <CLabel htmlFor="name">Nama Bidang</CLabel>
                  <CInput
                    id="name"
                    placeholder="Masukkan nama bidang"
                    required
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="name">Keterangan</CLabel>
                  <CInput
                    id="name"
                    placeholder="Masukkan keterangan"
                    required
                  />
                </CFormGroup>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" color="primary" className="mr-1">
              Simpan
            </CButton>
            <CButton type="button" color="danger" onClick={goBackToParent}>
              Kembali
            </CButton>
          </CCardFooter>
        </CForm>
      </CCard>
    </>
  );
};

export default TambahBidang;
