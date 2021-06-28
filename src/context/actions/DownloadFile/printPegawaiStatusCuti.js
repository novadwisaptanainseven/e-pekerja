const printPegawaiStatusCuti = (params) => {
  const bulan = params.bulan || "";
  const tahun = params.tahun || "";

  window.open(
    `${localStorage.baseURL}print-pegawai-status-cuti?bulan=${bulan}&tahun=${tahun}`,
    "_blank"
  );
};

export default printPegawaiStatusCuti;
