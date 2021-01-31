import React from "react";
import { CFormGroup, CLabel, CInput, CFormText } from "@coreui/react";

const EditDataPendidikan = ({ id }) => {
  if (id) {
    console.log(id);
  }

  return (
    <>
      <CFormGroup>
        <CLabel htmlFor="nama_akademi">Nama Akademi</CLabel>
        <CInput
          type="text"
          id="nama_akademi"
          placeholder="Masukkan nama akademi"
          required
        />
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="jenjang">Jenjang</CLabel>
        <CInput
          type="text"
          id="jenjang"
          placeholder="Masukkan jenjang"
          required
        />
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="jurusan">Jurusan</CLabel>
        <CInput
          type="text"
          id="jurusan"
          placeholder="Masukkan jurusan"
          required
        />
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="tahun lulus">Tahun Lulus</CLabel>
        <CInput
          type="number"
          id="tahun lulus"
          placeholder="Masukkan tahun lulus"
          required
        />
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="no_ijazah">No. Ijazah</CLabel>
        <CInput
          type="text"
          id="no_ijazah"
          placeholder="Masukkan no. ijazah"
          required
        />
      </CFormGroup>
      <CFormGroup>
        <CLabel htmlFor="foto_ijazah">Foto Ijazah</CLabel>
        <CInput
          type="file"
          id="foto_ijazah"
          placeholder="Masukkan foto ijazah"
          required
        />
        <CFormText>
          Foto harus bertipe jpg, jpeg, atau png dan sizenya kurang dari 2 MB
        </CFormText>
      </CFormGroup>
    </>
  );
};

export default EditDataPendidikan;
