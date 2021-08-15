import axiosInstance from "src/helpers/axios";

export const getKenaikanPangkatById = (id, setData) => {
  axiosInstance
    .get(`admin/kenaikan-pangkat/${id}`)
    .then((res) => {
      console.log(res.data);
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
