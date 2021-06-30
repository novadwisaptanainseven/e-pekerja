import { CCard, CCardHeader, CButton, CCardBody, CBadge } from "@coreui/react";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getImage } from "src/context/actions/DownloadFile";
import { getMutasiById } from "src/context/actions/Mutasi/getMutasiById";

const DetailMutasi = ({ match }) => {
  const params = match.params;
  const history = useHistory();
  const [data, setData] = useState("");

  const goBackToParent = () => {
    history.goBack();
  };

  useEffect(() => {
    // Get mutasi by id
    getMutasiById(params.id, setData);
  }, [params]);

  // Menangani Komponen Status Mutasi
  const StatusMutasi = ({ tglMutasi }) => {
    let currentTimestamp = Date.parse(new Date());
    let tglMutasiTimestamp = Date.parse(new Date(tglMutasi));

    return (
      <>
        {currentTimestamp < tglMutasiTimestamp ? (
          <CBadge color="primary" shape="pill" className="px-2 py-2">
            Akan Mutasi
          </CBadge>
        ) : (
          <CBadge color="dark" shape="pill" className="px-2 py-2">
            Mutasi
          </CBadge>
        )}
      </>
    );
  };

  return (
    <CCard>
      <CCardHeader className="d-flex justify-content-between">
        <h3>Detail Mutasi</h3>
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
        <table className="table table-striped table-borderless">
          <tbody>
            <tr>
              <th>NIP/NIK</th>
              <td>{data ? (data.nip ? data.nip : data.nik) : "Loading..."}</td>
            </tr>
            <tr>
              <th>Nama</th>
              <td>{data ? data.nama : "Loading..."}</td>
            </tr>
            <tr>
              <th>Tanggal Mutasi</th>
              <td>
                {data
                  ? format(new Date(data.tgl_mutasi), "dd/MM/yyyy")
                  : "Loading..."}
              </td>
            </tr>
            <tr>
              <th>Status Mutasi</th>
              <td>
                {data ? (
                  <StatusMutasi tglMutasi={data.tgl_mutasi} />
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
    </CCard>
  );
};

export default DetailMutasi;
