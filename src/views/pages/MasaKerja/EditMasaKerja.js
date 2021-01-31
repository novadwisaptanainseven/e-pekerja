import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CCol,
  CRow,
  CForm,
  CLabel,
  CFormGroup,
  CInput,
  CButton,
  CFormText,
} from "@coreui/react";
import { useHistory } from "react-router-dom";

const EditMasaKerja = ({ id }) => {
  const history = useHistory();

  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Edit Masa Kerja</h3>
          <CButton
            type="button"
            color="warning"
            className="text-white"
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        <CForm className="form-horizontal">
          <CCardBody>
            <CRow>
              <CCol md="7" sm="12">
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel>Nama</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="text"
                      name="nama"
                      id="nama"
                      value="Nova Dwi Sapta"
                      disabled
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel>Masa Kerja Golongan</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="tahun"
                      id="tahun"
                      placeholder="Tahun"
                      required
                    />
                    <CFormText>Tahun</CFormText>
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="bulan"
                      id="bulan"
                      placeholder="Bulan"
                      required
                    />
                    <CFormText>Bulan</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel>Masa Kerja Jabatan</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="tahun"
                      id="tahun"
                      placeholder="Tahun"
                      required
                    />
                    <CFormText>Tahun</CFormText>
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="bulan"
                      id="bulan"
                      placeholder="Bulan"
                      required
                    />
                    <CFormText>Bulan</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel>Masa Kerja Sebelum CPNS</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="tahun"
                      id="tahun"
                      placeholder="Tahun"
                      required
                    />
                    <CFormText>Tahun</CFormText>
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="bulan"
                      id="bulan"
                      placeholder="Bulan"
                      required
                    />
                    <CFormText>Bulan</CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="4">
                    <CLabel>Masa Kerja Seluruhnya</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="tahun"
                      id="tahun"
                      placeholder="Tahun"
                      required
                    />
                    <CFormText>Tahun</CFormText>
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="bulan"
                      id="bulan"
                      placeholder="Bulan"
                      required
                    />
                    <CFormText>Bulan</CFormText>
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
    </>
  );
};

export default EditMasaKerja;
