import axiosInstance from "src/helpers/axios";

export const getKGBPegawai = (setLoading, setData, params = null) => {
  setLoading(true);

  let urlAPI = "";

  if (!params) {
    urlAPI = `admin/pegawai/kgb`;
  } else {
    urlAPI = `admin/pegawai/kgb?bulan=${params.bulan}&tahun=${params.tahun}`;
  }

  axiosInstance
    .get(urlAPI)
    .then((res) => {
      console.log(res.data);
      setData(res.data.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err.response.data);
      setLoading(false);
    });
};
