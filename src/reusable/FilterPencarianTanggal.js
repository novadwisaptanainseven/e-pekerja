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
} from "@coreui/react";
import React from "react";
import SelectOptionBulan from "./SelectOptionBulan";

const FilterPencarianTanggal = ({
  paramsFilter,
  setParamsFilter,
  handleFilterCari,
  handleResetFilter,
}) => {
  return (
    <CRow>
      <CCol md="6">
        <CCard>
          <CCardHeader className="bg-dark">
            <h5 className="mb-0">Filter Pencarian</h5>
          </CCardHeader>
          <CForm>
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
            <CCardFooter className="text-right">
              <CButton
                type="submit"
                color="primary"
                className="mr-2"
                onClick={(e) => handleFilterCari(e)}
                disabled={
                  paramsFilter.bulan && paramsFilter.tahun ? false : true
                }
              >
                Cari
              </CButton>
              <CButton color="warning" onClick={handleResetFilter}>
                Reset
              </CButton>
            </CCardFooter>
          </CForm>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default FilterPencarianTanggal;
