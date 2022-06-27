import axios, { AxiosResponse } from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 15000,
});
export const responseBody = (response: AxiosResponse) => response.data;
