//packages
import axios from "axios";

//helpers
import constants from "@src/helpers/constants";

//apply base url for axios
const API_URL = constants.API_URL;

const axiosApi = axios.create({
  baseURL: API_URL,
});

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export async function get(url: string, config = {}) {
  return await axiosApi.get(url, {...config});
}

export async function post(url: string, data: any, config = {}) {
  return axiosApi.post(url, data, {...config});
}

export async function put(url: string, data: any, config = {}) {
  return axiosApi.put(url, data, {...config});
}

export async function patch(url: string, data: any, config = {}) {
  return axiosApi.patch(url, data, {...config});
}

export async function del(url: string, config = {}) {
  return await axiosApi.delete(url, {...config});
}
