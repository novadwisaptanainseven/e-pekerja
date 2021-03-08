import axiosInstance from "src/helpers/axios";

export const getBidangById = (id, setBidang) => {
  axiosInstance
    .get(`admin/master-data/bidang/${id}`)
    .then((res) => {
      setBidang(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
