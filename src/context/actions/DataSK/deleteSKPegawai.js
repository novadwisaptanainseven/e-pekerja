import axiosInstance from "src/helpers/axios";
import { getSKPegawai } from ".";

const deleteSKPegawai = (idPegawai, id, dispatch) => {
  axiosInstance
    .get(`admin/pegawai/${idPegawai}/pembaruan-sk/${id}/delete`)
    .then((res) => {
      console.log(res.data);
      getSKPegawai(dispatch);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export default deleteSKPegawai;
