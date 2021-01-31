import React from "react";
import DataTable from "react-data-table-component";
import { CButton, CForm, CFormGroup, CCol, CInput } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilTrash } from "@coreui/icons";

const DataBerkas = () => {
  const data = [
    {
      id: 1,
      nama_berkas: "Surat Kontrak",
      jenis_berkas: "Dokumen",
      tgl_upload: "10 Januari 2021",
      keterangan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nihil?",
    },
    {
      id: 2,
      nama_berkas: "Foto 3x4.jpg",
      jenis_berkas: "Foto",
      tgl_upload: "15 Januari 2021",
      keterangan:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quam.",
    },
  ];

  const columns = [
    {
      name: "Nama Berkas",
      selector: "nama_berkas",
      wrap: true,
      sortable: true,
      maxWidth: "250px",
    },
    {
      name: "Tgl. Upload",
      selector: "tgl_upload",
      wrap: true,
      sortable: true,
      maxWidth: "150px",
    },
    {
      name: "Keterangan",
      selector: "keterangan",
      wrap: true,
      sortable: true,
      // maxWidth: "150px",
    },
    {
      name: "Aksi",
      selector: "aksi",
      wrap: true,
      maxWidth: "100px",
      cell: (row) => (
        <>
          <CButton
            color="danger"
            className="btn btn-sm"
            onClick={() =>
              window.confirm(
                `Anda yakin ingin hapus data dengan id : ${row.id}`
              )
            }
          >
            <CIcon content={cilTrash} color="white" />
          </CButton>
        </>
      ),
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontSize: "1.15em",
      },
    },
  };

  return (
    <>
      <div className="my-3">
        <div className="button-control">
          <div className="form-upload">
            <CForm>
              <CFormGroup row>
                <CCol className="pr-0">
                  <CInput type="file" name="berkas" id="berkas" />
                </CCol>
                <CCol className="pl-0 ml-2">
                  <CButton className="form-upload-button" color="primary">
                    Upload
                  </CButton>
                </CCol>
              </CFormGroup>
            </CForm>
          </div>
        </div>
        <DataTable
          columns={columns}
          data={data}
          noHeader
          responsive={true}
          customStyles={customStyles}
        />
      </div>
    </>
  );
};

export default DataBerkas;
