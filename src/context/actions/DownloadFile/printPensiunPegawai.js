const printPensiunPegawai = (params = null) => {
  const bulan = params.bulan || "";
  const tahun = params.tahun || "";

  window.open(
    `${localStorage.baseURL}print-pensiun-pegawai?bulan=${bulan}&tahun=${tahun}`,
    "_blank"
  );
};

export default printPensiunPegawai;
