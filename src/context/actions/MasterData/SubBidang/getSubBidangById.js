import axiosInstance from "src/helpers/axios";

export const getSubBidangById = (id, setSubBidang) => {
  axiosInstance
    .get(`admin/master-data/sub-bidang/${id}`)
    .then((res) => {
      setSubBidang(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
