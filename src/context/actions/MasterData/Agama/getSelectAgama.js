import axiosInstance from "src/helpers/axios";

export const getSelectAgama = (setAgama) => {
  axiosInstance
    .get("agama")
    .then((res) => {
      setAgama(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
