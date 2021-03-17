import axiosInstance from "src/helpers/axios";

export const getPTTBById = (id, setPTTH) => {
  axiosInstance
    .get(`admin/pegawai/pttb/${id}`)
    .then((res) => {
      setPTTH(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
