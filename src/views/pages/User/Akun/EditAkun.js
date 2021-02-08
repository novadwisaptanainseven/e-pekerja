import React, { useState, useEffect } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CRow,
  CCol,
  CFormGroup,
  CLabel,
  CInput,
  CInputFile,
  CButton,
  CCardFooter,
  CForm,
} from "@coreui/react";
import { SampleFotoPegawai } from "src/assets";
import { useHistory } from "react-router-dom";

const EditAkun = () => {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(SampleFotoPegawai);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // Free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <div>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Edit Akun</h3>
          <CButton
            color="warning"
            className="text-white"
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        <CForm>
          <CCardBody>
            <CRow>
              <CCol md="7">
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel>Nama</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="text"
                      name="nama"
                      id="nama"
                      placeholder="Masukkan nama"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel>Username</CLabel>
                  </CCol>
                  <CCol>
                    <CInput
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Masukkan username"
                    />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="2">
                    <CLabel>Foto Profil</CLabel>
                  </CCol>
                  <CCol>
                    <img
                      src={preview}
                      alt="foto-profil"
                      className="img-thumbnail mb-2"
                      width={200}
                    />
                    <CInputFile
                      onChange={(e) => onSelectFile(e)}
                      name="foto"
                      id="foto"
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
    </div>
  );
};

export default EditAkun;
