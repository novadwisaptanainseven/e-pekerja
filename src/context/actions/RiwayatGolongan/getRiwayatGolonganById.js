import axiosInstance from "src/helpers/axios";

const getRiwayatGolonganById = (id, setData, setLoading) => {
  setLoading(true);

  axiosInstance
    .get(`admin/riwayat-golongan/${id}`)
    .then((res) => {
      setData(res.data.data);
      setLoading(false);
      console.log(res.data);
    })
    .catch((err) => {
      setLoading(false);
      console.log(err.response.data);
    });
};

export default getRiwayatGolonganById;
