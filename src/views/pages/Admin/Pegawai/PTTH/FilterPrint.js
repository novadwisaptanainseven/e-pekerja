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
import React, { useEffect, useState } from "react";
import { exportExcel } from "src/context/actions/DownloadFile";
import printDaftarPegawai from "src/context/actions/DownloadFile/printDaftarPegawai";
import { getJenjangPendidikan } from "src/context/actions/Pegawai/Pendidikan/getJenjangPendidikan";

const FilterPrint = ({ modal, setModal }) => {
  const [pendidikan, setPendidikan] = useState([]);
  const [filter, setFilter] = useState({
    jenjang: "",
    order: "asc",
  });

  // Get Jenjang Pendidikan
  useEffect(() => {
    if (modal.modal) getJenjangPendidikan(setPendidikan);
  }, [modal]);

  // Handle Print pdf dan excel
  const handlePrint = () => {
    if (modal.type === "print") {
      printDaftarPegawai(
        `ptth?pendidikan=${filter.jenjang}&order=${filter.order}`
      );
    } else {
      exportExcel(
        "ptth",
        { pendidikan: filter.jenjang, order: filter.order },
        "filter_pegawai"
      );
    }
  };

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
            <CLabel>Pendidikan</CLabel>
            <CSelect
              name="jenjang"
              value={filter.jenjang}
              onChange={(e) =>
                setFilter({ ...filter, [e.target.name]: e.target.value })
              }
            >
              <option value="">Semua</option>
              {pendidikan.map((item, index) => (
                <option value={item.jenjang} key={index}>
                  {item.jenjang}
                </option>
              ))}
            </CSelect>
          </CFormGroup>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={handlePrint}>
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
