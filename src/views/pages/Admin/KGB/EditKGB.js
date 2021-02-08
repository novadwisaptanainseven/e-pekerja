import React from "react";
import { CFormGroup, CCol, CLabel, CInput } from "@coreui/react";

const EditKGB = ({ id }) => {
  if (id) {
    console.log(id);
  }

  return (
    <>
      <CFormGroup row>
        <CCol md="3">
          <CLabel>Gaji Pokok Lama</CLabel>
        </CCol>
        <CCol>
          <CInput
            type="text"
            name="gaji_pokok_lama"
            id="gaji_pokok_lama"
            placeholder="Masukkan gaji pokok lama"
          />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol md="3">
          <CLabel>Gaji Pokok Baru</CLabel>
        </CCol>
        <CCol>
          <CInput
            type="text"
            name="gaji_pokok_baru"
            id="gaji_pokok_baru"
            placeholder="Masukkan gaji pokok baru"
          />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol md="3">
          <CLabel>TMT. Kenaikan Gaji</CLabel>
        </CCol>
        <CCol>
          <CInput
            type="date"
            name="tmt_kenaikan_gaji"
            id="tmt_kenaikan_gaji"
            placeholder="Masukkan tmt kenaikan gaji"
          />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol md="3">
          <CLabel>Kenaikan Gaji YAD</CLabel>
        </CCol>
        <CCol>
          <CInput
            type="date"
            name="kenaikan_gaji_yad"
            id="kenaikan_gaji_yad"
            placeholder="Masukkan tanggal gaji yang akan datang"
          />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol md="3">
          <CLabel>Peraturan</CLabel>
        </CCol>
        <CCol>
          <CInput
            type="text"
            name="peraturan"
            id="peraturan"
            placeholder="Masukkan peraturan yang mengatur sistem penggajian"
          />
        </CCol>
      </CFormGroup>
    </>
  );
};

export default EditKGB;
