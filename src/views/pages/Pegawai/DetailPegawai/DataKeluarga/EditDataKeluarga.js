import React from "react";
import {
  CFormGroup,
  CLabel,
  CInput,
  CSelect,
  CInputRadio,
  CRow,
  CCol,
  CTextarea,
} from "@coreui/react";

const EditDataKeluarga = ({ id }) => {
  if (id) {
    console.log(id);
  }

  return (
    <>
      <CFormGroup>
        <CLabel htmlFor="nik_nip">NIK/NIP</CLabel>
        <CInput id="nik_nip" placeholder="Masukkan NIP/NIK" required />
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="nama">Nama</CLabel>
        <CInput id="nama" placeholder="Masukkan nama" required />
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="hubungan">Hubungan</CLabel>
        <CSelect custom name="hubungan" id="hubungan">
          <option value="">-- Pilih Hubungan --</option>
          <option value="suami">Suami</option>
          <option value="istri">Istri</option>
          <option value="anak_kandung">Anak Kandung</option>
          <option value="anak_tiri">Anak Tiri</option>
        </CSelect>
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="agama">Agama</CLabel>
        <CSelect custom name="agama" id="agama">
          <option value="">-- Pilih Agama --</option>
          <option value="islam">islam</option>
          <option value="kristen">Kristen</option>
          <option value="buddha">Buddha</option>
          <option value="hindu">Hindu</option>
        </CSelect>
      </CFormGroup>
      <CFormGroup>
        <CLabel>Jenis Kelamin</CLabel>
        <CFormGroup variant="custom-radio">
          <CInputRadio
            custom
            id="inline-radio1"
            name="jenis_kelamin"
            value="l"
          />
          <CLabel variant="custom-checkbox" htmlFor="inline-radio1">
            Laki - Laki
          </CLabel>
        </CFormGroup>
        <CFormGroup variant="custom-radio">
          <CInputRadio
            custom
            id="inline-radio2"
            name="jenis_kelamin"
            value="p"
          />
          <CLabel variant="custom-checkbox" htmlFor="inline-radio2">
            Perempuan
          </CLabel>
        </CFormGroup>
      </CFormGroup>
      <CRow>
        <CCol>
          <CFormGroup>
            <CLabel htmlFor="tempat_lahir">Tempat Lahir</CLabel>
            <CInput
              type="text"
              name="tempat_lahir"
              id="tempat_lahir"
              placeholder="Masukkan tempat lahir"
            />
          </CFormGroup>
        </CCol>
        <CCol>
          <CFormGroup>
            <CLabel htmlFor="tempat_lahir">Tanggal Lahir</CLabel>
            <CInput
              type="date"
              name="tgl_lahir"
              id="tgl_lahir"
              placeholder="Masukkan tanggal lahir"
            />
          </CFormGroup>
        </CCol>
      </CRow>
      <CFormGroup>
        <CLabel htmlFor="pekerjaan">Pekerjaan</CLabel>
        <CInput
          type="text"
          name="pekerjaan"
          id="pekerjaan"
          placeholder="Masukkan pekerjaan"
        />
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="telepon">Telepon</CLabel>
        <CInput type="text" name="telepon" id="telepon" />
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="alamat">Alamat</CLabel>
        <CTextarea
          name="alamat"
          id="alamat"
          rows="5"
          placeholder="Masukkan alamat"
        />
      </CFormGroup>
    </>
  );
};

export default EditDataKeluarga;
