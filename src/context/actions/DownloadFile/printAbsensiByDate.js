export const printRekapAbsensiByDate = (status, values) => {
  window.open(
    `${localStorage.baseURL}print-rekap-absensi-tanggal/${status}?first_date=${values.startDate}&last_date=${values.endDate}`,
    "_blank"
  );
};
