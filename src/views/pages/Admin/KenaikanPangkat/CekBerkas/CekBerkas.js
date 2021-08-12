import { cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CButton,
  CRow,
  CCol,
  CBadge,
} from "@coreui/react";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { IconDocument } from "src/assets";
import { getBerkasKp } from "src/context/actions/BerkasKp";
import { getImage } from "src/context/actions/DownloadFile";
import getFileBerkasKp from "src/context/actions/DownloadFile/getFileBerkasKp";
import getFilename from "src/helpers/getFilename";
import getTanggal from "src/helpers/getTanggal";
import Loading from "src/reusable/Loading";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import KirimPesan from "./KirimPesan";

const Swal = withReactContent(swal2);

const CekBerkas = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const { params } = match;
  const [modalKirimPesan, setModalKirimPesan] = useState(false);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  // Get All Berkas Kenaikan Pangkat
  useEffect(() => {
    getBerkasKp(params.id_pegawai, setData, setLoading);
  }, [params]);

  const goBackToParent = () => {
    history.goBack();
  };

  // Handle Validasi Kelengkapan Berkas
  const handleKelengkapanBerkas = () => {
    Swal.fire({
      icon: "warning",
      title: "Validasi Kelengkapan Berkas Kenaikan Pangkat ?",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "YA",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Sukses",
          text: "Berkas Kenaikan Pangkat Tervalidasi",
        });
      }
    });
  };

  return (
    <div>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Berkas Kenaikan Pangkat PNS</h3>
          <CButton color="warning" onClick={goBackToParent}>
            Kembali
          </CButton>
        </CCardHeader>
        <CCardBody>
          {loading || !data ? (
            <Loading />
          ) : (
            <>
              <CRow>
                <CCol md="4">
                  <img
                    src={getImage(data.pegawai.foto)}
                    alt="foto-pegawai"
                    style={{ width: "100%" }}
                  />
                </CCol>
                <CCol>
                  <table className="table">
                    <tbody>
                      <tr>
                        <th>Nama</th>
                        <td>{data.pegawai.nama}</td>
                      </tr>
                      <tr>
                        <th>NIP</th>
                        <td>{data.pegawai.nip}</td>
                      </tr>
                      <tr>
                        <th>Golongan Sekarang</th>
                        <td>
                          {data.pegawai.ket_golongan} ({data.pegawai.golongan})
                        </td>
                      </tr>
                      <tr>
                        <th>No. HP</th>
                        <td>{data.pegawai.no_hp}</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>{data.pegawai.email}</td>
                      </tr>
                      <tr>
                        <th>Golongan yg akan datang</th>
                        <td>{data.kenaikan_pangkat.pangkat_baru}</td>
                      </tr>
                      <tr>
                        <th>Jenis Kenaikan Pangkat</th>
                        <td>{data.kenaikan_pangkat.jenis_kp}</td>
                      </tr>
                      <tr>
                        <th>Status Validasi</th>
                        <td>
                          {data.kenaikan_pangkat.status_validasi == 0 && (
                            <CBadge color="danger">Belum Divalidasi</CBadge>
                          )}
                          {data.kenaikan_pangkat.status_validasi == 1 && (
                            <CBadge color="success">Tervalidasi</CBadge>
                          )}
                          {data.kenaikan_pangkat.status_validasi == 2 && (
                            <CBadge color="danger">Tidak Disetujui</CBadge>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </CCol>
              </CRow>
              <hr />
              <CRow className="mb-3">
                <CCol className="d-flex justify-content-between">
                  <h2>Kelengkapan Berkas</h2>
                  <div>
                    <CButton
                      className="mr-2"
                      color="success"
                      onClick={handleKelengkapanBerkas}
                    >
                      Validasi
                    </CButton>
                    <CButton
                      color="danger"
                      onClick={() => setModalKirimPesan(true)}
                    >
                      Tidak Disetujui
                    </CButton>
                  </div>
                </CCol>
              </CRow>
              <CRow>
                {data.berkas_kp.length === 0 && (
                  <CCol className="text-center">
                    Belum Ada Berkas yang Diupload
                  </CCol>
                )}
                {data.berkas_kp.map((item, index) => (
                  <CCol key={index} md="3">
                    <div className="card">
                      <div className="bg-secondary d-flex py-3">
                        <img
                          src={IconDocument}
                          style={{
                            width: "40%",
                            margin: "auto",
                          }}
                          className="card-img-top"
                          alt="icon-excel"
                        />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">{getFilename(item.file)}</h5>
                        <p className="text-muted">
                          Diupload pada{" "}
                          {format(
                            new Date(getTanggal(item.created_at)),
                            "dd/MM/y"
                          )}
                        </p>
                        <div className="d-flex justify-content-center">
                          <a
                            href={getFileBerkasKp(item.file)}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary mr-2"
                          >
                            Download File
                          </a>
                          {/* <a
                            href="."
                            className="btn btn-danger"
                            onClick={(e) => {
                              e.preventDefault();
                              // handleDelete(item.id_riwayat_mk_file);
                            }}
                          >
                            <CIcon content={cilTrash} />
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </CCol>
                ))}
              </CRow>
            </>
          )}
        </CCardBody>
      </CCard>

      {/* Modal Kirim Pesan */}
      <KirimPesan
        idPegawai={params.id_pegawai}
        modal={modalKirimPesan}
        setModal={setModalKirimPesan}
      />
    </div>
  );
};

export default CekBerkas;
