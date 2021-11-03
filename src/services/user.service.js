import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://bedumusic.herokuapp.com/v1/users/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};