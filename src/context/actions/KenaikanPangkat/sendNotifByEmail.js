import axiosInstance from "src/helpers/axios";

export const sendNotifByEmail = (values, setLoading, Swal) => {
  setLoading(true);
  axiosInstance
    .post("admin/kp-send-email", values)
    .then((res) => {
      console.log(res.data);
      setLoading(false);
      Swal.fire({
        icon: "success",
        title: "Notifikasi Via Email Berhasil",
      });
    })
    .catch((err) => {
      console.log(err.response.data);
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Notifikasi Via Email Gagal",
        text: err.response.data.message,
      });
    });
};
