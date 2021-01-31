import React from "react";
import { CFormGroup, CLabel, CInput, CRow, CCol } from "@coreui/react";

const EditRiwayatKerja = ({ id }) => {
  if (id) {
    console.log(id);
  }

  return (
    <>
      <CFormGroup>
        <CLabel htmlFor="kantor">Kantor Lama</CLabel>
        <CInput
          type="text"
          id="kantor"
          placeholder="Masukkan kantor lama"
          required
        />
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="jabatan">Jabatan Lama</CLabel>
        <CInput
          type="text"
          id="jabatan"
          placeholder="Masukkan jabatan lama"
          required
        />
      </CFormGroup>
      <CRow>
        <CCol>
          <CFormGroup>
            <CLabel htmlFor="tgl_masuk">Tgl. Masuk Kerja</CLabel>
            <CInput
              type="date"
              id="tgl_masuk"
              placeholder="Masukkan tgl. masuk kerja"
              required
            />
          </CFormGroup>
        </CCol>
        <CCol>
          <CFormGroup>
            <CLabel htmlFor="tgl_keluar">Tgl. Keluar Kerja</CLabel>
            <CInput
              type="date"
              id="tgl_keluar"
              placeholder="Masukkan tgl. keluar kerja"
              required
            />
          </CFormGroup>
        </CCol>
      </CRow>

      <CFormGroup>
        <CLabel htmlFor="keterangan">Keterangan</CLabel>
        <CInput
          type="number"
          id="keterangan"
          placeholder="Masukkan keterangan"
          required
        />
      </CFormGroup>
    </>
  );
};

export default EditRiwayatKerja;
