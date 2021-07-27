import React, { useEffect, useState } from "react";
import { LoadAnimationBlue } from "src/assets";
import { CCol, CModalBody, CModalFooter, CButton, CRow } from "@coreui/react";
import { getRiwayatSKById } from "src/context/actions/PembaruanSK/getRiwayatSKById";
import { format } from "date-fns";
import getSK from "src/context/actions/DownloadFile/getSK";
import getFilename from "src/helpers/getFilename";

const DetailSK = ({
  modalDetail,
  setModalDetail,
  id_pegawai,
  id_riwayat_sk,
}) => {
  const [data, setData] = useState("");

  // Get Riwayat SK By ID
  useEffect(() => {
    if (id_riwayat_sk) {
      getRiwayatSKById(id_pegawai, id_riwayat_sk, setData);
    }

    return () => setData("");
  }, [id_pegawai, id_riwayat_sk]);

  return (
    <>
      <CModalBody>
        {data ? (
          <>
            <table className="table table-striped table-borderless">
              <tbody>
                <tr>
                  <th>No. SK</th>
                  <td>{data.no_sk}</td>
                </tr>
                <tr>
                  <th>Penetap SK</th>
                  <td>{data.penetap_sk}</td>
                </tr>
                <tr>
                  <th>Tgl. Penetapan SK</th>
                  <td>{format(new Date(data.tgl_penetapan_sk), "dd/MM/y")}</td>
                </tr>
                <tr>
                  <th>Tgl. Mulai Tugas</th>
                  <td>{data.tgl_mulai_tugas}</td>
                </tr>
                <tr>
                  <th>Tugas Pokok (Jabatan)</th>
                  <td>{data.nama_jabatan}</td>
                </tr>
                <tr>
                  <th>Gaji Pokok</th>
                  <td>
                    {data.gaji_pokok.toLocaleString("id", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </td>
                </tr>
                <tr>
                  <th>File SK</th>
                  <td>
                    <a href={getSK(data.file)} target="_blank" rel="noreferrer">
                      {getFilename(data.file)}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <CRow>
            <CCol className="text-center">
              <img
                className="mt-4 ml-3 mb-4"
                width={30}
                src={LoadAnimationBlue}
                alt="load-animation"
              />
            </CCol>
          </CRow>
        )}
      </CModalBody>
      <CModalFooter>
        <CButton
          type="button"
          color="secondary"
          onClick={() =>
            setModalDetail({
              ...modalDetail,
              modal: false,
              id: null,
            })
          }
        >
          Tutup
        </CButton>
      </CModalFooter>
    </>
  );
};

export default DetailSK;
