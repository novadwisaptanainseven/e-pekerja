import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CCol,
  CRow,
  CForm,
  CLabel,
  CFormGroup,
  CInput,
  CButton,
} from "@coreui/react";
import { useHistory } from "react-router-dom";

const EditDukPNS = ({ id }) => {
  const history = useHistory();

  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Edit DUK PNS</h3>
          <CButton
            type="button"
            color="warning"
            className="text-white"
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        <CForm className="form-horizontal">
          <CCardBody>
            <CRow>
              <CCol md="8" sm="12">
                <CFormGroup row>
                  <CCol>
                    <CLabel>Catatan Mutasi Kepegawaian</CLabel>
                  </CCol>
                  <CCol md="9" sm="12">
                    <CInput
                      type="text"
                      name="catatan_mutasi"
                      id="catatan_mutasi"
                      placeholder="Masukkan catatan mutasi kepegawaian"
                      required
                    />
                  </CCol>
                </CFormGroup>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CButton color="primary" type="submit" className="mr-1">
              Simpan
            </CButton>
            <CButton color="danger" type="reset" className="mr-1">
              Reset
            </CButton>
          </CCardFooter>
        </CForm>
      </CCard>
    </>
  );
};

export default EditDukPNS;
