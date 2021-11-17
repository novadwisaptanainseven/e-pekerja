const initState = (data = "") => ({
  no_sk: data ? data.no_sk : "",
  id_pegawai: data ? data.id_pegawai : "",
});

export default initState;
