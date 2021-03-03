import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api/";
let headers = {};

console.log("Base URL: ", baseURL);

if (sessionStorage.token) {
  headers.Authorization = `Bearer ${sessionStorage.token}`;
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return new Promise((resolve, reject) => {
      resolve(response);
    });
  },
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {});
    }
    if (error.response.status === 403) {
      sessionStorage.removeItem("token");
      console.log("Error Status 403 Executed");
      window.location.href = "/epekerja/login";
      return new Promise((resolve, reject) => {
        reject(error);
      });
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
);

export default axiosInstance;
