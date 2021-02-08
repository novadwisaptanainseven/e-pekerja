import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CButton,
  CBadge,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import CIcon from "@coreui/icons-react";
import { cilPrint } from "@coreui/icons";

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
          <h3>Detail Pensiun : {params.id}</h3>
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
            <CButton type="button" color="info" className="mb-3">
              Cetak Surat Cuti <CIcon content={cilPrint} />
            </CButton>
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
                  <th>Tanggal Pensiun</th>
                  <td>2021-02-10</td>
                </tr>
                <tr>
                  <th>Status Pensiun</th>
                  <td>
                    <CBadge color="primary" shape="pill" className="px-2 py-2">
                      Akan Pensiun
                    </CBadge>
                  </td>
                </tr>
                <tr>
                  <th>Keterangan</th>
                  <td>Mencapai umur ke 65 tahun</td>
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
