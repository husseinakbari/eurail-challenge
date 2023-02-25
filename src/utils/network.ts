import axios from "axios";
import handleError from "./handleError";


const network = axios.create({
  baseURL: "https://randomuser.me/apiii",
  headers: {
    accept: "application/json",
  },
});

network.interceptors.response.use(
  (res) => res,
  (error) => {
    handleError(error)
    return Promise.reject(error);
  }
);

export default network;
