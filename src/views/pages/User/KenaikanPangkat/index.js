import { cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CAlert,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormGroup,
  CInput,
  CButton,
  CBadge,
} from "@coreui/react";
import React, { useContext, useEffect } from "react";
import getFileBerkasKp from "src/context/actions/DownloadFile/getFileBerkasKp";
import {
  deleteBerkasKp,
  getBerkasKp,
} from "src/context/actions/UserPage/BerkasKp";
import { GlobalContext } from "src/context/Provider";
import getFilename from "src/helpers/getFilename";
import Loading from "src/reusable/Loading";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Swal = withReactContent(swal2);

const KenaikanPangkat = () => {
  const { berkasKpState, berkasKpDispatch, userState } =
    useContext(GlobalContext);
  const { data: berkasKp } = berkasKpState;
  const { data: user } = userState;

  // Get Berkas Kenaikan Pangkat
  useEffect(() => {
    if (user) {
      getBerkasKp(user.id_pegawai, berkasKpDispatch);
    }
  }, [berkasKpDispatch, user]);

  // Delete berkas
  const handleDeleteBerkas = (id) => {
    Swal.fire({
      icon: "error",
      title: "Anda yakin ingin menghapus data ini ?",
      text: "Jika yakin, klik YA",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YA",
    }).then((res) => {
      if (res.isConfirmed) {
        deleteBerkasKp(user.id_pegawai, id, berkasKpDispatch, Swal);
      }
    });
  };

  return (
    <div>
      <CCard>
        <CCardHeader>
          <h3>Kenaikan Pangkat</h3>
        </CCardHeader>
        <CCardBody>
          {!berkasKp ? (
            <Loading />
          ) : (
            <>
              <CAlert color="info" closeButton fade>
                Silahkan upload berkas sesuai dengan persyaratan dan jenis
                kenaikan pangkat (Reguler, Jabatan Struktural, Jabatan
                Fungsional)
              </CAlert>
              <CForm>
                <CFormGroup className="d-flex" style={{ width: "400px" }}>
                  <CInput className="mr-1" type="file" name="berkas" multiple />
                  <CButton color="primary">Upload</CButton>
                </CFormGroup>
              </CForm>

              {/* Jika sudah berkas yang diupload maka tampilkan indikator status validasi */}
              {berkasKp.berkas_kp.length > 0 && (
                <>
                  {/* Status Belum Tervalidasi */}
                  {berkasKp.kenaikan_pangkat.status_validasi === 0 && (
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <th>Status</th>
                          <td>
                            <CBadge color="danger">
                              Menunggu persetujuan admin
                            </CBadge>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}

                  {/* Status Sudah Tervalidasi */}
                  {berkasKp.kenaikan_pangkat.status_validasi === 1 && (
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <th>Status</th>
                          <td>
                            <CBadge color="success">
                              Berkas Anda telah disetujui
                            </CBadge>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}

                  {/* Status Tidak Disetujui */}
                  {berkasKp.kenaikan_pangkat.status_validasi === 2 && (
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <th>Status</th>
                          <td>
                            <CBadge color="danger">
                              Berkas Anda belum disetujui
                            </CBadge>
                          </td>
                        </tr>
                        <tr>
                          <th>Pesan</th>
                          <td>Berkas Anda belum lengkap</td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </>
              )}

              {/* Tabel upload file */}
              <table className="table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Berkas</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {berkasKp.berkas_kp.map((item, index) => (
                    <>
                      <tr key={index}>
                        <td width={80}>{index + 1}</td>
                        <td>
                          <a
                            href={getFileBerkasKp(item.file)}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {getFilename(item.file)}
                          </a>
                        </td>
                        <td>
                          <CButton
                            color="danger"
                            onClick={() =>
                              handleDeleteBerkas(item.id_berkas_kp)
                            }
                          >
                            <CIcon content={cilTrash} />
                          </CButton>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </CCardBody>
      </CCard>
    </div>
  );
};

export default KenaikanPangkat;
