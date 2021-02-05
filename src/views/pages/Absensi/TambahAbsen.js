import React from "react";
import { CFormGroup, CInput, CLabel, CCol, CSelect } from "@coreui/react";

const TambahAbsen = () => {
  return (
    <>
      <CFormGroup row>
        <CCol md="2">
          <CLabel>Tanggal Absen</CLabel>
        </CCol>
        <CCol>
          <CInput
            type="date"
            name="tgl_absen"
            id="tgl_absen"
            placeholder="Masukkan tanggal absen"
          />
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol md="2">
          <CLabel>Hari</CLabel>
        </CCol>
        <CCol>
          <CSelect custom name="hari" id="hari">
            <option value="">-- Pilih Hari --</option>
            <option value="senin">Senin</option>
            <option value="selasa">Selasa</option>
            <option value="rabu">Rabu</option>
            <option value="kamis">Kamis</option>
            <option value="jumat">Jumat</option>
          </CSelect>
        </CCol>
      </CFormGroup>
      <CFormGroup row>
        <CCol md="2">
          <CLabel>Keterangan</CLabel>
        </CCol>
        <CCol>
          <CSelect custom name="keterangan" id="keterangan">
            <option value="">-- Pilih Keterangan --</option>
            <option value="0">Tanpa Keterangan</option>
            <option value="1">Hadir</option>
            <option value="2">Tidak Hadir</option>
            <option value="3">Izin</option>
            <option value="4">Sakit</option>
            <option value="5">Cuti</option>
          </CSelect>
        </CCol>
      </CFormGroup>
    </>
  );
};

export default TambahAbsen;
