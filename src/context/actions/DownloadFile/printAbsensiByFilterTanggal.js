export const printAbsensiByFilterTanggal = (idPegawai, filter) => {
  window.open(
    `${localStorage.baseURL}print-rekap-absensi-filter/${idPegawai}?first_date=${filter.startDate}&last_date=${filter.endDate}`,
    "_blank"
  );
};
