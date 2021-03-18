import axiosInstance from "src/helpers/axios";

export const getDUKById = (id, setDUK) => {
  axiosInstance
    .get(`admin/duk-pegawai/${id}`)
    .then((res) => {
      setDUK(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
