import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CRow,
  CCol,
  CForm,
  CFormGroup,
  CLabel,
  CSelect,
  CCardFooter,
  CAlert,
  CInput,
} from "@coreui/react";
import React from "react";
import { useHistory } from "react-router-dom";
import SelectOptionBulan from "src/reusable/SelectOptionBulan";

const KGBPegawai = () => {
  const history = useHistory();

  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between my-card-header">
          <div className="title mb-2">
            <h3>Semua Kenaikan Gaji Berkala Pegawai</h3>
          </div>
          <CButton
            color="warning"
            className="text-white"
            style={{ height: "40px", width: "100px" }}
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol md="6">
              <CCard>
                <CCardHeader className="bg-dark">
                  <h5 className="mb-0">Filter Pencarian</h5>
                </CCardHeader>
                <CCardBody>
                  <CForm>
                    <CRow>
                      <CCol>
                        <CFormGroup>
                          <CLabel>Bulan</CLabel>
                          <CSelect name="bulan">
                            <option value="">-- Pilih Bulan --</option>
                            <SelectOptionBulan />
                          </CSelect>
                        </CFormGroup>
                      </CCol>
                      <CCol>
                        <CFormGroup>
                          <CLabel>Tahun</CLabel>
                          <CInput
                            type="number"
                            name="tahun"
                            placeholder={`Masukkan Tahun, exp: ${new Date().getFullYear()}`}
                          />
                          {/* <CSelect name="tahun">
                            <option value="">-- Tahun --</option>
                            <SelectOptionTahun />
                          </CSelect> */}
                        </CFormGroup>
                      </CCol>
                      {/* <CCol>
                        <CFormGroup>
                          <CLabel>Status KGB</CLabel>
                          <CSelect name="status">
                            <option value="">-- Status --</option>
                            <option value="kgb-aktif">Sedang Berjalan</option>
                            <option value="kgb-akan">Akan Naik Gaji</option>
                          </CSelect>
                        </CFormGroup>
                      </CCol> */}
                    </CRow>
                  </CForm>
                </CCardBody>
                <CCardFooter className="text-right">
                  <CButton color="primary">Cari</CButton>
                </CCardFooter>
              </CCard>
            </CCol>
            <CCol>
              <CAlert color="info">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                temporibus ex obcaecati doloremque fuga atque, cumque adipisci
                aliquid porro sequi facilis minima commodi sunt perferendis
                excepturi quisquam corrupti quod aut?
              </CAlert>
            </CCol>
          </CRow>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magnam
          consequatur minus officia eum animi id! Placeat consectetur nisi
          dolorem earum tenetur commodi doloribus nam velit autem, dolor
          dignissimos consequuntur!
        </CCardBody>
      </CCard>
    </>
  );
};

export default KGBPegawai;
