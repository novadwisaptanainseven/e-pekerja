import axiosInstance from "src/helpers/axios";
import { getStruktur } from ".";

const deleteGambarStruktur = (id, dispatch, setLoading, Swal) => {
  setLoading(true);
  axiosInstance
    .delete(`admin/struktur/${id}`)
    .then((res) => {
      getStruktur(dispatch);
      console.log(res.data);
      Swal.fire({
        icon: "success",
        title: "Terhapus",
        text: "Gambar berhasil dihapus",
      });
      setLoading(false);
    })
    .catch((err) => {
      console.log(err.response.data);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Gambar gagal dihapus. Terjadi kesalahan",
      });
      setLoading(false);
    });
};

export default deleteGambarStruktur;
