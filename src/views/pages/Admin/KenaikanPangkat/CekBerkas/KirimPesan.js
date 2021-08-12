import {
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CButton,
  CForm,
  CTextarea,
  CLabel,
  CFormGroup,
  CInput,
} from "@coreui/react";
import React, { useEffect } from "react";

const KirimPesan = ({ idPegawai, modal, setModal }) => {
  useEffect(() => {
    console.log(modal);
  }, [modal]);

  return (
    <div>
      <CModal show={modal} onClose={() => setModal(false)}>
        <CModalHeader closeButton>
          <CModalTitle>Dialog Pesan Tidak Persetujuan</CModalTitle>
        </CModalHeader>
        <CForm>
          <CModalBody>
            <CFormGroup>
              <CLabel>Nama Pegawai</CLabel>
              <CInput name="nama_pegawai" placeholder="Nama Pegawai" />
            </CFormGroup>
            <CFormGroup>
              <CLabel>Pesan</CLabel>
              <CTextarea
                name="pesan"
                rows={5}
                placeholder="Masukkan pesan tidak persetujuan"
              ></CTextarea>
            </CFormGroup>
          </CModalBody>
          <CModalFooter>
            <CButton color="primary">Kirim</CButton>
            <CButton color="secondary" onClick={() => setModal(false)}>
              Tutup
            </CButton>
          </CModalFooter>
        </CForm>
      </CModal>
    </div>
  );
};

export default KirimPesan;
