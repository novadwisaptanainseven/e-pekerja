import React, { useEffect, useState } from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CButton,
  CBadge,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
import { getPensiunById } from "src/context/actions/Pensiun.js/getPensiunById";
import { format } from "date-fns";
import { getImage } from "src/context/actions/DownloadFile";

const DetailPenghargaan = ({ match }) => {
  const params = match.params;
  const history = useHistory();
  const [data, setData] = useState("");

  useEffect(() => {
    // Get pensiun by id
    getPensiunById(params.id, setData);
  }, [params]);

  const goBackToParent = () => {
    history.goBack();
  };

  // Menangani Komponen Status Pensiun
  const StatusPensiun = ({ tglPensiun }) => {
    let currentTimestamp = Date.parse(new Date());
    let tglPensiunTimestamp = Date.parse(new Date(tglPensiun));

    return (
      <>
        {currentTimestamp < tglPensiunTimestamp ? (
          <CBadge color="primary" shape="pill" className="px-2 py-2">
            Akan Pensiun
          </CBadge>
        ) : (
          <CBadge color="dark" shape="pill" className="px-2 py-2">
            Pensiun
          </CBadge>
        )}
      </>
    );
  };

  return (
    <>
      <CCard>
        <CCardHeader className="d-flex justify-content-between">
          <h3>Detail Pensiun: </h3>
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
            {/* <CButton type="button" color="info" className="mb-3">
              Cetak Surat Pensiun <CIcon content={cilPrint} />
            </CButton> */}
            <table className="table table-striped table-borderless">
              <tbody>
                <tr>
                  <th>NIP/NIK</th>
                  <td>{data.nip ? data.nip : data.nik}</td>
                </tr>
                <tr>
                  <th>Nama</th>
                  <td>{data ? data.nama : "Loading..."}</td>
                </tr>
                <tr>
                  <th>Tanggal Pensiun</th>
                  <td>
                    {data
                      ? format(new Date(data.tgl_pensiun), "dd/MM/yyyy")
                      : "Loading..."}
                  </td>
                </tr>
                <tr>
                  <th>Status Pensiun</th>
                  <td>
                    {data ? (
                      <StatusPensiun tglPensiun={data.tgl_pensiun} />
                    ) : (
                      "Loading..."
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Keterangan</th>
                  <td>{data ? data.keterangan : "Loading..."}</td>
                </tr>
                <tr>
                  <th>Foto Pegawai</th>
                  <td>
                    {data ? (
                      <img
                        width={200}
                        src={getImage(data.foto)}
                        alt="foto-pegawai"
                      />
                    ) : (
                      "Loading..."
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
