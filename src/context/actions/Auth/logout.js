import axiosInstance from "src/helpers/axios";

export const logout = () => {
  axiosInstance
    .post("logout")
    .then((res) => {
      sessionStorage.removeItem("token");
      window.location.href = "/epekerja/login";
    })
    .catch((err) => console.log(err.response.message));
};
