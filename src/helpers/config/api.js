import axios from "axios";

const url = new URL(window.location.href);
// const fullUrl = url.origin || "https://bolt-box.com/api/";

const fullUrl =  "https://bolt-box.com";


export const client = axios.create({
  baseURL: fullUrl + "/api",
  timeout: 10000,
});
