const initState = (data = "") => {
  return {
    id_golongan: data ? data.id_golongan : "",
    keterangan: data ? data.keterangan : "",
    golongan: data ? data.golongan : "",
    jenis_kp: data ? data.jenis_kp : "",
    no_sk: data ? data.no_sk : "",
    tanggal: data ? data.tanggal : "",
    mk_tahun: data ? parseInt(data.mk_tahun) : "",
    mk_bulan: data ? parseInt(data.mk_bulan) : "",
    pejabat_penetap: data ? data.pejabat_penetap : "",
    pangkat_terkini: data ? data.pangkat_terkini : "",
    tmt_kenaikan_pangkat: data ? data.tmt_kenaikan_pangkat : "",
    file: undefined,
  };
};

export default initState;
