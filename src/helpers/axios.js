import axios from "axios";

const host = "https://disperkim.samarindakota.go.id/e-pekerja-api/";
// const host = "http://127.0.0.1:8000/";
const baseURL = `${host}api/v1/`;
localStorage.baseURL = baseURL;
let headers = {};

console.log("Base URL: ", baseURL);

if (localStorage.token) {
  headers.Authorization = `Bearer ${localStorage.token}`;
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
      localStorage.clear();
      console.log("Error Status 403 Executed");
      // window.location.href = "/epekerja/login";
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
