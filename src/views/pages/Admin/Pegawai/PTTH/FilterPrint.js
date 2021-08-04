import {
  CModalBody,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CButton,
  CForm,
  CFormGroup,
  CLabel,
  CSelect,
} from "@coreui/react";
import React, { memo, useEffect, useState } from "react";
import { exportExcel } from "src/context/actions/DownloadFile";
import printDaftarPegawai from "src/context/actions/DownloadFile/printDaftarPegawai";
import { getJenjangPendidikan } from "src/context/actions/Pegawai/Pendidikan/getJenjangPendidikan";

const FilterPrint = ({ modal, setModal }) => {
  const [pendidikan, setPendidikan] = useState([]);
  const [filter, setFilter] = useState({
    kolom: "",
    order: "asc",
  });
  const [jenjang, setJenjang] = useState("");

  // Get Jenjang Pendidikan
  useEffect(() => {
    if (modal.modal) getJenjangPendidikan(setPendidikan);
  }, [modal]);

  // Handle Print pdf dan excel
  const handlePrint = (e) => {
    e.preventDefault();

    let url = "";
    let request = {};

    if (jenjang) {
      request = {
        jenjang: jenjang,
        order: filter.order,
      };
      filter.kolom = {
        jenjang: jenjang,
      };
      url = `ptth?jenjang=${filter.kolom.jenjang}&order=${filter.order}`;
    } else {
      request = {
        kolom: filter.kolom,
        order: filter.order,
      };
      url = `ptth?kolom=${filter.kolom}&order=${filter.order}`;
    }

    // console.log(filter);
    if (modal.type === "print") {
      printDaftarPegawai(url);
    } else {
      exportExcel("ptth", request, "filter_pegawai");
    }

    setModal({ ...modal, type: "", modal: false });
  };

  // Handle Change Sorting by Column
  const handleChangeColumn = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  // Component Form Jenjang Memo
  const FormJenjang = memo(({ filter }) => {
    if (filter.kolom !== "jenjang") {
      setJenjang("");
    }
    return (
      <>
        {filter.kolom === "jenjang" && (
          <CFormGroup>
            <CLabel>Jenjang Pendidikan</CLabel>
            <CSelect
              required
              value={jenjang}
              onChange={(e) => setJenjang(e.target.value)}
              className={!jenjang ? "is-invalid" : null}
            >
              <option value="">-- Pilih Jenjang --</option>
              {pendidikan.map((item, index) => (
                <option value={item.jenjang} key={index}>
                  {item.jenjang}
                </option>
              ))}
            </CSelect>
            {!jenjang && (
              <div className="invalid-feedback">Jenjang harus diisi!</div>
            )}
          </CFormGroup>
        )}
      </>
    );
  });

  return (
    <CModal
      show={modal.modal}
      onClose={() =>
        setModal({
          ...modal,
          type: "",
          modal: false,
        })
      }
    >
      <CModalHeader closeButton>
        <CModalTitle>Filter Print</CModalTitle>
      </CModalHeader>
      <CForm>
        <CModalBody>
          <CFormGroup>
            <CLabel>Urutan</CLabel>
            <CSelect
              name="order"
              value={filter.order}
              onChange={(e) =>
                setFilter({ ...filter, [e.target.name]: e.target.value })
              }
            >
              <option value="asc">A - Z (Ascending)</option>
              <option value="desc">Z - A (Descending)</option>
            </CSelect>
          </CFormGroup>
          <CFormGroup>
            <CLabel>Kolom</CLabel>
            <CSelect
              name="kolom"
              value={filter.kolom}
              onChange={(e) => handleChangeColumn(e)}
            >
              <option value="">Semua</option>
              <option value="nama">Nama</option>
              <option value="bidang">Bidang</option>
              <option value="jabatan">Jabatan</option>
              <option value="pangkat">Golongan</option>
              <option value="jenjang">Jenjang Pendidikan</option>
            </CSelect>
          </CFormGroup>
          <FormJenjang filter={filter} />
        </CModalBody>
        <CModalFooter>
          <CButton
            color="primary"
            onClick={handlePrint}
            disabled={filter.kolom === "jenjang" && !jenjang ? true : false}
          >
            Print
          </CButton>
          <CButton
            color="secondary"
            onClick={() => setModal({ ...modal, type: "", modal: false })}
          >
            Close
          </CButton>
        </CModalFooter>
      </CForm>
    </CModal>
  );
};

export default FilterPrint;
