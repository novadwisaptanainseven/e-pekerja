import React from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CCardFooter,
  CButton,
  CForm,
} from "@coreui/react";
import { useHistory } from "react-router-dom";

const EditPangkatGolongan = ({ match }) => {
  const params = match.params;
  const history = useHistory();

  // Kembali ke menu agama
  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Ubah Pangkat Golongan : {params.id}</h3>
        </CCardHeader>
        <CForm>
          <CCardBody>
            <CRow>
              <CCol xs="12" md="6">
                <CFormGroup>
                  <CLabel htmlFor="name">Golongan</CLabel>
                  <CInput id="name" placeholder="Masukkan golongan" required />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="name">Keterangan</CLabel>
                  <CInput
                    id="name"
                    placeholder="Masukkan keterangan"
                    required
                  />
                </CFormGroup>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" color="primary" className="mr-1">
              Simpan
            </CButton>
            <CButton type="button" color="danger" onClick={goBackToParent}>
              Kembali
            </CButton>
          </CCardFooter>
        </CForm>
      </CCard>
    </>
  );
};

export default EditPangkatGolongan;
