import React, { useEffect, useState } from "react";
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
} from "@coreui/react";
import { LoadAnimationBlue, SampleFotoPegawai } from "src/assets";
import { useHistory } from "react-router-dom";
import { getMasaKerjaById } from "src/context/actions/MasaKerja/getMasaKerjaById";
import { format } from "date-fns";
import { getImage } from "src/context/actions/DownloadFile";

const DetailMasaKerja = ({ match }) => {
  const history = useHistory();
  const params = match.params;
  const [data, setData] = useState("");

  const goBackToParent = () => {
    history.goBack();
  };

  const goToEdit = (id) => {
    history.push(`/epekerja/admin/masa-kerja-edit/${id}`);
  };

  useEffect(() => {
    // Get Masa Kerja by Id
    getMasaKerjaById(params.id, setData);

    return () => {
      setData("");
    };
  }, [params]);

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
          {data ? (
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
                        <td>{data.nip}</td>
                      </tr>
                      <tr>
                        <th>Nama</th>
                        <td>{data.nama}</td>
                      </tr>
                      <tr>
                        <th>Masa Kerja Golongan</th>
                        <td>{data.mk_golongan}</td>
                      </tr>
                      <tr>
                        <th>Masa Kerja Jabatan</th>
                        <td>{data.mk_jabatan}</td>
                      </tr>
                      <tr>
                        <th>Masa Kerja Sebelum CPNS</th>
                        <td>{data.mk_sebelum_cpns}</td>
                      </tr>
                      <tr>
                        <th>Masa Kerja Seluruhnya</th>
                        <td>{data.mk_seluruhnya}</td>
                      </tr>
                      <tr>
                        <th>Jabatan</th>
                        <td>{data.nama_jabatan}</td>
                      </tr>
                      <tr>
                        <th>TMT. Jabatan</th>
                        <td>
                          {data.tmt_jabatan &&
                            format(new Date(data.tmt_jabatan), "dd/MM/y")}
                        </td>
                      </tr>
                      <tr>
                        <th>Golongan</th>
                        <td>{data.golongan}</td>
                      </tr>
                      <tr>
                        <th>TMT. Golongan</th>
                        <td>
                          {data.tmt_golongan &&
                            format(new Date(data.tmt_golongan), "dd/MM/y")}
                        </td>
                      </tr>
                      <tr>
                        <th>Eselon</th>
                        <td>{data.eselon}</td>
                      </tr>
                      <tr>
                        <th>TMT. CPNS</th>
                        <td>
                          {data.tmt_cpns &&
                            format(new Date(data.tmt_cpns), "dd/MM/y")}
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
                        alt="foto-pegawai"
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

export default DetailMasaKerja;
