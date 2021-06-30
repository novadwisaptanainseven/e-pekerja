const printMutasiPegawai = (params = null) => {
  const bulan = params.bulan || "";
  const tahun = params.tahun || "";

  window.open(
    `${localStorage.baseURL}print-mutasi-pegawai?bulan=${bulan}&tahun=${tahun}`,
    "_blank"
  );
};

export default printMutasiPegawai;
