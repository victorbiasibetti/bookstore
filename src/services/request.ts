import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3004",
});

export default request;
