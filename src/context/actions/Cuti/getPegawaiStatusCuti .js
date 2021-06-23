import axiosInstance from "src/helpers/axios";

export const getPegawaiStatusCuti = (setLoading, setData, params = null) => {
  setLoading(true);

  let urlAPI = "";

  if (params) {
    urlAPI = `admin/pegawai/pegawai-status-cuti?bulan=${params.bulan}&tahun=${params.tahun}`;
  } else {
    urlAPI = `admin/pegawai/pegawai-status-cuti`;
  }

  axiosInstance
    .get(urlAPI)
    .then((res) => {
      console.log(res.data);
      setData(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err.response.data);
      setLoading(false);
    });
};
