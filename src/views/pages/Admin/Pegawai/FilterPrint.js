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
import { getSelectStatusPegawai } from "src/context/actions/StatusPegawai/getSelectStatusPegawai";

const FilterPrint = ({ modal, setModal }) => {
  const [pendidikan, setPendidikan] = useState([]);
  const [statusSelect, setStatusSelect] = useState([]);
  const [filter, setFilter] = useState({
    kolom: "",
    order: "asc",
  });
  const [jenjang, setJenjang] = useState("");
  const [statusPegawai, setStatusPegawai] = useState("");

  // Get Jenjang Pendidikan
  useEffect(() => {
    if (modal.modal) getJenjangPendidikan(setPendidikan);
  }, [modal]);

  // Get Status Pegawai
  useEffect(() => {
    if (modal.modal) {
      getSelectStatusPegawai(setStatusSelect);
    }
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
      url = `semua-pegawai?jenjang=${filter.kolom.jenjang}&order=${filter.order}`;
    } else if (statusPegawai) {
      request = {
        statusPegawai: statusPegawai,
        order: filter.order,
      };
      filter.kolom = {
        statusPegawai: statusPegawai,
      };
      url = `semua-pegawai?status_pegawai=${filter.kolom.statusPegawai}&order=${filter.order}`;
    } else {
      request = {
        kolom: filter.kolom,
        order: filter.order,
      };
      url = `semua-pegawai?kolom=${filter.kolom}&order=${filter.order}`;
    }

    // console.log(filter);
    if (modal.type === "print") {
      printDaftarPegawai(url);
    } else {
      exportExcel("semua-pegawai", request, "filter_pegawai");
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

  // Component Form Status Pegawai Memo
  const FormStatusPegawai = memo(({ filter }) => {
    if (filter.kolom !== "status_pegawai") {
      setStatusPegawai("");
    }
    return (
      <>
        {filter.kolom === "status_pegawai" && (
          <CFormGroup>
            <CLabel>Status Pegawai</CLabel>
            <CSelect
              required
              value={statusPegawai}
              onChange={(e) => setStatusPegawai(e.target.value)}
              className={!statusPegawai ? "is-invalid" : null}
            >
              <option value="">-- Pilih Status Pegawai --</option>
              {statusSelect.map((item, index) => (
                <option value={item.status_pegawai} key={index}>
                  {item.status_pegawai}
                </option>
              ))}
            </CSelect>
            {!statusPegawai && (
              <div className="invalid-feedback">
                Status pegawai harus diisi!
              </div>
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
              <option value="status_pegawai">Status Pegawai</option>
              <option value="jabatan">Jabatan</option>
              <option value="jenjang">Jenjang Pendidikan</option>
            </CSelect>
          </CFormGroup>
          <FormJenjang filter={filter} />
          <FormStatusPegawai filter={filter} />
        </CModalBody>
        <CModalFooter>
          <CButton
            type="submit"
            color="primary"
            onClick={(e) => handlePrint(e)}
            disabled={
              (filter.kolom === "jenjang" && !jenjang) ||
              (filter.kolom === "status_pegawai" && !statusPegawai)
                ? true
                : false
            }
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
