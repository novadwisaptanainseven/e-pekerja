const initStateEdit = (data) => {
  return {
    id_pegawai: data ? data.id_pegawai : "",
    tgl_berhenti: data ? data.tgl_berhenti : "",
    keterangan: data ? data.keterangan : "",
  };
};

export default initStateEdit;
