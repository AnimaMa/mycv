import axios from "axios";

export const api = axios.create({
  baseURL: "http://104.248.23.136:1111",
});
