import axios from "axios";

const url = new URL(window.location.href);

const fullUrl = "https://bolt-box.com";

export const client = axios.create({
  baseURL: fullUrl + "/api",
});
