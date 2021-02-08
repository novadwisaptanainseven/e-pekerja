import React, { useState } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CCollapse,
  CButton,
  CForm,
  CFormGroup,
  CCol,
  CInputGroup,
  CInput,
  CInputGroupAppend,
} from "@coreui/react";

const DaftarPegawaiCuti = () => {
  const [accordion, setAccordion] = useState(null);

  return (
    <>
      <CForm>
        <CFormGroup row className="justify-content-center">
          <CCol md="6">
            <CInputGroup>
              <CInput
                type="text"
                id="cari"
                name="cari"
                placeholder="Pencarian nama"
              />
              <CInputGroupAppend>
                <CButton type="button" color="primary">
                  Cari
                </CButton>
              </CInputGroupAppend>
            </CInputGroup>
          </CCol>
        </CFormGroup>
      </CForm>

      <div id="accordion">
        <CCard className="mb-0">
          <CCardHeader id="headingOne">
            <CButton
              block
              color="link"
              className="text-left m-0 p-0"
              onClick={() => setAccordion(accordion === 0 ? null : 0)}
            >
              <h5 className="m-0 p-0 text-dark">
                Ir. H. Dadang Airlangga N, MMT
              </h5>
            </CButton>
          </CCardHeader>
          <CCollapse show={accordion === 0}>
            <CCardBody>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <th style={{ width: "130px" }}>Lama Cuti</th>
                    <td>14 Hari</td>
                  </tr>
                  <tr>
                    <th>Tgl. Mulai Cuti</th>
                    <td>10-02-2021</td>
                  </tr>
                  <tr>
                    <th>Tgl. Selesai Cuti</th>
                    <td>24-02-2021</td>
                  </tr>
                  <tr>
                    <th>Keterangan</th>
                    <td>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore hic corporis libero maiores ex sed ad debitis saepe
                      possimus ratione iusto, iure maxime? Possimus officia
                      nihil, suscipit ipsum labore fugit!
                    </td>
                  </tr>
                </tbody>
              </table>
            </CCardBody>
          </CCollapse>
        </CCard>
        <CCard className="mb-0">
          <CCardHeader id="headingTwo">
            <CButton
              block
              color="link"
              className="text-left m-0 p-0"
              onClick={() => setAccordion(accordion === 1 ? null : 1)}
            >
              <h5 className="m-0 p-0 text-dark">Nova Dwi Sapta Nain Seven</h5>
            </CButton>
          </CCardHeader>
          <CCollapse show={accordion === 1}>
            <CCardBody>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <th style={{ width: "130px" }}>Lama Cuti</th>
                    <td>14 Hari</td>
                  </tr>
                  <tr>
                    <th>Tgl. Mulai Cuti</th>
                    <td>10-02-2021</td>
                  </tr>
                  <tr>
                    <th>Tgl. Selesai Cuti</th>
                    <td>24-02-2021</td>
                  </tr>
                  <tr>
                    <th>Keterangan</th>
                    <td>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore hic corporis libero maiores ex sed ad debitis saepe
                      possimus ratione iusto, iure maxime? Possimus officia
                      nihil, suscipit ipsum labore fugit!
                    </td>
                  </tr>
                </tbody>
              </table>
            </CCardBody>
          </CCollapse>
        </CCard>
        <CCard className="mb-0">
          <CCardHeader id="headingThree">
            <CButton
              block
              color="link"
              className="text-left m-0 p-0"
              onClick={() => setAccordion(accordion === 2 ? null : 2)}
            >
              <h5 className="m-0 p-0 text-dark">Ikwal Ramadhani</h5>
            </CButton>
          </CCardHeader>
          <CCollapse show={accordion === 2}>
            <CCardBody>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <th style={{ width: "130px" }}>Lama Cuti</th>
                    <td>14 Hari</td>
                  </tr>
                  <tr>
                    <th>Tgl. Mulai Cuti</th>
                    <td>10-02-2021</td>
                  </tr>
                  <tr>
                    <th>Tgl. Selesai Cuti</th>
                    <td>24-02-2021</td>
                  </tr>
                  <tr>
                    <th>Keterangan</th>
                    <td>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolore hic corporis libero maiores ex sed ad debitis saepe
                      possimus ratione iusto, iure maxime? Possimus officia
                      nihil, suscipit ipsum labore fugit!
                    </td>
                  </tr>
                </tbody>
              </table>
            </CCardBody>
          </CCollapse>
        </CCard>
      </div>
    </>
  );
};

export default DaftarPegawaiCuti;
