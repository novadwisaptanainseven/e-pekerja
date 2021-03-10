import axiosInstance from "src/helpers/axios";

export const getPNSById = (id, setPNS) => {
  axiosInstance
    .get(`admin/pegawai/pns/${id}`)
    .then((res) => {
      setPNS(res.data.data);
      console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
