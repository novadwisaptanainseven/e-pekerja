const printLaporan = (id, data) => {
  window.open(`${sessionStorage.baseURL}print-pegawai/${id}/${data}`, "_blank");
};

export default printLaporan;
