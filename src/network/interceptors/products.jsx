import axiosInstance from "../apis/axios";

axiosInstance.interceptors.request.use((config) => {
  console.log(config);
  return cofig;
});
