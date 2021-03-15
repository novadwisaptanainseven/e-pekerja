import axiosInstance from "src/helpers/axios";

export const getBerkasById = (id_pegawai, id_berkas, setData) => {
  axiosInstance
    .get(`admin/pegawai/${id_pegawai}/berkas/${id_berkas}`)
    .then((res) => {
      setData(res.data.data);
      // console.log(res.data);
    })
    .catch((err) => {
      // console.log(err.response.data);
    });
};
