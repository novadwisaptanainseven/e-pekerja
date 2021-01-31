import React from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CButton,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CCol,
  CSelect,
  CRow,
} from "@coreui/react";
import { useHistory } from "react-router-dom";

const TambahCuti = () => {
  const history = useHistory();

  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Tambah Cuti Pegawai</h3>
          <CButton type="button" color="warning" onClick={goBackToParent}>
            Kembali
          </CButton>
        </CCardHeader>
        <CForm>
          <CCardBody>
            <CRow>
              <CCol md="8">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Nama Pegawai</CLabel>
                  </CCol>
                  <CCol>
                    <CSelect custom name="nama" id="nama">
                      <option value="">-- Pilih Pegawai</option>
                      <option value="1">Nova Dwi Sapta</option>
                      <option value="2">Ikwal Ramadhani</option>
                      <option value="3">Iqbal Wahyudi</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Jenis Cuti</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="text"
                      name="jenis_cuti"
                      id="jenis_cuti"
                      placeholder="Masukkan jenis cuti"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Tgl. Mulai</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="date"
                      name="tgl_mulai"
                      id="tgl_mulai"
                      placeholder="Masukkan tgl mulai cuti"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Tgl. Selesai</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="date"
                      name="tgl_selesai"
                      id="tgl_selesai"
                      placeholder="Masukkan tgl selesai cuti"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Lama Cuti</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="number"
                      name="lama_cuti"
                      id="lama_cuti"
                      placeholder="Masukkan lama cuti"
                    />
                  </CCol>
                  <CCol>
                    <CSelect custom name="satuan" id="satuan">
                      <option value="">-- Pilih Satuan --</option>
                      <option value="hari">Hari</option>
                      <option value="minggu">Minggu</option>
                      <option value="bulan">Bulan</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Keterangan</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="text"
                      name="keterangan"
                      id="keterangan"
                      placeholder="Masukkan keterangan / alasan cuti"
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
    </>
  );
};

export default TambahCuti;
