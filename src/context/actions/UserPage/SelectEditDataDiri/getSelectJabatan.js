import axiosInstance from "src/helpers/axios";

export const getSelectJabatan = (setJabatan) => {
  axiosInstance
    .get("user/master-data/jabatan")
    .then((res) => {
      setJabatan(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
