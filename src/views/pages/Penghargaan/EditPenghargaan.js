import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CCol,
  CForm,
  CLabel,
  CFormGroup,
  CInput,
  CButton,
  CFormText,
} from "@coreui/react";
import { useHistory } from "react-router-dom";

const EditPenghargaan = ({ match }) => {
  const params = match.params;
  const history = useHistory();

  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Edit Penghargaan : {params.id}</h3>
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
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Nama penerima</CLabel>
              </CCol>
              <CCol>
                <CInput
                  type="text"
                  name="nama"
                  id="nama"
                  placeholder="Masukkan nama penerima penghargaan"
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Nama Penghargaan</CLabel>
              </CCol>
              <CCol>
                <CInput
                  type="text"
                  name="nama_penghargaan"
                  id="nama_penghargaan"
                  placeholder="Masukkan nama penghargaan"
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Pemberi</CLabel>
              </CCol>
              <CCol>
                <CInput
                  type="text"
                  name="pemberi"
                  id="pemberi"
                  placeholder="Masukkan nama pemberi penghargaan"
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel>Tgl. Penghargaan</CLabel>
              </CCol>
              <CCol>
                <CInput
                  type="date"
                  name="tgl_penghargaan"
                  id="tgl_penghargaan"
                  placeholder="Masukkan tgl. penghargaan"
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel>
                  File Dokumentasi Penghargaan <br />
                  (Jika Ada)
                </CLabel>
              </CCol>
              <CCol>
                <CInput
                  type="file"
                  name="dokumentasi"
                  id="dokumentasi"
                  placeholder="Masukkan file dokumentasi penghargaan"
                />
                <CFormText>File bisa berupa pdf, jpg, jpeg, atau png</CFormText>
              </CCol>
            </CFormGroup>
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

export default EditPenghargaan;
