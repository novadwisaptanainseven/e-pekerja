import axiosInstance from "src/helpers/axios";

export const getJenjangPendidikan = (setData) => {
  axiosInstance
    .get(`admin/pegawai/pendidikan/jenjang`)
    .then((res) => {
      setData(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
