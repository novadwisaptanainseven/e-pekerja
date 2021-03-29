import React, { useState, useEffect } from "react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CCollapse,
  CButton,
  CForm,
  CFormGroup,
  CCol,
  CInput,
  CRow,
} from "@coreui/react";
import { getPegawaiCuti } from "src/context/actions/Cuti/getPegawaiCuti";
import { format } from "date-fns";
import { LoadAnimationBlue } from "src/assets";

const DaftarPegawaiCuti = () => {
  const [accordion, setAccordion] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterText, setFilterText] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.nama && item.nama.toLowerCase().includes(filterText.toLowerCase())
  );

  useEffect(() => {
    // Get Pegawai Cuti
    getPegawaiCuti(setLoading, setData);
  }, []);

  return (
    <>
      <CForm>
        <CFormGroup row className="justify-content-center">
          <CCol md="6">
            <CInput
              type="text"
              id="cari"
              name="cari"
              placeholder="Pencarian nama"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </CCol>
        </CFormGroup>
      </CForm>

      <div id="accordion">
        {loading && (
          <CRow>
            <CCol className="text-center">
              <img
                className="mt-4 ml-3"
                width={30}
                src={LoadAnimationBlue}
                alt="load-animation"
              />
            </CCol>
          </CRow>
        )}
        {filteredData.map((item, index) => (
          <CCard key={index} className="mb-0">
            <CCardHeader id="headingOne">
              <CButton
                block
                color="link"
                className="text-left m-0 p-0"
                onClick={() => setAccordion(accordion === index ? null : index)}
              >
                <h5 className="m-0 p-0 text-dark">{item.nama}</h5>
              </CButton>
            </CCardHeader>
            <CCollapse show={accordion === index}>
              <CCardBody>
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th style={{ width: "130px" }}>Lama Cuti</th>
                      <td>{item.lama_cuti}</td>
                    </tr>
                    <tr>
                      <th>Tgl. Mulai Cuti</th>
                      <td>{format(new Date(item.tgl_mulai), "dd/MM/yyyy")}</td>
                    </tr>
                    <tr>
                      <th>Tgl. Selesai Cuti</th>
                      <td>
                        {format(new Date(item.tgl_selesai), "dd/MM/yyyy")}
                      </td>
                    </tr>
                    <tr>
                      <th>Keterangan</th>
                      <td>{item.keterangan}</td>
                    </tr>
                  </tbody>
                </table>
              </CCardBody>
            </CCollapse>
          </CCard>
        ))}
      </div>
    </>
  );
};

export default DaftarPegawaiCuti;
