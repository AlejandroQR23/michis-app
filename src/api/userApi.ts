import { axiosInstance, responseBody } from './axiosInstance';

export interface User {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

const userRequests = {
  login: (url: string, body: User) => axiosInstance.post<User>(url, body).then(responseBody),
};

export const userApi = {
  login: (email: string, password: string): Promise<LoginResponse> =>
    userRequests.login('/auth/signin', { email, password }),
};
