import React from "react";
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
} from "@coreui/react";
import { SampleFotoPegawai } from "src/assets";
import { useHistory } from "react-router-dom";

const DetailMasaKerja = ({ match }) => {
  const history = useHistory();
  const params = match.params;

  const goBackToParent = () => {
    history.goBack();
  };

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/masa-kerja-edit/${id}`);
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Detail Masa Kerja Pegawai</h3>
          <CButton
            type="button"
            color="warning"
            className="text-white"
            onClick={goBackToParent}
          >
            Kembali
          </CButton>
        </CCardHeader>
        <CCardBody>
          <div className="my-3">
            <CRow>
              <CCol md="8">
                <CButton
                  className="mb-2"
                  type="button"
                  color="success"
                  onClick={() => goToEdit(params.id)}
                >
                  Perbarui Masa Kerja
                </CButton>
                <table className="table table-sm table-bordered">
                  <tbody>
                    <tr>
                      <th>NIP</th>
                      <td>2312321321</td>
                    </tr>
                    <tr>
                      <th>Nama</th>
                      <td>Nova Dwi Sapta Nain Seven</td>
                    </tr>
                    <tr>
                      <th>Masa Kerja Golongan</th>
                      <td>2 Tahun 10 Bulan</td>
                    </tr>
                    <tr>
                      <th>Masa Kerja Jabatan</th>
                      <td>1 Tahun 2 Bulan</td>
                    </tr>
                    <tr>
                      <th>Masa Kerja Sebelum CPNS</th>
                      <td>3 Tahun 7 Bulan</td>
                    </tr>
                    <tr>
                      <th>Masa Kerja Seluruhnya</th>
                      <td>21 Tahun 3 Bulan</td>
                    </tr>
                    <tr>
                      <th>Jabatan</th>
                      <td>Kepala Dinas (Eselon II.b)</td>
                    </tr>
                    <tr>
                      <th>TMT. Jabatan</th>
                      <td>30/12/2016</td>
                    </tr>
                    <tr>
                      <th>Golongan</th>
                      <td>IV/c</td>
                    </tr>
                    <tr>
                      <th>TMT. Golongan</th>
                      <td>IV/c</td>
                    </tr>
                    <tr>
                      <th>Eselon</th>
                      <td>II/b</td>
                    </tr>
                    <tr>
                      <th>TMT. Sebelum CPNS</th>
                      <td>01/02/89</td>
                    </tr>
                  </tbody>
                </table>
              </CCol>
              <CCol>
                <CCard>
                  <CCardHeader className="bg-dark text-center">
                    <h4 className="font-weight-normal mb-0">Foto Pegawai</h4>
                  </CCardHeader>
                  <CCardBody>
                    <img
                      width="100%"
                      src={SampleFotoPegawai}
                      alt="foto-pegawai"
                    />
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </div>
        </CCardBody>
      </CCard>
    </>
  );
};

export default DetailMasaKerja;
