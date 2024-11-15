import axios from "axios";

export const API = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
