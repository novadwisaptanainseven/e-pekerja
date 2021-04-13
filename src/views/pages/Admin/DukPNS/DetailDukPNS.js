import React, { useEffect, useState } from "react";
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
} from "@coreui/react";
import { LoadAnimationBlue } from "src/assets";
import { useHistory } from "react-router-dom";
import { getDUKById } from "src/context/actions/DUK/getDUKById";
import { format } from "date-fns";
import formatTanggal from "src/helpers/formatTanggal";
import { getImage } from "src/context/actions/DownloadFile";

const DetailDukPNS = ({ match }) => {
  const history = useHistory();
  const params = match.params;
  const [data, setData] = useState("");

  useEffect(() => {
    // Get DUK By ID
    getDUKById(params.id, setData);
  }, [params]);

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
          {data ? (
            <div className="my-3">
              <CRow>
                <CCol md="8">
                  <table className="table table-sm table-bordered">
                    <tbody>
                      <tr>
                        <th>No. Urut</th>
                        <td>{params.no_urut}</td>
                      </tr>
                      <tr>
                        <th>NIP</th>
                        <td>{data.nip}</td>
                      </tr>
                      <tr>
                        <th>Nama</th>
                        <td>{data.nama}</td>
                      </tr>
                      <tr>
                        <th>Pangkat / Golongan</th>
                        <td>
                          {data.ket_golongan} ({data.golongan})
                        </td>
                      </tr>
                      <tr>
                        <th>TMT. Golongan</th>
                        <td>
                          {data &&
                            format(new Date(data.tmt_golongan), "dd/MM/Y")}
                        </td>
                      </tr>
                      <tr>
                        <th>Masa Kerja Golongan</th>
                        <td>{data.mk_golongan}</td>
                      </tr>
                      <tr>
                        <th>Jabatan</th>
                        <td>{data.nama_jabatan}</td>
                      </tr>
                      <tr>
                        <th>TMT. Jabatan</th>
                        <td>
                          {data &&
                            format(new Date(data.tmt_jabatan), "dd/MM/Y")}
                        </td>
                      </tr>
                      <tr>
                        <th>Pendidikan</th>
                        <td>
                          <table className="table table-sm table-borderless">
                            <thead>
                              <tr>
                                <th>Nama</th>
                                <th>Tahun Lulus</th>
                                <th>Tingkat Ijazah</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data &&
                                data.pendidikan.map((item, index) => (
                                  <tr key={index}>
                                    <td>{item.nama_akademi}</td>
                                    <td>{item.tahun_lulus}</td>
                                    <td>{item.jenjang}</td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <th>Tgl. Lahir</th>
                        <td>{data && formatTanggal(data.tgl_lahir)}</td>
                      </tr>
                      <tr>
                        <th>Latihan Jabatan / Diklat</th>
                        <td>
                          <table className="table table-sm table-borderless">
                            <thead>
                              <tr>
                                <th>No</th>
                                <th>Nama Diklat</th>
                                <th>Tahun</th>
                                <th>Jml. Jam</th>
                              </tr>
                            </thead>
                            <tbody>
                              {data &&
                                data.diklat.map((item, index) => (
                                  <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.nama_diklat}</td>
                                    <td>{item.tahun_diklat}</td>
                                    <td>{item.jumlah_jam}</td>
                                  </tr>
                                ))}
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <th>Catatan Mutasi</th>
                        <td>{data.catatan_mutasi}</td>
                      </tr>
                      <tr>
                        <th>TMT. CPNS</th>
                        <td>
                          {data && format(new Date(data.tmt_cpns), "dd/MM/Y")}
                        </td>
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
                        src={data ? getImage(data.foto) : ""}
                        alt={data.foto}
                      />
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </div>
          ) : (
            <div>
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
            </div>
          )}
        </CCardBody>
      </CCard>
    </>
  );
};

export default DetailDukPNS;
