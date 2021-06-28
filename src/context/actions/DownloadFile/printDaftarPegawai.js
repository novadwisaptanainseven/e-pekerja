const printDaftarPegawai = (data) => {
  window.open(`${localStorage.baseURL}print-daftar-pegawai/${data}`, "_blank");
};

export default printDaftarPegawai;
