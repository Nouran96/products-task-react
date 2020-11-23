import axiosInstance from "../../network/apis/axios";

export const fetchProducts = async () => {
  const response = await axiosInstance.get();

  if (response.data) return response.data;

  return [];
};
