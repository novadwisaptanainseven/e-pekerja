import {
  CForm,
  CInputGroup,
  CInputGroupPrepend,
  CCol,
  CRow,
  CInput,
  CButton,
  CInputGroupText,
  CModal,
  CModalHeader,
  CSelect,
  CFormGroup,
  CModalTitle,
} from "@coreui/react";
import { format } from "date-fns";
import React, { useState } from "react";
import TambahAbsen from "./TambahAbsen";

// Expandable Component
const ExpandableComponent = ({ data }) => {
  const [modal, setModal] = useState({
    modal: false,
    tgl: null,
    absen: null,
    keterangan: null,
  });
  const [days, setDays] = useState([]);
  const current_year = new Date().getFullYear();
  const current_month = new Date().getMonth();
  const [filterYear, setFilterYear] = useState(current_year);
  const [filterMonth, setFilterMonth] = useState(current_month);
  const [saveDay, setSaveDay] = useState({});

  // Get Years
  const years = [];
  const old_year = 2015;
  let range_year = current_year - old_year;

  // Isi tahun dari 2015 sd tahun sekarang
  for (let i = 0; i <= range_year; i++) {
    years.push(old_year + i);
  }

  // Get Months
  const months = [];

  // Isi bulan dari Januari sd Desember
  for (let i = 0; i < 12; i++) {
    months.push(format(new Date(old_year, i, 1), "MMMM"));
  }

  // Get total days
  const getDays = (month, year) => {
    let arr_index = [];
    for (let i = 1; i <= getDaysInMonth(month + 1, year); i++) {
      arr_index.push(i);
    }
    setDays(arr_index);
  };

  // Dapatkan jumlah tanggal setiap bulan berdasarkan tahun
  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  // Tangani perubahan nilai pada select
  const handleChangeYear = (e) => {
    setSaveDay({});
    setDays([]);
    setFilterYear(parseInt(e.target.value));
  };

  const handleChangeMonth = (e) => {
    setSaveDay({});
    setDays([]);
    setFilterMonth(parseInt(e.target.value));
  };

  const getDaysOnTampil = () => {
    getDays(filterMonth, filterYear);
  };

  const handleOnChangeAbsensi = (e) => {
    setSaveDay({
      ...saveDay,
      year: filterYear,
      month: filterMonth + 1,
      tgl_absen: {
        ...saveDay.tgl_absen,
        [e.target.name]: e.target.value,
      },
    });
  };

//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     let arr_tgl_absen = [];

//     for (const tgl in saveDay.tgl_absen) {
//       arr_tgl_absen.push(
//         `${tgl}/${saveDay.month}/${saveDay.year} => ${saveDay.tgl_absen[tgl]}`
//       );
//     }

//     console.log(arr_tgl_absen);
//   };

  return (
    <>
      <div style={{ padding: "10px 63px" }}>
        <CForm>
          <CRow>
            <CCol>
              <CFormGroup row>
                <CCol md="2" className="mb-2">
                  <CSelect
                    custom
                    name="year"
                    id="year"
                    onChange={(e) => handleChangeYear(e)}
                    // onClick={(e) => handleChangeYear(e)}
                    defaultValue={current_year}
                  >
                    {years.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </CSelect>
                </CCol>
                <CCol md="2" className="mb-2">
                  <CSelect
                    custom
                    name="month"
                    id="month"
                    onChange={(e) => handleChangeMonth(e)}
                    // onClick={(e) => handleChangeMonth(e)}
                    defaultValue={current_month}
                  >
                    {months.map((item, index) => (
                      <option key={index} value={index}>
                        {item}
                      </option>
                    ))}
                  </CSelect>
                </CCol>
                <CCol>
                  <CButton
                    type="button"
                    color="info"
                    onClick={getDaysOnTampil}
                    className="mr-2"
                  >
                    Tampilkan Absen
                  </CButton>
                </CCol>
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            {days.length > 0 &&
              days.map((item, index) => {
                // Get filter tanggal
                let filter_tgl = format(
                  new Date(filterYear, filterMonth, 1),
                  "yyyy-MM"
                );

                // Get tgl absen ketika modal muncul
                let data_tgl = data.absen[index]
                  ? format(new Date(data.absen[index].tgl), "yyyy-MM")
                  : null;

                // Get keterangan
                let data_keterangan =
                  filter_tgl === data_tgl ? data.absen[index].keterangan : "";

                let data_absen_index =
                  filter_tgl === data_tgl ? data.absen[index].absen : "empty";

                let data_absen =
                  filter_tgl === data_tgl ? data.absen[index].absen : "";

                // Ubah data absen dari integer menjadi String text
                switch (data_absen) {
                  case 0:
                    data_absen = "TK";
                    break;
                  case 1:
                    data_absen = "Hadir";
                    break;
                  case 2:
                    data_absen = "Izin";
                    break;
                  case 3:
                    data_absen = "Sakit";
                    break;
                  case 4:
                    data_absen = "Cuti";
                    break;

                  default:
                    data_absen = "";
                    break;
                }

                return (
                  <>
                    <CCol
                      lg="2"
                      md="3"
                      sm="3"
                      xs="6"
                      key={index}
                      className="mb-2"
                    >
                      <CInputGroup className="mb-3">
                        <CInputGroupPrepend>
                          <CInputGroupText>{item}</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          type="text"
                          name={item}
                          id={item}
                          readOnly
                          value={data_absen}
                          onClick={() =>
                            setModal({
                              ...modal,
                              modal: !modal.modal,
                              tgl: item,
                              absen: data_absen_index,
                              keterangan: data_keterangan,
                            })
                          }
                        />
                      </CInputGroup>
                    </CCol>
                  </>
                );
              })}
          </CRow>
        </CForm>
      </div>

      {/* Modal */}
      <CModal
        show={modal.modal}
        onClose={() => setModal({ ...modal, modal: !modal.modal })}
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Tambah Absensi Pegawai</CModalTitle>
        </CModalHeader>

        <TambahAbsen
          data={{
            filterMonth: filterMonth,
            filterYear: filterYear,
            tgl: modal.tgl,
            absen: modal.absen,
            keterangan: modal.keterangan,
          }}
          modal={{
            setModal: setModal,
            modal: modal,
          }}
        />
      </CModal>
    </>
  );
};

export default ExpandableComponent;
