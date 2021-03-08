import React, { useState } from "react";

import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as Yup from "yup";
import { Formik } from "formik";
import { LoadAnimationWhite } from "src/assets";

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
  CSelect,
} from "@coreui/react";
import { useHistory } from "react-router-dom";

const MySwal = withReactContent(swal2);

const TambahSubBidang = ({ match }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [bidang, setBidang] = useState()

  // Kembali ke menu agama
  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <>
      <CCard>
        <CCardHeader>
          <h3>Tambah Sub Bidang</h3>
        </CCardHeader>
        <CForm>
          <CCardBody>
            <CRow>
              <CCol xs="12" md="6">
                <CFormGroup>
                  <CLabel>Bidang</CLabel>
                  <CSelect custom name="select" id="select">
                    <option value="0">-- Pilih Bidang --</option>
                    <option value="1">Option #1</option>
                    <option value="2">Option #2</option>
                    <option value="3">Option #3</option>
                  </CSelect>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="name">Sub Bidang</CLabel>
                  <CInput
                    id="name"
                    placeholder="Masukkan sub bidang"
                    required
                  />
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

export default TambahSubBidang;
