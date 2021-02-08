import React from "react";
import { CCol, CLabel, CInput, CFormGroup } from "@coreui/react";

const TambahBerkas = () => {
  return (
    <>
      <CFormGroup row>
        <CCol md="2">
          <CLabel>Upload Berkas</CLabel>
        </CCol>
        <CCol>
          <CInput type="file" name="berkas" id="berkas" />
        </CCol>
      </CFormGroup>
    </>
  );
};

export default TambahBerkas;
