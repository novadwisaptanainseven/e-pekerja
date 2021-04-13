import axiosInstance from "src/helpers/axios";

export const getPenghargaanById = (id, setData) => {
  axiosInstance
    .get(`user/data-kepegawaian/penghargaan/${id}`)
    .then((res) => {
      console.log(res.data);
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
