import React from "react";
import { CFormGroup, CInput, CLabel, CCol, CSelect } from "@coreui/react";

const TambahCuti = () => {
  return (
    <>
      <CFormGroup row>
        <CCol md="3">
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
    </>
  );
};

export default TambahCuti;
