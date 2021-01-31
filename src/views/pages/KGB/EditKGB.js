import React from "react";
import { CFormGroup, CCol, CLabel, CInput } from "@coreui/react";

const EditKGB = ({ id }) => {
  return (
    <>
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
          <CLabel>
            Kenaikan Gaji YAD <br />
            (Yang Akan Datang)
          </CLabel>
        </CCol>
        <CCol>
          <CInput
            type="date"
            name="kenaikan_gaji_yad"
            id="kenaikan_gaji_yad"
            placeholder="Masukkan tmt kenaikan gaji yad"
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
            placeholder="Masukkan peraturan"
          />
        </CCol>
      </CFormGroup>
    </>
  );
};

export default EditKGB;
