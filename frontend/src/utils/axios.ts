import dotenv from 'dotenv';

dotenv.config();
import axios from "axios";

const apiInstance = axios.create({
  baseURL: process.env.RUBY_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiInstance;