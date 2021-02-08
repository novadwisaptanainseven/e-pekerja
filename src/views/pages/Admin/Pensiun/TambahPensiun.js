import React from "react";
import {
  CFormGroup,
  CInput,
  CLabel,
  CCol,
  CSelect,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CButton,
  CForm,
} from "@coreui/react";
import { useHistory } from "react-router-dom";

const TambahPensiun = () => {
  const history = useHistory();

  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Tambah Data Pensiun</h3>
          <CButton
            type="button"
            color="warning"
            className="text-white"
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        <CForm>
          <CCardBody>
            <CFormGroup row>
              <CCol md="2">
                <CLabel>Nama Pegawai</CLabel>
              </CCol>
              <CCol>
                <CSelect custom name="nama" id="nama">
                  <option value="">-- Pilih Pegawai --</option>
                  <option value="1">Nova Dwi Sapta (02312321312321)</option>
                  <option value="2">Ikwal Ramadhani (02312321312321)</option>
                  <option value="3">Iqbal Wahyudi (02312321312321)</option>
                </CSelect>
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="2">
                <CLabel>Tgl. Pensiun</CLabel>
              </CCol>
              <CCol>
                <CInput
                  type="date"
                  name="tgl_pensiun"
                  id="tgl_pensiun"
                  placeholder="Masukkan tgl. pensiun"
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="2">
                <CLabel>Keterangan</CLabel>
              </CCol>
              <CCol>
                <CInput
                  type="text"
                  name="keterangan"
                  id="keterangan"
                  placeholder="Masukkan keterangan / alasan pensiun"
                />
              </CCol>
            </CFormGroup>
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

export default TambahPensiun;
