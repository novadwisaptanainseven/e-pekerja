import React from "react";
import { SampleSertifikat } from "src/assets";

const DetailPenghargaan = ({ id }) => {

  return (
    <>
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
            <th>Nama Penghargaan</th>
            <td>Penghargaan 1</td>
          </tr>
          <tr>
            <th>Pemberi</th>
            <td>Walikota Samarinda</td>
          </tr>
          <tr>
            <th>Tgl. Penghargaan</th>
            <td>10-12-2021</td>
          </tr>
          <tr>
            <th>Dokumentasi</th>
            <td>
              {id === 1 ? (
                <img
                  src={SampleSertifikat}
                  width={200}
                  alt="foto-penghargaan"
                />
              ) : (
                <a href=".">dokumentasi_penghargaan.pdf</a>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default DetailPenghargaan;
