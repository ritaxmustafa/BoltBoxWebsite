import axios from "axios";
const restApiUrl = "https://bolt-box.com/api/";
export const client = axios.create({
  baseURL: restApiUrl,
  timeout: 10000,
});
