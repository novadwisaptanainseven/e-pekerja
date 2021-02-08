import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CButton,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import { SampleFotoPegawai } from "src/assets";

const DetailPenghargaan = ({ match }) => {
  const params = match.params;
  const history = useHistory();

  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Detail Penghargaan : {params.id}</h3>
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
            <table className="table table-striped table-borderless">
              <tbody>
                <tr>
                  <th>NIP</th>
                  <td>19651127 199301 1 001</td>
                </tr>
                <tr>
                  <th>Nama Penerima</th>
                  <td>Ir. H. Dadang Airlangga N, MMT</td>
                </tr>
                <tr>
                  <th>Nama Penghargaan</th>
                  <td>Penghargaan 1</td>
                </tr>
                <tr>
                  <th>Pemberi</th>
                  <td>Walikota Samarinda</td>
                </tr>
                <tr>
                  <th>Tgl. Penghargaan</th>
                  <td>10-12-2021</td>
                </tr>
                <tr>
                  <th>Dokumentasi</th>
                  <td>
                    {params.id === "1" ? (
                      <img
                        src={SampleFotoPegawai}
                        width={200}
                        alt="foto-penghargaan"
                      />
                    ) : (
                      <a href=".">dokumentasi_penghargaan.pdf</a>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </CCardBody>
        </CForm>
      </CCard>
    </>
  );
};

export default DetailPenghargaan;
