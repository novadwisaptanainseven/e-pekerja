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

const TambahStatusPegawai = () => {
  const history = useHistory();

  // Kembali ke menu Agama
  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Tambah Status Pegawai</h3>
        </CCardHeader>
        <CForm>
          <CCardBody>
            <CRow>
              <CCol xs="12" md="6">
                <CFormGroup>
                  <CLabel htmlFor="name">Status Pegawai</CLabel>
                  <CInput
                    id="name"
                    placeholder="Masukkan status pegawai"
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

export default TambahStatusPegawai;
