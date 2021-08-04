import axiosInstance from "src/helpers/axios";

export const getSelectStatusPegawai = (setData) => {
  axiosInstance
    .get("admin/master-data/status-pegawai")
    .then((res) => {
      console.log(res.data);
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
