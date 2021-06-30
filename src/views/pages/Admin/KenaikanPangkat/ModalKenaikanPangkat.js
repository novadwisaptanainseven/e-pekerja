import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CButton,
  CLabel,
  CInput,
  CFormGroup,
  CForm,
  CSelect,
} from "@coreui/react";
import React from "react";

const ModalKenaikanPangkat = ({ modal, setModal }) => {
  return (
    <CModal
      show={modal.modal}
      onClose={() => setModal({ ...modal, modal: false, id: null })}
    >
      <CModalHeader closeButton>
        <div>
          <h4>Nova Dwi Sapta</h4>
          <h5 className="font-weight-normal">199727</h5>
        </div>
      </CModalHeader>
      <CForm>
        <CModalBody>
          <CFormGroup>
            <CLabel>Pangkat / Golongan Baru</CLabel>
            <CSelect name="pangkat_baru">
              <option value="">-- Pilih Pangkat --</option>
            </CSelect>
          </CFormGroup>
          <CFormGroup>
            <CLabel>TMT. Kenaikan Pangkat</CLabel>
            <CInput type="date" name="tmt_kenaikan_pangkat" />
          </CFormGroup>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary">Simpan</CButton>
          <CButton
            color="secondary"
            onClick={() => setModal({ ...modal, modal: false, id: null })}
          >
            Close
          </CButton>
        </CModalFooter>
      </CForm>
    </CModal>
  );
};

export default ModalKenaikanPangkat;
