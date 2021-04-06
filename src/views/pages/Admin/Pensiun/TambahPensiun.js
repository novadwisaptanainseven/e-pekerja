import React from "react";
import {
  CFormGroup,
  CInput,
  CLabel,
  CCol,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CButton,
  CForm,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import Select from "react-select";

const TambahPensiun = () => {
  const history = useHistory();

  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Tambah Data Pensiun</h3>
          <CButton
            type="button"
            color="warning"
            className="text-white"
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        <CForm>
          <CCardBody>
            <CFormGroup row>
              <CCol md="2">
                <CLabel>Nama Pegawai</CLabel>
              </CCol>
              <CCol>
                <Select
                  
                  name="nama"
                  id="nama"
                  isSearchable
                  isClearable
                  options={[
                    { value: "1", label: "Nova Dwi Sapta Nain Seven" },
                    { value: "2", label: "Ikwal Ramadhani" },
                    { value: "3", label: "Iqbal Wahyudi" },
                  ]}
                />
              </CCol>
            </CFormGroup>

            <CFormGroup row>
              <CCol md="2">
                <CLabel>Tgl. Pensiun</CLabel>
              </CCol>
              <CCol>
                <CInput
                  type="date"
                  name="tgl_pensiun"
                  id="tgl_pensiun"
                  placeholder="Masukkan tgl. pensiun"
                />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="2">
                <CLabel>Keterangan</CLabel>
              </CCol>
              <CCol>
                <CInput
                  type="text"
                  name="keterangan"
                  id="keterangan"
                  placeholder="Masukkan keterangan / alasan pensiun"
                />
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

export default TambahPensiun;
