import React from "react";
import { CRow, CCol, CCard, CCardHeader, CCardBody, CButton } from "@coreui/react";
import { SampleFotoPegawai } from "src/assets";
import { useHistory } from "react-router-dom";

const DetailDukPNS = ({match}) => {
  const history = useHistory();
  const params = match.params;

  const goBackToParent = () => {
    history.goBack();
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Detail DUK PNS</h3>
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
                <table className="table table-sm table-bordered">
                  <tbody>
                    <tr>
                      <th>No. Urut</th>
                      <td>{params.id}</td>
                    </tr>
                    <tr>
                      <th>NIP</th>
                      <td>2312321321</td>
                    </tr>
                    <tr>
                      <th>Nama</th>
                      <td>Nova Dwi Sapta Nain Seven</td>
                    </tr>
                    <tr>
                      <th>Pangkat / Golongan</th>
                      <td>IV/c / Pembina Utama Muda</td>
                    </tr>
                    <tr>
                      <th>TMT. Golongan</th>
                      <td>01/04/14</td>
                    </tr>
                    <tr>
                      <th>Masa Kerja Golongan</th>
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
                      <th>Pendidikan</th>
                      <td>
                        <table className="table table-sm table-borderless">
                          <tr>
                            <th>Nama</th>
                            <th>Tahun Lulus</th>
                            <th>Tingkat Ijazah</th>
                          </tr>
                          <tr>
                            <td>Magister Manajemen Teknologi</td>
                            <td>2002</td>
                            <td>S2</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <th>Tgl. Lahir</th>
                      <td>27/11/65</td>
                    </tr>
                    <tr>
                      <th>Latihan Jabatan / Diklat</th>
                      <td>
                        <table className="table table-sm table-borderless">
                          <tr>
                            <th>No</th>
                            <th>Nama Diklat</th>
                            <th>Tahun</th>
                            <th>Jml. Jam</th>
                          </tr>
                          <tr>
                            <td>1</td>
                            <td>Adum</td>
                            <td>1997</td>
                            <td>500</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Adumla</td>
                            <td>1998</td>
                            <td>336</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Diklatpim III</td>
                            <td>2003</td>
                            <td>360</td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <th>Catatan Mutasi</th>
                      <td>Kepala Dinas Kebersihan dan Pertamanan</td>
                    </tr>
                    <tr>
                      <th>TMT. CPNS</th>
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

export default DetailDukPNS;
