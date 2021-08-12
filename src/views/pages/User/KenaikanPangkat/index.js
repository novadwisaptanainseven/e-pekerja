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
import React from "react";
import swal2 from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Swal = withReactContent(swal2);

const KenaikanPangkat = () => {
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
        Swal.fire({
          icon: "success",
          title: "Sukses",
          text: "Kenaikan Pangkat Berhasil Dibatalkan",
        });
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
          <CAlert color="info" closeButton fade>
            Silahkan upload berkas sesuai dengan persyaratan dan jenis kenaikan
            pangkat (Reguler, Jabatan Struktural, Jabatan Fungsional)
          </CAlert>
          <CForm>
            <CFormGroup className="d-flex" style={{ width: "400px" }}>
              <CInput className="mr-1" type="file" name="berkas" multiple />
              <CButton color="primary">Upload</CButton>
            </CFormGroup>
          </CForm>
          {/* Status Belum Tervalidasi */}
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Status</th>
                <td>
                  <CBadge color="danger">Menunggu persetujuan admin</CBadge>
                </td>
              </tr>
            </tbody>
          </table>
          {/* Status Sudah Tervalidasi */}
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Status</th>
                <td>
                  <CBadge color="success">Berkas Anda telah disetujui</CBadge>
                </td>
              </tr>
            </tbody>
          </table>
          {/* Status Tidak Disetujui */}
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Status</th>
                <td>
                  <CBadge color="danger">Berkas Anda belum disetujui</CBadge>
                </td>
              </tr>
              <tr>
                <th>Pesan</th>
                <td>Berkas Anda belum lengkap</td>
              </tr>
            </tbody>
          </table>

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
              {[1, 2, 3].map((item, index) => (
                <>
                  <tr key={index}>
                    <td width={80}>{index + 1}</td>
                    <td>
                      <a href=".">berkas-{item}.pdf</a>
                    </td>
                    <td>
                      <CButton
                        color="danger"
                        onClick={() => handleDeleteBerkas(item)}
                      >
                        <CIcon content={cilTrash} />
                      </CButton>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default KenaikanPangkat;
