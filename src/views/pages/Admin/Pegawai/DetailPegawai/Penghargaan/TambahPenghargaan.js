import React from "react";
import { CFormGroup, CLabel, CInput, CFormText, CCol } from "@coreui/react";

const TambahPenghargaan = () => {
  return (
    <>
      {/* <CFormGroup row>
        <CCol md="3">
          <CLabel>Nama penerima</CLabel>
        </CCol>
        <CCol>
          <CInput
            type="text"
            name="nama"
            id="nama"
            placeholder="Masukkan nama penerima penghargaan"
          />
        </CCol>
      </CFormGroup> */}
      <CFormGroup row>
        <CCol md="3">
          <CLabel>Nama Penghargaan</CLabel>
        </CCol>
        <CCol>
          <CInput
            type="text"
            name="nama_penghargaan"
            id="nama_penghargaan"
            placeholder="Masukkan nama penghargaan"
          />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol md="3">
          <CLabel>Pemberi</CLabel>
        </CCol>
        <CCol>
          <CInput
            type="text"
            name="pemberi"
            id="pemberi"
            placeholder="Masukkan nama pemberi penghargaan"
          />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol md="3">
          <CLabel>Tgl. Penghargaan</CLabel>
        </CCol>
        <CCol>
          <CInput
            type="date"
            name="tgl_penghargaan"
            id="tgl_penghargaan"
            placeholder="Masukkan tgl. penghargaan"
          />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol md="3">
          <CLabel>
            File Dokumentasi Penghargaan <br />
            (Jika Ada)
          </CLabel>
        </CCol>
        <CCol>
          <CInput
            type="file"
            name="dokumentasi"
            id="dokumentasi"
            placeholder="Masukkan file dokumentasi penghargaan"
          />
          <CFormText>File bisa berupa pdf, jpg, jpeg, atau png</CFormText>
        </CCol>
      </CFormGroup>
    </>
  );
};

export default TambahPenghargaan;
