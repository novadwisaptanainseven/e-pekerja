import axiosInstance from "src/helpers/axios";

export const getSelectPNS = (setPNS) => {
  axiosInstance
    .get("admin/pegawai/pns")
    .then((res) => {
      setPNS(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
