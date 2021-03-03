import React from "react";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import { SampleFotoPegawai } from "src/assets";

const DataDiri = () => {
  return (
    <>
      <div className="my-3">
        <CRow>
          <CCol md="8">
            <table className="table table-sm table-striped">
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
                  <th>Agama</th>
                  <td>Islam</td>
                </tr>
                <tr>
                  <th>Jenis Kelamin</th>
                  <td>Laki - Laki</td>
                </tr>
                <tr>
                  <th>TTL</th>
                  <td>Tanjung Redeb, 27 November 1997</td>
                </tr>
                <tr>
                  <th>Alamat</th>
                  <td>
                    Jalan Slamet Riyadi Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Magni, repellendus!
                  </td>
                </tr>
                <tr>
                  <th>No. HP</th>
                  <td>0812312312</td>
                </tr>
                <tr>
                  <th>Jabatan</th>
                  <td>Kepala Dinas</td>
                </tr>
                <tr>
                  <th>Bidang</th>
                  <td>Permukiman</td>
                </tr>
                <tr>
                  <th>Sub Bidang</th>
                  <td>Pembinaan Permukiman</td>
                </tr>
                <tr>
                  <th>Pangkat / Golongan</th>
                  <td>Pembina Utama Muda / IVc</td>
                </tr>
                <tr>
                  <th>Eselon</th>
                  <td>IIc</td>
                </tr>
                <tr>
                  <th>Status Pegawai</th>
                  <td>PNS</td>
                </tr>
                <tr>
                  <th>Karpeg</th>
                  <td>829382121</td>
                </tr>
                <tr>
                  <th>BPJS</th>
                  <td>83219321</td>
                </tr>
                <tr>
                  <th>NPWP</th>
                  <td>89238213</td>
                </tr>
                <tr>
                  <th>TMT. Golongan</th>
                  <td>10-10-2021</td>
                </tr>
                <tr>
                  <th>TMT. CPNS</th>
                  <td>10-10-2021</td>
                </tr>
                <tr>
                  <th>TMT. jabatan</th>
                  <td>10-10-2021</td>
                </tr>
                <tr>
                  <th>Masa Kerja Jabatan</th>
                  <td>2 tahun 4 bulan</td>
                </tr>
                <tr>
                  <th>Masa Kerja Sebelum CPNS</th>
                  <td>2 tahun 4 bulan</td>
                </tr>
                <tr>
                  <th>Masa Kerja Golongan</th>
                  <td>2 tahun 4 bulan</td>
                </tr>
                <tr>
                  <th>Masa Kerja Seluruhnya</th>
                  <td>2 tahun 4 bulan</td>
                </tr>
                <tr>
                  <th>Gaji Pokok</th>
                  <td>Rp. 3.000.000</td>
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
                <img width="100%" src={SampleFotoPegawai} alt="foto-pegawai" />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    </>
  );
};

export default DataDiri;
