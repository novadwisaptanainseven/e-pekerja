import axiosInstance from "src/helpers/axios";

export const getSelectEselon = (setEselon) => {
  axiosInstance
    .get("admin/master-data/pangkat-eselon")
    .then((res) => {
      setEselon(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
