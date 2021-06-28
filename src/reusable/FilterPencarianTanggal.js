import {
  CRow,
  CCol,
  CFormGroup,
  CLabel,
  CSelect,
  CInput,
  CCard,
  CCardFooter,
  CCardHeader,
  CForm,
  CCardBody,
  CButton,
  CCollapse,
} from "@coreui/react";
import React, { useState } from "react";
import SelectOptionBulan from "./SelectOptionBulan";

const FilterPencarianTanggal = ({
  paramsFilter,
  setParamsFilter,
  handleFilterCari,
  handleResetFilter,
}) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <CCard>
      <CCardHeader className="bg-dark">
        <h5 className="mb-0">Filter Pencarian Berdasarkan Bulan dan Tahun</h5>
      </CCardHeader>
      <CForm>
        <CCollapse show={collapse}>
          <CCardBody>
            <CRow>
              <CCol>
                <CFormGroup>
                  <CLabel>Bulan</CLabel>
                  <CSelect
                    required
                    name="bulan"
                    onChange={(e) =>
                      setParamsFilter({
                        ...paramsFilter,
                        [e.target.name]: e.target.value,
                      })
                    }
                  >
                    <option value="">-- Pilih Bulan --</option>
                    <SelectOptionBulan />
                  </CSelect>
                </CFormGroup>
              </CCol>
              <CCol>
                <CFormGroup>
                  <CLabel>Tahun</CLabel>
                  <CInput
                    required
                    type="number"
                    name="tahun"
                    placeholder={`Masukkan Tahun, exp: ${new Date().getFullYear()}`}
                    onChange={(e) =>
                      setParamsFilter({
                        ...paramsFilter,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </CFormGroup>
              </CCol>
            </CRow>
          </CCardBody>
        </CCollapse>
        <CCardFooter className="text-right">
          <CButton
            type="submit"
            color="primary"
            className="mr-2"
            onClick={(e) => handleFilterCari(e)}
            disabled={paramsFilter.bulan && paramsFilter.tahun ? false : true}
          >
            Cari
          </CButton>
          <CButton color="warning" className="mr-2" onClick={handleResetFilter}>
            Reset
          </CButton>
          <CButton color="secondary" onClick={() => setCollapse(!collapse)}>
            {!collapse ? "Klik untuk melihat" : "Tutup"}
          </CButton>
        </CCardFooter>
      </CForm>
    </CCard>
  );
};

export default FilterPencarianTanggal;
