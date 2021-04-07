import axiosInstance from "src/helpers/axios";

export const getSelectPegawai = (setData) => {
  axiosInstance
    .get("admin/pegawai/semua-pegawai")
    .then((res) => {
      setData(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
