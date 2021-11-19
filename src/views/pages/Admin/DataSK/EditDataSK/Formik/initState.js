const initState = (data = "") => ({
  no_sk: data ? data.no_sk : "",
  nama_sk: data ? data.nama_sk : "",
  tanggal: data ? data.tanggal : "",
});

export default initState;
