import axios from "axios";

const api = "https://6231ee3b59070d92733f0bb6.mockapi.io/api/";

export const addProduct = (product: any) => {
  return axios.post(`${api}products`, product);
};
