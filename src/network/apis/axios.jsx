import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

// axiosInstance.interceptors.request.use((config) => {
//   console.log(config);
//   return config;
// });

export default axiosInstance;
