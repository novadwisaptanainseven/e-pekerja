import axiosInstance from "src/helpers/axios";

export const getSelectGolongan = (setGolongan) => {
  axiosInstance
    .get("admin/master-data/pangkat-golongan")
    .then((res) => {
      setGolongan(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
