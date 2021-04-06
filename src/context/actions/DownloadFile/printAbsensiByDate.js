export const printRekapAbsensiByDate = (status, values) => {
  window.open(
    `${sessionStorage.baseURL}print-rekap-absensi-tanggal/${status}?first_date=${values.startDate}&last_date=${values.endDate}`,
    "_blank"
  );
};
