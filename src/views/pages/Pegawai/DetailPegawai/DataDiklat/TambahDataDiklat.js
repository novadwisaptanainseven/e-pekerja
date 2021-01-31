import React from "react";
import { CFormGroup, CLabel, CInput, CFormText } from "@coreui/react";

const TambahDataDiklat = () => {
  return (
    <>
      <CFormGroup>
        <CLabel htmlFor="nama_diklat">Nama Diklat</CLabel>
        <CInput
          type="text"
          id="nama_diklat"
          placeholder="Masukkan nama diklat"
          required
        />
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="jenis_diklat">Jenis Diklat</CLabel>
        <CInput
          type="text"
          id="jenis_diklat"
          placeholder="Masukkan jenis diklat"
          required
        />
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="penyelenggara">Penyelenggara</CLabel>
        <CInput
          type="text"
          id="penyelenggara"
          placeholder="Masukkan penyelenggara"
          required
        />
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="tahun_diklat">Tahun Diklat</CLabel>
        <CInput
          type="number"
          id="tahun_diklat"
          placeholder="Masukkan tahun diklat"
          required
        />
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="jml_jam">Jumlah Jam</CLabel>
        <CInput
          type="number"
          id="jml_jam"
          placeholder="Masukkan jumlah jam"
          required
        />
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="foto_diklat">Foto Diklat</CLabel>
        <CInput
          type="file"
          id="foto_diklat"
          placeholder="Masukkan foto diklat"
          required
        />
        <CFormText>
          Foto harus bertipe jpg, jpeg, atau png dan sizenya kurang dari 2 MB
        </CFormText>
      </CFormGroup>
    </>
  );
};

export default TambahDataDiklat;
