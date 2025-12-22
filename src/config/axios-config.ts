import axios from "axios";
import {
  ACCESS_TOKEN,
} from "@/lib/constants";

const axiosInstance = axios.create({});
axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
