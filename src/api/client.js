import axios from "axios";

const host = process.env.REACT_APP_API_HOST;

const apiClient = axios.create({
  baseURL: host,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

export default apiClient;
